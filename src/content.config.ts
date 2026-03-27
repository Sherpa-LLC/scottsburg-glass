import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faqItem = z.object({
  question: z.string(),
  answer: z.string(),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    shortDescription: z.string(),
    order: z.number(),
    faqs: z.array(faqItem),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
  }).passthrough(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string().default('Team'),
    metaDescription: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { services, pages, blog };
