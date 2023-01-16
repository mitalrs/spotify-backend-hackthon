/*
  Warnings:

  - The `songs` column on the `Playlist` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "songs",
ADD COLUMN     "songs" TEXT[];
