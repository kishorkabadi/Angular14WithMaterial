import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as alertify from 'alertifyjs'

import { UserService } from '../Service/user.service';
@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrls: ['./modalpopup.component.css']
})
export class ModalpopupComponent implements OnInit {
  constructor(private userService: UserService, @Inject(MAT_DIALOG_DATA) public data: any,
  private ref:MatDialogRef<ModalpopupComponent>) {

  }
  userRoles: any;
  userDetails: any;
  userid: any;
  repData: any;
  ngOnInit() {
    this.userid = this.data.userid;
    this.GetAllRole();
    this.GetUserDetails(this.userid);
  }
  updateForm = new FormGroup(
    {
      userid: new FormControl({ value: "", disabled: true }),
      role: new FormControl('', Validators.required),
      isActive: new FormControl(true),
    }
  )
  GetUserDetails(userid: any) {
    this.userService.GetUsersById(userid).subscribe(item => {
      this.userDetails = item;
      if (this.userDetails != null) {
        this.updateForm.setValue({ userid: this.userDetails.userid, role: this.userDetails.role, isActive: this.userDetails.isActive })
      }
    })

  }
  UpdateUser() {
    if (this.updateForm.valid) {
      this.userDetails.role = this.updateForm.value.role;
      this.userDetails.isActive = this.updateForm.value.isActive;
      this.userService.UpdateUser(this.userDetails).subscribe(item => {
        this.repData = item;
        if (this.repData.result == 'pass') {
          alertify.success("User Activated Successfully");
          
          this.ref.close();

        }
        else {
          alertify.error("User Activation failed!");
        }
      })
    }

  }
  GetAllRole() {
    this.userService.GetAllRole().subscribe(item => {
      this.userRoles = item;
    })
  }
  closePopup()
  {
    this.ref.close();
  }
}
