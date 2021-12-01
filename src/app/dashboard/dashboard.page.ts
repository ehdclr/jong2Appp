import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: any;
  userString: string;
  name: string;
  token: string;

  constructor() { }

  ngOnInit() {
    this.userString = localStorage.getItem("userNoPW");
    this.user =JSON.parse(this.userString);
    this.name =this.user.name;
    this.token=localStorage.getItem('authToken');
  }

}
