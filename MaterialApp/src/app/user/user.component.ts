import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from '../Model/UserModel';
import { UserService } from '../Service/user.service';
import * as alertify from 'alertifyjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  displayedColumns: string[] = ['userid', 'name', 'email', 'isActive', 'role', 'Action'];
  dataSource: any;
  UserDetails: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  constructor(private userService: UserService, private dialog: MatDialog) { }
  ngOnInit() {
    this.getAllUser();
  }
  getAllUser() {
    this.userService.GetAllUsers().subscribe(item => {
      this.UserDetails = item;
      //console.log( this.UserDetails);
      this.dataSource = new MatTableDataSource<UserModel>(this.UserDetails);
      this.dataSource.paginator = this.paginator;
    });

  }
  UpdateUser(userid: any) {
  let popup=  this.dialog.open(ModalpopupComponent, {
      width: '400px',
      height: '400px',
      data: {
        userid: userid
      }
    });
    popup.afterClosed().subscribe(item=>{
      this.getAllUser();
    })
  }
  DeleteUser(userid: any) {
    alertify.confirm("User Delete", "Are you want to delete user?", () => {
      this.userService.RemoveUsersById(userid).subscribe(item => {
        alertify.success("User deleted successfully");
        this.getAllUser();
      })
    }, function () {

    })

  }
}
