import { Injectable } from '@angular/core';
import { User } from '../../app/shared/user.model';

let USER_DATA = "user";

@Injectable()
export class ConfigProvider {
  constructor() {
  }

  getUserData(): User {
    let user: User = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  setUserData(
    token?: string,
    name?: string,
    key?: string,
    email?: string,
    avatar?: string
  ): User {
    let user: User = new User();
    if (token)
      user.token = token;
    if (name)
      user.name = name;
    if (key)
      user.key = key;
    if (email)
      user.email = email;
    if (avatar)
      user.avatar = avatar;

    localStorage.setItem(USER_DATA, JSON.stringify(user));

    return user;
  }
  
  /*
  */
}
