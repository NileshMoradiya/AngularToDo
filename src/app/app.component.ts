import { Component } from '@angular/core';
import { User } from './model/user';
import { Product } from './model/product';
import { ProductService } from './xproduct-list-component/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {

  products: Product[] = [];
  selectedProduct: Product;
  dob = new Date(1988, 3, 15);
  constructor(private _productService: ProductService) {
    this.products = this._productService.getProducts();
  }

  onProductSelection(product: Product): void {
    console.log('Handled :' + product.id);
    this.selectedProduct = product;
  }
}
