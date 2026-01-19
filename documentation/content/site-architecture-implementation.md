# Petersen Games Site Architecture Implementation
## Technical Implementation Guide for 2-Day Content Acceleration

---

## **Site Map Structure**

### **Primary Navigation (Mega Menu)**
```
Browse Games (Mega Dropdown)
├── Collections
│   ├── Cthulhu Wars (Featured)
│   ├── Planet Apocalypse
│   ├── Hyperspace (New!)
│   ├── The Gods War
│   └── All Products
├── Game Lines
│   ├── Cthulhu Wars (Featured)
│   ├── Planet Apocalypse
│   ├── Hyperspace
│   ├── 8 Bit Attack
│   ├── The Gods War
│   └── Evil High Priest
└── Categories
    ├── Core Games
    ├── Expansions
    ├── Miniatures
    ├── Accessories
    └── Books & RPG
```

### **Secondary Navigation (Sliding Tabs)**
```
Sandy's Games | Planet Apocalypse | Hyperspace | Miniatures
```

---

## **Content Page Architecture**

### **Homepage Structure**
```
/
├── Hero Section
│   ├── Flash Sale Banner (20% off newsletter signup)
│   ├── Sandy Petersen Brand Spotlight
│   └── Featured Product Rotation
├── Featured Games Grid
│   ├── Cthulhu Wars (Flagship)
│   ├── Planet Apocalypse (Luxury)
│   ├── Hyperspace (New Launch)
│   └── Community Favorites
├── Monster Miniatures Showcase
│   ├── Latest Blog Posts
│   ├── UHD Photo Galleries
│   └── Community Submissions
├── Social Proof Section
│   ├── Customer Reviews
│   ├── Community Photos
│   └── Press Coverage
└── Newsletter Opt-in
    ├── Monster Lore Weekly
    ├── Digital Rule Book Offer
    └── 20% First Purchase Discount
```

### **Game Landing Page Template**
```
/collections/[game-line]/
├── Hero Video/Image
├── Game Overview
│   ├── Core Concept
│   ├── Key Features
│   └── What's Included
├── Lore Deep Dive
│   ├── Setting & Atmosphere
│   ├── Character Profiles
│   └── Story Background
├── Miniature Gallery
│   ├── HD Painted Showcases
│   ├── Scale References
│   └── Artist Spotlights
├── Product Lineup
│   ├── Core Game
│   ├── Expansions
│   └── Accessories
├── Community Content
│   ├── Player Reviews
│   ├── Strategy Articles
│   └── UGC Photos
└── Purchase Funnel
    ├── Product Selection
    ├── Bundle Offers
    └── Newsletter Signup
```

---

## **Shopify Collection Structure**

### **Smart Collections Setup**
Based on CSV analysis, implement automated collections:

```liquid
<!-- High Value Items (Price > $50) -->
{% assign high_value_products = collections.all.products | where: 'price', '>', 5000 %}

<!-- New Releases (Created < 30 days) -->
{% assign new_products = collections.all.products | where: 'created_at', '>', 30.days.ago %}

<!-- Fast Movers (High inventory turnover) -->
{% assign popular_products = collections.all.products | sort: 'best-selling' %}

<!-- Game Line Collections -->
{% assign cthulhu_products = collections.all.products | where: 'tags', 'Cthulhu Wars' %}
{% assign planet_products = collections.all.products | where: 'tags', 'Planet Apocalypse' %}
{% assign hyperspace_products = collections.all.products | where: 'tags', 'Hyperspace' %}
```

### **Category Hierarchy Implementation**
```
Primary Categories:
├── Core Games (category-core-games)
│   └── Board Games (subcategory-board-games)
├── Expansions (category-expansions) 
│   └── Expansion Packs (subcategory-expansion-packs)
├── Accessories (category-accessories)
│   ├── Dice Sets (subcategory-dice-sets)
│   ├── Deluxe Upgrades (subcategory-deluxe-upgrade)
│   └── Tokens & Markers (subcategory-tokens-markers)
├── Miniatures (category-miniatures)
│   ├── Cthulhu Mythos (subcategory-mythos)
│   ├── Planet Apocalypse (subcategory-demons)
│   └── Hyperspace (subcategory-aliens)
└── Books (category-books)
    └── Art Books (subcategory-art-books)
```

