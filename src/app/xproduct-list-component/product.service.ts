import { Product } from '../model/product';

export class ProductService {
  getProducts(): Product[] {
    const products: Product[] = [];
    for (let i = 0; i < 150; i++) {
      products.push({
        id: i,
        name: 'Product ' + i,
        sku: 'SKU_' + i
      });
    }
    return products;
  }
}
