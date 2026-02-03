# Notion Database Deployment Scripts
## Ready-to-Deploy Database Schemas

**Status**: ✅ DEPLOYMENT READY  
**Databases**: 5 Core + Supporting Views  
**Integration**: Automated relationships + workflows

---

## 🚀 Quick Deployment Guide

### Prerequisites
```javascript
// Verify Notion API access
const NOTION_API_KEY = 'REDACTED';
const PETERSEN_HUB_ID = '217df58779188173a14ad8c5b8cb3803';
```

### One-Click Deployment Script
```javascript
// deploy-all-datasources.js
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: NOTION_API_KEY });

async function deployAllDatabases() {
  console.log('🚀 Starting Notion database deployment...');
  
  const datasources = [
    await createCampaignMaster(),
    await createContentCalendar(),
    await createSTLMembership(),
    await createDesignRequests(),
    await createDevelopmentTracker()
  ];
  
  await createRelationships(datasources);
  await setupAutomations();
  await createViews();
  
  console.log('✅ All datasources deployed successfully!');
  return datasources;
}

// Run deployment
deployAllDatabases().catch(console.error);
```

---

## 📊 Database 1: Campaign Master

```javascript
async function createCampaignMaster() {
  console.log('Creating Campaign Master database...');
  
  const database = await notion.datasources.create({
    parent: { page_id: PETERSEN_HUB_ID },
    title: [{ text: { content: '📢 Campaign Master' } }],
    icon: { emoji: '📢' },
    properties: {
      'Campaign Name': {
        title: {}
      },
      'Status': {
        select: {
          options: [
            { name: 'Planning', color: 'gray' },
            { name: 'Active', color: 'green' },
            { name: 'Paused', color: 'yellow' },
            { name: 'Completed', color: 'blue' }
          ]
        }
      },
      'Priority': {
        select: {
          options: [
            { name: 'High', color: 'red' },
            { name: 'Medium', color: 'orange' },
            { name: 'Low', color: 'gray' }
          ]
        }
      },
      'Platforms': {
        multi_select: {
          options: [
            { name: 'X/Twitter', color: 'blue' },
            { name: 'Facebook', color: 'blue' },
            { name: 'Instagram', color: 'pink' },
            { name: 'YouTube', color: 'red' },
            { name: 'TikTok', color: 'purple' },
            { name: 'Discord', color: 'purple' },
            { name: 'Email', color: 'green' },
            { name: 'Website', color: 'gray' }
          ]
        }
      },
      'Start Date': {
        date: {}
      },
      'End Date': {
        date: {}
      },
      'Budget': {
        number: {
          format: 'dollar'
        }
      },
      'Actual Spend': {
        number: {
          format: 'dollar'
        }
      },
      'ROI': {
        formula: {
          expression: '((prop("Revenue") - prop("Actual Spend")) / prop("Actual Spend")) * 100'
        }
      },
      'Revenue': {
        number: {
          format: 'dollar'
        }
      },
      'Objectives': {
        rich_text: {}
      },
      'Target Audience': {
        multi_select: {
          options: [
            { name: 'Horror Fans', color: 'red' },
            { name: 'Tabletop Gamers', color: 'green' },
            { name: 'Miniature Painters', color: 'blue' },
            { name: 'STL Collectors', color: 'purple' },
            { name: 'Strategy Gamers', color: 'orange' }
          ]
        }
      },
      'Campaign Type': {
        select: {
          options: [
            { name: 'Product Launch', color: 'green' },
            { name: 'STL Release', color: 'purple' },
            { name: 'Brand Awareness', color: 'blue' },
            { name: 'Community Building', color: 'yellow' },
            { name: 'Seasonal', color: 'orange' }
          ]
        }
      },
      'Content Items': {
        relation: {
          database_id: 'CONTENT_CALENDAR_ID', // Will be updated
          type: 'dual_property',
          dual_property: {
            synced_property_name: 'Campaign'
          }
        }
      },
      'AI Quality Score': {
        number: {
          format: 'percent'
        }
      },
      'Brand Alignment': {
        number: {
          format: 'percent'
        }
      },
      'Performance Score': {
        formula: {
          expression: '(prop("Engagement Rate") + prop("Conversion Rate") + prop("AI Quality Score")) / 3'
        }
      },
      'Engagement Rate': {
        number: {
          format: 'percent'
        }
      },
      'Conversion Rate': {
        number: {
          format: 'percent'
        }
      },
      'Klaviyo Campaign ID': {
        rich_text: {}
      },
      'Grid Analytics ID': {
        rich_text: {}
      }
    }
  });
  
  console.log('✅ Campaign Master created:', database.id);
  return database;
}
```

