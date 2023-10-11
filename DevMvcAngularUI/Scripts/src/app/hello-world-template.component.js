import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HelloWorldTemplateComponent = class HelloWorldTemplateComponent {
    constructor() {
        this.message = 'I am read only!';
        this.canEdit = false;
    }
    onEditClick() {
        this.canEdit = !this.canEdit;
        if (this.canEdit) {
            this.message = 'You can edit me!';
        }
        else {
            this.message = 'I am read only!';
        }
    }
};
HelloWorldTemplateComponent = __decorate([
    Component({
        selector: 'hello-world-template',
        template: `
        <h2>Hello World Template</h2>
        <button type="button" (click)="onEditClick()">Make text editable!</button>
        <p [contentEditable]="canEdit">{{ message }}</p>
        `
    })
], HelloWorldTemplateComponent);
export { HelloWorldTemplateComponent };
