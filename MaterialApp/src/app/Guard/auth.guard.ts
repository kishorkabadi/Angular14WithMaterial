import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';
@Injectable({
  providedIn: "root"
})
export class authGuard implements CanActivate {
  constructor(private userService: UserService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.IsLoggedIn())
      return true;
    else {
      alert("Please first login");
      this.route.navigate(['login']);
      return false;
    }
  }
};