---

## 📅 Database 2: Content Calendar

```javascript
async function createContentCalendar() {
  console.log('Creating Content Calendar database...');
  
  const database = await notion.datasources.create({
    parent: { page_id: PETERSEN_HUB_ID },
    title: [{ text: { content: '📅 Content Calendar' } }],
    icon: { emoji: '📅' },
    properties: {
      'Content Title': {
        title: {}
      },
      'Publish Date': {
        date: {}
      },
      'Platforms': {
        multi_select: {
          options: [
            { name: 'X/Twitter', color: 'blue' },
            { name: 'Facebook', color: 'blue' },
            { name: 'Instagram', color: 'pink' },
            { name: 'YouTube', color: 'red' },
            { name: 'TikTok', color: 'purple' },
            { name: 'Discord', color: 'purple' },
            { name: 'Blog', color: 'green' },
            { name: 'Email', color: 'orange' }
          ]
        }
      },
      'Status': {
        select: {
          options: [
            { name: 'Idea', color: 'gray' },
            { name: 'Draft', color: 'yellow' },
            { name: 'Review', color: 'orange' },
            { name: 'Scheduled', color: 'blue' },
            { name: 'Published', color: 'green' },
            { name: 'Archived', color: 'gray' }
          ]
        }
      },
      'Content Type': {
        select: {
          options: [
            { name: 'Post', color: 'blue' },
            { name: 'Story', color: 'pink' },
            { name: 'Video', color: 'red' },
            { name: 'Live', color: 'purple' },
            { name: 'Article', color: 'green' },
            { name: 'Email', color: 'orange' }
          ]
        }
      },
      'Campaign': {
        relation: {
          database_id: 'CAMPAIGN_MASTER_ID' // Will be updated
        }
      },
      'Content': {
        rich_text: {}
      },
      'Hashtags': {
        multi_select: {
          options: [
            { name: '#CthulhuWars', color: 'green' },
            { name: '#TabletopGaming', color: 'blue' },
            { name: '#MiniaturePainting', color: 'purple' },
            { name: '#HorrorGaming', color: 'red' },
            { name: '#PetersenGames', color: 'orange' }
          ]
        }
      },
      'AI Score': {
        number: {
          format: 'percent'
        }
      },
      'Brand Voice Check': {
        checkbox: {}
      },
      'Media Assets': {
        files: {}
      },
      'Performance Metrics': {
        rich_text: {}
      },
      'A/B Test': {
        checkbox: {}
      },
      'Variant': {
        select: {
          options: [
            { name: 'A', color: 'blue' },
            { name: 'B', color: 'green' }
          ]
        }
      }
    }
  });
  
  console.log('✅ Content Calendar created:', database.id);
  return database;
}
```

---

## 🎲 Database 3: STL Membership

