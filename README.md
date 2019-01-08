# melgetsjon
Repo for my personal site [melgetsjon.com](http://www.melgetsjon.com)

## Description
A gallery website to showcase photos from our big day. Utilizing React, Typescript, Webpack, and Node.js.

## Image Inventory
Within the Images folder will be `Inventory.ts`, this file contains an object with the file names and associated data to display along with
the images. The `const Inventory` hold the data and is exported along with the following interfaces: 

```typescript
interface imageData {
  desc?: string;
  fileName: string;
  hasThumbnail?: boolean;
  isPortrait?: boolean;
  title?: string;
}

interface galleryData {
  [key: string]: imageData[];
}
```

## ToDo

## Authors

* **Jonathan Owen** - *Initial work* - [jono3028](https://github.com/jono3028)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
