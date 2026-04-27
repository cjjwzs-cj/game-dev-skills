# Token Usage Guide

## 📊 Overview

This guide provides detailed information about token usage for game-dev-skills, helping you optimize costs and make informed decisions about skill usage.

## 💰 Token Cost Estimation

### AI Tool Pricing (Approximate)
| AI Tool | Input Cost | Output Cost | Average Cost |
|----------|-------------|--------------|---------------|
| Claude Code | $3.00 / 1M tokens | $15.00 / 1M tokens | ~$9.00 / 1M tokens |
| GPT-4 | $30.00 / 1M tokens | $60.00 / 1M tokens | ~$45.00 / 1M tokens |
| GPT-3.5 | $0.50 / 1M tokens | $1.50 / 1M tokens | ~$1.00 / 1M tokens |

**Note**: Actual costs may vary. Check your AI tool's current pricing.

## 🎯 Skill Token Usage

### Individual Skill Usage

| Skill Category | Average Tokens | Cost Range | Notes |
|--------------|----------------|-------------|--------|
| **Entry Skills** | 2,000 - 3,000 | $0.02 - $0.03 | Lightweight routing |
| **Planning Review** | 5,000 - 8,000 | $0.05 - $0.08 | Includes game type plugins |
| **Design Validation** | 4,000 - 7,000 | $0.04 - $0.07 | API, Database, Performance |
| **Tech Stack Adaptation** | 3,000 - 5,000 | $0.03 - $0.05 | Language-specific checks |
| **Code Quality** | 6,000 - 10,000 | $0.06 - $0.10 | Code review + tests |
| **Documentation** | 4,000 - 8,000 | $0.04 - $0.08 | API docs + QA docs |
| **Config Table Detection** | 3,000 - 6,000 | $0.03 - $0.06 | Per file/batch |

### Game Type Plugin Usage

| Game Type | Plugin Tokens | With Base Skill | Total Tokens |
|-----------|---------------|-----------------|---------------|
| **RPG** | 1,500 - 2,000 | 5,000 - 8,000 | 6,500 - 10,000 |
| **FPS** | 1,500 - 2,000 | 5,000 - 8,000 | 6,500 - 10,000 |
| **MOBA** | 1,500 - 2,000 | 5,000 - 8,000 | 6,500 - 10,000 |
| **SLG** | 1,500 - 2,000 | 5,000 - 8,000 | 6,500 - 10,000 |
| **MMO** | 1,500 - 2,000 | 5,000 - 8,000 | 6,500 - 10,000 |
| **Casual** | 1,200 - 1,800 | 5,000 - 8,000 | 6,200 - 9,800 |
| **Chess** | 1,200 - 1,800 | 5,000 - 8,000 | 6,200 - 9,800 |

## 🚀 Usage Scenarios

### Scenario 1: Single Planning Review
```
Task: Review backend planning document for RPG game
Skills: Backend Planning Review + RPG Plugin
Tokens: ~7,500
Cost: ~$0.08
Time: 5-10 seconds
```

### Scenario 2: Complete Planning Review
```
Task: Review complete planning document (backend + frontend)
Skills: Game Planning Review (auto-loads all necessary skills)
Tokens: ~15,000
Cost: ~$0.15
Time: 15-30 seconds
```

### Scenario 3: Config Table Detection (Single File)
```
Task: Detect errors in single config table file
Skills: Config Table Detection
Tokens: ~4,000
Cost: ~$0.04
Time: 3-5 seconds
```

### Scenario 4: Config Table Detection (Batch)
```
Task: Detect errors in 10 config table files
Skills: Config Table Detection (batch mode)
Tokens: ~25,000
Cost: ~$0.25
Time: 20-40 seconds
```

### Scenario 5: Full Development Cycle
```
Task: Complete development workflow (planning + design + code + docs)
Skills: Multiple skills across all categories
Tokens: ~50,000 - 80,000
Cost: ~$0.50 - $0.80
Time: 2-5 minutes
```

## 📈 Smart Loading Optimization

### Traditional Loading vs Smart Loading

