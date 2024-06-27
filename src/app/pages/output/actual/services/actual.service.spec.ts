import { TestBed } from '@angular/core/testing';

import { ActualService } from './actual.service';

describe('ActualService', () => {
  let service: ActualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
