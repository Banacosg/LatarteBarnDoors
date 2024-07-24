import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class DoorService {
  private doorName = new Subject<Product>();
  doorPath: string = '../../assets/doors';
  private doors: Product[] = [
    {
      photo: this.doorPath + '/45 degree.png',
      name: '45 Degree Slats',
      price: 5000,
    },
    { photo: this.doorPath + '/chevron.png', name: 'Chevron', price: 7000 },
    {
      photo: this.doorPath + '/plank framed midrail.png',
      name: 'Framed plank with Midrail',
      price: 2500,
    },
    {
      photo: this.doorPath + '/plank framed.png',
      name: 'Framed Plank',
      price: 2000,
    },
    {
      photo: this.doorPath + '/plank midrail.png',
      name: 'Plank with Midrail',
      price: 2000,
    },
    { photo: this.doorPath + '/plank.png', name: 'Plank', price: 1500 },
    {
      photo: this.doorPath + '/X double framed.png',
      name: 'Framed Double X',
      price: 3000,
    },
    { photo: this.doorPath + '/X double.png', name: 'Double X', price: 2500 },
    {
      photo: this.doorPath + '/X framed single.png',
      name: 'Framed Single X',
      price: 2000,
    },
    { photo: this.doorPath + '/X framed.png', name: 'Framed X', price: 2000 },
    { photo: this.doorPath + '/X.png', name: 'X', price: 1500 },
    { photo: this.doorPath + '/Z arrow.png', name: 'Z Arrow', price: 2000 },
    {
      photo: this.doorPath + '/Z double framed.png',
      name: 'Framed Double Z',
      price: 2500,
    },
    { photo: this.doorPath + '/Z double.png', name: 'Double Z', price: 2000 },
    {
      photo: this.doorPath + '/Z framed arrow.png',
      name: 'Framed Z Arrow',
      price: 2500,
    },
    { photo: this.doorPath + '/Z.png', name: 'Z', price: 1500 },
  ];
  doorSizes: string[] = [
    "6' x 8'",
    "6' x 12'",
    "8' x 8'",
    "8' x 12'",
    "10' x 10'",
    "10' x 14'",
    "12' x 10'",
    "12' x 14'",
  ];

  door$ = this.doorName.asObservable();

  passDoor(doorType: Product) {
    this.doorName.next(doorType);
  }

  getAllDoors(): Product[] {
    return this.doors;
  }

  getAllDoorSizes(): string[] {
    return this.doorSizes;
  }

  constructor() {}
}
