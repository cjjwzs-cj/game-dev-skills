# game-dev-skills

## Overview
game-dev-skills is a complete AI skill library for game development, providing 47 production-ready skills with intelligent error handling and standardized output formats.

## Purpose
This project provides standardized, production-ready AI skills for game development, covering planning review, design validation, code quality, config table detection, and documentation generation.

## Key Features
- 47 production-ready skills
- Support for 7 game types (Card RPG, SLG, MMO, MOBA, FPS, Casual, Chess)
- Support for 9 tech stacks (Go, C++, Java, Unity, Cocos Creator, Cocos Lua, Unreal Engine, Python, Node.js)
- Comprehensive error handling with exception tables
- Standardized output formats (P0/P1/P2 priority)
- Complete documentation with bilingual examples
- Smart skill loading system for optimal token usage

## Tech Stack
- Node.js (>=16)
- JavaScript (ES6+)
- Markdown for skill definitions
- GitHub Actions for CI/CD

## Project Structure
```
game-dev-skills/
├── .github/              # GitHub configuration
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   ├── workflows/        # CI/CD workflows
│   └── FUNDING.yml      # Funding configuration
├── docs/                # Documentation
│   ├── CHANGELOG.md      # Version history
│   └── SKILL_LIST.md    # Complete skill list
├── scripts/             # Management scripts
│   ├── cli.js           # CLI tool
│   ├── install.js       # Installation
│   ├── validate.js      # Validation
│   ├── test.js          # Testing
│   ├── update.js        # Updates
│   └── uninstall.js     # Uninstallation
├── skills/              # Skill definitions (33 skills)
│   ├── 00-入口/        # Entry point
│   ├── 01-需求审阅/    # Planning review
│   ├── 02-设计审查/    # Design validation
│   ├── 03-技术栈适配/  # Tech stack adaptation
│   ├── 04-代码质量/    # Code quality
│   ├── 05-文档生成/    # Documentation generation
│   └── 06-总控/       # Orchestration
├── .gitignore          # Git ignore rules
├── .npmignore          # NPM ignore rules
├── .editorconfig       # Editor configuration
├── .prettierrc.json   # Prettier configuration
├── CODE_OF_CONDUCT.md   # Community guidelines
├── CONTRIBUTING.md      # Contribution guide
├── LICENSE             # MIT License
├── package.json        # NPM package configuration
├── README.md           # Project documentation
└── SECURITY.md         # Security policy
```

## Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test locally (`npm run validate`, `npm run test`)
5. Submit a Pull Request

## Quality Assurance
- All skills include comprehensive error handling
- Standardized output formats (P0/P1/P2 priority)
- Automated validation and testing
- CI/CD pipeline for quality checks

## Community
- Open source (MIT License)
- Community-driven development
- Regular updates and improvements
- Active issue tracking and support

## Future Plans
- Additional game type plugins
- Internationalization support
- Enhanced AI integration
- Skill usage analytics
- Plugin system for custom skills