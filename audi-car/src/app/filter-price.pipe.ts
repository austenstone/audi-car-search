import { AudiCar } from './audi-car';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrice'
})
export class FilterPricePipe implements PipeTransform {
  transform(items: any[], price: number): any[] {
    return items.filter((car: AudiCar) => {
      if (Number(car.askingPrice) < price) {
        return car;
      }
    });
  }
}
