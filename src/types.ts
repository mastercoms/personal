import { AstroComponentFactory } from 'astro/dist/runtime/server';

export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: AstroComponentFactory;
  content?: string;

  readingTime?: number;

  is_project?: boolean;
}

export interface Project {
  id: string;
  slug: string;
  
  title: string;
  description?: string;
  
  image?: string;

  canonical?: string | URL;
  permalink?: string;

  Content: AstroComponentFactory;
  content?: string;

  is_project?: boolean;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}
