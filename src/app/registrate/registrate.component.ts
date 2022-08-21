import { FormValidateService } from './../services/form-validate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrate',
  templateUrl: './registrate.component.html',
  styleUrls: ['./registrate.component.scss']
})
export class RegistrateComponent implements OnInit {

  email: string = ""
  emailConfirm: string = ""
  nickname: string = ""
  password: string = ""

  nicknameError: boolean = false;
  emailError: boolean = false;
  emailConfirmError: boolean = false;
  passwordError: boolean = false;

  constructor(private vSer: FormValidateService) { }
  validate(): boolean {


    return true

  }

  ngOnInit(): void {
  }
  handleRegistrate(): void {

  }
  validateNickname(event: any) {
    this.nickname = event.target.value;
    if (this.vSer.validateNickname(this.nickname)) {
      /// do sthg
    }
  }

}
