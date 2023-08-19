import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { FetchApiDataService } from './fetch-api-data.service';

describe('FetchApiDataService', () => {
  let service: FetchApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDataService);
=======
import { UserRegistrationService } from './fetch-api-data.service';

describe('FetchApiDataService', () => {
  let service: UserRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationService);
>>>>>>> e15b853 (Fixed connection API)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> e15b853 (Fixed connection API)
