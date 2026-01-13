import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string(),
    imageCredit: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
