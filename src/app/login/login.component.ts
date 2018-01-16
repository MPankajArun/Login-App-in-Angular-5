import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isValid: boolean;
  constructor(public router: Router) { }

  ngOnInit() {
    this.isValid = !localStorage.getItem('isLoggedIn');
  }

  onLoggedIn = function () {
   if (this.password === this.username) {
      localStorage.setItem('isLoggedIn', 'true');
      // console.log(this.username);
      // console.log(this.password);
      // this.isValid = true;
      window.location.href = '/layout';
    } else {
      localStorage.setItem('isLoggedIn', 'false');
      // window.location.href = '/login';
    }
    this.isValid = localStorage.getItem('isLoggedIn');
  };
}