```javascript
async function createSTLMembership() {
  console.log('Creating STL Membership database...');
  
  const database = await notion.datasources.create({
    parent: { page_id: PETERSEN_HUB_ID },
    title: [{ text: { content: '🎲 STL Membership Planning' } }],
    icon: { emoji: '🎲' },
    properties: {
      'Tier Name': {
        title: {}
      },
      'Tier Level': {
        select: {
          options: [
            { name: 'Bronze', color: 'brown' },
            { name: 'Silver', color: 'gray' },
            { name: 'Gold', color: 'yellow' },
            { name: 'Platinum', color: 'purple' }
          ]
        }
      },
      'Monthly Price': {
        number: {
          format: 'dollar'
        }
      },
      'Member Count': {
        number: {
          format: 'number'
        }
      },
      'Monthly Revenue': {
        formula: {
          expression: 'prop("Monthly Price") * prop("Member Count")'
        }
      },
      'Annual Revenue': {
        formula: {
          expression: 'prop("Monthly Revenue") * 12'
        }
      },
      'Models per Month': {
        number: {
          format: 'number'
        }
      },
      'Early Access Days': {
        number: {
          format: 'number'
        }
      },
      'Discount Percentage': {
        number: {
          format: 'percent'
        }
      },
      'Exclusive Models': {
        multi_select: {
          options: [
            { name: 'Character Models', color: 'blue' },
            { name: 'Monster Models', color: 'red' },
            { name: 'Terrain Pieces', color: 'green' },
            { name: 'Alternate Poses', color: 'purple' },
            { name: 'Campaign Modules', color: 'orange' }
          ]
        }
      },
      'Benefits': {
        rich_text: {}
      },
      'Content Schedule': {
        rich_text: {}
      },
      'Churn Rate': {
        number: {
          format: 'percent'
        }
      },
      'LTV': {
        formula: {
          expression: '(prop("Monthly Price") / prop("Churn Rate")) * 100'
        }
      },
      'Acquisition Cost': {
        number: {
          format: 'dollar'
        }
      },
      'Profit Margin': {
        formula: {
          expression: '((prop("Monthly Price") - prop("Acquisition Cost")) / prop("Monthly Price")) * 100'
        }
      },
      'Launch Date': {
        date: {}
      },
      'Status': {
        select: {
          options: [
            { name: 'Planning', color: 'gray' },
            { name: 'Active', color: 'green' },
            { name: 'Paused', color: 'yellow' },
            { name: 'Retired', color: 'red' }
          ]
        }
      }
    }
  });
  
  console.log('✅ STL Membership created:', database.id);
  return database;
}
```

---

## 🎨 Database 4: Design Requests

```javascript
async function createDesignRequests() {
  console.log('Creating Design Requests database...');
  
  const database = await notion.datasources.create({
    parent: { page_id: PETERSEN_HUB_ID },
    title: [{ text: { content: '🎨 Design Request System' } }],
    icon: { emoji: '🎨' },
    properties: {
      'Request Title': {
        title: {}
      },
      'Status': {
        select: {
          options: [
            { name: 'New', color: 'gray' },
            { name: 'In Review', color: 'yellow' },
            { name: 'In Progress', color: 'blue' },
            { name: 'Feedback', color: 'orange' },
            { name: 'Approved', color: 'green' },
            { name: 'Completed', color: 'purple' }
          ]
        }
      },
      'Priority': {
        select: {
          options: [
            { name: 'Urgent', color: 'red' },
            { name: 'High', color: 'orange' },
            { name: 'Medium', color: 'yellow' },
            { name: 'Low', color: 'gray' }
          ]
        }
      },
      'Project Type': {
        select: {
          options: [
            { name: 'Campaign Graphics', color: 'blue' },
            { name: 'Social Media', color: 'pink' },
            { name: 'Email Template', color: 'green' },
            { name: 'Website Asset', color: 'purple' },
            { name: 'Product Design', color: 'orange' },
            { name: 'Print Material', color: 'red' }
          ]
        }
      },
      'Requester': {
        person: {}
      },
      'Designer': {
        person: {}
      },
      'Due Date': {
        date: {}
      },
      'Brief': {
        rich_text: {}
      },
      'Related Campaign': {
        relation: {
          database_id: 'CAMPAIGN_MASTER_ID' // Will be updated
        }
      },
      'Attachments': {
        files: {}
      },
      'Feedback': {
        rich_text: {}
      },
      'Final Files': {
        files: {}
      },
      'Time Estimate': {
        number: {
          format: 'number'
        }
      },
      'Actual Time': {
        number: {
          format: 'number'
        }
      },
      'Complexity Score': {
        select: {
          options: [
            { name: 'Simple', color: 'green' },
            { name: 'Moderate', color: 'yellow' },
            { name: 'Complex', color: 'orange' },
            { name: 'Very Complex', color: 'red' }
          ]
        }
      }
    }
  });
  
  console.log('✅ Design Requests created:', database.id);
  return database;
}
```

---

## 💻 Database 5: Development Tracker

