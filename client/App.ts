/**
 * Created by Sora on 5/8/2016.
 */
import 'ng2-material/all.webpack';
import {MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES} from 'ng2-material/all';

import {Component, provide} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {MeteorComponent} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF, RouterOutlet} from 'angular2/router';

import {Home} from './home/home';

declare var Meteor:any;

@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, RouterOutlet, App]
})
@RouteConfig([
    { path: '/', as: 'Home', component: Home }
])
class App extends MeteorComponent {

    username:Promise;

    constructor() {
        super();
        this.asyncLoadData();
    }

    asyncLoadData() {
        this.username = new Promise((resolve, reject) => {
            this.call('userData', (err, currentUser) => {
                if (!err && currentUser) {
                    resolve(currentUser.username);
                } else {
                    resolve('default');
                }
            });
        });
    }
    
}

bootstrap(App, [MATERIAL_PROVIDERS, ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' }), []]);
