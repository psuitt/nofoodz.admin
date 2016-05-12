import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';

declare var Meteor:any;

@Component({
    selector: 'home',
    templateUrl: 'client/home/home.html',
    directives: [MATERIAL_DIRECTIVES]
})
export class Home extends MeteorComponent {

    user:{username:string, password:string} = {
        username: '',
        password: ''
    };

    constructor() {
        super();
    }
    
    login() {
        // If validation passes, supply the appropriate fields to the
        Meteor.loginWithPassword(this.user.username.trim().toLocaleLowerCase(), this.user.password, (err) => {
            if (err) {
               alert("error!");
            } else {
                window.location.reload();
            }
        });
    }

    logout() {
        // If validation passes, supply the appropriate fields to the
        Meteor.logout(function (err) {
            window.location.reload();
        });
    }

}