---

## **Content Templates & Components**

### **Game Stats Component**
```liquid
<!-- game-stats-display.liquid -->
<div class="game-stats-grid">
  {% if product.metafields.game_stats.players %}
    <div class="stat-item">
      <span class="stat-icon">👥</span>
      <span class="stat-label">Players</span>
      <span class="stat-value">{{ product.metafields.game_stats.players }}</span>
    </div>
  {% endif %}
  
  {% if product.metafields.game_stats.time %}
    <div class="stat-item">
      <span class="stat-icon">⏱️</span>
      <span class="stat-label">Play Time</span>
      <span class="stat-value">{{ product.metafields.game_stats.time }}</span>
    </div>
  {% endif %}
  
  {% if product.metafields.game_stats.age %}
    <div class="stat-item">
      <span class="stat-icon">🎯</span>
      <span class="stat-label">Age</span>
      <span class="stat-value">{{ product.metafields.game_stats.age }}+</span>
    </div>
  {% endif %}
</div>
```

### **Monster Miniatures Showcase Component**
```liquid
<!-- miniature-showcase.liquid -->
<section class="miniature-showcase">
  <div class="showcase-header">
    <h2>Monster Miniatures Showcase</h2>
    <p>Explore our collection of professionally painted miniatures</p>
  </div>
  
  <div class="showcase-grid">
    {% for article in blog['monster-showcase'].articles limit: 6 %}
      <article class="showcase-item">
        {% if article.image %}
          <img src="{{ article.image | img_url: '400x400' }}" 
               alt="{{ article.title }}" 
               loading="lazy">
        {% endif %}
        <div class="showcase-content">
          <h3>{{ article.title }}</h3>
          <p>{{ article.summary | truncate: 100 }}</p>
          <a href="{{ article.url }}" class="read-more-btn">View Gallery</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
```

### **Lore Deep Dive Component**
```liquid
<!-- lore-section.liquid -->
<section class="lore-deep-dive">
  {% assign lore_content = product.metafields.content.lore_description %}
  {% if lore_content %}
    <div class="lore-header">
      <h2>Enter the {{ product.title }} Universe</h2>
    </div>
    
    <div class="lore-content">
      <div class="lore-text">
        {{ lore_content | metafield_text }}
      </div>
      
      <div class="lore-atmosphere">
        <h3>Atmospheric Elements</h3>
        <ul class="atmosphere-list">
          {% assign themes = product.metafields.game_stats.theme | split: ',' %}
          {% for theme in themes %}
            <li class="theme-tag">{{ theme | strip }}</li>
          {% endfor %}
        </ul>
      </div>
    </div>
  {% endif %}
</section>
```

---

## **Blog Structure & Content Types**

### **Blog Categories**
```
Blogs:
├── Monster Miniatures Showcase (monster-showcase)
│   ├── Cthulhu Wars Gallery
│   ├── Planet Apocalypse Collection
│   └── Hyperspace Previews
├── Lore & Stories (game-lore)
│   ├── Faction Backgrounds
│   ├── Setting Guides
│   └── Character Profiles
├── Strategy & Tactics (game-strategy)
│   ├── Faction Guides
│   ├── Advanced Tactics
│   └── Tournament Reports
├── Community Spotlights (community)
│   ├── Player Features
│   ├── Custom Creations
│   └── Convention Coverage
└── News & Updates (company-news)
    ├── Product Announcements
    ├── Release Schedules
    └── Company Updates
```

