import { TestBed } from '@angular/core/testing';

import { AudiService } from './audi.service';

describe('AudiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudiService = TestBed.get(AudiService);
    expect(service).toBeTruthy();
  });
});
