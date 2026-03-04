import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || 'https://deshihomedecor.com';

  // Get all active products
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      slug: true,
      updatedAt: true,
    },
  });

  const categories = await prisma.category.findMany({
    select: { id: true, updatedAt: true },
  });
  const collections = await prisma.collection.findMany({
    where: { isActive: true },
    select: { slug: true, updatedAt: true },
  });

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug || product.id}`,
    lastModified: product.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${baseUrl}/shop?category=${c.id}`,
    lastModified: c.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const collectionEntries: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${baseUrl}/shop?collection=${c.slug}`,
    lastModified: c.updatedAt,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/shop`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...productEntries,
    ...categoryEntries,
    ...collectionEntries,
  ];
}