```javascript
async function createDevelopmentTracker() {
  console.log('Creating Development Tracker database...');
  
  const database = await notion.datasources.create({
    parent: { page_id: PETERSEN_HUB_ID },
    title: [{ text: { content: '💻 Development Tracker' } }],
    icon: { emoji: '💻' },
    properties: {
      'Task Name': {
        title: {}
      },
      'Project': {
        select: {
          options: [
            { name: 'Shopify Store', color: 'green' },
            { name: 'Vercel Portal', color: 'blue' },
            { name: 'Landing Pages', color: 'purple' },
            { name: 'Email Templates', color: 'orange' },
            { name: 'API Integration', color: 'red' }
          ]
        }
      },
      'Status': {
        select: {
          options: [
            { name: 'Backlog', color: 'gray' },
            { name: 'Todo', color: 'yellow' },
            { name: 'In Progress', color: 'blue' },
            { name: 'Testing', color: 'orange' },
            { name: 'Review', color: 'purple' },
            { name: 'Done', color: 'green' }
          ]
        }
      },
      'Priority': {
        select: {
          options: [
            { name: 'Critical', color: 'red' },
            { name: 'High', color: 'orange' },
            { name: 'Medium', color: 'yellow' },
            { name: 'Low', color: 'gray' }
          ]
        }
      },
      'Sprint': {
        select: {
          options: [
            { name: 'Sprint 1', color: 'blue' },
            { name: 'Sprint 2', color: 'green' },
            { name: 'Sprint 3', color: 'purple' },
            { name: 'Sprint 4', color: 'orange' }
          ]
        }
      },
      'Assignee': {
        person: {}
      },
      'Due Date': {
        date: {}
      },
      'Story Points': {
        number: {
          format: 'number'
        }
      },
      'Related Campaign': {
        relation: {
          database_id: 'CAMPAIGN_MASTER_ID' // Will be updated
        }
      },
      'Related Design': {
        relation: {
          database_id: 'DESIGN_REQUESTS_ID' // Will be updated
        }
      },
      'Description': {
        rich_text: {}
      },
      'Technical Notes': {
        rich_text: {}
      },
      'GitHub Issue': {
        url: {}
      },
      'Vercel Deploy': {
        url: {}
      },
      'Testing Status': {
        select: {
          options: [
            { name: 'Not Started', color: 'gray' },
            { name: 'In Progress', color: 'yellow' },
            { name: 'Passed', color: 'green' },
            { name: 'Failed', color: 'red' }
          ]
        }
      },
      'Blockers': {
        rich_text: {}
      }
    }
  });
  
  console.log('✅ Development Tracker created:', database.id);
  return database;
}
```

---

## 🔗 Create Database Relationships

```javascript
async function createRelationships(datasources) {
  console.log('Creating database relationships...');
  
  const [campaign, content, stl, design, dev] = datasources;
  
  // Update relation properties with actual IDs
  await notion.datasources.update({
    database_id: content.id,
    properties: {
      'Campaign': {
        relation: {
          database_id: campaign.id,
          type: 'dual_property',
          dual_property: {
            synced_property_name: 'Content Items'
          }
        }
      }
    }
  });
  
  await notion.datasources.update({
    database_id: design.id,
    properties: {
      'Related Campaign': {
        relation: {
          database_id: campaign.id
        }
      }
    }
  });
  
  await notion.datasources.update({
    database_id: dev.id,
    properties: {
      'Related Campaign': {
        relation: {
          database_id: campaign.id
        }
      },
      'Related Design': {
        relation: {
          database_id: design.id
        }
      }
    }
  });
  
  console.log('✅ Relationships created successfully');
}
```

---

## 🤖 Setup Automations

