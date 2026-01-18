type ImageType = {
  cover: string;
  content?: ImageMetadata;
};

import image1 from "../assets/images-content/my-journey.jpg";
import image2 from "../assets/images-content/belajar-astro.jpg";
import image3 from "../assets/images-content/javascript-modern-features.jpg";
import image4 from "../assets/images-content/developer-tools-favorite.jpg";
import image5 from "../assets/images-content/web-performance-optimization.jpg";
import image6 from "../assets/images-content/typescript-pro-tips.jpg";
import image7 from "../assets/images-content/modern-css-grid-layout.jpg";
import image8 from "../assets/images-content/api-design-best-practices.jpg";

export const postImages: Record<string, ImageType> = {
  "my-journey": {
    cover: "/images/posts/my-journey.jpg",
    content: image1,
  },
  "belajar-astro": {
    cover: "/images/posts/belajar-astro.jpg",
    content: image2,
  },
  "javascript-modern-features": {
    cover: "/images/posts/javascript-modern-features.jpg",
    content: image3,
  },
  "developer-tools-favorite": {
    cover: "/images/posts/developer-tools-favorite.jpg",
    content: image4,
  },
  "web-performance-optimization": {
    cover: "/images/posts/web-performance-optimization.jpg",
    content: image5,
  },
  "typescript-pro-tips": {
    cover: "/images/posts/typescript-pro-tips.jpg",
    content: image6,
  },
  "modern-css-grid-layout": {
    cover: "/images/posts/modern-css-grid-layout.jpg",
    content: image7,
  },
  "api-design-best-practices": {
    cover: "/images/posts/api-design-best-practices.jpg",
    content: image8,
  },
};
