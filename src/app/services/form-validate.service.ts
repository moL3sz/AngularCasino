import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormValidateService {

  constructor() { }
  validateEmail(email: string): boolean {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) != null;
  }
  validateNickname(nickname: string) {
    return nickname !== ""
  }
  validatePassword(password: string): 1 | 2 | 3 | 4{

    let strongness = 1;
    //has lowercase
    if (/[a-z]/.test(password)) strongness++;
    if (/[A-Z]/.test(password)) strongness++;
    if (/\d/.test(password)) strongness++;
    if (/[-!$%^&*()_+|~=`{}@\[\]:";'<>?,.\/]/.test(password)) strongness++;


    return strongness as 1 | 2 | 3 | 4;
  }
  confirmEmail(emailOriginal: string, emailConfirm: string): boolean {
    return emailConfirm === emailConfirm
  }
}
