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
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

const sectionsSchema = z.record(z.string(), z.any());

export const collections = {
  sectionsEs: defineCollection({
    loader: glob({ base: 'src/content/sections/es', pattern: '**/*.json' }),
    schema: sectionsSchema,
  }),
  sectionsEn: defineCollection({
    loader: glob({ base: 'src/content/sections/en', pattern: '**/*.json' }),
    schema: sectionsSchema,
  }),
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
