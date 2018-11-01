import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[
    ConfigProvider
  ]
})
export class LoginPage {

  username:string;
  pass:string;
  token:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private config:ConfigProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('Jira IA')
  }

  private logIn():void{
    let token = this.getToken();
    this.config.setConfigData("", "", "", "", token, true);
    this.goHome();
  }

  private getToken():string{
    let token = '';
    token = this.username + ':' + this.pass;
    token = 'Basic ' + window.btoa(token);
    return token;
  }

  private goHome(){
    this.navCtrl.push(HomePage);
  }

}
