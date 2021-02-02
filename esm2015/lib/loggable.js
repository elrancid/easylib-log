import { Logger } from './logger';
/**
 * Extend `Loggable` in components and set boolean `logs` property
 * to enable logs. Use `this.log()` and the other methods to print to console
 * if `logs` is `true`.
 */
export class Loggable {
    // constructor(private Logger: LoggerService) {
    constructor() {
        this.logs = false;
        this.log('Loggable constructor');
    }
    trace(...params) {
        if (this.logs) {
            Logger.trace(...params);
        }
    }
    log(...params) {
        if (this.logs) {
            Logger.log(...params);
        }
    }
    warn(...params) {
        if (this.logs) {
            Logger.warn(...params);
        }
    }
    error(...params) {
        if (this.logs) {
            Logger.error(...params);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2FibGUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvZWFzeWxpYi9sb2cvc3JjLyIsInNvdXJjZXMiOlsibGliL2xvZ2dhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFbEM7Ozs7R0FJRztBQUNILE1BQU0sT0FBZ0IsUUFBUTtJQUk1QiwrQ0FBK0M7SUFDL0M7UUFITyxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBSWxCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsS0FBSyxDQUFDLEdBQUcsTUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBQ0QsR0FBRyxDQUFDLEdBQUcsTUFBVztRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBQ0QsSUFBSSxDQUFDLEdBQUcsTUFBVztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBQ0QsS0FBSyxDQUFDLEdBQUcsTUFBVztRQUNsQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUcsTUFBVztRQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELEtBQUssQ0FBQyxHQUFHLE1BQVc7UUFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxNQUFNLENBQUMsR0FBRyxNQUFXO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsT0FBTyxDQUFDLEdBQUcsTUFBVztRQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnLi9sb2dnZXInO1xuXG4vKipcbiAqIEV4dGVuZCBgTG9nZ2FibGVgIGluIGNvbXBvbmVudHMgYW5kIHNldCBib29sZWFuIGBsb2dzYCBwcm9wZXJ0eVxuICogdG8gZW5hYmxlIGxvZ3MuIFVzZSBgdGhpcy5sb2coKWAgYW5kIHRoZSBvdGhlciBtZXRob2RzIHRvIHByaW50IHRvIGNvbnNvbGVcbiAqIGlmIGBsb2dzYCBpcyBgdHJ1ZWAuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dnYWJsZSB7XG5cbiAgcHVibGljIGxvZ3MgPSBmYWxzZTtcblxuICAvLyBjb25zdHJ1Y3Rvcihwcml2YXRlIExvZ2dlcjogTG9nZ2VyU2VydmljZSkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmxvZygnTG9nZ2FibGUgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHRyYWNlKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9ncykge1xuICAgICAgTG9nZ2VyLnRyYWNlKC4uLnBhcmFtcyk7XG4gICAgfVxuICB9XG4gIGxvZyguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvZ3MpIHtcbiAgICAgIExvZ2dlci5sb2coLi4ucGFyYW1zKTtcbiAgICB9XG4gIH1cbiAgd2FybiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxvZ3MpIHtcbiAgICAgIExvZ2dlci53YXJuKC4uLnBhcmFtcyk7XG4gICAgfVxuICB9XG4gIGVycm9yKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubG9ncykge1xuICAgICAgTG9nZ2VyLmVycm9yKC4uLnBhcmFtcyk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2VJZiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIExvZ2dlci50cmFjZUlmKC4uLnBhcmFtcyk7XG4gIH1cbiAgbG9nSWYoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIubG9nSWYoLi4ucGFyYW1zKTtcbiAgfVxuICB3YXJuSWYoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIud2FybklmKC4uLnBhcmFtcyk7XG4gIH1cbiAgZXJyb3JJZiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIExvZ2dlci5lcnJvcklmKC4uLnBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==