import { AudiCar } from './audi-car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice'
})
export class SortPrice implements PipeTransform {

  transform(items: any[], args?: any): any[] {
    return items.sort((a: AudiCar, b: AudiCar) => {
      if (a.askingPrice < b.askingPrice) {
        return -1;
      }

      if (a.askingPrice > b.askingPrice) {
        return 1;
      }

      return 0;
    });
  }



}
