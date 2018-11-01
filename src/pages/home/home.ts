import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ConfigProvider } from '../../providers/config/config';
import { LoginPage } from '../login/login';
import { User } from '../../app/shared/user.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  user: User;

  constructor(
    public navCtrl: NavController,
    private userService: UserServiceProvider,
    private configProvider: ConfigProvider
  ) { }
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  logOff() {
    localStorage.removeItem('user');
    this.navCtrl.push(LoginPage);
  }

}
