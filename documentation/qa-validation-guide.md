# Petersen Games Fresh Glass Theme - QA Validation Guide

## Overview

This guide documents the high-standard validation system implemented for the Petersen Games Fresh Glass Theme. The theme enforces strict TypeScript compliance, Apple HIG standards, design token usage, and comprehensive security measures.

## Quick Start

```bash
# Install dependencies
npm install

# Run full QA validation
npm run qa:full

# Run individual validations
npm run typecheck        # TypeScript strict mode
npm run lint            # ESLint with strict rules
npm run test:hig        # Apple HIG compliance
npm run test:tokens     # Token usage validation
npm run security:check  # Security audit
```

## Validation Standards

### 1. TypeScript Strict Mode (Required)

The project enforces TypeScript's strictest settings:

```json
{
  "strict": true,
  "noImplicitAny": true,
  "strictNullChecks": true,
  "strictFunctionTypes": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true,
  "noFallthroughCasesInSwitch": true,
  "noUncheckedIndexedAccess": true,
  "exactOptionalPropertyTypes": true
}
```

**Requirements:**
- ✅ All code must pass TypeScript strict mode
- ✅ No `any` types allowed
- ✅ All variables must be used
- ✅ Explicit return types required
- ✅ Null/undefined must be handled explicitly

**Common Fixes:**
```typescript
// ❌ Bad
function getValue(obj) {
  return obj.value;
}

// ✅ Good
function getValue(obj: { value: string }): string {
  return obj.value;
}

// ❌ Bad - possible undefined
const item = array[0];
console.log(item.name);

// ✅ Good - handle undefined
const item = array[0];
if (item) {
  console.log(item.name);
}
```

### 2. Apple HIG Compliance (90%+ Required)

The theme must meet Apple Human Interface Guidelines:

#### Touch Targets
- **Minimum**: 44px × 44px for all interactive elements
- **Enforced**: Automatic validation fails if violated

```liquid
<!-- ❌ Bad -->
<button style="height: 30px">Add to Cart</button>

<!-- ✅ Good -->
<button class="touch-target">Add to Cart</button>
```

```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

#### Typography
- **Minimum font size**: 11px (absolute minimum)
- **Preferred font size**: 17px for body text
- **System fonts required**: Use Apple system fonts

```css
/* ✅ Good typography */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
  font-size: 17px; /* Preferred size */
  line-height: 1.5;
}

.caption {
  font-size: 13px; /* Above minimum */
}

/* ❌ Bad - too small */
.tiny-text {
  font-size: 9px; /* Below 11px minimum */
}
```

#### Spacing (8pt Grid)
All spacing must align to an 8-pixel grid:

```css
/* ✅ Good - multiples of 8 */
.component {
  padding: 16px;
  margin-bottom: 24px;
  gap: 8px;
}

/* ❌ Bad - not on 8pt grid */
.component {
  padding: 15px;
  margin-bottom: 20px;
  gap: 10px;
}
```

#### Animation Duration
- **Maximum**: 400ms for all animations
- **Recommended**: 150-250ms for UI feedback

```css
/* ✅ Good */
.button {
  transition: all 150ms ease;
}

/* ❌ Bad - too slow */
.modal {
  animation: fadeIn 600ms;
}
```

### 3. Design Token Usage (Zero Hardcoded Values)

**Requirement**: No hardcoded colors or spacing values allowed.

```liquid
<!-- ❌ Bad - hardcoded values -->
<div style="color: #6A3093; padding: 16px;">
  Content
</div>

<!-- ✅ Good - using tokens -->
<div style="color: var(--colors-foundation-quantum-violet); padding: var(--spacing-sm);">
  Content
</div>
```

```css
/* ❌ Bad - hardcoded values */
.product-card {
  background: #0A0621;
  padding: 24px;
  border-radius: 12px;
}

