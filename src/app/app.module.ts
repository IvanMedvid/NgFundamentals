import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent
} from './events/index';
import { NavBarComponent } from './nav/nav-bar.component';
import { NotFoundComponent } from './errors/not-found.component';
import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/auth.service';
import { TOASTR_TOKEN, Toastr } from './events/common/toastr.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollabsibleWellComponent } from './events/common/collabsible-well.component';
import { JQ_TOKEN } from './events/common/jQuery.service';

let toastr: Toastr;
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollabsibleWellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
   ],
  bootstrap: [
    EventsAppComponent
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDurty){
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}