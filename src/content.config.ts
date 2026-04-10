import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		category: z.enum(['Originals', 'Prints']),
		price: z.number(),
		available: z.boolean().default(true),
		description: z.string(),
		stripeLink: z.string().optional(),
		image: z.string().optional(),
		dimensions: z.string().optional(),
		paper: z.string().optional(),
		edition: z.string().optional(),
	}),
});

export const collections = { blog, products };
