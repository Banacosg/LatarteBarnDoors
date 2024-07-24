export enum OpeningMechanism {
  Hinged = 1,
  Slider = 2,
}

export enum Wood {
  Pine = 1,
  Oak = 2,
  Maple = 3,
  Cedar = 4,
  Birch = 5,
}

export enum YN {
  Yes = 1,
  No = 0,
}

export interface order {
  type: string;
  price: number;
  size: string;
  openingMech: OpeningMechanism;
  woodType: Wood;
  painted: YN;
  address: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}
