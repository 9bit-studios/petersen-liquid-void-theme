# Petersen Games Site Testing Checklist

**Current Deployment**: https://petersengames.vercel.app

**Status**: Auto-deploy DISABLED - Manual testing phase

**Date**: June 9, 2025

## 🎯 **Testing Focus Areas**

### **1. Homepage Testing** (`/`)

**Expected**: Real Shopify products displayed with functional links

- [ ]  **Hero Section**
    - [ ]  Text displays correctly: “Legendary horror. Strategic mastery.”
    - [ ]  “Shop all games” button links to `/collections/all`
    - [ ]  Hero image loads properly
    - [ ]  Glassmorphism effects visible on buttons
- [ ]  **Product Grid**
    - [ ]  Shows real Shopify products (not mock data like “Cthulhu Wars Core Set”)
    - [ ]  Expected real products: “Tcho-Tcho Tribes”, “Rock-a-Bye Cthulhu”, “Planet Apocalypse (5e RPG)”, etc.
    - [ ]  Product images load correctly
    - [ ]  Product titles are clickable and link to individual product pages
    - [ ]  Prices display correctly
    - [ ]  “Add to Cart” buttons present on each product
- [ ]  **Navigation Tabs**
    - [ ]  Sticky navigation works on scroll
    - [ ]  “All Games” tab is active/highlighted
    - [ ]  All tab links work (Cthulhu Wars, Planet Apocalypse, etc.)
    Yes but we need to configure / redesign the way the sliding tabs navigation works.
- [ ]  **Newsletter Section**
    - [ ]  Email input field works
    - [ ]  “Join” button styled correctly
    - [ ]  Glassmorphism card effect visible

### **2. Collections Page Testing** (`/collections/all`)

- [ ]  **Page Loads**
    - [ ]  Page loads without errors
    - [ ]  Shows real Shopify products (not mock data)
    - [ ]  Product count should be 10-20 products
- [ ]  **Product Display**
    - [ ]  Product cards show real product names
    - [ ]  Images load correctly
    - [ ]  Prices display properly
    - [ ]  Each product is clickable
- [ ]  **Navigation**
    - [ ]  Breadcrumb/back navigation works
    - [ ]  Page header displays correctly

### **3. Individual Product Pages** (`/products/[handle]`)

**Test URLs**:
- `/products/tcho-tcho-tribes`
- `/products/rock-a-bye-cthulhu`
- `/products/planet-apocalypse-5e-rpg-deluxe-edition`

- [ ]  **Product Loading**
    - [ ]  Page loads without 404 errors
    - [ ]  Real product data displays (title, price, description)
    - [ ]  Product images load correctly
    - [ ]  “Made by Petersen Games” displays
- [ ]  **Product Details**
    - [ ]  Price displays correctly (format: $X.XX)
    - [ ]  Description text shows real Shopify content
    - [ ]  Game stats section populated
    - [ ]  “Add to Cart” button functional
- [ ]  **Navigation**
    - [ ]  Back button works
    - [ ]  Breadcrumb navigation functional
    - [ ]  Related products section loads

### **4. Shopify API Integration**

**Test these API endpoints directly**:

- [ ]  **Main Products API**: `/api/products`
    - [ ]  Returns `"source": "shopify"`
    - [ ]  Returns 10-20 real products
    - [ ]  No mock product names like “Cthulhu Wars Core Set”
- [ ]  **Individual Product API**: `/api/products/tcho-tcho-tribes`
    - [ ]  Returns real product data
    - [ ]  Includes title, price, description, images
    - [ ]  No 404 or 500 errors
- [ ]  **Debug Endpoint**: `/api/debug-shopify`
    - [ ]  Returns `"hasProducts": true`
    - [ ]  Shows real product names in response

### **5. UI/UX & Styling**

- [ ]  **Glassmorphism Effects**
    - [ ]  Primary buttons have translucent blue background with blur
    - [ ]  Secondary buttons have glass effect
    - [ ]  Cards have proper backdrop-filter effects
    - [ ]  No flat/opaque button appearance
- [ ]  **Typography**
    - [ ]  SF Pro Display font family loads correctly
    - [ ]  Text is crisp and readable
    - [ ]  Font weights render properly
- [ ]  **Responsive Design**
    - [ ]  Mobile menu works (test on mobile/narrow screen)
    - [ ]  Product grid adapts to screen size
    - [ ]  Navigation remains functional
- [ ]  **Loading States**
    - [ ]  Products show loading indicators before real data loads
    - [ ]  No flash of mock content before real content

### **6. Functionality Testing**

- [ ]  **Shopping Cart**
    - [ ]  “Add to Cart” buttons work
    - [ ]  Cart icon updates with item count
    - [ ]  Cart page accessible
- [ ]  **Links & Navigation**
    - [ ]  All internal links work correctly
    - [ ]  No broken links or 404 errors
    - [ ]  Browser back/forward buttons work
- [ ]  **Error Handling**
    - [ ]  Invalid product URLs show proper 404 page
    - [ ]  API failures show appropriate error messages
    - [ ]  Images that fail to load show fallback content

## 📝 **Feedback Format**

Please structure your feedback like this:

```
## ISSUE: [Brief Description]
**Page**: [URL where issue occurs]
**Expected**: [What should happen]
**Actual**: [What actually happens]
**Priority**: [High/Medium/Low]

**Steps to Reproduce**:
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Additional Notes**: [Any other relevant information]
```

## 🚨 **Critical Issues to Watch For**

1. **Mock Data Still Showing**: If you see “Cthulhu Wars Core Set” or other mock products
2. **Broken Product Links**: Links that don’t navigate or show 404
3. **Missing Glassmorphism**: Flat, opaque buttons instead of translucent effects
4. **API Errors**: Products not loading or showing error messages
5. **Layout Issues**: Mobile responsiveness or broken layouts

## 📊 **Success Criteria**

- ✅ Homepage shows 6+ real Shopify products
- ✅ All product links navigate successfully
- ✅ Collections page shows 10+ real products
- ✅ Individual product pages load with real data
- ✅ Glassmorphism effects visible throughout
- ✅ No mock product names anywhere on site
- ✅ Shopping cart functionality works

---

**Testing Instructions**:
1. Visit https://petersengames.vercel.app
2. Go through each section systematically
3. Test on both desktop and mobile
4. Document any issues using the feedback format above
5. Focus on real data loading vs mock data fallbacks