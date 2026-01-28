import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const MAIN_GENRES = ["Blog", "Review", "Programming", "Study"] as const;
const LANGUAGES = [
  "JavaScript",
  "TypeScript",
  "Golang",
  "Rust",
  "Kotlin",
  "Scala",
  "C#",
] as const;
const TOOLS = ["Blender", "Unity", "Docker", "Marvelous Designer"] as const;

export const ALLOWED_TAGS = [...MAIN_GENRES, ...LANGUAGES, ...TOOLS] as const;

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.enum(ALLOWED_TAGS)).optional(),
    }),
});

export const collections = { blog };
