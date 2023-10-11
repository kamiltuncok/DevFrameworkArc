import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HelloWorldDependencyInjectionComponent = class HelloWorldDependencyInjectionComponent {
    constructor(logger) {
        this.logger = logger;
        this.count = 0;
    }
    onLogMe() {
        this.logger.writeCount(this.count);
        this.count++;
    }
};
HelloWorldDependencyInjectionComponent = __decorate([
    Component({
        selector: 'hello-world-di',
        templateUrl: './hello-world-di.component.html'
    })
], HelloWorldDependencyInjectionComponent);
export { HelloWorldDependencyInjectionComponent };
