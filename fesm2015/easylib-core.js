import { ɵɵdefineInjectable, Injectable, Component, NgModule, Optional, SkipSelf } from '@angular/core';

class CoreService {
    constructor() { }
}
CoreService.ɵprov = ɵɵdefineInjectable({ factory: function CoreService_Factory() { return new CoreService(); }, token: CoreService, providedIn: "root" });
CoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
CoreService.ctorParameters = () => [];

class CoreComponent {
    constructor() { }
    ngOnInit() {
    }
}
CoreComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-core',
                template: `
    <p>
      core works!
    </p>
  `
            },] }
];
CoreComponent.ctorParameters = () => [];

/**
 * This abstract class used for module building by extending this class
 * prevents importing the module into somewhere else than root App Module.
 */
class EnsureImportedOnceModule {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded.
      You should only import Core modules in the AppModule only.`);
        }
    }
}

class CoreModule extends EnsureImportedOnceModule {
    // Stop the other modules from importing the core module.
    constructor(module) {
        super(module);
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CoreComponent],
                imports: [],
                exports: [CoreComponent]
            },] }
];
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CoreComponent, CoreModule, CoreService, EnsureImportedOnceModule };
//# sourceMappingURL=easylib-core.js.map