/* ✅ Good - using tokens */
.product-card {
  background: var(--colors-foundation-void-black);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

### 4. Zero Inline CSS Policy

**Critical**: Inline CSS caused a 4-hour development loss. Zero tolerance policy.

```liquid
<!-- ❌ FORBIDDEN - inline styles -->
<div style="display: flex; gap: 16px;">
  <button style="background: blue;">Click</button>
</div>

<!-- ✅ Required - use classes -->
<div class="flex-container">
  <button class="primary-button">Click</button>
</div>
```

**Exception**: Dynamic values from theme settings are analyzed separately:
```liquid
<!-- ✅ Acceptable - theme architecture -->
<div style="--spacing: {{ section.settings.spacing }}px;">
  <!-- Content -->
</div>
```

### 5. Security Standards

#### XSS Prevention
```liquid
<!-- ❌ Dangerous - unescaped user input -->
{{ customer.name }}

<!-- ✅ Safe - escaped output -->
{{ customer.name | escape }}
```

#### Dangerous JavaScript Patterns
```javascript
// ❌ Forbidden patterns
eval(userInput);                    // No eval
new Function(code)();               // No Function constructor
element.innerHTML = userContent;    // No innerHTML with user content
document.write(content);            // No document.write

// ✅ Safe alternatives
JSON.parse(userInput);              // Parse JSON safely
element.textContent = userContent;  // Safe text content
element.insertAdjacentHTML('beforeend', sanitizedContent);
```

### 6. Performance Standards

#### File Size Limits
- **CSS files**: Maximum 50KB per file
- **JavaScript files**: Maximum 100KB per file
- **Total CSS**: Should not exceed 200KB
- **Total JavaScript**: Should not exceed 400KB

#### Required Optimizations
```liquid
<!-- ✅ Lazy loading for images -->
<img src="{{ image | img_url: '300x' }}" 
     loading="lazy"
     alt="{{ image.alt | escape }}">

<!-- ✅ Critical CSS -->
<style>
  /* Critical above-the-fold styles */
  .hero { /* ... */ }
</style>
<link rel="preload" href="{{ 'theme.css' | asset_url }}" as="style">
```

## Running QA Validation

### Full Validation Suite

```bash
npm run qa:full
```

This runs all validations in sequence:
1. TypeScript strict mode check
2. ESLint with all rules
3. Apple HIG compliance test
4. Token usage validation
5. Security audit
6. Shopify theme audit
7. Full QA service validation

### Individual Validations

```bash
# TypeScript only
npm run typecheck

# Linting only
npm run lint

# Apple HIG compliance
npm run test:hig

# Token usage check
npm run test:tokens

# Security audit
npm run security:check

# Run QA service
npm run qa
```

### Continuous Validation

```bash
# Watch mode - validates on file changes
npm run watch

# Development mode with validation
npm run dev
```

## Understanding Validation Results

### Success Output
```
🚀 Starting Petersen Games QA Validation - Enhanced Edition
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 Validating TypeScript with strict standards...
✅ TypeScript validation passed with strict standards

🔍 Validating comprehensive Apple HIG compliance...
✅ Apple HIG compliance verified: 95%

🔍 Validating design token usage...
✅ Token usage validation passed - no hardcoded values

═══════════════════════════════════════════════════════════════
📊 ENHANCED QA VALIDATION SUMMARY
═══════════════════════════════════════════════════════════════

🍎 Apple HIG Compliance: 95%
📘 TypeScript Strict: ✅ Enabled
🎨 Token Usage: ✅ Compliant
🔒 Security Status: SECURE
⚡ Performance: 100%

📈 Overall Status: PASSED
   Critical Errors: 0
   Warnings: 2
```

### Failure Output
```
🚨 CRITICAL ERRORS REQUIRING IMMEDIATE ATTENTION:

1. [TOKEN_USAGE] HARDCODED_VALUES_DETECTED
   Found 23 hardcoded values (15 colors, 8 spacing)
   ACTION: Replace all hardcoded values with design tokens

2. [APPLE_HIG_COMPLIANCE] HIG_COMPLIANCE_BELOW_THRESHOLD
   HIG compliance score: 78% (required: 90%)
   ACTION: Update all components to meet Apple HIG standards

3. [SECURITY] SECURITY_VULNERABILITIES
   Found 2 potential security issues
   ACTION: Fix all security vulnerabilities immediately
```

## Pre-Commit Validation

The project uses Husky for pre-commit hooks:

```bash
# Automatic on commit
git commit -m "Update product card"
# Runs: lint-staged && npm run qa:validate

# Automatic on push
git push
# Runs: npm run qa:full
```

## Fixing Common Issues

### TypeScript Errors

```typescript
// Error: Object is possibly 'undefined'
// ❌ Bad
const value = settings.config.value;

// ✅ Fix
const value = settings?.config?.value ?? 'default';

// Error: Parameter implicitly has an 'any' type
// ❌ Bad
function processItem(item) { }

// ✅ Fix
function processItem(item: ProductItem): void { }
```

### HIG Violations

```css
/* Fix touch target issues */
button, 
a.button,
.interactive-element {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Fix typography issues */
body {
  font-size: 17px; /* Preferred size */
  line-height: 1.5;
}

/* Never go below 11px */
.small-text {
  font-size: 11px; /* Absolute minimum */
}
```

### Token Usage

```javascript
// Create a token mapping utility
const tokens = {
  colors: {
    primary: 'var(--colors-foundation-quantum-violet)',
    background: 'var(--colors-foundation-void-black)',
    text: 'var(--text-primary)'
  },
  spacing: {
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)'
  }
};

// Use in Liquid
element.style.setProperty('color', tokens.colors.primary);
element.style.setProperty('padding', tokens.spacing.md);
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: QA Validation

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run qa:full
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: qa-reports
          path: qa-reports/
```

## Best Practices

1. **Run validation before every commit**
   ```bash
   npm run qa:validate
   ```

2. **Fix issues immediately**
   - Don't accumulate technical debt
   - Address critical errors first
   - Handle warnings before they become errors

3. **Keep dependencies updated**
   ```bash
   npm run security:check
   npm audit fix
   ```

4. **Document exceptions**
   - If you must bypass validation, document why
   - Create tickets for temporary workarounds
   - Review exceptions regularly

5. **Monitor trends**
   - Track HIG compliance scores over time
   - Watch for increasing warnings
   - Celebrate improvements!

## Support

For questions or issues:
1. Check the error messages carefully - they include specific fixes
2. Review this guide for common solutions
3. Check the generated reports in `qa-reports/`
4. Consult the Apple HIG documentation
5. Review the sources of truth in `/apple-intelligence/foundation/`

Remember: These high standards ensure a quality product that provides an excellent user experience while preventing costly development issues.

---

*Last Updated: August 2025*  
*Version: 1.0.0*