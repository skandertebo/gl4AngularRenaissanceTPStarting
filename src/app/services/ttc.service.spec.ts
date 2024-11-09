import { TestBed } from '@angular/core/testing';

import { TtcService } from './ttc.service';

describe('TtcService', () => {
  let service: TtcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
