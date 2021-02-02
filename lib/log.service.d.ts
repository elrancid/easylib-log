/**
 * Use `LogService` to log to console.
 */
export declare class LogService {
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
