-- CreateIndex
CREATE INDEX "categories_isActive_order_idx" ON "categories"("isActive", "order");

-- CreateIndex
CREATE INDEX "collections_isActive_order_idx" ON "collections"("isActive", "order");

-- CreateIndex
CREATE INDEX "orders_createdAt_idx" ON "orders"("createdAt");

-- CreateIndex
CREATE INDEX "product_collections_collectionId_idx" ON "product_collections"("collectionId");

-- CreateIndex
CREATE INDEX "product_variants_productId_isActive_idx" ON "product_variants"("productId", "isActive");

-- CreateIndex
CREATE INDEX "products_isActive_createdAt_idx" ON "products"("isActive", "createdAt");

-- CreateIndex
CREATE INDEX "products_isActive_price_idx" ON "products"("isActive", "price");

-- CreateIndex
CREATE INDEX "products_isActive_order_idx" ON "products"("isActive", "order");

-- CreateIndex
CREATE INDEX "reviews_isShowcase_isApproved_idx" ON "reviews"("isShowcase", "isApproved");

-- CreateIndex
CREATE INDEX "slider_contents_isActive_order_idx" ON "slider_contents"("isActive", "order");
