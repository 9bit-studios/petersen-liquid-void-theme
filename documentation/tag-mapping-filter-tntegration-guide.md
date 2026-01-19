# Tag Mapping & Filter Integration Guide

## Tag Translation: Arthur's Vision → UX Standards

### Game Line Classification

### Sandy's Games (Flagship Products)

```
Arthur's Term          → Standard Tag                 → Usage
"Sandy's Games"        → flagship-[game-name]        → Primary navigation

```

**Flagship Game Line Tags:**

- `flagship-cthulhu-wars` (Cthulhu Wars)
- `flagship-cthulhu-wars-duel` (Cthulhu Wars Duel)
- `flagship-planet-apocalypse` (Planet Apocalypse)
- `flagship-planet-apocalypse-rpg` (Planet Apocalypse RPG)
- `flagship-evil-high-priest` (Evil High Priest)
- `flagship-orcs-must-die` (Orcs Must Die!)
- `flagship-the-gods-war` (The Gods War)
- `flagship-invasion-of-the-brood` (Invasion of the Brood)

### Larval Games (Experimental/Indie)

```
Arthur's Term          → Standard Tag                 → Usage
"Larval Games"         → experimental-[game-name]    → Secondary navigation

```

**Experimental Game Line Tags:**

- `experimental-8-bit-attack` (8 Bit Attack)
- `experimental-dicenstein` (Dicenstein)
- `experimental-startropolis` (Startropolis)
- `experimental-theomachy` (Theomachy)
- `experimental-books` (Book)
- `experimental-miniatures-coc` (Official Call of Cthulhu Miniatures)
- `experimental-miniatures-pa` (Planet Apocalypse Miniatures)
- `experimental-tooth-fairy` (The Tooth Fairy Game)
- `experimental-unlocking-insanity` (Unlocking Insanity)
- `experimental-marry-the-monster` (Marry the Monster)
- `experimental-potions-and-profits` (Potions and Profits)
- `experimental-evacuate` (Evacuate)
- `experimental-quivit` (Quivit)
- `experimental-cthulhu-cuisine` (Cthulhu Cuisine)
- `experimental-two-minute-dino-deal` (Two Minute Dino Deal)

### Genre Translation (Game Mechanics)

```
Arthur's Genre                              → UX-Friendly Tag                → Display Name
"Cooperative"                              → mechanics-cooperative           → "Cooperative"
"Strategy"                                 → mechanics-strategy             → "Strategy"
"Asymmetric"                              → mechanics-asymmetric           → "Asymmetric"
"Dice Bash"                               → mechanics-dice-bash            → "Dice Combat"
"Worker Placement"                        → mechanics-worker-placement     → "Worker Placement"
"Tower Defense"                           → mechanics-tower-defense        → "Tower Defense"
"Teams"                                   → mechanics-teams                → "Team-based"
"RPG - 5th edition"                       → mechanics-rpg-5e               → "RPG (5th Edition)"
"Miniatures"                              → mechanics-miniatures           → "Miniature Gaming"
"Economic Modular Building"               → mechanics-economic-building    → "Economic Building"
"Bidding, bluffing, auction, deck building" → mechanics-bidding-auction    → "Bidding & Auction"
"Real Time"                               → mechanics-real-time            → "Real-Time"
"Roll and Write"                          → mechanics-roll-and-write       → "Roll & Write"
"Tactical Survival"                       → mechanics-tactical-survival    → "Tactical Survival"
"Book"                                    → mechanics-book                 → "Reading Material"

```

### Theme Tags (Consistent with Brand)

```
Arthur's Theme        → Standard Tag              → Display Name
"Cthulhu Mythos"     → theme-cthulhu-mythos     → "Cthulhu Mythos"
"Fantasy"            → theme-fantasy            → "Fantasy"
"Sci-fi"             → theme-sci-fi             → "Science Fiction"
"Horror"             → theme-horror             → "Horror"
"Family Fun"         → theme-family-fun        → "Family-Friendly"

```

### Product Attribute Translation

@Rob Eastmond The metafields are this content.

### Player Count (Accessible Language)

