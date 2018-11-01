import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ConfigProvider } from '../../providers/config/config';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { User } from '../../app/shared/user.model';
import { UserDTO } from '../../app/dtos/user.dto';

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
    private config:ConfigProvider,
    private userService:UserServiceProvider
    ) {
  }

  ionViewDidLoad() {
  }
  
  private logIn():void{

    console.log('Jira IA')
    let token = this.getToken();

    let user:User = JSON.parse(localStorage.getItem('user'));

    this.config.setUserData(token);
    this.userService.getProfile().subscribe((response:UserDTO) =>{

      let user:User = new User();
      user.name = response.displayName;
      user.avatar = response.avatarUrls['48x48'];
      user.key = response.key;
      user.token = token;
      user.email = response.emailAddress;
    
      localStorage.setItem('user', JSON.stringify(user));
      this.navCtrl.push(HomePage);
    }, err =>{
      this.navCtrl.push(LoginPage);
    });
    //this.goHome();
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
