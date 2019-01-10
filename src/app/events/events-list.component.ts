import { Component } from "@angular/core"

@Component({
    selector : "events-list",
    templateUrl : './events-list.component.html'
})

export class EventsListComponent{
    event1 = {
        id : 1,
        name : 'Angular Connect',
        date : '9/26/2036',
        time : '10:00 am',
        price : 222,
        imageUrl : '/assets/images/angularconnect-shield.png',
        location : {
            address : 'Shevchenko 21',
            city : 'Lviv',
            country : 'Ukraine'
        }
    }
}