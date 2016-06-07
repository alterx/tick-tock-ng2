import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { TickTockNg2AppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, firebaseAuthConfig, AuthProviders, AuthMethods, defaultFirebase } from 'angularfire2';
import { UserService } from './app/services/user/user.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  TickTockNg2AppComponent, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://tick-tock-temp.firebaseio.com/'),
    firebaseAuthConfig({
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }),
    UserService
  ]
);

