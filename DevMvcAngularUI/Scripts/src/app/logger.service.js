import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let Logger = class Logger {
    writeCount(count) {
        console.warn(count);
    }
};
Logger = __decorate([
    Injectable({ providedIn: 'root' })
], Logger);
export { Logger };
