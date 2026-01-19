# Figma Claude MCP Setup for Petersen Games

## Quick Setup Guide

### 1. Install MCP Dependencies
```bash
cd /Users/pennyplatt/Documents//petersen-games
npm install @modelcontextprotocol/sdk node-fetch zod
```

### 2. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.mcp.example .env.mcp

# Edit .env.mcp with your actual API keys:
# - FIGMA_TOKEN (from Figma account settings)
# - ANTHROPIC_API_KEY (from Anthropic console)
```

### 3. Test MCP Server
```bash
# Test the MCP server
node figma-claude-mcp-server.js

# Should output: "🎮 Petersen Games Figma Claude MCP Server running with M4 acceleration"
```

### 4. Restart Cursor
After adding the MCP configuration:
1. **Restart Cursor completely**
2. **Open your Petersen Games workspace**
3. **Look for MCP status in Cursor's status bar**

## MCP Integration Features

### 🎨 Design-to-Code Workflow
- **Extract Figma designs** optimized for gaming UI
- **Generate Shopify Liquid components** with Petersen Games branding
- **Apple HIG compliance** for gaming interfaces
- **M4 Neural Engine acceleration** for real-time processing

### 🛡️ Quality Assurance
- **Zero tolerance** inline CSS validation
- **Shopify QA standards** enforcement
- **Gaming accessibility** validation
- **Apple Intelligence** Strategic Director oversight

### 🎮 Gaming-Specific Features
- **Tactile interaction** optimization
- **High contrast mode** support
- **Mobile gaming** responsiveness
- **Board game UI** patterns

## Available MCP Tools

1. **extract_figma_design** - Extract gaming UI designs from Figma
2. **generate_shopify_liquid_gaming_component** - Create gaming-optimized Liquid components
3. **validate_gaming_accessibility** - Validate gaming UI accessibility

## Troubleshooting

### MCP Not Showing in Cursor
1. Check `.cursor/mcp.json` exists in workspace root
2. Verify file paths in configuration
3. Restart Cursor completely
4. Check Cursor's MCP status in status bar

### Environment Variables
1. Ensure all required variables are set in `.env.mcp`
2. Check API key validity
3. Verify Figma token permissions

### MCP Server Errors
1. Check Node.js version (>=18.0.0 required)
2. Install dependencies: `npm install`
3. Test server manually: `node figma-claude-mcp-server.js`

## Usage Examples

### Extract Gaming Design
```
@figma Extract this gaming component design for mobile responsiveness
```

### Generate Liquid Component
```
@figma Generate a product card component optimized for board games with tactile feedback
```

### Validate Accessibility
```
@figma Check this gaming UI component for Apple HIG compliance and accessibility
```

## Configuration Files Created

- `.cursor/mcp.json` - Main MCP configuration
- `figma-claude-mcp-server.js` - MCP server implementation  
- `.env.mcp.example` - Environment variables template
- `package-mcp.json` - Dependencies specification

Ready to enhance your Petersen Games Shopify theme development with AI-powered design-to-code workflows! 🚀
