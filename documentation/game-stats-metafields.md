# Game Stats Metafields Configuration

## Current Implementation

The game stats are currently referenced in the code as:
- `product.playerCount`
- `product.playTime`
- `product.gameType`

## Required Metafield Names

Based on the code implementation, the metafields should be named exactly as:

### 1. Player Count
- **Property Name**: `playerCount`
- **Cloudinary Icon ID**: `players-gamestats_mht0pl`
- **Example Values**: "1-2 Players", "3-4 Players", "5-6 Players", "7+ Players"

### 2. Play Time
- **Property Name**: `playTime`
- **Cloudinary Icon ID**: `playtime-gamestats_etlrge`
- **Example Values**: "Quick (< 30min)", "Medium (30-90min)", "Epic (90min+)", "Campaign (Multiple Sessions)"

### 3. Game Type
- **Property Name**: `gameType`
- **Cloudinary Icon ID**: `gametype-gamestats_vvhfck`
- **Example Values**: "Strategy", "RPG", "Card Game", "Board Game", "Miniatures", "Cooperative", "Competitive"

## Shopify Metafield Setup

To add these metafields in Shopify:

1. Go to Settings → Metafields → Products
2. Create three metafields with these exact configurations:

### playerCount
- **Name**: Player Count
- **Namespace and key**: `custom.player_count`
- **Type**: Single line text
- **Validation**: None (or create list of predefined values)

### playTime
- **Name**: Play Time
- **Namespace and key**: `custom.play_time`
- **Type**: Single line text
- **Validation**: None (or create list of predefined values)

### gameType
- **Name**: Game Type
- **Namespace and key**: `custom.game_type`
- **Type**: Single line text
- **Validation**: None (or create list of predefined values)

## Update Required in shopify.ts

Add these fields to the PetersenProduct interface:

```typescript
export interface PetersenProduct {
  // ... existing fields ...
  
  // Game Stats metafields
  playerCount?: string;
  playTime?: string;
  gameType?: string;
}
```

And update the GraphQL query to fetch metafields:

```graphql
metafields(identifiers: [
  {namespace: "custom", key: "player_count"},
  {namespace: "custom", key: "play_time"},
  {namespace: "custom", key: "game_type"}
]) {
  namespace
  key
  value
}
```

## Icon Assets (Cloudinary)

Icons are hosted on Cloudinary and accessed via:
- `players-gamestats_mht0pl` - Player count icon
- `playtime-gamestats_etlrge` - Play time icon
- `gametype-gamestats_vvhfck` - Game type icon

Usage in code:
```typescript
getCloudinaryUrl('players-gamestats_mht0pl', { width: 16, height: 16 })
```

## Mapping in Product Transform

When transforming Shopify data, map the metafields:

```typescript
function transformProduct(shopifyProduct: any): PetersenProduct {
  const metafields = shopifyProduct.metafields || [];
  
  return {
    // ... other fields ...
    playerCount: metafields.find(m => m.key === 'player_count')?.value,
    playTime: metafields.find(m => m.key === 'play_time')?.value,
    gameType: metafields.find(m => m.key === 'game_type')?.value,
  };
}
```