import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h2>
      Contact
    </h2>
    <a routerLink="add">Add</a><br/>
    <a routerLink="edit/1">Edit</a>
<div>
<router-outlet></router-outlet></div>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
