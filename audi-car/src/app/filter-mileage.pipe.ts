import { AudiCar } from './audi-car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMileage'
})
export class FilterMileagePipe implements PipeTransform {

  transform(items: any[], mileage: number): any[] {
    return items.filter((car: AudiCar) => {
      if (Number(car.mileage.replace(/\,/g, '')) < mileage) {
        return car;
      }
    });
  }

}