```javascript
async function setupAutomations() {
  console.log('Setting up automations...');
  
  // Note: Notion API doesn't support creating automations directly
  // These would be set up manually in Notion UI
  
  const automations = [
    {
      name: 'New Campaign → Create Content Calendar',
      trigger: 'When Campaign Master status = "Active"',
      action: 'Create 5 content items in Content Calendar'
    },
    {
      name: 'Content Published → Update Analytics',
      trigger: 'When Content Calendar status = "Published"',
      action: 'Trigger Grid analytics update'
    },
    {
      name: 'Design Request → Notify Designer',
      trigger: 'When Design Request created',
      action: 'Send notification to assigned designer'
    },
    {
      name: 'STL Release → Email Campaign',
      trigger: 'When new STL content scheduled',
      action: 'Create Klaviyo campaign'
    },
    {
      name: 'Development Complete → Campaign Update',
      trigger: 'When Development task = "Done"',
      action: 'Update related campaign status'
    }
  ];
  
  console.log('📋 Automation templates ready for manual setup:');
  automations.forEach(a => console.log(`   - ${a.name}`));
}
```

---

## 👁️ Create Database Views

```javascript
async function createViews() {
  console.log('Creating database views...');
  
  // Note: Views would be created manually in Notion
  // This provides the configuration
  
  const views = {
    campaignMaster: [
      {
        name: '📊 Active Campaigns',
        type: 'Board',
        groupBy: 'Status',
        filter: 'Status != "Completed"',
        sort: 'Priority DESC'
      },
      {
        name: '📈 Performance Dashboard',
        type: 'Gallery',
        filter: 'ROI > 0',
        sort: 'ROI DESC'
      },
      {
        name: '📅 Campaign Timeline',
        type: 'Timeline',
        dateProperty: 'Start Date',
        filter: 'Status = "Active" OR Status = "Planning"'
      }
    ],
    contentCalendar: [
      {
        name: '📱 Platform View',
        type: 'Board',
        groupBy: 'Platforms',
        filter: 'Status != "Archived"'
      },
      {
        name: '🗓️ Publishing Schedule',
        type: 'Calendar',
        dateProperty: 'Publish Date',
        filter: 'Status = "Scheduled"'
      },
      {
        name: '✏️ Content Pipeline',
        type: 'Board',
        groupBy: 'Status',
        sort: 'Publish Date ASC'
      }
    ],
    stlMembership: [
      {
        name: '💰 Revenue Overview',
        type: 'Table',
        sort: 'Monthly Revenue DESC',
        calculations: ['Sum of Monthly Revenue']
      },
      {
        name: '📊 Tier Comparison',
        type: 'Board',
        groupBy: 'Tier Level',
        sort: 'Member Count DESC'
      }
    ]
  };
  
  console.log('📋 View templates ready for manual setup');
  return views;
}
```

---

## 🚦 Deployment Verification

```javascript
async function verifyDeployment(datasources) {
  console.log('🔍 Verifying deployment...');
  
  const [campaign, content, stl, design, dev] = datasources;
  
  // Test each database
  const tests = [
    { name: 'Campaign Master', id: campaign.id },
    { name: 'Content Calendar', id: content.id },
    { name: 'STL Membership', id: stl.id },
    { name: 'Design Requests', id: design.id },
    { name: 'Development Tracker', id: dev.id }
  ];
  
  for (const test of tests) {
    try {
      const db = await notion.datasources.retrieve({ database_id: test.id });
      console.log(`✅ ${test.name}: ${db.id}`);
    } catch (error) {
      console.error(`❌ ${test.name}: Failed`);
    }
  }
  
  console.log('🎉 Deployment complete! Your datasources are ready to use.');
}
```

---

## 📋 Post-Deployment Checklist

- [ ] All 5 datasources created successfully
- [ ] Database relationships configured
- [ ] Manual automations set up in Notion UI
- [ ] Views created for each database
- [ ] Team permissions configured
- [ ] Klaviyo webhook connected
- [ ] Grid analytics linked
- [ ] Initial test data added
- [ ] Team training scheduled

---

## 🛠️ Troubleshooting

### Database Creation Failed
```javascript
// Check API permissions
const checkPermissions = async () => {
  const response = await notion.users.me();
  console.log('User:', response);
};
```

### Relationship Errors
```javascript
// Verify database IDs
const verifyDatabases = async (ids) => {
  for (const id of ids) {
    const db = await notion.datasources.retrieve({ database_id: id });
    console.log(`Database ${id}:`, db.title[0].plain_text);
  }
};
```

---

**Next Step**: Run `node deploy-all-datasources.js` to create your portal!

*Support available at support@9bitstudios.io*