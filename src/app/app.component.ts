import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ConfigProvider } from '../providers/config/config';
import { HomePage } from '../pages/home/home';
import { UserServiceProvider } from '../providers/user-service/user-service';
@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider,
    UserServiceProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider:ConfigProvider
    ) {
    platform.ready().then(() => {

      let user = configProvider.getConfigData();
      if(user == null)
        this.rootPage = LoginPage;
      else
        this.rootPage = HomePage;
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

