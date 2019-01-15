import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  isDurty:boolean = true;
  constructor(private router:Router){

  }

  close(){
    this.router.navigate(['/events']);
  }
}
