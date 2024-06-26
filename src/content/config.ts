import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};