### **Article Templates**
```liquid
<!-- blog-article-enhanced.liquid -->
<article class="blog-article">
  <header class="article-header">
    <div class="article-meta">
      <span class="category">{{ blog.title }}</span>
      <time>{{ article.published_at | date: '%B %d, %Y' }}</time>
    </div>
    <h1>{{ article.title }}</h1>
    {% if article.summary %}
      <p class="article-summary">{{ article.summary }}</p>
    {% endif %}
  </header>
  
  {% if article.image %}
    <div class="article-featured-image">
      <img src="{{ article.image | img_url: '800x600' }}" 
           alt="{{ article.title }}">
    </div>
  {% endif %}
  
  <div class="article-content">
    {{ article.content }}
  </div>
  
  <footer class="article-footer">
    <div class="article-tags">
      {% for tag in article.tags %}
        <span class="tag">{{ tag }}</span>
      {% endfor %}
    </div>
    
    <div class="related-products">
      <h3>Featured Products</h3>
      <!-- Auto-suggest products based on article tags -->
      {% assign related_products = collections.all.products | where: 'tags', article.tags.first %}
      {% for product in related_products limit: 3 %}
        <div class="product-card-mini">
          <a href="{{ product.url }}">
            <img src="{{ product.featured_image | img_url: '200x200' }}" 
                 alt="{{ product.title }}">
            <span>{{ product.title }}</span>
            <span class="price">{{ product.price | money }}</span>
          </a>
        </div>
      {% endfor %}
    </div>
  </footer>
</article>
```

---

## **Analytics & Tracking Implementation**

### **Enhanced Analytics Setup**
```javascript
// Enhanced Google Analytics 4 Setup
gtag('config', 'GA_MEASUREMENT_ID', {
  // Enhanced Ecommerce Tracking
  custom_map: {
    'custom_parameter_1': 'game_line',
    'custom_parameter_2': 'content_type',
    'custom_parameter_3': 'engagement_level'
  }
});

// Content Engagement Tracking
function trackContentEngagement(contentType, contentTitle, engagementLevel) {
  gtag('event', 'content_engagement', {
    'content_type': contentType,
    'content_title': contentTitle,
    'engagement_level': engagementLevel,
    'game_line': getGameLineFromContent(contentTitle)
  });
}

// Newsletter Signup Tracking
function trackNewsletterSignup(source, campaign) {
  gtag('event', 'newsletter_signup', {
    'source': source,
    'campaign': campaign,
    'value': 5.00 // Estimated lead value
  });
}

// Product Interest Tracking
function trackProductInterest(productHandle, interactionType) {
  gtag('event', 'product_interest', {
    'product_handle': productHandle,
    'interaction_type': interactionType,
    'game_line': getGameLineFromProduct(productHandle)
  });
}
```

### **Grid/Notion Integration Tracking**
```javascript
// Custom tracking for Grid integration
window.gridAnalytics = {
  trackContentPerformance: function(contentId, metrics) {
    // Send to Grid API for processing
    fetch('/api/grid/content-performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contentId: contentId,
        metrics: metrics,
        timestamp: Date.now(),
        gameLines: extractGameLines(contentId)
      })
    });
  },
  
  trackConversionPath: function(steps, outcome) {
    // Track customer journey through content
    fetch('/api/grid/conversion-tracking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        steps: steps,
        outcome: outcome,
        sessionId: getSessionId(),
        timestamp: Date.now()
      })
    });
  }
};
```

---

## **Social Media Integration**

### **Instagram Feed Integration**
```liquid
<!-- instagram-feed.liquid -->
<section class="instagram-feed">
  <div class="feed-header">
    <h2>Follow @petersengames</h2>
    <a href="https://instagram.com/petersengames" class="follow-btn">Follow</a>
  </div>
  
  <div class="instagram-grid" id="instagram-feed">
    <!-- Instagram posts will be loaded via JavaScript -->
  </div>
</section>

<script>
// Instagram Basic Display API Integration
async function loadInstagramFeed() {
  try {
    const response = await fetch(`/apps/instagram-feed/recent`);
    const posts = await response.json();
    
    const grid = document.getElementById('instagram-feed');
    posts.data.slice(0, 6).forEach(post => {
      const postElement = createInstagramPost(post);
      grid.appendChild(postElement);
    });
  } catch (error) {
    console.error('Instagram feed loading error:', error);
  }
}

function createInstagramPost(post) {
  const element = document.createElement('div');
  element.className = 'instagram-post';
  element.innerHTML = `
    <a href="${post.permalink}" target="_blank">
      <img src="${post.media_url}" alt="Instagram post" loading="lazy">
      <div class="post-overlay">
        <span class="post-type">${post.media_type}</span>
        <span class="post-date">${formatDate(post.timestamp)}</span>
      </div>
    </a>
  `;
  return element;
}

// Load feed on page load
document.addEventListener('DOMContentLoaded', loadInstagramFeed);
</script>
```

