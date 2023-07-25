import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  rspData: any;
  constructor(private userService: UserService,private route:Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  userLogin(loginDetails: any) {
    if (loginDetails.valid) {
      this.userService.userLogin(loginDetails.value).subscribe(item => {
        this.rspData = item;
        console.log(this.rspData);
        if (this.rspData != null) {
          localStorage.setItem("token", this.rspData.jwtToken);
          this.route.navigate(['home']);
        }
        else
        alert("Login failed");
      });
    }
  }
  RedirectRegister()
  {
    this.route.navigate(['access/register']);
  }
}
