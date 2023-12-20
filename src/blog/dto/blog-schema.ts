import { z } from 'zod';

export const blogSchema = z.object({
  likes: z.number().positive().int().optional(),
  comments: z
    .object({
      comment: z.string(),
      commenterName: z.string(),
    })
    .optional(),
});

export const createOrUpdateBlogSchema = blogSchema;
export type CreateOrUpdateBlogSchema = z.infer<typeof blogSchema>;
