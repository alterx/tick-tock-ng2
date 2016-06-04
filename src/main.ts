import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TickTockNg2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(TickTockNg2AppComponent);
