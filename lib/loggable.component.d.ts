import { Loggable } from './loggable';
/**
 * Extend `Loggable` in components and set boolean `logs` property
 * to enable logs. Use `this.log()` and the other methods to print to console
 * if `logs` is `true`.
 */
export declare class LoggableComponent extends Loggable {
    logs: boolean;
    constructor();
}
