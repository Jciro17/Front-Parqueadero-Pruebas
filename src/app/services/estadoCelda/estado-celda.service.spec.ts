import { TestBed } from '@angular/core/testing';

import { EstadoCeldaService } from './estado-celda.service';

describe('EstadoCeldaService', () => {
  let service: EstadoCeldaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoCeldaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
