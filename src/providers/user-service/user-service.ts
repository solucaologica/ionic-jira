import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApi } from '../../app/shared/common';
import { Platform } from 'ionic-angular';

@Injectable()
export class UserServiceProvider {

  basepath = "/myself"

  constructor(
    public http: HttpClient,
    private _platform:Platform
    ) {
      if(this._platform.is("cordova")){
        this.basepath = `${baseApi}/myself`;
      }
  }

  getProfile(){
    return this.http.get(`${baseApi}/myself`);
  }

}