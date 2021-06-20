import { TestBed } from '@angular/core/testing';

import { AgLibService } from './ag-lib.service';

describe('AgLibService', () => {
  let service: AgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
