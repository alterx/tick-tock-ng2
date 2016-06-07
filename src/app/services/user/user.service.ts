import { Injectable } from '@angular/core';
import {AngularFire} from 'angularfire2';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private af: AngularFire) {

  }

  login(email, password){
    return this.af.auth.login({ email, password });
  }

  logout() {
    this.af.auth.logout();
  }

  register(email, password){
    return this.af.auth.createUser({ email, password });
  }

}
