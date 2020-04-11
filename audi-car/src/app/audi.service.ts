import { AudiCar } from './audi-car';
import { Injectable } from '@angular/core';
import AUDIS3 from '../assets/cars.json';

const CARS = AUDIS3;

@Injectable({
  providedIn: 'root'
})
export class AudiService {

  constructor() { }

  getCars(): AudiCar[] {
    return CARS;
  }
}
