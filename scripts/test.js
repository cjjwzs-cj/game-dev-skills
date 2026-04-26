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

// 测试单个技能文件
function testSkill(filePath) {
  const tests = {
    passed: 0,
    failed: 0,
    results: []
  };
  
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = path.basename(filePath);
    
    // 测试1: YAML frontmatter 存在性
    const yamlTest = {
      name: 'YAML Frontmatter',
      passed: content.startsWith('---'),
      message: content.startsWith('---') ? '✅ Valid YAML frontmatter' : '❌ Missing YAML frontmatter'
    };
    tests.results.push(yamlTest);
    if (yamlTest.passed) tests.passed++; else tests.failed++;
    
    // 测试2: 必需字段存在性
    const nameTest = {
      name: 'Name Field',
      passed: content.includes('name:'),
      message: content.includes('name:') ? '✅ Name field present' : '❌ Missing name field'
    };
    tests.results.push(nameTest);
    if (nameTest.passed) tests.passed++; else tests.failed++;
    
    // 测试3: 描述字段存在性
    const descTest = {
      name: 'Description Field',
      passed: content.includes('description:'),
      message: content.includes('description:') ? '✅ Description field present' : '❌ Missing description field'
    };
    tests.results.push(descTest);
    if (descTest.passed) tests.passed++; else tests.failed++;
    
    // 测试4: 输出格式存在性
    const outputTest = {
      name: 'Output Format',
      passed: content.includes('## 输出格式') || content.includes('## 输出要求'),
      message: (content.includes('## 输出格式') || content.includes('## 输出要求')) ? '✅ Output format defined' : '⚠️  Output format may be missing'
    };
    tests.results.push(outputTest);
    if (outputTest.passed) tests.passed++; else tests.failed++;
    
    // 测试5: 错误处理存在性
    const errorTest = {
      name: 'Error Handling',
      passed: content.includes('## 异常情况处理') || content.includes('## 错误处理'),
      message: (content.includes('## 异常情况处理') || content.includes('## 错误处理')) ? '✅ Error handling defined' : '⚠️  Error handling may be missing'
    };
    tests.results.push(errorTest);
    if (errorTest.passed) tests.passed++; else tests.failed++;
    
    // 测试6: 边界情况处理存在性
    const boundaryTest = {
      name: 'Boundary Case Handling',
      passed: content.includes('## 边界情况处理') || content.includes('### 边界情况'),
      message: (content.includes('## 边界情况处理') || content.includes('### 边界情况')) ? '✅ Boundary case handling defined' : '⚠️  Boundary case handling may be missing'
    };
    tests.results.push(boundaryTest);
    if (boundaryTest.passed) tests.passed++; else tests.failed++;
    
    // 测试7: 文件大小合理性
    const sizeTest = {
      name: 'File Size',
      passed: content.length > 500 && content.length < 50000,
      message: content.length > 500 && content.length < 50000 ? '✅ Reasonable file size' : '⚠️  File size may be unusual'
    };
    tests.results.push(sizeTest);
    if (sizeTest.passed) tests.passed++; else tests.failed++;
    
  } catch (error) {
    tests.results.push({
      name: 'File Reading',
      passed: false,
      message: `❌ Failed to read file: ${error.message}`
    });
    tests.failed++;
  }
  
  return tests;
}

// 递归测试所有技能文件
function testSkills(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      testSkills(entryPath, results);
    } else if (entry.name.endsWith('.md')) {
      const relativePath = path.relative(process.cwd(), entryPath);
      const tests = testSkill(entryPath);
      
      results.push({
        file: relativePath,
        tests: tests
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
║     🎮 game-dev-skills v1.0.0 - Test Tool                   ║
╚═══════════════════════════════════════════════════════════════╝

  🧪 Testing skills in: ${skillsPath}
`);
  
  if (!fs.existsSync(skillsPath)) {
    console.error('  ❌ Error: Skills directory not found!');
    console.error(`  📁 Expected: ${skillsPath}`);
    process.exit(1);
  }
  
  const results = testSkills(skillsPath);
  
  // 统计结果
  let totalPassed = 0;
  let totalFailed = 0;
  
  for (const result of results) {
    totalPassed += result.tests.passed;
    totalFailed += result.tests.failed;
  }
  
  const totalTests = totalPassed + totalFailed;
  const passRate = ((totalPassed / totalTests) * 100).toFixed(1);
  
  console.log(`  📊 Test Results:`);
  console.log(`  ✅ Passed: ${totalPassed}/${totalTests} (${passRate}%)`);
  console.log(`  ❌ Failed: ${totalFailed}/${totalTests}`);
  
  // 显示详细结果
  if (totalFailed > 0) {
    console.log(`\n  📋 Detailed Results:`);
    
    for (const result of results) {
      if (result.tests.failed > 0) {
        console.log(`\n  📄 ${result.file}`);
        
        for (const test of result.tests.results) {
          console.log(`    ${test.message}`);
        }
      }
    }
  }
  
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  📝 Summary                                                  ║
╚═══════════════════════════════════════════════════════════════╝
`);
  
  if (totalFailed === 0) {
    console.log('  ✅ All tests passed! Your skills are ready to use.');
    process.exit(0);
  } else if (passRate >= 80) {
    console.log('  ⚠️  Most tests passed, but some issues need attention.');
    console.log('  💡 Your skills should work, but consider fixing issues above.');
    process.exit(0);
  } else {
    console.log('  ❌ Too many test failures. Skills may not work properly.');
    console.log('  💡 Please fix critical issues before using skills.');
    process.exit(1);
  }
}

main();