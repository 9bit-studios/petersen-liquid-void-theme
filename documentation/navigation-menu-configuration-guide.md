# Petersen Games Navigation Menu Configuration Guide

## Overview
This guide provides comprehensive instructions for setting up an optimized navigation menu with category and tag filtering options for the Petersen Games Shopify store.

## 1. Mega Menu Structure

### Main Navigation Architecture
```
- GAME LINES (Mega Menu)
  - Cthulhu Wars
  - Planet Apocalypse  
  - Hyperspace
  - Evil High Priest
  - Orcs Must Die!
- MINIATURES (Mega Menu)
- STL FILES
- NEW RELEASES
- SALE
- ABOUT
```

### Game Lines Mega Menu Configuration

#### Shopify Admin Setup:
1. Go to **Online Store > Navigation > Main menu**
2. Add menu item "Game Lines"
3. Create nested structure using the menu builder

#### JSON Configuration (for themes supporting mega menus):
```json
{
  "game_lines_mega_menu": {
    "columns": [
      {
        "title": "Cthulhu Wars",
        "handle": "cthulhu-wars",
        "featured_image": "cthulhu-wars-hero.jpg",
        "links": [
          {"title": "View All", "url": "/collections/cthulhu-wars"},
          {"title": "Core Game", "url": "/collections/cthulhu-wars-core"},
          {"title": "Faction Expansions", "url": "/collections/cthulhu-wars-factions"},
          {"title": "Great Old Ones", "url": "/collections/cthulhu-wars-goo"},
          {"title": "Map Collections", "url": "/collections/cthulhu-wars-maps"},
          {"title": "Neutral Units", "url": "/collections/cthulhu-wars-neutrals"}
        ]
      },
      {
        "title": "Planet Apocalypse",
        "handle": "planet-apocalypse",
        "featured_image": "planet-apocalypse-hero.jpg",
        "links": [
          {"title": "View All", "url": "/collections/planet-apocalypse"},
          {"title": "Core Sets", "url": "/collections/planet-apocalypse-core"},
          {"title": "Demon Lords", "url": "/collections/planet-apocalypse-lords"},
          {"title": "Hero Packs", "url": "/collections/planet-apocalypse-heroes"},
          {"title": "Map Expansions", "url": "/collections/planet-apocalypse-maps"}
        ]
      },
      {
        "title": "Hyperspace",
        "handle": "hyperspace",
        "featured_image": "hyperspace-hero.jpg",
        "links": [
          {"title": "Pre-Order Now", "url": "/collections/hyperspace-preorder"},
          {"title": "Coming Soon", "url": "/collections/hyperspace"}
        ]
      },
      {
        "title": "Evil High Priest",
        "handle": "evil-high-priest",
        "featured_image": "evil-high-priest-hero.jpg",
        "links": [
          {"title": "View All", "url": "/collections/evil-high-priest"},
          {"title": "Core Game", "url": "/collections/evil-high-priest-core"},
          {"title": "Expansions", "url": "/collections/evil-high-priest-expansions"}
        ]
      },
      {
        "title": "Orcs Must Die!",
        "handle": "orcs-must-die",
        "featured_image": "orcs-must-die-hero.jpg",
        "links": [
          {"title": "View All", "url": "/collections/orcs-must-die"},
          {"title": "Core Game", "url": "/collections/orcs-must-die-core"},
          {"title": "Expansions", "url": "/collections/orcs-must-die-expansions"},
          {"title": "Hero Packs", "url": "/collections/orcs-must-die-heroes"},
          {"title": "Trap Upgrades", "url": "/collections/orcs-must-die-upgrades"}
        ]
      }
    ],
    "featured_block": {
      "title": "Featured",
      "content": [
        {
          "type": "banner",
          "title": "New Hyperspace Pre-Orders",
          "url": "/products/hyperspace-preorder",
          "image": "hyperspace-banner.jpg"
        }
      ]
    }
  }
}
```

### Miniatures Mega Menu Structure
```json
{
  "miniatures_mega_menu": {
    "columns": [
      {
        "title": "By Game Line",
        "links": [
          {"title": "Cthulhu Wars Miniatures", "url": "/collections/cthulhu-wars?filter.v.option.type=Miniature"},
          {"title": "Planet Apocalypse Miniatures", "url": "/collections/planet-apocalypse?filter.v.option.type=Miniature"},
          {"title": "All Miniatures", "url": "/collections/all-miniatures"}
        ]
      },
      {
        "title": "By Size",
        "links": [
          {"title": "Colossal (150mm+)", "url": "/collections/all-miniatures?filter.v.option.size=Colossal"},
          {"title": "Large (75-150mm)", "url": "/collections/all-miniatures?filter.v.option.size=Large"},
          {"title": "Standard (28-75mm)", "url": "/collections/all-miniatures?filter.v.option.size=Standard"}
        ]
      },
      {
        "title": "By Type",
        "links": [
          {"title": "Heroes", "url": "/collections/all-miniatures?filter.v.option.miniature_type=Hero"},
          {"title": "Monsters", "url": "/collections/all-miniatures?filter.v.option.miniature_type=Monster"},
          {"title": "Great Old Ones", "url": "/collections/all-miniatures?filter.v.option.miniature_type=Great+Old+One"}
        ]
      },
      {
        "title": "Collections",
        "links": [
          {"title": "Painted Showcase", "url": "/collections/painted-miniatures"},
          {"title": "Limited Editions", "url": "/collections/limited-edition-miniatures"},
          {"title": "Bundle Deals", "url": "/collections/miniature-bundles"}
        ]
      }
    ]
  }
}
```

