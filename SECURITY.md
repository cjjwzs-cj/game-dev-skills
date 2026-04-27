# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please do not open a public issue. Instead, send an email to the maintainer:

**Contact:** cjwzs8888@gmail.com

Please include:
- Description of the vulnerability
- Steps to reproduce the issue
- Potential impact
- Suggested fix (if available)

## Response Time

We will respond within 48 hours and provide regular updates on the progress of the fix.

## Security Best Practices

### For Users
- Always use the latest version of game-dev-skills
- Review the code before using in production
- Keep your dependencies updated
- Use secure AI tool configurations

### For Contributors
- Follow secure coding practices
- Validate all user inputs
- Handle sensitive data properly
- Review dependencies for known vulnerabilities
- Test security aspects of your changes

## Known Security Considerations

### AI Tool Integration
- Skills interact with AI tools (Claude Code, Trae, Codex)
- Ensure your AI tool is properly configured and secured
- Review skill permissions before installation

### File System Access
- Skills may read/write files on your system
- Review skill permissions and file access patterns
- Use in trusted development environments

### Network Access
- Some skills may make network requests
- Ensure your network environment is secure
- Review skill network usage patterns

## Dependency Management

We regularly update dependencies to address security vulnerabilities. To check for updates:

```bash
npm audit
npm update
```

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and will be announced in:
- GitHub Security Advisories
- CHANGELOG.md
- Release notes

## Acknowledgments

We thank security researchers who responsibly disclose vulnerabilities to help make game-dev-skills more secure.