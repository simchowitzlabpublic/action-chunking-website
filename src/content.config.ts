import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';


// Paper collection
const paper = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = {
  paper,
};
