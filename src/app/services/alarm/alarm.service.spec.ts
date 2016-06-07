import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AlarmService } from './alarm.service';

describe('Alarm Service', () => {
  beforeEachProviders(() => [AlarmService]);

  it('should ...',
      inject([AlarmService], (service: AlarmService) => {
    expect(service).toBeTruthy();
  }));
});
