import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  login(email, password) {
    this.userService.login(email, password).then(() => {
      console.log('logged in');
    }).catch((err) => {
      console.log(err);
    });
  }

  register(email, password) {
    this.userService.register(email, password).then(() => {
      console.log('registered user');
    }).catch((err) => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
