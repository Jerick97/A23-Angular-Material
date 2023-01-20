import { TestBed } from '@angular/core/testing';

import { ContactoGuard } from './contacto.guard';

describe('ContactoGuard', () => {
  let guard: ContactoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ContactoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
