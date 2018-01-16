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
  }

  onLoggedIn = function () {
   if (this.password === this.username) {
      localStorage.setItem('isLoggedIn', 'true');
      this.isValid = localStorage.getItem('isLoggedIn');
      window.location.href = '/layout';
    } else {
      localStorage.setItem('isLoggedIn', 'false');
      this.isValid = localStorage.getItem('isLoggedIn');
      // window.location.href = '/login';
    }
    
  };
}

