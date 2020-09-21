import { TestBed } from '@angular/core/testing';

import { SongkickService } from './songkick.service';

describe('SongkickService', () => {
  let service: SongkickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongkickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
