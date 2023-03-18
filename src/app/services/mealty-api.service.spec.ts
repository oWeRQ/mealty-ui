import { TestBed } from '@angular/core/testing';

import { MealtyApiService } from './mealty-api.service';

describe('MealtyApiService', () => {
  let service: MealtyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealtyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
