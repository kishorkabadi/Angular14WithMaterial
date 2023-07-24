import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <p>
      404 Error. Requested page not found.
    </p>
  `,
  styles: [
    "p{color:red;font-size:50px}"
  ]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
