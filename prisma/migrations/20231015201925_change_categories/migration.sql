-- CreateEnum
CREATE TYPE "Category" AS ENUM ('JAVASCRIPT', 'TYPESCRIPT', 'NESTJS', 'REACTJS', 'NODEJS');

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categories" "Category"[] DEFAULT ARRAY[]::"Category"[],

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
