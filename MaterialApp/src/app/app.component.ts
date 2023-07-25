import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  title = 'MaterialApp';
  isMenuVisible: boolean = false;
  isAdmin: boolean = false;
  constructor(private route: Router, private userService: UserService) {

  }

  ngDoCheck(): void {
    const currentRoute = this.route.url;
    console.log(currentRoute);
    if (currentRoute == "/login" ||currentRoute == "/access/register") {
      this.isMenuVisible = false;
    }
    else
      this.isMenuVisible = true;

    if (this.userService.GetRole() == 'admin') {
      this.isAdmin = true;
    }
    else
      this.isAdmin = false;

  }
}
