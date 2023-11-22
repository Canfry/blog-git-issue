// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { format } from 'date-fns';

// 2. Define your collection(s)
const postsCollection = defineCollection({
  schema: ({ image }) => {
    z.object({
      title: z.string(),
      description: z.string(),
      date: z
        .string()
        .transform((str) => format(new Date(str), 'MMMM, d, yyyy')),
      excerpt: z.string(),
      image: image(),
      tags: z.array(z.string()),
    });
  },
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  posts: postsCollection,
};
