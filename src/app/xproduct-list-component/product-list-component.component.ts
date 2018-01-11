import { ProductService } from './product.service';
import { Product } from '../model/product';
import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
  @Input() products: Product[] = [];
  searchText: string = null;
  selectedProduct: Product = null;
  onSelect: EventEmitter = new EventEmitter();

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

  selectProduct(product: Product): void {
   // this.onSelect.emit(product);
  }

  searchProduct(event: any): void {

  }

  calculate(n: number): number {
    console.log('Calculating ...');
    return n * 0.75;
  }
}
