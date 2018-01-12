import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'skuhash'
})
export class SkuhashPipe implements PipeTransform {

  transform(value: string, key?: any): any {

   // console.log('Generating sku hash for ' + value  + ' with key ' + key);
    if (!value) {
      return value;
    }

    return this.encodeStr(value, key || 'SXGWLZPDOKFIVUHJYTQBNMACERxswgzldpkoifuvjhtybqmncare');
  }

  encodeStr(uncoded: string, key: string): string {
    uncoded = uncoded.toUpperCase().replace(/^\s+|\s+$/g, '');
    let coded = '';
    let chr;
    for (let i = uncoded.length - 1; i >= 0; i--) {
      chr = uncoded.charCodeAt(i);
      coded += (chr >= 65 && chr <= 90) ?
        key.charAt(chr - 65 + 26 * Math.floor(Math.random() * 2)) :
        String.fromCharCode(chr);
    }
    return encodeURIComponent(coded);
  }
}
