import { Component } from '@angular/core';
import { LoginComponent } from './+login';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from '@angular/router';
import { MainComponent } from './+main';

@Component({
  moduleId: module.id,
  selector: 'tick-tock-ng2-app',
  templateUrl: 'tick-tock-ng2.component.html',
  styleUrls: ['tick-tock-ng2.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/login', component: LoginComponent},
  {path: '/main', component: MainComponent}
])
export class TickTockNg2AppComponent {
  title = "TITLE"
  constructor(private router: Router) {}
}
