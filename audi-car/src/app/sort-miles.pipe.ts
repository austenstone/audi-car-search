import { AudiCar } from './audi-car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortMiles'
})
export class SortMilesPipe implements PipeTransform {

  transform(items: any[], args?: any): any[] {
    return items.sort((a: AudiCar, b: AudiCar) => {
      if (a.mileage < b.mileage) {
        return -1;
      }

      if (a.mileage > b.mileage) {
        return 1;
      }

      return 0;
    });
  }

}
