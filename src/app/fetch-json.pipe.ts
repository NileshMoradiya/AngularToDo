import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Pipe({
  name: 'fetchJson',
  pure: true
})
export class FetchJsonPipe implements PipeTransform {

  private cachedData: any = null;
  private cachedUrl = '';

  constructor(private http: Http) { }

  transform(url: string): any {
        if (url !== this.cachedUrl) {
      console.log('Fetching JSON...');
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url)
        .map(result => result.json())
        .subscribe(result => this.cachedData = result);
    }

    return this.cachedData;
  }
}
