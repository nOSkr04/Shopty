import { IProduct } from "../interface/product";

export class Product implements IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  size: string[];
  color: string[];
  available: boolean;
  availableCount: number;
  blurHash: string;
  url: string;
  images: {
    blurHash: string;
    url: string;
  }[];
  category: string;

  constructor({
    name,
    price,
    description,
    size,
    color,
    available,
    availableCount,
    blurHash,
    url,
    images,
    _id,
    category,

  }: IProduct) {
    this.name = name,
      this.price = price,
      this.description = description,
      this.size = size,
      this.color = color,
      this.available = available,
      this.availableCount = availableCount,
      this.blurHash = blurHash,
      this.url = url,
      this.images = images,
      this._id = _id,
      this.category = category
  }

  static fromJson(json: IProduct) {
    return new Product(json);
  }
}
