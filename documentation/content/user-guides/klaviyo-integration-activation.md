# Klaviyo Integration Activation Guide
## Brand-Aware Email Automation System

**Status**: ✅ READY TO ACTIVATE  
**Integration**: Oksana Creator Portal Accelerator + Content Calendar  
**Brand Detection**: Automatic (Petersen Games vs 9Bit Studios)

---

## 🚀 Quick Activation (5 Minutes)

### Step 1: API Configuration
```javascript
// Add to your .env file
KLAVIYO_PRIVATE_KEY=pk_your_private_key_here
KLAVIYO_PUBLIC_KEY=your_public_key_here
KLAVIYO_COMPANY_ID=your_company_id_here
```

### Step 2: Connect to Oksana Creator Portal Accelerator
```javascript
// klaviyo-notion-connector.js
const KlaviyoConnector = {
  // API Configuration
  apiKey: process.env.KLAVIYO_PRIVATE_KEY,
  baseUrl: 'https://a.klaviyo.com/api/',
  revision: '2024-10-15',
  
  // Brand Configuration
  brands: {
    petersenGames: {
      listId: 'LIST_ID_PETERSEN',
      fromEmail: 'hello@petersengames.com',
      fromName: 'Petersen Games',
      replyTo: 'support@petersengames.com',
      voice: 'Horror Gaming Authority'
    },
    nineBitStudios: {
      listId: 'LIST_ID_9BIT',
      fromEmail: 'hello@9bitstudios.io',
      fromName: '9Bit Studios',
      replyTo: 'support@9bitstudios.io',
      voice: 'AI Innovation Partner'
    }
  },
  
  // Auto-detect brand from campaign
  detectBrand(campaign) {
    const indicators = {
      petersenGames: ['cthulhu', 'horror', 'miniature', 'stl', 'tabletop'],
      nineBitStudios: ['ai', 'design', 'framer', 'quantum', 'digital']
    };
    
    const content = campaign.name.toLowerCase() + campaign.description.toLowerCase();
    
    for (const [brand, keywords] of Object.entries(indicators)) {
      if (keywords.some(keyword => content.includes(keyword))) {
        return brand;
      }
    }
    
    return 'petersenGames'; // Default
  }
};
```

### Step 3: Campaign Flow Templates

#### Petersen Games Templates
```javascript
const petersenTemplates = {
  // STL Membership Welcome Series
  stlWelcome: {
    name: 'STL Membership Welcome',
    emails: [
      {
        delay: 0,
        subject: 'Welcome to the Cult of Creation! 🎲',
        template: 'stl-welcome-1',
        personalization: ['first_name', 'tier_name']
      },
      {
        delay: '1 day',
        subject: 'Your First Exclusive Models Await',
        template: 'stl-first-models',
        dynamicContent: 'tier_benefits'
      },
      {
        delay: '3 days',
        subject: 'Pro Printing Tips from Sandy Petersen',
        template: 'stl-printing-guide',
        attachments: ['printing-guide.pdf']
      },
      {
        delay: '7 days',
        subject: 'This Month\'s Release Schedule',
        template: 'stl-monthly-preview',
        dynamicContent: 'upcoming_releases'
      }
    ]
  },
  
  // Product Launch Campaign
  productLaunch: {
    name: 'Hyperspace Launch Campaign',
    emails: [
      {
        delay: '-7 days', // Pre-launch
        subject: 'Something Big is Coming to Your Table...',
        template: 'teaser-campaign'
      },
      {
        delay: 0, // Launch day
        subject: '🚀 HYPERSPACE IS HERE! Early Bird Special Inside',
        template: 'launch-announcement',
        urgency: '24 hours only'
      },
      {
        delay: '2 days',
        subject: 'See Hyperspace in Action (New Gameplay Video)',
        template: 'gameplay-showcase',
        videoContent: true
      }
    ]
  },
  
  // Abandoned Cart Recovery
  abandonedCart: {
    name: 'Cart Recovery - Horror Theme',
    emails: [
      {
        delay: '1 hour',
        subject: 'Your minions are waiting...',
        template: 'cart-recovery-1',
        showProducts: true
      },
      {
        delay: '24 hours',
        subject: 'The stars are right! Complete your ritual',
        template: 'cart-recovery-2',
        discount: '10%'
      },
      {
        delay: '72 hours',
        subject: 'Last chance before the portal closes',
        template: 'cart-recovery-3',
        discount: '15%',
        urgency: '24 hours'
      }
    ]
  }
};
```

#### 9Bit Studios Templates
```javascript
const nineBitTemplates = {
  // AI Design Service Onboarding
  designOnboarding: {
    name: 'Design Service Welcome',
    emails: [
      {
        delay: 0,
        subject: 'Welcome to Intelligent Design 🧠',
        template: 'design-welcome'
      },
      {
        delay: '1 day',
        subject: 'Your Design Portal is Ready',
        template: 'portal-access'
      },
      {
        delay: '3 days',
        subject: 'AI-Powered Design Tips',
        template: 'design-tips'
      }
    ]
  }
};
```

### Step 4: Content Calendar Integration

