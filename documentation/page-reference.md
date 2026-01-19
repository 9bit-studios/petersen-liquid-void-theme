# Petersen Portal - Page Reference Guide

Quick reference for all available pages and their purposes.

## 🌐 Public Pages

### **Homepage** (`/`)
- **Purpose:** Main landing page with product showcase
- **Features:** Hero section, product categories, search, navigation
- **Key Elements:** Glass morphism design, unified design tokens, Shopify integration

### **Shop** (`/shop`)
- **Purpose:** Main e-commerce catalog
- **Features:** Product grid, filtering, search, cart integration
- **Key Elements:** Category filters, product cards, add-to-cart functionality

### **Product Detail** (`/products/[handle]`)
- **Purpose:** Individual product pages
- **Features:** Product images, descriptions, variants, purchase options
- **Key Elements:** Dynamic routing, Shopify product data, checkout integration

### **About** (`/about`)
- **Purpose:** Company information and story
- **Features:** Brand narrative, team information, company values

### **Contact** (`/contact`)
- **Purpose:** Contact information and inquiry forms
- **Features:** Contact form, business information, location details

## 🔐 User Account Pages

### **Account** (`/account`)
- **Purpose:** User profile and account management
- **Features:** Profile editing, order history, preferences
- **Auth Required:** Yes (user level)

### **Dashboard** (`/dashboard`)
- **Purpose:** Admin control panel (Enhanced Petersen Games Dashboard)
- **Features:** Analytics, project management, strategic oversight
- **Auth Required:** Yes (admin level)

### **Shopify Admin APIs** (`/api/admin/*`)
- **Purpose:** Shopify admin data access via API endpoints
- **Features:** Shop data, products, orders, analytics
- **Auth Required:** No (for testing purposes)

## 🛠️ Debug & Development Pages

### **Safe Mode** (`/safe`)
- **Purpose:** Minimal homepage for debugging
- **Features:** Basic functionality, error isolation, API testing
- **Use Case:** Troubleshooting React crashes

### **Debug React** (`/api/debug-react`)
- **Purpose:** React environment debugging information
- **Returns:** JSON with environment, Shopify config, troubleshooting steps

### **Test Shopify** (`/api/test-shopify`)
- **Purpose:** Shopify API connectivity testing
- **Returns:** JSON with connection status and shop information

## 📋 Support Pages

### **Support Hub** (`/support`)
- **Purpose:** Main support landing page
- **Features:** Support options, contact methods, resource links

### **FAQ** (`/support/faq`)
- **Purpose:** Frequently asked questions
- **Features:** Searchable FAQ database, categorized questions

### **Help Center** (`/support/help`)
- **Purpose:** Detailed help documentation
- **Features:** Step-by-step guides, tutorials, troubleshooting

### **Returns** (`/support/returns`)
- **Purpose:** Return and refund policy
- **Features:** Return process, policy details, form access

### **Shipping** (`/support/shipping`)
- **Purpose:** Shipping information and policies
- **Features:** Shipping rates, delivery times, tracking information

## 📄 Legal Pages

### **Privacy Policy** (`/privacy`)
- **Purpose:** Data privacy and protection policy
- **Features:** GDPR compliance, data usage explanation, user rights

### **Terms of Service** (`/terms`)
- **Purpose:** Terms and conditions for site usage
- **Features:** User agreements, liability, service terms

## 🔌 API Endpoints

### **Public APIs**
- `/api/products` - Product catalog (Storefront API)
- `/api/cart` - Shopping cart management
- `/api/checkout` - Checkout processing
- `/api/featured-products` - Featured product selection

### **Admin APIs** (Shopify Admin API Integration)
- `/api/admin/shop` - Shop information and settings
- `/api/admin/products` - Admin-level product management
- `/api/admin/orders` - Order management and tracking
- `/api/admin/analytics` - Sales analytics and reports

### **Debug APIs**
- `/api/debug` - General debugging information
- `/api/debug-react` - React-specific debugging
- `/api/test-shopify` - Shopify connectivity testing

## 🎨 Design System Components

### **Active Components**
- `UnifiedDesignSystem` - Core design tokens and utilities
- `PetersenGamesStyleProvider` - Enhanced styling for products
- `ErrorBoundary` - React error handling
- `UnifiedNavigation` - Site navigation component

### **Dashboard Components**
- `EnhancedPetersenGamesDashboard` - Main admin dashboard
- `EcommerceDashboard` - Shopify admin interface
- `EcommerceSideMenu` - E-commerce navigation

## 🔧 Configuration Files

### **Environment Variables** (`.env.local`)
```
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=petersengames.myshopify.com
SHOPIFY_STOREFRONT_ACCESS_TOKEN=[token]
SHOPIFY_ADMIN_ACCESS_TOKEN=[admin_token]
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=ninebitstudios
```

### **Key Features**
- ✅ **Shopify Integration** - Full storefront and admin API
- ✅ **Design System** - Unified tokens with glass morphism
- ✅ **Error Handling** - Comprehensive error boundaries
- ✅ **Mobile Responsive** - Optimized for all devices
- ✅ **Admin Dashboard** - Real-time store management
- ✅ **Debug Tools** - Development and troubleshooting aids

## 📱 Testing Instructions

### **Manual Testing Checklist**
1. **Homepage:** Load speed, product display, navigation
2. **Shop Page:** Filtering, search, add-to-cart
3. **Product Pages:** Image loading, variant selection, purchase flow
4. **Dashboards:** Data loading, API connectivity, admin functions
5. **Mobile:** Responsive design, touch interactions
6. **Error Handling:** Offline behavior, API failures

### **API Testing**
- Test each `/api/` endpoint directly in browser
- Verify JSON responses and error handling
- Check Shopify integration with real store data

### **Performance Testing**
- Page load times
- Image optimization
- Mobile performance
- Cache effectiveness

---

**Last Updated:** $(date)
**Total Pages:** 15+ main pages
**API Endpoints:** 10+ endpoints
**Components:** 20+ React components