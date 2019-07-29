import { TestBed } from '@angular/core/testing';

import { ConsultApiService } from './consult-api.service';

describe('ConsultApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultApiService = TestBed.get(ConsultApiService);
    expect(service).toBeTruthy();
  });
});
