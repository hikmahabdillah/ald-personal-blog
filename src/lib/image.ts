type ImageType = {
  cover: string;
  content?: ImageMetadata;
};

import image1 from "../assets/images-content/post-1.jpg";
import image2 from "../assets/images-content/post-2.jpg";
import image3 from "../assets/images-content/post-3.jpg";
import image4 from "../assets/images-content/post-4.jpg";
import image5 from "../assets/images-content/post-5.jpg";

export const postImages: Record<string, ImageType> = {
  "post-1": {
    cover: "/images/posts/post-1.jpg",
    content: image1,
  },
  "post-2": {
    cover: "/images/posts/post-2.jpg",
    content: image2,
  },
  "post-3": {
    cover: "/images/posts/post-3.jpg",
    content: image3,
  },
  "post-4": {
    cover: "/images/posts/post-4.jpg",
    content: image4,
  },
  "post-5": {
    cover: "/images/posts/post-5.jpg",
    content: image5,
  },
};
