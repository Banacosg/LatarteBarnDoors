import { TestBed } from '@angular/core/testing';

import { DoorPriceService } from './door-price.service';

describe('DoorPriceService', () => {
  let service: DoorPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoorPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
