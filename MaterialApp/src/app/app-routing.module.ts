import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutnComponent } from './about/aboutn.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:"about", component:AboutnComponent
  },
  {
    path:"contact", component:ContactComponent,
    children:
    [
      {
        path:"add",component:AddcontactComponent
      },
      {
        path:"edit/:id",component:AddcontactComponent
      }
     
    ]

  } ,
  {
    path:"access",loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"**",component:StatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
