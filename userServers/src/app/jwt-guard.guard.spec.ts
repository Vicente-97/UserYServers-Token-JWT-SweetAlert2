import { TestBed } from '@angular/core/testing';

import { JwtGuardGuard } from './jwt-guard.guard';

describe('JwtGuardGuard', () => {
  let guard: JwtGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JwtGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
