import { TestBed } from '@angular/core/testing';

import { AppEventManagerService } from './app-event-manager.service';

describe('AppEventManagerService', () => {
  let service: AppEventManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppEventManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
