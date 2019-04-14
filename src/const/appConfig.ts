import { config } from "./config";

interface galleryConfig {
  columns: number;
  imageStore: string;
  rows: number;
}

const Config = config();

export const GalleryConfig: galleryConfig = {
  columns: 4,
  imageStore: Config.imgSrc,
  rows: 3
}