## 2. Category-Based Navigation Setup

### Collection Structure
Create these collections in Shopify Admin:

#### Primary Game Collections:
- `cthulhu-wars` - All Cthulhu Wars products
- `planet-apocalypse` - All Planet Apocalypse products
- `hyperspace` - All Hyperspace products
- `evil-high-priest` - All Evil High Priest products
- `orcs-must-die` - All Orcs Must Die products

#### Sub-Collections per Game:
For Cthulhu Wars:
- `cthulhu-wars-core` - Core games and starter sets
- `cthulhu-wars-factions` - Faction expansions
- `cthulhu-wars-goo` - Great Old One packs
- `cthulhu-wars-maps` - Map expansions
- `cthulhu-wars-neutrals` - Neutral units
- `cthulhu-wars-accessories` - Dice, tokens, etc.

(Similar structure for other game lines)

### Automated Collection Rules
Set up automated collections using these rules:

```
Collection: "Cthulhu Wars Core"
Conditions:
- Product tag contains "cthulhu-wars"
- Product type equals "Core Game"
```

## 3. Tag-Based Filtering System

### Tag Structure Convention
Use consistent prefixes for different tag types:

```
game-[gameline]        # Game line tags
type-[producttype]     # Product type tags
cat-[category]         # Category tags
attr-[attribute]       # Attribute tags
size-[size]           # Size tags for miniatures
```

### Essential Tags List

#### Game Line Tags:
- `game-cthulhu-wars`
- `game-planet-apocalypse`
- `game-hyperspace`
- `game-evil-high-priest`
- `game-orcs-must-die`

#### Product Type Tags:
- `type-core-game`
- `type-expansion`
- `type-miniature-pack`
- `type-map-expansion`
- `type-accessory`
- `type-bundle`

#### Category Tags:
- `cat-faction`
- `cat-hero`
- `cat-monster`
- `cat-terrain`
- `cat-dice`

#### Attribute Tags:
- `attr-limited-edition`
- `attr-kickstarter-exclusive`
- `attr-tournament-legal`
- `attr-painted`
- `attr-assembly-required`

### Filter Configuration in Shopify
1. Go to **Online Store > Navigation > Filter**
2. Enable these filter groups:
   - Price
   - Availability
   - Product Type
   - Tags (customize display)

### Custom Filter Setup (theme.liquid):
```liquid
<!-- Quick Filters Section -->
<div class="quick-filters">
  <h3>Quick Filters</h3>
  
  <!-- Game Line Filters -->
  <div class="filter-group" data-filter-group="game">
    <h4>Game Line</h4>
    <label><input type="checkbox" value="game-cthulhu-wars"> Cthulhu Wars</label>
    <label><input type="checkbox" value="game-planet-apocalypse"> Planet Apocalypse</label>
    <label><input type="checkbox" value="game-hyperspace"> Hyperspace</label>
    <label><input type="checkbox" value="game-evil-high-priest"> Evil High Priest</label>
    <label><input type="checkbox" value="game-orcs-must-die"> Orcs Must Die!</label>
  </div>
  
  <!-- Product Type Filters -->
  <div class="filter-group" data-filter-group="type">
    <h4>Product Type</h4>
    <label><input type="checkbox" value="type-core-game"> Core Games</label>
    <label><input type="checkbox" value="type-expansion"> Expansions</label>
    <label><input type="checkbox" value="type-miniature-pack"> Miniature Packs</label>
  </div>
  
  <!-- Price Range Filters -->
  <div class="filter-group" data-filter-group="price">
    <h4>Price Range</h4>
    <label><input type="radio" name="price" value="0-50"> Under $50</label>
    <label><input type="radio" name="price" value="50-100"> $50 - $100</label>
    <label><input type="radio" name="price" value="100-200"> $100 - $200</label>
    <label><input type="radio" name="price" value="200+"> Over $200</label>
  </div>
</div>
```

## 4. Search Optimization

