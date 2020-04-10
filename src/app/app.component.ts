import { Component, OnInit } from '@angular/core';
import {UserService} from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  connect : number = 0;
  title = 'User-Manager';
  constructor(private user : UserService){}

  ngOnInit(): void {
    this.connect = this.user.userConnect;
  }
}
