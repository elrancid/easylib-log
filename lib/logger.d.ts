/**
 * Use `Logger` static methods to log to console.
 */
export declare class Logger {
    static trace(...params: any): void;
    static log(...params: any): void;
    static warn(...params: any): void;
    static error(...params: any): void;
    static traceIf(...params: any): void;
    static logIf(...params: any): void;
    static warnIf(...params: any): void;
    static errorIf(...params: any): void;
    private static callLogIf;
    private static callLog;
    private static getCallerName;
}
/**
 * For color see: http://voidcanvas.com/make-console-log-output-colorful-and-stylish-in-browser-node/
 * @param logLevel trace | log | warn | error
 * @param params strings or object to log
 */
