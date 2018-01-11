import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() products: Product[] = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSelect: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  calculate(num: number): number {
    // console.log('Calculating...');
    return num * 0.75;
  }

  selectProduct(product: Product): void {
    console.log('Emitting :' + product.id);
    this.onSelect.emit(product);
  }
}
