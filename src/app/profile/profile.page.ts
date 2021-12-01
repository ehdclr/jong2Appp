import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  name: string;
  username: string;
  email: string;
  msg: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe((profile) => {
      console.log(profile.user);
      this.name = profile.user.name;
      this.username =profile.user.username;
      this.email= profile.user.email;
      this.msg = 'JWT authentication OK!';
    },
    (err) => {
      console.log(err);
      this.msg ='JWT authentication Failed!';
      return false;
    }
    );
  }

}
