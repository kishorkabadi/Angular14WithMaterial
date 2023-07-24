import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutnComponent } from './about/aboutn.component';
import { ContactComponent } from './contact/contact.component';
import { StatusComponent } from './status/status.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
// import { AccessRoutingModule } from './access/access-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutnComponent,
    ContactComponent,
    StatusComponent,
    AddcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AccessRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
