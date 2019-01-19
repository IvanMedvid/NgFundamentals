import { Component, Input } from '@angular/core';

@Component({
    selector: 'collabsible-well',
    templateUrl: 'collabsible-well.component.html'
})

export class CollabsibleWellComponent {
    @Input() title: string;
    visible: boolean = true;

    toggleContent(){
        this.visible = !this.visible;
    }
}