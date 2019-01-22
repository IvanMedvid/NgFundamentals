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
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidatorDirective
} from './events/index';
import { NavBarComponent } from './nav/nav-bar.component';
import { NotFoundComponent } from './errors/not-found.component';
import { EventsAppComponent } from './events-app.component';
import { AuthService } from './user/auth.service';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollabsibleWellComponent } from './common/collabsible-well.component';
import { JQ_TOKEN } from './common/jQuery.service';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

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
    CollabsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    BrowserModule
  ],
  providers: [ 
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
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