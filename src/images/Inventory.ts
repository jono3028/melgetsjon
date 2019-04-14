export interface imageData {
  desc?: string;
  fileName: string;
  hasThumbnail?: boolean;
  isPortrait?: boolean;
  title?: string;
}

export interface galleryData {
  [key: string]: imageData[];
}

export const Inventory: galleryData = {
  booth: [
    { fileName: "IMG_0011", hasThumbnail: false },
    { fileName: "IMG_0019", hasThumbnail: false },
    { fileName: "IMG_0023", hasThumbnail: false },
    { fileName: "IMG_0027", hasThumbnail: false },
    { fileName: "IMG_0029", hasThumbnail: false },
    { fileName: "IMG_0035", hasThumbnail: false },
    { fileName: "IMG_0040", hasThumbnail: false },
    { fileName: "IMG_0042", hasThumbnail: false },
    { fileName: "IMG_0043", hasThumbnail: false },
    { fileName: "IMG_0053", hasThumbnail: false },
    { fileName: "IMG_0055", hasThumbnail: false },
    { fileName: "IMG_0061", hasThumbnail: false },
    { fileName: "IMG_0073", hasThumbnail: false },
    { fileName: "IMG_0079", hasThumbnail: false },
    { fileName: "IMG_0087", hasThumbnail: false },
    { fileName: "IMG_0088", hasThumbnail: false },
    { fileName: "IMG_0095", hasThumbnail: false },
    { fileName: "IMG_0100", hasThumbnail: false },
    { fileName: "IMG_0114", hasThumbnail: false }
  ]
};
