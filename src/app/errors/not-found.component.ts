import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './not-found.component.html',
  styles: [`
  .errorMessage {
    margin-top:150px;
    font-size: 170px;
    text-align: center;
  }`]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