```
Arthur's Specification    → Tag System                    → Filter Display
Min: 1, Max: 5           → pc-solo-capable,              → "1-5 Players"
                           pc-1-player, pc-2-players,     → "Solo Play Available"
                           pc-3-players, pc-4-players,    → "2-4 Players"
                           pc-5-plus-players              → "5+ Players"

Min: 2, Max: 2           → pc-two-player-only            → "2 Players Only"

```

### Play Time (User-Friendly Ranges)

```
Arthur's Time    → Standard Tag        → Filter Display
"30 min"        → time-under-30       → "Quick Play (Under 30 min)"
"60 min"        → time-30-60          → "Standard (30-60 min)"
"90 min"        → time-60-90          → "Long (60-90 min)"
"120 min"       → time-90-plus        → "Epic (90+ min)"

```

### Complexity (Baby Cthulhu System)

```
Arthur's Weight → Standard Tag           → Visual Display
1              → weight-1-light         → 🐙 (1 Baby Cthulhu)
2              → weight-2-medium-light  → 🐙🐙 (2 Baby Cthulhus)
3              → weight-3-medium-heavy  → 🐙🐙🐙 (3 Baby Cthulhus)
4              → weight-4-heavy         → 🐙🐙🐙🐙 (4 Baby Cthulhus)

```

### Age Level (Standard Gaming Terms)

```
Arthur's Age → Standard Tag → Filter Display
8           → age-8-plus   → "Ages 8+"
10          → age-10-plus  → "Ages 10+"
12          → age-12-plus  → "Ages 12+"
14          → age-14-plus  → "Ages 14+"
18+         → age-adult    → "Adult"

```

### Game-Specific Sub-Filters

### Cthulhu Wars Sub-Categories

```
Arthur's Sub-Filter                          → Standard Tag               → Display Name
"Playable Faction"                          → cw-playable-factions       → "Playable Factions"
"Independents & Neutrals (Mercenary Units)" → cw-independents-neutrals   → "Independent Units"
"Maps"                                      → cw-maps                    → "Maps & Boards"
"Deluxe Upgrade"                           → cw-deluxe-upgrades         → "Deluxe Components"
"Custom Dice"                              → cw-custom-dice             → "Custom Dice"
"Fine Art"                                 → cw-fine-art                → "Art & Collectibles"
"Miscellanneous"                           → cw-miscellaneous           → "Other Accessories"

```

### Planet Apocalypse Sub-Categories

```
Arthur's Sub-Filter                          → Standard Tag               → Display Name
"Campaign Expansions (New Heroes, Demons, Maps)" → pa-campaign-expansions → "Campaign Expansions"
"Demon Lords"                               → pa-demon-lords             → "Demon Lords"
"Deluxe Upgrade"                           → pa-deluxe-upgrades         → "Deluxe Components"
"Custom Dice"                              → pa-custom-dice             → "Custom Dice"
"Miscellanneous"                           → pa-miscellaneous           → "Other Accessories"

```

### Planet Apocalypse RPG Sub-Categories

```
Arthur's Sub-Filter → Standard Tag        → Display Name
"Books"            → pa-rpg-books        → "RPG Books"
"DM Screen"        → pa-rpg-dm-screen    → "Game Master Tools"
"Miniatures"       → pa-rpg-miniatures   → "RPG Miniatures"
"Miscellanneous"   → pa-rpg-miscellaneous → "Other RPG Accessories"

```

## 🎨 UI Implementation Strategy

### Primary Navigation Structure

```html
<!-- Homepage Game Line Selection -->
<section class="game-lines-hero">
  <div class="flagship-games">
    <h2>Sandy's Games</h2>
    <p class="tagline">Our legendary flagship titles</p>
    <div class="game-grid">
      <!-- Each game gets iconic visual treatment -->
    </div>
  </div>

  <div class="experimental-games">
    <h2>Larval Games</h2>
    <p class="tagline">Where wild ideas come to life</p>
    <div class="game-grid">
      <!-- Experimental aesthetic -->
    </div>
  </div>
</section>

<!-- Quick Access Shop Categories -->
<nav class="quick-shop">
  <a href="/shop/core-games" class="category-link">
    <span class="icon">🎲</span>
    <span>Core Games</span>
  </a>
  <a href="/shop/expansions" class="category-link">
    <span class="icon">📦</span>
    <span>Expansions</span>
  </a>
  <a href="/shop/miniatures" class="category-link">
    <span class="icon">🗿</span>
    <span>Miniatures</span>
  </a>
</nav>

```

