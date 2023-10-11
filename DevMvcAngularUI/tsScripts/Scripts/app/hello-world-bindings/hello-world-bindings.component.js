import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HelloWorldBindingsComponent = class HelloWorldBindingsComponent {
    constructor() {
        this.fontColor = 'blue';
        this.sayHelloId = 1;
        this.canClick = true;
        this.message = 'Hello, World';
    }
    sayMessage() {
        alert(this.message);
    }
};
HelloWorldBindingsComponent = __decorate([
    Component({
        selector: 'hello-world-bindings',
        templateUrl: './hello-world-bindings.component.html'
    })
], HelloWorldBindingsComponent);
export { HelloWorldBindingsComponent };
//# sourceMappingURL=hello-world-bindings.component.js.map