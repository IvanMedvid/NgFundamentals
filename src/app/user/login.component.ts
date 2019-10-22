import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoginModel } from "./user.model";

@Component({
    templateUrl: 'login.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px; }
    `]
})
export class LoginComponent {
    userName;
    password;
    mouseoverLogin;
    loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) {

    }

    login(formValues) {
      const loginModel = new LoginModel(formValues.userName, formValues.password);

        this.authService.loginUser(loginModel)
            .subscribe(resp => {
                if (!resp) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            });
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
