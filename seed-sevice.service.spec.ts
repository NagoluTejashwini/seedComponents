import { TestBed } from '@angular/core/testing';

import { SeedSeviceService } from './seed-sevice.service';

describe('SeedSeviceService', () => {
  let service: SeedSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
