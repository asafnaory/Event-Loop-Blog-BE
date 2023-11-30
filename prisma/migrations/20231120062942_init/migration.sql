/*
  Warnings:

  - You are about to drop the column `categories` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Blog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "categories",
DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "comments" TEXT[],
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0;

-- DropEnum
DROP TYPE "Category";
