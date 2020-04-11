import { FilterMileagePipe } from './../filter-mileage.pipe';
import { FilterPricePipe } from './../filter-price.pipe';
import { SortPrice } from '../sort.price';
import { AudiCar } from './../audi-car';
import { AudiService } from './../audi.service';
import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { SortMilesPipe } from '../sort-miles.pipe';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: AudiCar[];
  filteredCars: BehaviorSubject<AudiCar[]> = new BehaviorSubject([]);
  sortPrice: SortPrice = new SortPrice();
  sortMiles: SortMilesPipe = new SortMilesPipe();
  filterPrice: FilterPricePipe = new FilterPricePipe();
  filterMilage: FilterMileagePipe = new FilterMileagePipe();
  price = 100000;
  mileage = 100000;

  constructor(private audi: AudiService) {}

  ngOnInit() {
    this.cars = this.audi.getCars();
    this.filteredCars.next(this.cars);
  }

  sortByPrice() {
    let sorted = this.sortPrice.transform(this.cars);
    sorted = this.filterPrice.transform(sorted, this.price);
    sorted = this.filterMilage.transform(sorted, this.mileage);
    this.filteredCars.next(sorted);
  }

  sortByMiles() {
    let sorted = this.sortMiles.transform(this.cars);
    sorted = this.filterPrice.transform(sorted, this.price);
    sorted = this.filterMilage.transform(sorted, this.mileage);
    this.filteredCars.next(sorted);
  }

  filterButton() {
    console.log(this.price);
    let sorted = this.filterPrice.transform(this.cars, this.price);
    sorted = this.filterMilage.transform(sorted, this.mileage);
    this.filteredCars.next(sorted);
  }
}
