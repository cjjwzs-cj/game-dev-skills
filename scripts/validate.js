#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 检测 AI 工具目录
function detectTargetDir() {
  const cwd = process.cwd();
  const tools = ['.claude', '.trae', '.codex'];
  
  for (const tool of tools) {
    if (fs.existsSync(path.join(cwd, tool))) {
      return tool;
    }
  }
  return '.claude'; // 默认
}

// 验证单个技能文件
function validateSkill(filePath) {
  const errors = [];
  const warnings = [];
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // 检查 YAML frontmatter
    if (!content.startsWith('---')) {
      errors.push('Missing YAML frontmatter (should start with ---)');
    } else {
      const frontmatterEnd = content.indexOf('---', 3);
      if (frontmatterEnd === -1) {
        errors.push('Invalid YAML frontmatter (missing closing ---)');
      } else {
        const frontmatter = content.substring(3, frontmatterEnd);
        
        // 检查必需字段
        if (!frontmatter.includes('name:')) {
          errors.push('Missing required field: name');
        }
        if (!frontmatter.includes('description:')) {
          errors.push('Missing required field: description');
        }
      }
    }
    
    // 检查输出格式
    if (content.includes('## 输出格式')) {
      if (!content.includes('### 标准输出格式') && !content.includes('| 优先级')) {
        warnings.push('Output format may not follow standard structure');
      }
    }
    
    // 检查错误处理
    if (!content.includes('## 异常情况处理') && !content.includes('## 错误处理')) {
      warnings.push('Missing error handling section');
    }
    
    // 检查边界情况
    if (!content.includes('## 边界情况处理') && !content.includes('### 边界情况')) {
      warnings.push('Missing boundary case handling section');
    }
    
  } catch (error) {
    errors.push(`Failed to read file: ${error.message}`);
  }
  
  return { errors, warnings };
}

// 递归验证所有技能文件
function validateSkills(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      validateSkills(entryPath, results);
    } else if (entry.name.endsWith('.md')) {
      const relativePath = path.relative(process.cwd(), entryPath);
      const validation = validateSkill(entryPath);
      
      results.push({
        file: relativePath,
        errors: validation.errors,
        warnings: validation.warnings,
        valid: validation.errors.length === 0
      });
    }
  }
  
  return results;
}

// 主函数
function main() {
  const targetTool = process.env.AI_TOOL || detectTargetDir();
  const skillsPath = path.join(process.cwd(), targetTool, 'skills');
  
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🎮 game-dev-skills v1.0.0 - Validation Tool              ║
╚═══════════════════════════════════════════════════════════════╝

  🔍 Validating skills in: ${skillsPath}
`);
  
  if (!fs.existsSync(skillsPath)) {
    console.error('  ❌ Error: Skills directory not found!');
    console.error(`  📁 Expected: ${skillsPath}`);
    process.exit(1);
  }
  
  const results = validateSkills(skillsPath);
  
  // 统计结果
  const validCount = results.filter(r => r.valid).length;
  const invalidCount = results.filter(r => !r.valid).length;
  const totalErrors = results.reduce((sum, r) => sum + r.errors.length, 0);
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);
  
  console.log(`  📊 Validation Results:`);
  console.log(`  ✅ Valid: ${validCount}`);
  console.log(`  ❌ Invalid: ${invalidCount}`);
  console.log(`  ⚠️  Warnings: ${totalWarnings}`);
  console.log(`  🚨 Errors: ${totalErrors}`);
  
  // 显示详细结果
  if (totalErrors > 0 || totalWarnings > 0) {
    console.log(`\n  📋 Detailed Issues:`);
    
    for (const result of results) {
      if (result.errors.length > 0 || result.warnings.length > 0) {
        console.log(`\n  📄 ${result.file}`);
        
        for (const error of result.errors) {
          console.log(`    🚨 ERROR: ${error}`);
        }
        
        for (const warning of result.warnings) {
          console.log(`    ⚠️  WARNING: ${warning}`);
        }
      }
    }
  }
  
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  📝 Summary                                                  ║
╚═══════════════════════════════════════════════════════════════╝
`);
  
  if (totalErrors === 0 && totalWarnings === 0) {
    console.log('  ✅ All skills are valid and properly formatted!');
    process.exit(0);
  } else if (totalErrors === 0) {
    console.log('  ⚠️  All skills are valid but have warnings.');
    console.log('  💡 Consider addressing warnings for better quality.');
    process.exit(0);
  } else {
    console.log('  ❌ Some skills have errors that need to be fixed.');
    console.log('  💡 Please fix the errors above before using skills.');
    process.exit(1);
  }
}

main();