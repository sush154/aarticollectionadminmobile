import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';

@Component({
    selector : 'login-page',
    templateUrl: 'login.html'
})

export class LoginPage {
    
    constructor(private navCtrl : NavController) {}

    navigate() : void {
        this.navCtrl.push(TabsPage);
    }
}