### Filter Interface (Shop Page)

```html
<aside class="filters-sidebar">
  <!-- Active Filters (Always Visible) -->
  <div class="active-filters">
    <h3>Current Filters</h3>
    <div class="filter-pills">
      <span class="pill">Cthulhu Wars <button aria-label="Remove filter">×</button></span>
      <span class="pill">Core Games <button aria-label="Remove filter">×</button></span>
    </div>
    <button class="clear-all">Clear All Filters</button>
  </div>

  <!-- Game Lines (Primary) -->
  <fieldset class="filter-group">
    <legend>Game Collections</legend>

    <div class="filter-section">
      <h4>Sandy's Games</h4>
      <label><input type="checkbox" value="flagship-cthulhu-wars"> Cthulhu Wars</label>
      <label><input type="checkbox" value="flagship-planet-apocalypse"> Planet Apocalypse</label>
      <!-- More flagship games -->
    </div>

    <div class="filter-section">
      <h4>Larval Games</h4>
      <label><input type="checkbox" value="experimental-8-bit-attack"> 8 Bit Attack</label>
      <label><input type="checkbox" value="experimental-dicenstein"> Dicenstein</label>
      <!-- More experimental games -->
    </div>
  </fieldset>

  <!-- Product Categories -->
  <fieldset class="filter-group">
    <legend>Product Type</legend>
    <label><input type="checkbox" value="category-core-games"> Core Games</label>
    <label><input type="checkbox" value="category-expansions"> Expansions</label>
    <label><input type="checkbox" value="category-miniatures"> Miniatures</label>
    <label><input type="checkbox" value="category-books"> Books</label>
    <label><input type="checkbox" value="category-accessories"> Accessories</label>
  </fieldset>

  <!-- Game Mechanics -->
  <fieldset class="filter-group">
    <legend>Game Style</legend>
    <label><input type="checkbox" value="mechanics-cooperative"> Cooperative</label>
    <label><input type="checkbox" value="mechanics-strategy"> Strategy</label>
    <label><input type="checkbox" value="mechanics-asymmetric"> Asymmetric</label>
    <!-- More mechanics -->
  </fieldset>

  <!-- Advanced Filters (Collapsible) -->
  <details class="filter-group advanced-filters">
    <summary>Advanced Filters</summary>

    <!-- Player Count -->
    <fieldset class="filter-subgroup">
      <legend>Player Count</legend>
      <label><input type="checkbox" value="pc-solo-capable"> Solo Play</label>
      <label><input type="checkbox" value="pc-two-player-only"> 2 Players</label>
      <label><input type="checkbox" value="pc-5-plus-players"> 5+ Players</label>
    </fieldset>

    <!-- Play Time -->
    <fieldset class="filter-subgroup">
      <legend>Play Time</legend>
      <label><input type="checkbox" value="time-under-30"> Quick (Under 30 min)</label>
      <label><input type="checkbox" value="time-30-60"> Standard (30-60 min)</label>
      <label><input type="checkbox" value="time-60-90"> Long (60-90 min)</label>
      <label><input type="checkbox" value="time-90-plus"> Epic (90+ min)</label>
    </fieldset>

    <!-- Complexity -->
    <fieldset class="filter-subgroup">
      <legend>Complexity</legend>
      <div class="complexity-filter">
        <label>
          <input type="checkbox" value="weight-1-light">
          <span class="baby-cthulhu-display">🐙</span>
          <span>Light</span>
        </label>
        <label>
          <input type="checkbox" value="weight-2-medium-light">
          <span class="baby-cthulhu-display">🐙🐙</span>
          <span>Medium-Light</span>
        </label>
        <!-- More complexity levels -->
      </div>
    </fieldset>
  </details>
</aside>

```

