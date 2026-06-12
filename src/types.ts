// TypeScript Type Definitions for FUTURA

export interface ContentGenRequest {
  prompt: string;
  platform: 'instagram' | 'tiktok' | 'twitter' | 'linkedin';
  tone: 'professional' | 'casual' | 'humorous' | 'inspirational';
  language: string;
}

export interface ContentGenResponse {
  id: string;
  content: string;
  platform: string;
  createdAt: Date;
  hashtags?: string[];
}

export interface BrandConfig {
  name: string;
  description: string;
  values: string[];
  targetAudience: string;
}

export interface PlanItem {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}
