export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Product {
  photo: string;
  name: string;
  price: number;
}
