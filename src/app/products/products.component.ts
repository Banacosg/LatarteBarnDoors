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
  doors: Product[] = [];
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
