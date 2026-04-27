# 🎮 game-dev-skills

[![npm version](https://badge.fury.io/js/game-dev-skills.svg)](https://badge.fury.io/js/game-dev-skills)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/game-dev-skills.svg)](https://nodejs.org)
[![GitHub issues](https://img.shields.io/github/issues/cjjwzs-cj/game-dev-skills)](https://github.com/cjjwzs-cj/game-dev-skills/issues)
[![GitHub stars](https://img.shields.io/github/stars/cjjwzs-cj/game-dev-skills)](https://github.com/cjjwzs-cj/game-dev-skills/stargazers)

Professional AI skill library for game development — 47 production-ready skills with intelligent error handling and standardized output formats.

> Transform game development with AI-powered skills that handle planning, design, code quality, and documentation.

## ✨ Features

### 🎯 Comprehensive Game Development Coverage
| Category | Skills | Description |
|----------|--------|-------------|
| **Planning Review** | 16 skills | Backend/Frontend planning review + 7 type plugins |
| **Design Validation** | 7 skills | API, Database, Performance, Network, Security, Config Table, Optimization |
| **Tech Stack Adaptation** | 9 skills | Go, C++, Java, Cocos, Unity, Unreal, Python, Node.js |
| **Code Quality** | 2 skills | Code review, Unit test generation |
| **Documentation** | 9 skills | API doc generator, QA test doc generator + 7 QA plugins |
| **Orchestration** | 3 skills | Entry point and backend/frontend orchestration |
| **Testing Strategy** | 1 skill | Automated testing and testing frameworks |

### 🛡️ Production-Ready Features
- **Comprehensive Error Handling**: All 47 skills include complete error handling mechanisms
- **Standardized Output Format**: Unified output formats with priority-based sorting (P0/P1/P2)
- **Exception Handling**: Detailed exception handling tables for all skills
- **Boundary Case Processing**: Comprehensive boundary case handling for edge scenarios
- **Game Type Support**: RPG, FPS, MOBA, SLG, MMO, Chess, Casual games
- **Multi-Stack Support**: Backend (Go/C++/Java/Python/Node.js), Frontend (Unity/Unreal/Cocos/Lua)
- **Smart Skill Loading**: Intelligent skill loading system with token optimization
- **Config Table Detection**: Comprehensive config table validation for Excel, CSV, JSON, XML, YAML
- **Market-Based Prioritization**: Skills prioritized based on 2025-2026 market analysis

### 🎮 Supported Game Types
- 🎯 **RPG Games** - Role-playing games (highest revenue, largest market share)
- 🔫 **FPS Games** - First-person shooter games (fastest growing, most popular)
- 🏆 **MOBA Games** - Multiplayer online battle arena games (strong head aggregation)
- ⚔️ **SLG Games** - Strategy games (stable market, strong payment capability)
- 🌐 **MMO Games** - Massive multiplayer online games (large user base, long lifecycle)
- ♟️ **Chess Games** - Chess and card games (niche market, high user stickiness)
- 🎪 **Casual Games** - Casual games (large user base, suitable for rapid development)

### 🔧 Supported Tech Stacks
**Backend:**
- Go - High-performance backend services
- C++ - Low-level system development
- Java - Enterprise-level backend architecture
- Python - Rapid development and independent games
- Node.js - Web games and real-time games

**Frontend:**
- Unity - 3D game engine
- Unreal Engine - High-quality 3D game engine
- Cocos Creator - 2D/3D game development
- Cocos Lua - Script-based game development

## 📦 Installation

### Using Official Skills CLI (Recommended)
```bash
# Install using official skills CLI tool
npx skills add https://github.com/cjjwzs-cj/game-dev-skills

# Or using short form
npx skills add cjjwzs-cj/game-dev-skills
```

### Using Claude Plugin Marketplace
```bash
# Add to Claude Code plugin marketplace
/plugin marketplace add https://github.com/cjjwzs-cj/game-dev-skills

# Browse available skills
/plugin menu

# Install a specific skill
/plugin install <skill-name>
```

### Manual Installation
```bash
# Clone the repository
git clone https://github.com/cjjwzs-cj/game-dev-skills.git
cd game-dev-skills

# Copy skills to your AI tool
cp -r skills/* ~/.claude/skills/
# Or for Trae: cp -r skills/* ~/.trae/skills/
# Or for Cursor: cp -r skills/* ~/.cursor/skills/
```

After installation, skills are available in your AI tool's skills directory.

## 🚀 Quick Start

### For AI Coding Assistants
```bash
# Install skills using installer
npx game-dev-skills-installer

# Open your AI tool (Claude Code, Trae, Codex, etc.)
claude

# Use a skill
> /skills
> 用游戏后端策划案评审审阅 docs/策划案.md
```

### Manual Installation
```bash
# Clone and copy skills manually
git clone https://github.com/cjjwzs-cj/game-dev-skills.git
cp -r game-dev-skills/skills/* ~/.claude/skills/

# Then use in your AI tool
claude
> /skills
```

## 🛠️ Usage

### Available Commands
```bash
# Check installation status
npm run status

# Validate skill files
npm run validate

# Test skill functionality
npm run test

# Update to latest version
npm run update

# Uninstall skills
npm run uninstall

# Smart skill loading (analyze and load optimal skills)
npm run smart-load analyze "审查卡牌RPG游戏后端策划案"

# View usage statistics
npm run smart-load stats

# Get optimization suggestions
npm run smart-load optimize

# Clear skill cache
npm run smart-load clear-cache
```

### Skill Usage Example
```bash
# In AI coding assistants (Claude Code, Trae, Codex, etc.)
> /skills
> Use game planning review to review docs/策划案.md

# Or in Chinese
> /skills
> 用游戏策划案总审阅审阅 docs/策划案.md

# The AI will automatically route to appropriate skills based on content
```

## 📖 Usage Examples

### Example 1: Review Backend Planning Document

**Input (English)**:
```
Please review this backend planning document for an FPS game
```

**Input (Chinese)**:
```
请审查这个FPS游戏的后端策划案
```

**System Action**:
- Automatically loads: Backend Planning Review + Backend FPS Plugin
- Total tokens: ~7,000
- Processing time: 5-10 seconds

**Output (English)**:
```
✅ Backend Planning Document Review Passed

Checked modules:
- ✅ Architecture design
- ✅ Database design
- ✅ API design
- ✅ Performance considerations
- ✅ Security design

Overall assessment: The planning document is well-structured and suitable for FPS game development.
```

**Output (Chinese)**:
```
✅ 后端策划案审查通过

已检查模块：
- ✅ 架构设计
- ✅ 数据库设计
- ✅ API设计
- ✅ 性能考虑
- ✅ 安全设计

整体评价：策划案结构完善，适合FPS游戏开发。
```

### Example 2: Detect Configuration Table Errors

**Input (English)**:
```
Detect errors in this configuration table file
```

**Input (Chinese)**:
```
检测这个配置表文件的错误
```

**System Action**:
- Automatically loads: Config Table Detection
- Total tokens: ~4,500
- Processing time: 2-5 seconds

**Output (English)**:
```
⚠️ Configuration Table Issues Found

| Priority | Issue | Severity | Module | Description | Suggestion |
|----------|-------|----------|--------|-------------|------------|
| P0 | Missing primary key | Critical | Items table | No primary key defined | Add primary key column |
| P1 | Invalid data type | High | Items table | Price column should be integer | Change price to integer type |
| P2 | Missing validation | Medium | Items table | No validation for quantity | Add quantity validation rules |

Total issues: 3 (1 Critical, 1 High, 1 Medium)
```

**Output (Chinese)**:
```
⚠️ 发现配置表问题

| 优先级 | 问题 | 严重程度 | 模块 | 问题描述 | 建议 |
|--------|------|----------|------|----------|------|
| P0 | 缺少主键 | 严重 | 物品表 | 未定义主键 | 添加主键列 |
| P1 | 数据类型无效 | 高 | 物品表 | 价格列应该是整数 | 将价格改为整数类型 |
| P2 | 缺少验证 | 中 | 物品表 | 没有数量验证 | 添加数量验证规则 |

问题总数：3个（1个严重，1个高，1个中）
```

### Example 3: Review Complete Game Planning Document

**Input (English)**:
```
Please review this complete game planning document for a card RPG game
```

**Input (Chinese)**:
```
请审查这个卡牌RPG游戏的完整策划案
```

**System Action**:
- Automatically loads: Game Planning Review + Backend/Frontend Planning Review + RPG Plugins
- Total tokens: ~16,000
- Processing time: 10-20 seconds

**Output (English)**:
```
✅ Complete Game Planning Document Review Passed

Backend Review:
- ✅ Architecture design
- ✅ Database design
- ✅ API design
- ✅ Performance considerations
- ✅ Security design

Frontend Review:
- ✅ UI/UX design
- ✅ Gameplay mechanics
- ✅ Performance optimization
- ✅ Asset management

RPG-Specific Review:
- ✅ Card system design
- ✅ Battle system design
- ✅ Economy system design
- ✅ Progression system design

Overall assessment: The planning document is comprehensive and well-structured, suitable for card RPG game development.
```

**Output (Chinese)**:
```
✅ 完整游戏策划案审查通过

后端审查：
- ✅ 架构设计
- ✅ 数据库设计
- ✅ API设计
- ✅ 性能考虑
- ✅ 安全设计

前端审查：
- ✅ UI/UX设计
- ✅ 游戏机制
- ✅ 性能优化
- ✅ 资源管理

RPG专项审查：
- ✅ 卡牌系统设计
- ✅ 战斗系统设计
- ✅ 经济系统设计
- ✅ 成长系统设计

整体评价：策划案全面且结构完善，适合卡牌RPG游戏开发。
```

## 📋 Skill List

### 🎯 Entry & Orchestration (3 skills)
- **Game Planning Review** - Auto-route to backend/frontend review
- **Frontend Orchestration** - Frontend orchestration and coordination
- **Backend Orchestration** - Backend orchestration and coordination

### 📝 Planning Review (16 skills)
- **Backend Planning Review** - Backend planning review
- **Frontend Planning Review** - Frontend planning review
- **Type plugins:**
  - 🃏 RPG Plugin - Card RPG game specifics
  - ⚔️ SLG Plugin - Strategy game specifics
  - 🌐 MMO Plugin - MMO game specifics
  - 🏆 MOBA Plugin - MOBA game specifics
  - ♟️ Chess Plugin - Chess game specifics
  - 🔫 FPS Plugin - FPS game specifics
  - 🎪 Casual Plugin - Casual game specifics

### 🔍 Design Review (7 skills)
- **Backend API Design Review** - API design review
- **Database Design Review** - Database design review
- **Performance Risk Assessment** - Performance risk assessment
- **Network Architecture Review** - Network architecture review
- **Security Design Review** - Security design review
- **Config Table Detection** - Config table detection
- **Performance Optimization Guide** - Performance optimization guide

### 🔧 Tech Stack Adaptation (9 skills)
**Backend:**
- **Go Adaptation** - Go backend development
- **C++ Adaptation** - C++ backend development
- **Java Adaptation** - Java backend development
- **Python Adaptation** - Python backend development
- **Node.js Adaptation** - Node.js backend development

**Frontend:**
- **Unity Adaptation** - Unity game engine
- **Unreal Engine Adaptation** - Unreal Engine
- **Cocos Creator Adaptation** - Cocos Creator framework
- **Cocos Lua Adaptation** - Cocos Lua scripting

### ✅ Code Quality (2 skills)
- **Code Review** - Pre-PR code review
- **Unit Test Generation** - Unit test generation

### 📚 Documentation (9 skills)
- **API Documentation Generator** - API documentation
- **QA Test Documentation Generator** - QA test documentation
- **QA Plugins:**
  - 🃏 QA-RPG Plugin - Card RPG QA testing
  - ⚔️ QA-SLG Plugin - Strategy game QA testing
  - 🌐 QA-MMO Plugin - MMO QA testing
  - 🏆 QA-MOBA Plugin - MOBA QA testing
  - ♟️ QA-Chess Plugin - Chess game QA testing
  - 🔫 QA-FPS Plugin - FPS QA testing
  - 🎪 QA-Casual Plugin - Casual QA testing

### 🧪 Testing Strategy (1 skill)
- **Testing Strategy** - Automated testing and testing frameworks

## 📊 Project Statistics

- **Total Skills:** 47 production-ready skills
- **Categories:** 7 comprehensive categories
- **Supported Game Types:** 7 game types (RPG, FPS, MOBA, SLG, MMO, Chess, Casual)
- **Supported Tech Stacks:** 9 tech stacks (Go, C++, Java, Python, Node.js, Unity, Unreal, Cocos Creator, Cocos Lua)
- **Config Table Support:** 6 formats (Excel, CSV, JSON, XML, YAML, Database)
- **Error Handling:** 100% coverage
- **Documentation:** Complete API, QA, and usage documentation
- **Smart Loading:** Token optimization and intelligent skill selection
- **Market-Based:** Skills prioritized by 2025-2026 market analysis

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on:
- Development setup
- Skill guidelines
- Testing and validation
- Pull request process

## 📖 Documentation

- [📋 Skill List](docs/SKILL_LIST.md) - Complete list of all skills
- [📝 Usage Guide](docs/USAGE_GUIDE.md) - Comprehensive usage guide with examples
- [📝 Changelog](docs/CHANGELOG.md) - Version history and changes
- [🤝 Contributing Guide](CONTRIBUTING.md) - How to contribute
- [📄 License](LICENSE) - MIT License

## 🐛 Reporting Issues

Found a bug? Have a feature request? Please [open an issue](https://github.com/cjjwzs-cj/game-dev-skills/issues).

## 🌟 Acknowledgments

Thanks to all contributors who have helped make this project better!

## ⚖️ Disclaimer

### Development Context
This project was developed during the author's personal time outside of regular employment hours. All development, testing, and documentation work was conducted independently without using any company resources, proprietary information, or confidential data.

### Intellectual Property
- All code, documentation, and content in this project is original work of the author
- No company intellectual property, trade secrets, or confidential information was used
- All development was conducted on personal equipment and personal time
- The project is released under MIT License for free public use

### No Conflict of Interest
- This project does not compete with the author's employer
- No company resources, code, or information was used
- Development was conducted independently and separately from employment

### Usage Disclaimer
- This software is provided "as is", without warranty of any kind
- The author is not responsible for any damages arising from use of this software
- Users should review and test skills before using them in production
- Token costs and AI tool usage are the responsibility of the user
- This project is not affiliated with any AI tool provider

### Professional Use
- Users should ensure compliance with their company's policies before using this software
- This project is suitable for personal and commercial use under MIT License
- No restrictions on use, modification, or distribution under MIT License terms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📮 Contact

- **Author:** Chen Jianjun (陈建军)
- **GitHub:** [@cjjwzs-cj](https://github.com/cjjwzs-cj)
- **Issues:** [GitHub Issues](https://github.com/cjjwzs-cj/game-dev-skills/issues)

---

**Made with ❤️ for game developers**