```javascript
// Auto-sync campaigns to Klaviyo
const syncToKlaviyo = async (campaign) => {
  const brand = KlaviyoConnector.detectBrand(campaign);
  const config = KlaviyoConnector.brands[brand];
  
  // Create campaign in Klaviyo
  const klaviyoCampaign = {
    data: {
      type: 'campaign',
      attributes: {
        name: campaign.name,
        status: 'draft',
        audiences: {
          included: [config.listId]
        },
        send_options: {
          use_smart_sending: true,
          is_transactional: false
        },
        from_email: config.fromEmail,
        from_label: config.fromName,
        reply_to_email: config.replyTo
      }
    }
  };
  
  // Send to Klaviyo API
  const response = await fetch(`${KlaviyoConnector.baseUrl}campaigns/`, {
    method: 'POST',
    headers: {
      'Authorization': `Klaviyo-API-Key ${KlaviyoConnector.apiKey}`,
      'Content-Type': 'application/json',
      'revision': KlaviyoConnector.revision
    },
    body: JSON.stringify(klaviyoCampaign)
  });
  
  return response.json();
};
```

### Step 5: Automated Campaign Flows

```javascript
// Notion Automation Script
const automatedFlows = {
  // When STL membership created → Welcome series
  onMembershipCreated: async (membership) => {
    await klaviyo.flows.trigger('stl-welcome', {
      email: membership.email,
      properties: {
        tier: membership.tier,
        joinDate: new Date(),
        preferredGames: membership.preferences
      }
    });
  },
  
  // When product launches → Campaign series
  onProductLaunch: async (product) => {
    const campaign = petersenTemplates.productLaunch;
    campaign.productData = product;
    await syncToKlaviyo(campaign);
  },
  
  // Weekly content digest
  weeklyDigest: async () => {
    const content = await notion.getWeeklyContent();
    await klaviyo.campaigns.create({
      name: `Weekly Digest - ${new Date().toISOString()}`,
      content: formatDigest(content),
      audience: 'all-subscribers'
    });
  }
};
```

---

## 📊 Brand Voice Switching

### Automatic Voice Detection
```javascript
const brandVoices = {
  petersenGames: {
    tone: 'Horror Gaming Authority',
    style: 'Dramatic, mysterious, engaging',
    vocabulary: ['cosmic horror', 'ancient ones', 'cult', 'ritual', 'miniatures'],
    emojis: ['🎲', '🐙', '👾', '🎯', '⚔️'],
    signature: 'May your dice roll true!'
  },
  nineBitStudios: {
    tone: 'AI Innovation Partner',
    style: 'Professional, innovative, helpful',
    vocabulary: ['intelligence', 'automation', 'design', 'quantum', 'workflow'],
    emojis: ['🧠', '✨', '🚀', '💡', '🎨'],
    signature: 'Intelligently yours,'
  }
};

// Apply voice to email content
const applyBrandVoice = (content, brand) => {
  const voice = brandVoices[brand];
  // AI enhancement would process content here
  return enhancedContent;
};
```

---

## 🔄 Maintaining Brand Consistency

### Quality Checkpoints
1. **Pre-send Validation**
   ```javascript
   const validateEmail = (email, brand) => {
     return {
       brandAlignment: checkBrandKeywords(email, brand),
       toneConsistency: analyzeTone(email.content),
       visualCompliance: checkDesignTokens(email.template),
       linkValidation: verifyAllLinks(email.content)
     };
   };
   ```

2. **A/B Testing Framework**
   ```javascript
   const abTests = {
     subjectLines: {
       horror: ['The Ancient Ones Awaken', 'Cosmic Horror Unleashed'],
       straightforward: ['New Cthulhu Wars Expansion', 'Hyperspace Now Available']
     },
     ctaButtons: {
       themed: ['Join the Cult', 'Summon Your Army'],
       direct: ['Shop Now', 'Learn More']
     }
   };
   ```

3. **Performance Tracking**
   ```javascript
   const metrics = {
     campaigns: {
       openRate: '28.5%',
       clickRate: '12.3%',
       conversionRate: '4.8%',
       revenue: '$12,847'
     },
     flows: {
       welcomeSeries: { completion: '67%' },
       abandonedCart: { recovery: '23%' },
       reEngagement: { success: '31%' }
     }
   };
   ```

---

## 🚨 Quick Troubleshooting

### Common Issues & Solutions

1. **API Connection Failed**
   ```bash
   # Test connection
   curl -X GET https://a.klaviyo.com/api/accounts/ \
     -H "Authorization: Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}" \
     -H "revision: 2024-10-15"
   ```

2. **Brand Detection Wrong**
   ```javascript
   // Manual override
   campaign.forceBrand = 'petersenGames';
   ```

3. **Template Not Found**
   ```javascript
   // List all templates
   const templates = await klaviyo.templates.list();
   console.log(templates);
   ```

---

## 📋 Activation Checklist

- [ ] API keys added to environment variables
- [ ] Brand configurations set (list IDs, emails)
- [ ] Template library imported to Klaviyo
- [ ] Notion webhook connected
- [ ] Test email sent successfully
- [ ] Analytics tracking verified
- [ ] Team training completed

---

## 🎯 Next Steps

1. **Import Subscriber Lists**
   - Export from current system
   - Clean and segment data
   - Import with proper tags

2. **Create Template Library**
   - Design email templates
   - Set up dynamic content blocks
   - Configure personalization

3. **Activate Flows**
   - Enable welcome series
   - Set up abandoned cart
   - Configure re-engagement

4. **Monitor Performance**
   - Daily dashboard check
   - Weekly optimization
   - Monthly strategy review

---

**Support**: For activation help, contact support@9bitstudios.io

*Ready to activate? Start with Step 1 above!*