import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { Plus } from 'lucide-react';
import {
  SortableProductList,
  type Product,
} from '@/components/admin/sortable-product-list';

export const revalidate = 0;

export default async function AdminProductsPage() {
  const productsRaw = await prisma.product.findMany({
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }],
    include: {
      category: true,
    },
  });

  // Convert Decimal to number for serialization to Client Component
  const products = productsRaw.map((p) => ({
    ...p,
    price: p.price ? Number(p.price) : null,
    comparePrice: p.comparePrice ? Number(p.comparePrice) : null,
    weight: p.weight ? Number(p.weight) : null,
  }));

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Products
          </h1>
          <p className="mt-1 text-sm text-muted-foreground sm:mt-2 sm:text-base">
            Manage your product catalog
          </p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-foreground/90"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </Link>
      </div>

      <SortableProductList initialProducts={products as unknown as Product[]} />
    </div>
  );
}
