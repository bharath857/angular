import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from '../model/user.model';

import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginMode: boolean = true;
  error: string = '';

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }


  onSubmit(form: NgForm) {
    this.error = '';

    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe({
      next: (resData: AuthResponseData) => {
        console.log(resData);
        this.router.navigate(['/firstPage']);
      },
      error: (errorMessage: string) => {
        console.log(errorMessage);
        this.error = errorMessage;
      },
      complete: () => {
        console.info('complete')
        form.reset();
      }
    })

    /* authObs.subscribe(
      resData => {
        console.log(resData);
        //this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
      }
    ); */

  }
}
