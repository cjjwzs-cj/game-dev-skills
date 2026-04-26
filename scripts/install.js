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

// 复制目录
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 主函数
function main() {
  const targetTool = process.env.AI_TOOL || detectTargetDir();
  const sourceSkills = path.join(__dirname, '../skills');
  const targetSkills = path.join(process.cwd(), targetTool, 'skills');
  
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║     🎮 game-dev-skills v1.0.0                                 ║
║     Professional Game Development Skills for Claude Code      ║
╚═══════════════════════════════════════════════════════════════╝

  📦 Installing skills...
  📁 Source: ${sourceSkills}
  📁 Target: ${targetSkills}
`);
  
  // 检查源目录
  if (!fs.existsSync(sourceSkills)) {
    console.error('  ❌ Error: Source skills directory not found!');
    process.exit(1);
  }
  
  // 创建目标目录并复制
  if (fs.existsSync(targetSkills)) {
    console.log('  ⚠️  Target directory exists, overwriting...');
  }
  
  copyDir(sourceSkills, targetSkills);
  
  // 统计文件数
  let skillCount = 0;
  function countFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        countFiles(filePath);
      } else if (file.endsWith('.md')) {
        skillCount++;
      }
    }
  }
  countFiles(targetSkills);
  
  console.log(`
  ✅ Installed ${skillCount} skills to ${targetTool}/skills/

╔═══════════════════════════════════════════════════════════════╗
║  🚀 Next steps:                                              ║
║                                                              ║
║  1. Make sure Claude Code / Trae / Codex is installed        ║
║  2. Use skills in Claude Code: /skills                       ║
║  3. Or run: game-dev-skills to check status                  ║
╚═══════════════════════════════════════════════════════════════╝
`);
}

main();