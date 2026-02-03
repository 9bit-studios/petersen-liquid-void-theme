/**
 * Unified Type Definitions for Shopify Fresh Glass Theme
 * Priority Order: Apple Intelligence → Foundation → Glass → Shopify
 * 
 * This file consolidates all type definitions with proper priority chain
 */

// Apple Intelligence (PRIMARY AUTHORITY)
// Using the more comprehensive apple-intelligence.d.ts
export * from './apple-intelligence';

// Foundation CSS System (Critical for Variable Translation)
export * from './foundation';

// Glass Filter System (UI Effects)
export * from './glass-filter';

// Shopify Integration Types
export * from './shopify';

// Dawn Theme Settings (Optional)
// Uncomment if needed for theme configuration
// export * from './dawn-settings';

// Local type definitions for Oksana Foundation Model
export interface ServiceConfig {
  name: string;
  enabled: boolean;
  endpoint?: string;
}

export interface ServiceStatus {
  status: 'active' | 'inactive' | 'error';
  message?: string;
}

export interface ServiceValidationResult {
  valid: boolean;
  errors?: string[];
}

export interface SecureEnvironmentConfig {
  encryption: boolean;
  keyStorage: string;
}

export interface SecureEnvironmentVariable {
  key: string;
  encrypted: boolean;
}

export interface DesignToken {
  name: string;
  value: string | number;
  type: string;
}

export interface TokenCollection {
  name: string;
  tokens: DesignToken[];
}

export type TokenCategory = 'color' | 'spacing' | 'typography' | 'effect';

// Window interface extensions are defined in main type files

// Export unified configuration type
export interface UnifiedThemeConfiguration {
  // Apple Priority
  appleIntelligence: {
    enabled: boolean;
    priority: 'PRIMARY';
    m4Acceleration: boolean;
    neuralEngine: boolean;
    higCompliance: boolean;
  };
  
  // Foundation System
  foundation: {
    cssVariables: boolean;
    gridSystem: boolean;
    touchTargets: boolean;
  };
  
  // Glass Effects
  glassFilter: {
    enabled: boolean;
    blur: string;
    opacity: number;
  };
  
  // Shopify Configuration
  shopify: {
    theme: string;
    store: string;
    apiVersion: string;
  };
  
  // OksanaPlatform Integration
  oksanaPlatform: {
    services: boolean;
    tokens: boolean;
    security: boolean;
  };
}

export {};
