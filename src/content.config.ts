import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'
import { glob } from 'astro/loaders';

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  pathToTranslate: z.string(),
});

const navSchema = z.object({
  items: z.array(z.object({
    key: z.string(),
    label: z.string(),
    href: z.string(),
  })),
});

export const collections = {
  pagesEs: defineCollection({
    loader: glob({ base: 'src/content/pages/es', pattern: '**/*.(md|mdx)' }),
    schema: pageSchema,
  }),
  pagesEn: defineCollection({
    loader: glob({ base: 'src/content/pages/en', pattern: '**/*.(md|mdx)' }),
    schema: pageSchema,
  }),
  navEs: defineCollection({
    loader: glob({ base: 'src/content/navigation/es', pattern: '**/*.json' }),
    schema: navSchema,
  }),
  navEn: defineCollection({
    loader: glob({ base: 'src/content/navigation/en', pattern: '**/*.json' }),
    schema: navSchema,
  }),
};
