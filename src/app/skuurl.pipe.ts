import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skuurl'
})
export class SkuurlPipe implements PipeTransform {
  transform(value: any, args?: any): any {
   // console.log('Generating SKU Url for :' + value);
    return 'assets/product.json';
  }
}
