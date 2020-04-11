import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { SortPrice } from './sort.price';
import { SortMilesPipe } from './sort-miles.pipe';
import { FilterPricePipe } from './filter-price.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterMileagePipe } from './filter-mileage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    SortPrice,
    SortMilesPipe,
    FilterPricePipe,
    FilterMileagePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
