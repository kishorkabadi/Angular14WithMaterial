import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../Model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  userLogin(LoginDetails:any)
  {
    return this.httpClient.post("https://localhost:44308/User/Authenticate",LoginDetails);
  }
  IsLoggedIn()
  {
    return localStorage.getItem('token')!=null;
  }
  GetToken()
  {
    return localStorage.getItem('token')!=null?localStorage.getItem('token'):null;
  }
  userRegistration(userDetails:any)
  {
    return this.httpClient.post("https://localhost:44308/User/Register",userDetails);
  }
  GetAllUsers():Observable<UserModel[]>
  {
    return this.httpClient.get<UserModel[]>("https://localhost:44308/api/UserMaster");
  }
  GetUsersById(userid:any)
  {
    return this.httpClient.get("https://localhost:44308/api/UserMaster/"+userid);
  }
  RemoveUsersById(userid:any)
  {
    return this.httpClient.delete("https://localhost:44308/api/UserMaster/"+userid);
  }
  UpdateUser(userDetails:any)
  {
    return this.httpClient.post("https://localhost:44308/api/UserMaster/ActivateUser",userDetails);
  }
  GetAllRole()
  {
    return this.httpClient.get("https://localhost:44308/User/GetAllRole/");
  }
}
