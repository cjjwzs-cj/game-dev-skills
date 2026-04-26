#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
const tools = [
  { name: 'Claude Code', dir: '.claude/skills', emoji: '🤖' },
  { name: 'Trae', dir: '.trae/skills', emoji: '🔧' },
  { name: 'Codex', dir: '.codex/skills', emoji: '📝' }
];

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  🎮 game-dev-skills v1.0.0                                   ║
║  Professional Game Development Skills for Claude Code        ║
╚═══════════════════════════════════════════════════════════════╝
`);

// 检查各工具的安装状态
console.log('📁 Installation Status:\n');

let hasAny = false;
for (const tool of tools) {
  const skillsPath = path.join(cwd, tool.dir);
  if (fs.existsSync(skillsPath)) {
    hasAny = true;
    // 统计技能数量
    let count = 0;
    function countSkills(dir) {
      if (!fs.existsSync(dir)) return;
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const itemPath = path.join(dir, item);
        if (fs.statSync(itemPath).isDirectory()) {
          countSkills(itemPath);
        } else if (item.endsWith('.md')) {
          count++;
        }
      }
    }
    countSkills(skillsPath);
    console.log(`  ${tool.emoji} ${tool.name}: ✅ ${count} skills`);
  } else {
    console.log(`  ${tool.emoji} ${tool.name}: ❌ not installed`);
  }
}

if (!hasAny) {
  console.log(`
  💡 No skills found. Install with:
     
     npm install game-dev-skills
     
     or add to your project's package.json
`);
}

console.log(`
╔═══════════════════════════════════════════════════════════════╗
║  📚 Skills Included:                                         ║
║                                                              ║
║  📋 00-入口/          - 游戏策划案总审阅                       ║
║  🎯 01-需求审阅/      - 前后端策划案评审 + 类型插件           ║
║  🔧 02-设计审查/      - API/数据库/性能审查                    ║
║  ⚙️ 03-技术栈适配/    - Go/C++/Java/Cocos/Unity/Lua          ║
║  ✨ 04-代码质量/      - 代码审查 + 单元测试生成                ║
║  📄 05-文档生成/      - API文档 + QA测试文档                  ║
║  🎮 06-总控/         - 前后端总控审阅                         ║
╚═══════════════════════════════════════════════════════════════╝

💡 Commands:
  npm install game-dev-skills    Install skills to current project
  game-dev-skills                Show this status
`);