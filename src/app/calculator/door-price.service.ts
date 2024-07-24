import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoorPriceService {
  constructor() {
    console.log();
    this.calcPrice(500, true, "6' x 8'");
  }

  calcPrice(baseCost: number, painted: boolean, dimensions: string): number {
    let paintedCost: number = 0;
    const baseSize: number = 48; //Square feet of barn door
    const squareFootCoefficient: number = 20; //$20 per extra square foot
    if (painted) {
      paintedCost = 500; //Price to paint barn door
    }
    const width: number = Number(
      dimensions.substring(0, dimensions.indexOf("'"))
    );
    const secondHalfDimensions: string = dimensions.substring(
      dimensions.indexOf('x')
    );
    const height: number = Number(
      secondHalfDimensions.substring(1, secondHalfDimensions.indexOf("'"))
    );
    return (
      baseCost +
      paintedCost +
      (width * height - baseSize) * squareFootCoefficient
    );
  }
}
