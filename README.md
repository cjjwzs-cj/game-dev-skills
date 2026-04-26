# 🎮 game-dev-skills

Professional game development skills for Claude Code / Trae / Codex.

> From design doc to production code — let AI be your standardized executor.

## ✨ Features

| Category | Skills |
|----------|--------|
| **Planning Review** | Backend/Frontend planning review + type plugins |
| **Design Validation** | API review, Database design review, Performance risk assessment |
| **Tech Stack Adaptation** | Go, C++, Java, Cocos Creator, Cocos Lua, Unity |
| **Code Quality** | Code review, Unit test generation |
| **Documentation** | API doc generator, QA test doc generator |

## 📦 Installation

```bash
npm install game-dev-skills
```

After installation, skills are automatically copied to .claude/skills/.

## 🚀 Quick Start
### For Claude Code
```bash
# Install skills
npm install game-dev-skills

# Open Claude Code
claude

# Use a skill
> /skills
> 用游戏后端策划案评审审阅 docs/策划案.md
```

### For Trae
```bash
npm install game-dev-skills
AI_TOOL=.trae npm install game-dev-skills
```

### For Codex
```bash
npm install game-dev-skills
AI_TOOL=.codex npm install game-dev-skills
```

## 📋 Skill List
### Entry & Orchestration
+ 游戏策划案总审阅 - Auto-route to backend/frontend review

### Planning Review
+ 游戏后端策划案评审 - Backend planning review

+ 游戏前端策划案评审 - Frontend planning review

+ Type plugins: RPG, SLG, MOBA, MMO, Chess

### Design Review
+ 游戏后端API设计审查 - API design review

+ 游戏数据库设计审查 - Database design review

+ 游戏性能风险评估 - Performance risk assessment

### Tech Stack Adaptation
+ Backend: Go, C++, Java

+ Frontend: Cocos Creator, Cocos Lua, Unity

### Code Quality
+ 代码审查 - Pre-PR code review

+ 单元测试生成 - Unit test generation

### Documentation
+ api-doc-generator - API documentation

+ qa-test-doc-generator - QA test documentation

## 🤝 Contributing
PRs welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md)

📄 [License](LICENSE)