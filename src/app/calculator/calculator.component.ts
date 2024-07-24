import { Component, OnInit } from '@angular/core';
import { DoorPriceService } from './door-price.service';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { calcForm } from './calculator';
import { CommonModule, NgFor } from '@angular/common';
import { DoorService } from '../products/services/door.service';
import { Product } from '../products/products';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent implements OnInit {
  calculatorForm!: FormGroup;
  doorSizes: string[] = [];
  doorTypes: Product[] = [];
  doorPrice: number = 0;

  constructor(
    private calc: DoorPriceService,
    private fb: FormBuilder,
    private doorData: DoorService
  ) {
    console.log(calc.calcPrice(1500, false, "12' x 14'"));
    this.doorSizes = doorData.getAllDoorSizes();
    this.doorTypes = doorData.getAllDoors();
  }

  ngOnInit(): void {
    this.calculatorForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required] }),
      painted: new FormControl(false),
      size: new FormControl(''),
    });
  }

  calculatePrice() {
    console.log(this.calculatorForm.value);
    const userInput = this.calculatorForm.value;
    let selectedDoor: Product = { photo: '', name: '', price: 0 };
    this.doorTypes.forEach((door) => {
      if (door.name === userInput.name) {
        selectedDoor = door;
      }
    });
    this.doorPrice = this.calc.calcPrice(
      selectedDoor.price,
      userInput.painted,
      userInput.size
    );
  }
}