| Approach | Tokens Loaded | Cost | Efficiency |
|----------|---------------|-------|------------|
| **Load All Skills** | ~150,000 | ~$1.50 | 100% (baseline) |
| **Smart Loading** | ~7,500 - 15,000 | ~$0.08 - $0.15 | **90-95% savings** |

### Smart Loading Examples

#### Example 1: Backend Planning Review
```
User Input: "Review this backend planning document for an RPG game"

Traditional Loading:
- Load all 47 skills: 150,000 tokens
- Cost: $1.50

Smart Loading:
- Load: Backend Planning Review (5,000) + RPG Plugin (1,500)
- Total: 6,500 tokens
- Cost: $0.07
- Savings: 95% ($1.43)
```

#### Example 2: Config Table Detection
```
User Input: "Check these config tables for errors"

Traditional Loading:
- Load all 47 skills: 150,000 tokens
- Cost: $1.50

Smart Loading:
- Load: Config Table Detection (4,000)
- Total: 4,000 tokens
- Cost: $0.04
- Savings: 97% ($1.46)
```

## 💡 Cost Optimization Tips

### 1. Use Smart Loading
- ✅ Always use smart loading (default behavior)
- ✅ Let AI auto-select relevant skills
- ✅ Avoid manual skill loading

### 2. Batch Similar Tasks
- ✅ Review multiple documents in one session
- ✅ Detect multiple config tables at once
- ✅ Reuse loaded skills when possible

### 3. Be Specific in Requests
- ✅ Specify game type upfront
- ✅ Specify tech stack upfront
- ✅ Provide clear context
- ✅ Avoid vague requests

### 4. Use Appropriate Skill Level
- ✅ Use entry skills for routing (saves tokens)
- ✅ Use specific skills when you know what you need
- ✅ Avoid over-engineering simple tasks

### 5. Optimize Input Documents
- ✅ Remove unnecessary content
- ✅ Focus on relevant sections
- ✅ Use clear formatting
- ✅ Provide structured data

## 🎯 Budget Planning

### Monthly Cost Estimates

| Usage Level | Daily Reviews | Monthly Tokens | Monthly Cost |
|-------------|---------------|----------------|---------------|
| **Light** | 1-2 reviews | 150,000 - 300,000 | $1.50 - $3.00 |
| **Medium** | 5-10 reviews | 750,000 - 1,500,000 | $7.50 - $15.00 |
| **Heavy** | 20+ reviews | 3,000,000+ | $30.00+ |

### Project Cost Estimates

| Project Size | Tasks | Total Tokens | Total Cost |
|-------------|--------|--------------|-------------|
| **Small** | 5-10 tasks | 50,000 - 100,000 | $0.50 - $1.00 |
| **Medium** | 20-50 tasks | 200,000 - 500,000 | $2.00 - $5.00 |
| **Large** | 100+ tasks | 1,000,000+ | $10.00+ |

## 🔍 Monitoring Token Usage

### Check Token Usage in Your AI Tool

**Claude Code**:
```bash
# View usage statistics
claude usage

# View detailed logs
claude logs
```

**Other AI Tools**:
- Check your AI tool's documentation
- Look for usage statistics or billing sections
- Monitor token consumption regularly

## ⚠️ Important Notes

### Token Accuracy
- Token counts are estimates
- Actual usage may vary ±20%
- Complex content may use more tokens
- AI tool updates may change tokenization

### Cost Variability
- AI tool pricing may change
- Different models have different costs
- Enterprise plans may offer discounts
- Always check current pricing

### Usage Best Practices
- Start with light usage to understand costs
- Monitor usage regularly
- Set budget alerts if available
- Optimize based on actual usage patterns

## 📚 Additional Resources

- [Claude Code Pricing](https://www.anthropic.com/pricing)
- [OpenAI Pricing](https://openai.com/pricing)
- [Token Counting Guide](https://platform.openai.com/tokenizer)
- [Cost Optimization Best Practices](https://docs.anthropic.com/claude/docs/optimization)

## 🆘 Support

If you have questions about token usage or need help optimizing costs:
- Open an issue on GitHub
- Check [Usage Guide](./USAGE_GUIDE.md)
- Review [Smart Loader Documentation](../scripts/smart-loader.js)

---

**Last Updated**: 2026-04-26
**Version**: 1.0.0