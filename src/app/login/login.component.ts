import { AuthService } from './../services/authservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  error = -1
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  handleLogin() {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    console.log("ASD")
    this.authService.SignIn(email, password).then((success) => {
      console.log(success)
      this.error = success ? 1 : 0
    })

  }


}
