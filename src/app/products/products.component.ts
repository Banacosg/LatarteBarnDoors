import { Component, OnInit, Input, inject, Inject } from '@angular/core';
import { ImagesService } from './services/images.service';
import { NgFor } from '@angular/common';
import { Product } from './products';
import { CommonModule } from '@angular/common';
import { Pipe } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { DoorService } from './services/door.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    RouterLink,
    RouterOutlet,
    OrderComponent,
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  doorPath: string = '../../assets/doors';
  curDoor: Product = { photo: '', name: '', price: 0 };
  doors: Product[] = [
    // {
    //   photo: this.doorPath + '/45 degree.png',
    //   name: '45 Degree Slats',
    //   price: 5000,
    // },
    // { photo: this.doorPath + '/chevron.png', name: 'Chevron', price: 7000 },
    // {
    //   photo: this.doorPath + '/plank framed midrail.png',
    //   name: 'Framed plank with Midrail',
    //   price: 2500,
    // },
    // {
    //   photo: this.doorPath + '/plank framed.png',
    //   name: 'Framed Plank',
    //   price: 2000,
    // },
    // {
    //   photo: this.doorPath + '/plank midrail.png',
    //   name: 'Plank with Midrail',
    //   price: 2000,
    // },
    // { photo: this.doorPath + '/plank.png', name: 'Plank', price: 1500 },
    // {
    //   photo: this.doorPath + '/X double framed.png',
    //   name: 'Framed Double X',
    //   price: 3000,
    // },
    // { photo: this.doorPath + '/X double.png', name: 'Double X', price: 2500 },
    // {
    //   photo: this.doorPath + '/X framed single.png',
    //   name: 'Framed Single X',
    //   price: 2000,
    // },
    // { photo: this.doorPath + '/X framed.png', name: 'Framed X', price: 2000 },
    // { photo: this.doorPath + '/X.png', name: 'X', price: 1500 },
    // { photo: this.doorPath + '/Z arrow.png', name: 'Z Arrow', price: 2000 },
    // {
    //   photo: this.doorPath + '/Z double framed.png',
    //   name: 'Framed Double Z',
    //   price: 2500,
    // },
    // { photo: this.doorPath + '/Z double.png', name: 'Double Z', price: 2000 },
    // {
    //   photo: this.doorPath + '/Z framed arrow.png',
    //   name: 'Framed Z Arrow',
    //   price: 2250,
    // },
    // {
    //   photo: this.doorPath + '/Z double framed.png',
    //   name: 'Framed Double Z',
    //   price: 2500,
    // },
    // { photo: this.doorPath + '/Z double.png', name: 'Double Z', price: 2000 },
    // {
    //   photo: this.doorPath + '/Z framed arrow.png',
    //   name: 'Framed Z Arrow',
    //   price: 2500,
    // },
    // { photo: this.doorPath + '/Z.png', name: 'Z', price: 1500 },
  ];
  constructor(
    private imageService: ImagesService,
    private doorService: DoorService,
    @Inject(DOCUMENT) private _doc: Document
  ) {
    this.doors = doorService.getAllDoors();
  }

  annouceDoor() {
    this.doorService.passDoor(this.curDoor);
  }

  ngOnInit(): void {
    // this.imageService.getImageUrl().subscribe({
    //   next: (url) => {
    //     url.forEach((element) => {
    //       this.imageUrl.push(element.url);
    //     });
    //   },
    //   error: (error) => {
    //     console.error('Error fetching image URL:', error);
    //   },
    // });
  }

  getWindow(): Window | null {
    return this._doc.defaultView;
  }

  onActivate(): void {
    const windowTest = this.getWindow();
    windowTest!.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  setCurDoor(product: Product) {
    this.curDoor = product;
  }
}
