import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'home',
    template: "<p>Home!</p>"
})
export class Home extends MeteorComponent {

    constructor() {
        super();
    }

}