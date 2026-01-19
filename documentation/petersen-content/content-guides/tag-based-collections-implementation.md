# Tag-Based Collections Implementation Guide

## Overview
Instead of creating separate Shopify collections for each category, we've implemented a tag-based filtering system that leverages your existing product tagging structure.

## Implementation Details

### 1. Footer Links Updated
All footer shop links now use query parameters to filter products:
- `/shop` - All Products
- `/shop?category=core-games` - Core Games
- `/shop?category=expansions` - Expansions
- `/shop?category=miniatures` - Miniatures
- `/shop?category=books` - Books
- `/shop?category=accessories` - Accessories

### 2. Shop Page Enhanced
The shop page (`/app/shop/page.tsx`) now:
- Reads `category` and `tag` query parameters
- Filters products based on these parameters
- Shows category filter pills when browsing all products
- Displays appropriate page titles based on active filters
- Provides "Back to All Products" link when filtered

### 3. Homepage Navigation Updated
Category buttons on the homepage now redirect to the shop page with appropriate filters:
- Clicking "Core Games" → `/shop?category=core-games`
- Clicking "Expansions" → `/shop?category=expansions`
- etc.

### 4. Benefits of This Approach
- **No Manual Collection Creation**: Uses existing tags automatically
- **Flexible Filtering**: Can combine multiple tags with `&tag=...`
- **Easy Maintenance**: Just tag products correctly in Shopify
- **Scalable**: Add new categories by just using new tags

## Tag Structure Required

Products must have the appropriate category tags as defined in your tagging guide:
- `category-core-games`
- `category-expansions`
- `category-miniatures`
- `category-books`
- `category-accessories`
- `category-digital`

## Advanced Filtering Examples

The system supports complex filtering:
```
/shop?category=miniatures&tag=class-fighters
/shop?category=miniatures&tag=faction-noble-alliance
/shop?tag=subcategory-board-games
```

## Testing Checklist

- [ ] Footer shop links navigate to filtered shop pages
- [ ] Category buttons on homepage redirect properly
- [ ] Shop page displays correct products for each category
- [ ] Filter pills on shop page work correctly
- [ ] Back to All Products link functions
- [ ] Page titles update based on active filters

## Next Steps

1. Ensure all products in Shopify have proper category tags
2. Consider adding subcategory filtering UI
3. Implement search with tag filtering
4. Add product count indicators

This implementation saves significant time by avoiding manual collection creation while providing a flexible, maintainable filtering system.