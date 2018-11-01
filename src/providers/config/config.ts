import { Injectable } from '@angular/core';

let USER_DATA = "user";

@Injectable()
export class ConfigProvider {
  constructor() {

  }

  getConfigData(): any {
    return localStorage.getItem(USER_DATA);
  }

  setConfigData(
    name?: string, key?: string, email?: string, avatar?: string, token?: string, active?: boolean
  ) {
    let user = {
      name: '', key: '',
      email: '', avatar: '',
      token: '', active: false
    };

    if (name)
      user.name = name;
    if (key)
      user.key = key;
    if (email)
      user.email = email;
    if (avatar)
      user.avatar = avatar;
    if (token)
      user.token = token
    if (active)
      user.active = active;

    localStorage.setItem(USER_DATA, JSON.stringify(user));
  }

}
