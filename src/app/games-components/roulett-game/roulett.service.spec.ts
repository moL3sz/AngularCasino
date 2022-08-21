import { TestBed } from '@angular/core/testing';

import { RoulettService } from './roulett.service';

describe('RoulettService', () => {
  let service: RoulettService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoulettService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