### **YouTube Channel Integration**
```liquid
<!-- youtube-showcase.liquid -->
<section class="youtube-showcase">
  <div class="showcase-header">
    <h2>Latest from Sandy Petersen</h2>
    <a href="https://youtube.com/@PetersenGames" class="subscribe-btn">
      Subscribe on YouTube
    </a>
  </div>
  
  <div class="video-grid">
    <div class="featured-video">
      <!-- Latest video embedded -->
      <iframe src="https://www.youtube.com/embed/LATEST_VIDEO_ID" 
              frameborder="0" 
              allowfullscreen>
      </iframe>
    </div>
    
    <div class="video-list">
      <!-- Recent videos list -->
      <div class="video-item">
        <img src="thumbnail.jpg" alt="Video thumbnail">
        <div class="video-info">
          <h4>Video Title</h4>
          <span class="video-meta">Series • Duration</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## **Newsletter & Email Integration**

### **Advanced Newsletter Signup**
```liquid
<!-- newsletter-advanced.liquid -->
<form class="newsletter-form" id="advanced-newsletter">
  <div class="form-header">
    <h3>Join the Horror Gaming Community</h3>
    <p>Get exclusive lore, early access, and 20% off your first purchase</p>
  </div>
  
  <div class="form-fields">
    <input type="email" 
           name="email" 
           placeholder="Enter your email" 
           required>
    
    <div class="interest-selection">
      <label>Interested in:</label>
      <div class="checkbox-group">
        <label><input type="checkbox" name="interests" value="cthulhu-wars"> Cthulhu Wars</label>
        <label><input type="checkbox" name="interests" value="planet-apocalypse"> Planet Apocalypse</label>
        <label><input type="checkbox" name="interests" value="hyperspace"> Hyperspace</label>
        <label><input type="checkbox" name="interests" value="miniatures"> Miniatures</label>
      </div>
    </div>
  </div>
  
  <div class="lead-magnets">
    <h4>Get Instant Access:</h4>
    <ul>
      <li>🎯 Digital Rule Book Collection</li>
      <li>🎨 Miniature Painting Guides</li>
      <li>📚 Exclusive Lore Content</li>
      <li>💰 20% First Purchase Discount</li>
    </ul>
  </div>
  
  <button type="submit" class="signup-btn">
    Join the Community
  </button>
  
  <p class="privacy-note">
    We respect your privacy. Unsubscribe anytime.
  </p>
</form>
```

### **Email Automation Sequences**
```yaml
# Klaviyo Flow Setup
Welcome_Series:
  Trigger: Newsletter Signup
  Emails:
    - Day 0: Welcome + Digital Rule Book Download
    - Day 2: Monster Lore Introduction
    - Day 5: Miniature Gallery Showcase
    - Day 7: 20% Discount Code
    - Day 14: Community Spotlight
    - Day 21: Advanced Strategy Content

Abandoned_Browse_Series:
  Trigger: Product Page Visit (No Purchase)
  Emails:
    - 1 Hour: Product Information + Reviews
    - 1 Day: Related Products + Community Content
    - 3 Days: Limited Time Discount

Post_Purchase_Series:
  Trigger: Order Completion
  Emails:
    - Immediate: Order Confirmation + What's Next
    - 3 Days: Gameplay Tips + Community Links
    - 1 Week: Leave a Review Request
    - 2 Weeks: Related Products Suggestions
    - 1 Month: Loyalty Program Invitation
```

This implementation guide provides the technical foundation for rapid content deployment while maintaining scalability and user experience optimization. The modular approach allows for incremental rollout and continuous improvement based on analytics feedback.