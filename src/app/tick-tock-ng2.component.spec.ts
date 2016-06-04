import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TickTockNg2AppComponent } from '../app/tick-tock-ng2.component';

beforeEachProviders(() => [TickTockNg2AppComponent]);

describe('App: TickTockNg2', () => {
  it('should create the app',
      inject([TickTockNg2AppComponent], (app: TickTockNg2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tick-tock-ng2 works!\'',
      inject([TickTockNg2AppComponent], (app: TickTockNg2AppComponent) => {
    expect(app.title).toEqual('tick-tock-ng2 works!');
  }));
});
