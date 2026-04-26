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
git clone https://github.com/cjjwzs-cj/game-dev-skills.git
cd game-dev-skills

# Install dependencies
npm install

# Link for local testing
npm link

# Test in a project
cd /path/to/test-project
npm link game-dev-skills
```

## Testing & Validation

```bash
# Validate skill files
npm run validate

# Test skill functionality
npm run test

# Check installation status
npm run status
```

## Skill Guidelines
### File Structure
Each skill file must be in .md format and include frontmatter:

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
- **Skill file name**: Chinese (e.g., 游戏后端策划案评审.md)
- **Skill name**: Chinese (e.g., 游戏后端策划案评审)
- **Description**: English (for AI matching)

## Content Guidelines
1. **Clear role definition** - Define who the AI is acting as

2. **Structured checklist** - Use tables for review items

3. **Output format** - Specify expected output structure

4. **Examples** - Include good/bad examples where helpful

## Skills Categories
| Directory | Purpose | Skills |
| :--- | :--- | :--- |
| `00-入口/` | Entry point skills | 游戏策划案总审阅 |
| `01-需求审阅/` | Planning review skills | 前后端策划案评审 + 7种类型插件 |
| `02-设计审查/` | Design validation skills | API/数据库/性能审查 |
| `03-技术栈适配/` | Tech stack adaptations | Go/C++/Java/Cocos/Unity/Lua |
| `04-代码质量/` | Code quality skills | 代码审查 + 单元测试生成 |
| `05-文档生成/` | Documentation generation | API文档 + QA测试文档 + 7种QA插件 |
| `06-总控/` | Orchestration skills | 前后端总控审阅 |

## Skill Requirements (v1.0.0)
### Error Handling
All skills must include comprehensive error handling:

- **Input Validation**: Handle empty content, format exceptions
- **Execution Errors**: Handle skill loading failures, execution failures
- **Clear Error Messages**: Provide specific error descriptions and resolution suggestions
- **Boundary Cases**: Handle incomplete content, ambiguous descriptions

### Output Format
All skills must follow standardized output formats:

- **Priority-based**: P0 (Critical) → P1 (High) → P2 (Medium)
- **Structured Tables**: Clear problem descriptions and modification suggestions
- **Module Tags**: Each problem includes module-specific tags (e.g., `[MOBA]`, `[RPG]`)
- **No-problem Format**: Clear success messages with checked modules

### Content Structure
Each skill should include:

1. **YAML Frontmatter** with `name` and `description` fields
2. **Role Definition** - Define who the AI is acting as
3. **Checklist** - Use tables for review items
4. **Output Format** - Specify expected output structure with examples
5. **Error Handling Section** - Handle exceptions and boundary cases
6. **Boundary Case Handling** - Handle edge scenarios

## Pull Request Process
1. Fork the repository

2. Create a feature branch (`git checkout -b feature/amazing-skill`)

3. Commit your changes (`git commit -m 'Add amazing skill'`)

4. Push to branch (`git push origin feature/amazing-skill`)

5. Open a Pull Request

## Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Focus on technical merit

## Questions?
Open an issue or reach out to maintainers.

Thank you for contributing! 🎮