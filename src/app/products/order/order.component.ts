import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products.component';
import { CommonModule, NgIf } from '@angular/common';
import { DoorService } from '../services/door.service';
import { Subscription } from 'rxjs';
import { Product } from '../products';
import { RouterLink } from '@angular/router';
import { order, OpeningMechanism, Wood, YN } from './order';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ProductsComponent,
    CommonModule,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  curDoor: Product = { photo: '', name: '', price: 0 };
  doorSelected: boolean = false;
  subscription: Subscription;
  orderForm!: FormGroup;
  doorSizes: String[] = [];
  openingMechanisms: String[] = Object.keys(OpeningMechanism).filter((v) =>
    isNaN(Number(v))
  );
  woodTypes: String[] = Object.keys(Wood).filter((v) => isNaN(Number(v)));
  YN: String[] = Object.keys(YN).filter((v) => isNaN(Number(v)));
  isShowOrder: boolean = false;
  orderPlaced: boolean = false;

  constructor(private doorService: DoorService, private fb: FormBuilder) {
    this.doorSelected = false;
    this.subscription = doorService.door$.subscribe((doorType) => {
      this.curDoor = doorType;
      if (
        this.curDoor.name !== '' &&
        this.curDoor.photo !== '' &&
        this.curDoor.price !== 0
      ) {
        this.doorSelected = true;
      }
      this.orderForm = this.fb.group({
        type: new FormControl(doorType.name),
        price: new FormControl(doorType.price),
        size: new FormControl(''),
        openingMech: new FormControl(''),
        woodType: new FormControl(''),
        painted: new FormControl(''),
        address: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zipcode: new FormControl(''),
      });
    });
    this.doorSizes = doorService.getAllDoorSizes();
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      type: new FormControl(''),
      price: new FormControl(''),
      size: new FormControl(''),
      openingMech: new FormControl(''),
      woodType: new FormControl(''),
      painted: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
      zipcode: new FormControl(''),
    });
  }

  addOrder() {
    this.isShowOrder = false;
    this.orderPlaced = true;
    console.log(this.orderForm.value);
  }

  showOrderForm() {
    this.isShowOrder = !this.isShowOrder;
    this.orderPlaced = false;
  }
}
