import { TestBed } from '@angular/core/testing';

import { PeopleDetailService } from './people-detail.service';

describe('PeopleDetailService', () => {
  let service: PeopleDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