### Predictive Search Configuration
Enable in **Online Store > Themes > Customize > Theme settings > Search**

### Search Synonyms Setup
Add to Shopify Admin > Settings > Search & Discovery:

```
cthulhu, ktulu, chuthulu → cthulhu wars
space game, 4x → hyperspace
demon game, hell game → planet apocalypse
cult game → evil high priest
tower defense → orcs must die
```

### Search Results Template Enhancement:
```liquid
<!-- In search.liquid -->
<div class="search-filters">
  <button class="filter-btn active" data-filter="all">All Results</button>
  <button class="filter-btn" data-filter="game-cthulhu-wars">Cthulhu Wars</button>
  <button class="filter-btn" data-filter="game-planet-apocalypse">Planet Apocalypse</button>
  <button class="filter-btn" data-filter="type-miniature">Miniatures Only</button>
  <button class="filter-btn" data-filter="in-stock">In Stock Only</button>
</div>
```

### Search Boost Configuration:
```json
{
  "search_settings": {
    "boosted_fields": [
      {"field": "title", "boost": 10},
      {"field": "product_type", "boost": 5},
      {"field": "tags", "boost": 3},
      {"field": "vendor", "boost": 2}
    ],
    "excluded_fields": ["barcode", "sku"]
  }
}
```

## 5. Mobile Menu Optimization

### Mobile Navigation Structure:
```liquid
<!-- Mobile menu template -->
<nav class="mobile-nav">
  <!-- Quick Access Bar -->
  <div class="mobile-quick-access">
    <a href="/collections/new-releases">New</a>
    <a href="/collections/sale">Sale</a>
    <a href="/pages/cthulhu-wars-mobile">Cthulhu Wars</a>
    <a href="/collections/all-miniatures">Miniatures</a>
  </div>
  
  <!-- Accordion Menu -->
  <ul class="mobile-menu-accordion">
    <li class="has-submenu">
      <button class="submenu-toggle">Game Lines</button>
      <ul class="submenu">
        <li>
          <button class="submenu-toggle">Cthulhu Wars</button>
          <ul class="submenu-level-2">
            <li><a href="/collections/cthulhu-wars">View All</a></li>
            <li><a href="/collections/cthulhu-wars-core">Core Game</a></li>
            <li><a href="/collections/cthulhu-wars-factions">Factions</a></li>
          </ul>
        </li>
        <!-- Repeat for other game lines -->
      </ul>
    </li>
  </ul>
</nav>
```

### Mobile Filter Drawer:
```css
/* Mobile filter styles */
.mobile-filter-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--bg);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  max-height: 70vh;
  overflow-y: auto;
}

.mobile-filter-drawer.active {
  transform: translateY(0);
}

/* Horizontal scroll for quick filters */
.mobile-quick-filters {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  -webkit-overflow-scrolling: touch;
}

.mobile-quick-filters .filter-chip {
  flex-shrink: 0;
  padding: 8px 16px;
  background: var(--accent);
  border-radius: 20px;
  white-space: nowrap;
}
```

## 6. Quick Filter Implementation

### JavaScript for Dynamic Filtering:
```javascript
// Quick filter functionality
class QuickFilters {
  constructor() {
    this.filters = {
      game: [],
      type: [],
      price: null,
      availability: 'all'
    };
    this.init();
  }
  
  init() {
    // Attach event listeners
    document.querySelectorAll('.filter-group input').forEach(input => {
      input.addEventListener('change', (e) => this.handleFilterChange(e));
    });
    
    // Initialize from URL params
    this.parseURLFilters();
  }
  
  handleFilterChange(event) {
    const group = event.target.closest('.filter-group').dataset.filterGroup;
    const value = event.target.value;
    const checked = event.target.checked;
    
    if (group === 'price') {
      this.filters.price = checked ? value : null;
    } else if (checked) {
      this.filters[group].push(value);
    } else {
      this.filters[group] = this.filters[group].filter(v => v !== value);
    }
    
    this.applyFilters();
  }
  
  applyFilters() {
    const params = new URLSearchParams();
    
    // Build filter string
    const tagFilters = [
      ...this.filters.game,
      ...this.filters.type
    ];
    
    if (tagFilters.length) {
      params.set('filter.p.tag', tagFilters.join(','));
    }
    
    if (this.filters.price) {
      const [min, max] = this.filters.price.split('-');
      params.set('filter.v.price.gte', min);
      if (max && max !== '+') {
        params.set('filter.v.price.lte', max);
      }
    }
    
    // Update URL and reload products
    window.location.search = params.toString();
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new QuickFilters();
});
```