## 📱 Mobile-First Filter Strategy

### Collapsed Filter Interface

```html
<!-- Mobile Filter Toggle -->
<button class="filter-toggle" aria-expanded="false">
  <span class="icon">⚙️</span>
  <span>Filters</span>
  <span class="filter-count">(2 active)</span>
</button>

<!-- Mobile Filter Drawer -->
<div class="filter-drawer" hidden>
  <header class="drawer-header">
    <h2>Filter Products</h2>
    <button class="close-drawer">✕</button>
  </header>

  <!-- Same filter content, optimized for mobile -->

  <footer class="drawer-footer">
    <button class="apply-filters">Apply Filters</button>
    <button class="clear-filters">Clear All</button>
  </footer>
</div>

```

## 🔧 Technical Implementation Notes

### Collection Rules (Shopify Admin)

```jsx
// Automatic collection creation based on tags
const collections = [
  {
    title: "Sandy's Games",
    handle: "sandys-games",
    rules: [{
      column: "tag",
      relation: "contains",
      condition: "flagship-"
    }]
  },
  {
    title: "Larval Games",
    handle: "larval-games",
    rules: [{
      column: "tag",
      relation: "contains",
      condition: "experimental-"
    }]
  },
  {
    title: "Cthulhu Wars",
    handle: "cthulhu-wars",
    rules: [{
      column: "tag",
      relation: "equals",
      condition: "flagship-cthulhu-wars"
    }]
  }
  // More specific collections...
];

```

### Filter State Management

```jsx
// URL-based filter state for SEO and sharing
const filterParams = {
  gl: ['flagship-cthulhu-wars'], // Game lines
  cat: ['category-core-games'], // Categories
  mech: ['mechanics-cooperative', 'mechanics-strategy'], // Mechanics
  theme: ['theme-cthulhu-mythos'], // Themes
  pc: ['pc-solo-capable'], // Player count
  time: ['time-30-60'], // Play time
  weight: ['weight-1-light'], // Complexity
  sub: ['cw-playable-factions'] // Game-specific sub-filters
};

// Convert to URL: /shop?gl=flagship-cthulhu-wars&cat=category-core-games&mech=mechanics-cooperative,mechanics-strategy

```

### Search Integration

```jsx
// Enhanced search with tag-based filtering
const searchWithFilters = (query, activeFilters) => {
  return {
    query: query,
    filters: activeFilters,
    boost: {
      // Boost flagship games in search results
      'flagship-*': 1.5,
      // Boost core games over expansions
      'core-game': 1.2,
      // Boost new releases
      'new-release': 1.3
    }
  };
};

```

## 📊 Analytics & Performance Tracking

### Key Metrics to Monitor

```jsx
// Filter usage analytics
const trackFilterUsage = {
  // Most used filter combinations
  popularCombinations: [
    ['flagship-cthulhu-wars', 'category-core-games'],
    ['experimental-8-bit-attack', 'mechanics-cooperative'],
    ['theme-cthulhu-mythos', 'category-miniatures']
  ],

  // Conversion rates by filter path
  conversionByPath: {
    'homepage → flagship → product': 0.15,
    'shop → category → product': 0.12,
    'search → filter → product': 0.18
  },

  // Abandoned filter sessions
  abandonmentPoints: [
    'too many filter options shown',
    'mobile filter interface confusion',
    'no results for filter combination'
  ]
};

```

## 🎯 Accessibility Considerations

### Screen Reader Support

```html
<!-- Proper labeling for filter groups -->
<fieldset class="filter-group">
  <legend>Game Collections</legend>
  <div role="group" aria-labelledby="sandys-games-heading">
    <h4 id="sandys-games-heading">Sandy's Games</h4>
    <label>
      <input type="checkbox" value="flagship-cthulhu-wars" aria-describedby="cw-description">
      Cthulhu Wars
    </label>
    <div id="cw-description" class="sr-only">
      Epic strategy game featuring cosmic horror battles
    </div>
  </div>
</fieldset>

<!-- Filter state announcements -->
<div aria-live="polite" class="sr-only" id="filter-status">
  <!-- Dynamically updated: "3 filters applied, showing 24 products" -->
</div>

```

