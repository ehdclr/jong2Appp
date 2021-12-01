import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Register', url: '/register', icon: 'person-add' },
    { title: 'Login', url: '/login', icon: 'enter' },
    { title: 'Dashboard', url: '/dashboard', icon: 'card' },
    { title: 'Profile', url: '/profile', icon: 'body' },
  ];
  
  constructor() {}
}