### Collection Page Quick Filters:
```liquid
<!-- In collection.liquid -->
<div class="collection-quick-filters">
  <!-- Availability -->
  <button class="quick-filter-btn" data-filter="availability:in-stock">
    In Stock Only
  </button>
  
  <!-- Price Ranges -->
  <div class="price-range-filters">
    <button class="quick-filter-btn" data-filter="price:0-50">Under $50</button>
    <button class="quick-filter-btn" data-filter="price:50-100">$50-$100</button>
    <button class="quick-filter-btn" data-filter="price:100+">Over $100</button>
  </div>
  
  <!-- Sort Options -->
  <select class="sort-by" onchange="Shopify.queryParams.sort_by = this.value; location.search = Shopify.queryParams;">
    <option value="manual">Featured</option>
    <option value="best-selling">Best Selling</option>
    <option value="price-ascending">Price: Low to High</option>
    <option value="price-descending">Price: High to Low</option>
    <option value="created-descending">Newest First</option>
  </select>
</div>
```

## 7. Advanced Filtering with Metafields

### Metafield Configuration:
Create these metafields in Shopify Admin:

```yaml
namespace: game_stats
fields:
  - player_count_min: integer
  - player_count_max: integer
  - play_time_min: integer
  - play_time_max: integer
  - complexity: single_line_text (Easy, Medium, Heavy)
  - age_rating: integer
```

### Filter by Game Stats:
```liquid
<!-- Game stat filters -->
<div class="game-stat-filters">
  <h4>Game Details</h4>
  
  <!-- Player Count -->
  <div class="filter-group">
    <label>Players</label>
    <select name="player_count">
      <option value="">Any</option>
      <option value="1">Solo</option>
      <option value="2">2 Players</option>
      <option value="3-4">3-4 Players</option>
      <option value="5+">5+ Players</option>
    </select>
  </div>
  
  <!-- Play Time -->
  <div class="filter-group">
    <label>Play Time</label>
    <select name="play_time">
      <option value="">Any</option>
      <option value="0-30">Under 30 min</option>
      <option value="30-60">30-60 min</option>
      <option value="60-90">60-90 min</option>
      <option value="90+">90+ min</option>
    </select>
  </div>
  
  <!-- Complexity -->
  <div class="filter-group">
    <label>Complexity</label>
    <label><input type="checkbox" value="Easy"> Easy</label>
    <label><input type="checkbox" value="Medium"> Medium</label>
    <label><input type="checkbox" value="Heavy"> Heavy Strategy</label>
  </div>
</div>
```

## 8. Implementation Steps

### Phase 1: Basic Structure (Day 1)
1. Create main navigation structure in Shopify Admin
2. Set up primary collections
3. Import products with proper tags
4. Configure basic search settings

### Phase 2: Enhanced Features (Day 2)
1. Implement mega menu HTML/CSS
2. Add quick filters to collection pages
3. Configure search synonyms
4. Set up mobile menu

### Phase 3: Advanced Features (Day 3)
1. Add metafields for game stats
2. Implement JavaScript filtering
3. Create filter UI components
4. Test and optimize performance

### Phase 4: Polish & Launch (Day 4)
1. Mobile testing and optimization
2. Performance testing
3. Analytics setup for filter usage
4. Launch enhanced navigation

## 9. Performance Optimization

### Lazy Loading for Mega Menus:
```javascript
// Lazy load mega menu content
document.querySelectorAll('.mega-menu-trigger').forEach(trigger => {
  trigger.addEventListener('mouseenter', function() {
    const menuId = this.dataset.menuId;
    if (!this.dataset.loaded) {
      fetch(`/menus/${menuId}.json`)
        .then(res => res.json())
        .then(data => {
          this.querySelector('.mega-menu-content').innerHTML = data.html;
          this.dataset.loaded = 'true';
        });
    }
  });
});
```

### Filter State Persistence:
```javascript
// Save filter state to localStorage
const saveFilterState = (filters) => {
  localStorage.setItem('petersenFilters', JSON.stringify(filters));
};

// Restore on page load
const restoreFilterState = () => {
  const saved = localStorage.getItem('petersenFilters');
  if (saved) {
    const filters = JSON.parse(saved);
    // Apply filters to UI
    applyFiltersToUI(filters);
  }
};
```

## 10. Testing Checklist

- [ ] Desktop mega menu functionality
- [ ] Mobile menu usability
- [ ] Filter combinations work correctly
- [ ] Search returns relevant results
- [ ] Quick filters update URL properly
- [ ] Page load performance < 3s
- [ ] Filter state persists on navigation
- [ ] Accessibility compliance (ARIA labels)
- [ ] Cross-browser compatibility
- [ ] Analytics tracking active

## Conclusion

This navigation system provides:
- Intuitive category-based browsing
- Powerful tag-based filtering
- Optimized search experience
- Mobile-first responsive design
- Performance-optimized implementation

The modular approach allows for phased implementation while maintaining a consistent user experience across all devices.