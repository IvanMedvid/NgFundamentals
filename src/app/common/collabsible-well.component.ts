import { Component, Input } from '@angular/core';

@Component({
    selector: 'collabsible-well',
    templateUrl: 'collabsible-well.component.html'
})

export class CollabsibleWellComponent {
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }
}
