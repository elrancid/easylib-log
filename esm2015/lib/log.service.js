import { Injectable } from '@angular/core';
// import { CoreModule } from '../core.module';
import { Logger } from './logger';
import * as i0 from "@angular/core";
/**
 * Use `LogService` to log to console.
 */
export class LogService {
    constructor() {
        // this.log('*** LogService constructor');
    }
    trace(...params) {
        Logger.trace(...params);
    }
    log(...params) {
        Logger.log(...params);
    }
    warn(...params) {
        Logger.warn(...params);
    }
    error(...params) {
        Logger.error(...params);
    }
    traceIf(...params) {
        Logger.traceIf(...params);
    }
    logIf(...params) {
        Logger.logIf(...params);
    }
    warnIf(...params) {
        Logger.warnIf(...params);
    }
    errorIf(...params) {
        Logger.errorIf(...params);
    }
}
LogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });
LogService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LogService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvZWFzeWxpYi9sb2cvc3JjLyIsInNvdXJjZXMiOlsibGliL2xvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsK0NBQStDO0FBQy9DLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7O0FBRWxDOztHQUVHO0FBTUgsTUFBTSxPQUFPLFVBQVU7SUFFckI7UUFDRSwwQ0FBMEM7SUFDNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFHLE1BQVc7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxHQUFHLENBQUMsR0FBRyxNQUFXO1FBQ2hCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBVztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELEtBQUssQ0FBQyxHQUFHLE1BQVc7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBRyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsTUFBVztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELE1BQU0sQ0FBQyxHQUFHLE1BQVc7UUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxPQUFPLENBQUMsR0FBRyxNQUFXO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7O1lBbkNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUduQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuLi9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL2xvZ2dlcic7XG5cbi8qKlxuICogVXNlIGBMb2dTZXJ2aWNlYCB0byBsb2cgdG8gY29uc29sZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIC8vIHByb3ZpZGVkSW46IENvcmVNb2R1bGUsXG4gIC8vIHByb3ZpZGVkSW46ICdhbnknLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0aGlzLmxvZygnKioqIExvZ1NlcnZpY2UgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHRyYWNlKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLnRyYWNlKC4uLnBhcmFtcyk7XG4gIH1cbiAgbG9nKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLmxvZyguLi5wYXJhbXMpO1xuICB9XG4gIHdhcm4oLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIud2FybiguLi5wYXJhbXMpO1xuICB9XG4gIGVycm9yKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLmVycm9yKC4uLnBhcmFtcyk7XG4gIH1cblxuICB0cmFjZUlmKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLnRyYWNlSWYoLi4ucGFyYW1zKTtcbiAgfVxuICBsb2dJZiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIExvZ2dlci5sb2dJZiguLi5wYXJhbXMpO1xuICB9XG4gIHdhcm5JZiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIExvZ2dlci53YXJuSWYoLi4ucGFyYW1zKTtcbiAgfVxuICBlcnJvcklmKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLmVycm9ySWYoLi4ucGFyYW1zKTtcbiAgfVxufVxuIl19