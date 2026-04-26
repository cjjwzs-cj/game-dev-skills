# Contributing to game-dev-skills

Thanks for your interest in contributing! 🎮

## Ways to Contribute

- 🐛 **Report bugs** - Open an issue with detailed description
- 💡 **Suggest features** - Share your ideas for new skills
- 📝 **Improve docs** - Fix typos, add examples, clarify instructions
- 🔧 **Add skills** - Submit new skills for game development
- 🌐 **Add language support** - Help translate skills to other languages

## Development Setup

```bash
# Clone the repo
git clone https://github.com/yourname/game-dev-skills
cd game-dev-skills

# Install dependencies
npm install

# Link for local testing
npm link

# Test in a project
cd /path/to/test-project
npm link game-dev-skills
```

## Skill Guidelines
### File Structure
每个技能文件必须是 .md 格式，包含 frontmatter：

``` markdown
---
name: skill-name
description: Brief description of what this skill does
---

## Skill Title

## Role
...
```

### Naming Conventions
+ 技能文件名：中文（如 游戏后端策划案评审.md）

+ skill name：中文（如 游戏后端策划案评审）

+ description：英文（用于 AI 匹配）

## Content Guidelines
1. **Clear role definition** - Define who the AI is acting as

2. **Structured checklist** - Use tables for review items

3. **Output format** - Specify expected output structure

4. **Examples** - Include good/bad examples where helpful

## Skills Categories
| Directory | Purpose |
| :--- | :--- |
| `00-入口/` | Entry point skills |
| `01-需求审阅/` | Planning review skills |
| `02-设计审查/` | Design validation skills |
| `03-技术栈适配/` | Tech stack adaptations |
| `04-代码质量/` | Code quality skills |
| `05-文档生成/` | Documentation generation |
| `06-总控/` | Orchestration skills |

## Pull Request Process
1. Fork the repository

2. Create a feature branch (`git checkout -b feature/amazing-skill`)

3. Commit your changes (`git commit -m 'Add amazing skill'`)

4. Push to branch (`git push origin feature/amazing-skill`)

5. Open a Pull Request

## Code of Conduct
+ Be respectful and inclusive

+ Provide constructive feedback

+ Focus on technical merit

## Questions?
Open an issue or reach out to maintainers.

Thank you for contributing! 🎮