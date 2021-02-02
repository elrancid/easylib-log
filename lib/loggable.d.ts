/**
 * Extend `Loggable` in components and set boolean `logs` property
 * to enable logs. Use `this.log()` and the other methods to print to console
 * if `logs` is `true`.
 */
export declare abstract class Loggable {
    logs: boolean;
    constructor();
    trace(...params: any): void;
    log(...params: any): void;
    warn(...params: any): void;
    error(...params: any): void;
    traceIf(...params: any): void;
    logIf(...params: any): void;
    warnIf(...params: any): void;
    errorIf(...params: any): void;
}
