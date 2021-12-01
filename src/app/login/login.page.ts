import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/User';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const login : Login= {
      username: this.username,
      password: this.password,
    };
    this.authService.authenticateUser(login).subscribe((data) => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.userNoPW);
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

}
