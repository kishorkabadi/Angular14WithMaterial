import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private route: Router, private userService: UserService) { }
  ngOnInit() {

  }
  repData: any;
  registerForm = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.required)
  })
  RegisterUser() {
    if (this.registerForm.valid) {
      this.userService.userRegistration(this.registerForm.value).subscribe(item => {
        this.repData = item;
        if(this.repData.result=='pass')
        {
          alertify.success("User Registration Successfully");
          this.RedirectToLogin();
        }
        else
        {
          alertify.error("User Registration failed!");
        }
      })
    }

  }
  RedirectToLogin()
  {
    this.route.navigate(['login']);
  }
}
