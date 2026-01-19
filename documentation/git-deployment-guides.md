# Git Deployment Guide - Petersen Games MCP Integration

## 🚀 Quick Deployment Commands

### Option 1: One-Command Deployment
```bash
cd /Users/pennyplatt/Documents//petersen-games
chmod +x deploy-mcp-integration.sh
./deploy-mcp-integration.sh
```

### Option 2: Manual Step-by-Step Deployment

#### Step 1: Navigate to Repository
```bash
cd /Users/pennyplatt/Documents//petersen-games
```

#### Step 2: Check Current Status
```bash
git status
```

#### Step 3: Stage MCP Integration Files
```bash
# Add the new MCP files
git add figma-claude-mcp-server.js
git add .env.mcp.example  
git add package-mcp.json
git add MCP-SETUP.md
git add deploy-mcp-integration.sh
git add GIT-DEPLOYMENT-GUIDE.md

# Check what's staged
git status
```

#### Step 4: Create Commit
```bash
git commit -m "feat: Add Figma Claude MCP integration for gaming UI development

🎮 Features:
- M4 Neural Engine accelerated design-to-code workflow
- Apple HIG compliance for gaming UI
- Shopify QA standards with zero tolerance
- Gaming-specific component generation
- Tactile interaction and accessibility-first design
- Mobile gaming optimization

📁 Files:
- figma-claude-mcp-server.js: MCP server with gaming optimizations
- .env.mcp.example: Environment template
- package-mcp.json: Dependencies
- MCP-SETUP.md: Setup instructions"
```

#### Step 5: Configure Remote (if needed)
```bash
# Check current remote
git remote -v

# If not set up, add GitHub remote
git remote add origin https://github.com/9bitgames/Petersen-games.git

# Or update existing remote
git remote set-url origin https://github.com/9bitgames/Petersen-games.git
```

#### Step 6: Push to GitHub
```bash
# Push to main branch
git push origin main

# Or if you're on a different branch
git push origin HEAD
```

## 📋 Pre-Push Checklist

- [ ] **Environment Variables**: Ensure no sensitive data in committed files
- [ ] **File Permissions**: Scripts are executable where needed
- [ ] **Documentation**: MCP-SETUP.md is complete and accurate
- [ ] **Dependencies**: package-mcp.json has correct dependencies
- [ ] **Configuration**: .env.mcp.example has all required variables

## 🔧 Troubleshooting

### Authentication Issues
```bash
# Check GitHub CLI auth
gh auth status

# Login if needed
gh auth login
```

### Remote Repository Issues
```bash
# Verify repository exists
gh repo view 9bitgames/Petersen-games

# Check current branch
git branch

# Check remote configuration
git remote -v
```

### Commit Issues
```bash
# If files aren't staged properly
git add .

# If commit message needs editing
git commit --amend

# If you need to unstage files
git reset HEAD <filename>
```

## 🎯 Post-Deployment Actions

1. **Verify on GitHub**: Check https://github.com/9bitgames/Petersen-games
2. **Install Dependencies**: `npm install @modelcontextprotocol/sdk node-fetch zod`
3. **Configure Environment**: `cp .env.mcp.example .env.mcp`
4. **Test MCP Server**: `node figma-claude-mcp-server.js`
5. **Restart Cursor**: Load the new MCP configuration

## 🎮 Ready to Use

Once deployed and configured:
- Use `@figma` commands in Cursor
- Extract gaming UI designs from Figma
- Generate Shopify Liquid components
- Validate Apple HIG compliance
- Create accessibility-first gaming components

🚀 **Your AI-powered gaming UI development workflow is ready!**
