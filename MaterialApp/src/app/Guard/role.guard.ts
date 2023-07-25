import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';
@Injectable({
  providedIn: "root"
})
export class roleGuard implements CanActivate {
  constructor(private userService: UserService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.GetRole()=='admin')
      return true;
    else {
      alert("you are not authorized to access it");
      this.route.navigate(['home']);
      return false;
    }
  }
};
