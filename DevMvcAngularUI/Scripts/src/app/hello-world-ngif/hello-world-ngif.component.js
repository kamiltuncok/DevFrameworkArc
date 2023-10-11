import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HelloWorldNgIfComponent = class HelloWorldNgIfComponent {
    constructor() {
        this.message = "I'm read only!";
        this.canEdit = false;
    }
    onEditClick() {
        this.canEdit = !this.canEdit;
        if (this.canEdit) {
            this.message = 'You can edit me!';
        }
        else {
            this.message = "I'm read only!";
        }
    }
};
HelloWorldNgIfComponent = __decorate([
    Component({
        selector: 'hello-world-ngif',
        templateUrl: './hello-world-ngif.component.html'
    })
], HelloWorldNgIfComponent);
export { HelloWorldNgIfComponent };