### Keyboard Navigation

```css
/* Focus management for filter interactions */
.filter-group input:focus {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}

.filter-pills .pill button:focus {
  outline: 2px solid #d32f2f;
  outline-offset: 1px;
}

/* Skip link for filter sidebar */
.skip-filters {
  position: absolute;
  left: -9999px;
}

.skip-filters:focus {
  position: static;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
}

```

## 🚀 Implementation Phases

### Phase 1: Foundation (Week 1)

**Goal:** Basic navigation structure

- [ ]  Game line tag implementation
- [ ]  Category-based collections
- [ ]  Basic filter interface
- [ ]  Mobile responsive design

**Deliverables:**

- Updated product CSV with game line tags
- Shopify collections configured
- Basic filter sidebar implemented
- Mobile filter drawer functional

### Phase 2: Enhanced Filtering (Week 2)

**Goal:** Advanced filter capabilities

- [ ]  Multi-select filter logic
- [ ]  URL-based filter state
- [ ]  Filter combination analytics
- [ ]  Search integration

**Deliverables:**

- Complete tag taxonomy applied
- Advanced filter interface
- URL parameter handling
- Analytics tracking setup

### Phase 3: Game-Specific Features (Week 3)

**Goal:** Specialized game line experiences

- [ ]  Cthulhu Wars sub-filters
- [ ]  Planet Apocalypse sub-filters
- [ ]  Custom filter combinations
- [ ]  Game line landing pages

**Deliverables:**

- Game-specific collection pages
- Sub-category filtering
- Custom landing page designs
- Enhanced product discovery

### Phase 4: Optimization (Week 4)

**Goal:** Performance and user experience

- [ ]  Filter performance optimization
- [ ]  A/B testing implementation
- [ ]  Advanced analytics
- [ ]  User feedback integration

**Deliverables:**

- Performance benchmarks met
- A/B testing framework
- User behavior insights
- Iteration roadmap

## 🎨 Brand Voice Integration

### UI Copy Guidelines

```jsx
// Brand-appropriate filter labels
const brandedLabels = {
  // Arthur's creative language preserved where appropriate
  complexity: {
    standard: "Complexity Level",
    branded: "Baby Cthulhu Rating 🐙"
  },

  gameLines: {
    flagship: "Sandy's Games",
    experimental: "Larval Games"
  },

  // User-friendly alternatives for clarity
  mechanics: {
    "mechanics-cooperative": "Team Up Against Evil",
    "mechanics-strategy": "Strategic Warfare",
    "mechanics-dice-bash": "Epic Dice Combat",
    "mechanics-asymmetric": "Unique Player Powers"
  },

  themes: {
    "theme-cthulhu-mythos": "Cosmic Horror",
    "theme-horror": "Pure Terror",
    "theme-family-fun": "Family-Friendly Fun"
  }
};

```

### Micro-Interactions

```css
/* Baby Cthulhu complexity animation */
@keyframes cthulhu-glow {
  0% { filter: drop-shadow(0 0 0 rgba(138, 43, 226, 0)); }
  50% { filter: drop-shadow(0 0 8px rgba(138, 43, 226, 0.6)); }
  100% { filter: drop-shadow(0 0 0 rgba(138, 43, 226, 0)); }
}

.baby-cthulhu-rating .cthulhu-head:hover {
  animation: cthulhu-glow 1s ease-in-out;
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

/* Filter application feedback */
.filter-applied {
  background: linear-gradient(90deg, #4a0e4e, #2d1b69);
  color: white;
  animation: pulse 0.3s ease-in-out;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

```

## 🔍 SEO Optimization

### URL Structure

```
/shop                                    # All products
/shop/sandys-games                       # Flagship collection
/shop/sandys-games/cthulhu-wars         # Specific game line
/shop/larval-games                       # Experimental collection
/shop/larval-games/8-bit-attack         # Specific experimental game
/shop/core-games                         # Category browsing
/shop/miniatures                         # Category browsing
/shop/miniatures/cthulhu-wars           # Category + game line

```

