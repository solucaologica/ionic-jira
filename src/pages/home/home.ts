import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { ConfigProvider } from '../../providers/config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private userService: UserServiceProvider,
    private configProvider:ConfigProvider
  ){}
  ngOnInit(): void {
    this.userService.getProfile().subscribe(data => {
      console.log(data);
    });
  }

}
