import { Component } from '@angular/core';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular Application';
  user: User;
  currentTimestamp: any;

  constructor() {

    this.user = new User();
    this.user.userName = 'Sachin Kharmate';
    this.user.mobileNo = 9800000000;
    this.user.emailId = 'sachin@example.com';
    this.currentTimestamp = new Date();
  }
}