### Meta Tags per Collection

```html
<!-- Cthulhu Wars Collection -->
<title>Cthulhu Wars Games & Expansions | Petersen Games</title>
<meta name="description" content="Discover the complete Cthulhu Wars collection featuring cosmic horror strategy games, expansions, miniatures, and accessories from Petersen Games.">
<meta name="keywords" content="Cthulhu Wars, cosmic horror games, strategy board games, Petersen Games, Sandy Petersen">

<!-- Larval Games Collection -->
<title>Larval Games - Experimental Indie Games | Petersen Games</title>
<meta name="description" content="Explore our experimental game collection featuring innovative mechanics, unique themes, and creative designs from Petersen Games' Larval Games line.">

```

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Cthulhu Wars Collection",
  "description": "Complete collection of Cthulhu Wars games and accessories",
  "url": "https://petersengames.com/shop/sandys-games/cthulhu-wars",
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": 45,
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Cthulhu Wars Base Game",
        "category": "Board Games"
      }
    ]
  }
}

```

## 📈 Success Metrics & KPIs

### Primary Success Metrics

```jsx
const successMetrics = {
  userExperience: {
    navigationClarity: {
      target: "> 85% task completion rate",
      measure: "User testing scenarios"
    },
    filterUsability: {
      target: "< 3 clicks to find desired product",
      measure: "Analytics funnel tracking"
    },
    mobileExperience: {
      target: "> 80% mobile conversion rate vs desktop",
      measure: "Mobile vs desktop analytics"
    }
  },

  businessImpact: {
    productDiscovery: {
      target: "25% increase in products viewed per session",
      measure: "Google Analytics enhanced ecommerce"
    },
    conversionRate: {
      target: "15% improvement in category page conversions",
      measure: "Shopify analytics comparison"
    },
    averageOrderValue: {
      target: "10% increase through better cross-discovery",
      measure: "Monthly AOV tracking"
    }
  },

  brandEngagement: {
    gameLineAwareness: {
      target: "40% of users engage with game line navigation",
      measure: "Click tracking on game line sections"
    },
    brandDifferentiation: {
      target: "Unique navigation mentioned in 30% of reviews",
      measure: "Review sentiment analysis"
    }
  }
};

```

---

## 🎯 Summary: Arthur's Vision Meets UX Excellence

This implementation plan successfully bridges Arthur's creative, brand-centric vision with modern UX standards:

### ✅ Preserving Arthur's Vision

- **Game Line Prominence**: Sandy's vs Larval Games distinction maintained
- **Creative Language**: Baby Cthulhu complexity system preserved
- **Brand Hierarchy**: Flagship games elevated appropriately
- **Flexible Sub-filtering**: Game-specific categories as requested

### ✅ UX Best Practices Applied

- **Information Architecture**: Clear, hierarchical navigation
- **Accessible Language**: User-friendly filter labels
- **Mobile-First Design**: Touch-optimized interface
- **Performance Optimized**: Fast, responsive filtering

### ✅ Technical Excellence

- **SEO Optimized**: Clean URL structure and meta tags
- **Scalable System**: Easy to add new games and categories
- **Analytics Ready**: Comprehensive tracking capabilities
- **Accessibility Compliant**: Screen reader and keyboard friendly

**Result:** A navigation system that feels uniquely Petersen Games while providing the intuitive, efficient product discovery that modern e-commerce customers expect.

---

- **Document History**
    
    
    | Version | Date | Author | Changes |
    | --- | --- | --- | --- |
    | 0.1 |  | @Penny Platt  | Initial Creation |
    |  |  |  |  |
    
    *This document follows 9Bit Studios' quantum-spatial design principles and documentation standards.*
    

*© 2025 9Bit Studios. All rights reserved.*

[Shopify Product Tagging Guide](https://www.notion.so/Shopify-Product-Tagging-Guide-5130aaacb23b4aecb20da441a9b978cc?pvs=21)
