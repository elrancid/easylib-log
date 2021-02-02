import { Component, Input } from '@angular/core';
import { Loggable } from './loggable';
/**
 * Extend `Loggable` in components and set boolean `logs` property
 * to enable logs. Use `this.log()` and the other methods to print to console
 * if `logs` is `true`.
 */
export class LoggableComponent extends Loggable {
    constructor() {
        super();
        this.logs = false;
    }
}
LoggableComponent.decorators = [
    { type: Component, args: [{
                template: ''
            },] }
];
LoggableComponent.ctorParameters = () => [];
LoggableComponent.propDecorators = {
    logs: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2FibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2Vhc3lsaWIvbG9nL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9sb2dnYWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0Qzs7OztHQUlHO0FBSUgsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFFBQVE7SUFJN0M7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUhELFNBQUksR0FBRyxLQUFLLENBQUM7SUFJdEIsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7bUJBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTG9nZ2FibGUgfSBmcm9tICcuL2xvZ2dhYmxlJztcblxuLyoqXG4gKiBFeHRlbmQgYExvZ2dhYmxlYCBpbiBjb21wb25lbnRzIGFuZCBzZXQgYm9vbGVhbiBgbG9nc2AgcHJvcGVydHlcbiAqIHRvIGVuYWJsZSBsb2dzLiBVc2UgYHRoaXMubG9nKClgIGFuZCB0aGUgb3RoZXIgbWV0aG9kcyB0byBwcmludCB0byBjb25zb2xlXG4gKiBpZiBgbG9nc2AgaXMgYHRydWVgLlxuICovXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dnYWJsZUNvbXBvbmVudCBleHRlbmRzIExvZ2dhYmxlIHtcblxuICBASW5wdXQoKSBsb2dzID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIHRyYWNlKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gIC8vICAgaWYgKHRoaXMubG9ncykge1xuICAvLyAgICAgTG9nZ2VyLnRyYWNlKC4uLnBhcmFtcyk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIGxvZyguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAvLyAgIGlmICh0aGlzLmxvZ3MpIHtcbiAgLy8gICAgIExvZ2dlci5sb2coLi4ucGFyYW1zKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gd2FybiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAvLyAgIGlmICh0aGlzLmxvZ3MpIHtcbiAgLy8gICAgIExvZ2dlci53YXJuKC4uLnBhcmFtcyk7XG4gIC8vICAgfVxuICAvLyB9XG4gIC8vIGVycm9yKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gIC8vICAgaWYgKHRoaXMubG9ncykge1xuICAvLyAgICAgTG9nZ2VyLmVycm9yKC4uLnBhcmFtcyk7XG4gIC8vICAgfVxuICAvLyB9XG59XG4iXX0=