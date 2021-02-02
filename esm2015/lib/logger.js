// import { Directive } from '@angular/core';
import * as moment from 'moment';
import { Util } from '@easylib/util';
/**
 * Use `Logger` static methods to log to console.
 */
// @Directive()
export class Logger {
    static trace(...params) {
        Logger.callLog('trace', ...params);
    }
    static log(...params) {
        Logger.callLog('log', ...params);
    }
    static warn(...params) {
        Logger.callLog('warn', ...params);
    }
    static error(...params) {
        Logger.callLog('error', ...params);
    }
    static traceIf(...params) {
        Logger.callLogIf('trace', ...params);
    }
    static logIf(...params) {
        Logger.callLogIf('log', ...params);
    }
    static warnIf(...params) {
        Logger.callLogIf('warn', ...params);
    }
    static errorIf(...params) {
        Logger.callLogIf('error', ...params);
    }
    static callLogIf(logLevel, ...params) {
        const firstElement = params.shift();
        // console.log('callLogIf() logLevel:', logLevel, 'params:', params, 'obj:', obj);
        if ((Util.isObject(firstElement) &&
            firstElement.hasOwnProperty('logs') &&
            firstElement.logs === true)
            || firstElement === true) {
            Logger.callLog(logLevel, ...params);
        }
    }
    static callLog(logLevel, ...params) {
        // console.log('callLog() logLevel:', logLevel, 'params1:', JSON.parse(JSON.stringify(params)), 'params:', params);
        // console.log('callLog()... params[' + (typeof params) + '|' + params.length + ']:', params);
        // params.unshift('[' + moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '][' + Logger.getCallerName() + ']');
        params.unshift('\x1b[34m%s\x1b[32m%s\x1b[0m', moment().format('HH:mm:ss.SSS') + ' ', Logger.getCallerName() + ':');
        let consoleMethod;
        switch (logLevel) {
            // tslint:disable-next-line: no-console
            case 'trace':
                consoleMethod = console.trace;
                break;
            case 'log':
                consoleMethod = console.log;
                break;
            case 'warn':
                consoleMethod = console.warn;
                break;
            case 'error':
                consoleMethod = console.error;
                break;
        }
        if (consoleMethod) {
            consoleMethod.apply(Logger, params);
        }
    }
    static getCallerName(depth = 5) {
        const stack = new Error().stack;
        if (stack) {
            // console.log('stack:', stack);
            const stackArr = stack.split('\n', depth + 2);
            // console.log('stackArr:', stackArr);
            let rowStackArr = stackArr[depth - 1].split('at ', 2);
            // console.log('rowStackArr[1]:', rowStackArr[1]);
            if (rowStackArr[1].search(/^[\w\d]+.log(If)? \([\w]/) === 0) {
                rowStackArr = stackArr[depth].split('at ', 2);
            }
            // console.log('rowStackArr[1]:', rowStackArr[1]);
            if (rowStackArr[1].search(/^[\w\d]+.log(If)? \([\w]/) === 0) {
                rowStackArr = stackArr[depth + 1].split('at ', 2);
            }
            // console.log('rowStackArr[1]:', rowStackArr[1]);
            return rowStackArr.length > 1 ? rowStackArr[1] : rowStackArr[0].trim();
        }
        else {
            return '';
        }
        // const stackArr = stack.split('\n', depth + 2);
        // // console.log('stackArr:', stackArr);
        // let re = /([^(]+)@|at ([^(]+) \(/g;
        // // console.log('stackArr[depth + 1]:', stackArr[depth + 1]);
        // let aRegexResult = re.exec(stackArr[depth + 1]);
        // // console.log('aRegexResult:', aRegexResult);
        // if (!aRegexResult) {
        //   re = /([^(]+)@|at ([^(]+)/g;
        //   // console.log('********** stackArr[depth + 1]:', stackArr[depth + 1]);
        //   aRegexResult = re.exec(stackArr[depth + 1]);
        //   // console.log('********** aRegexResult:', aRegexResult);
        // }
        // return aRegexResult[1] || aRegexResult[2];
        // try {
        //   throw new Error();
        // } catch (e) {
        //   // const re = /(\w+)@|at (\w+) \(/g;
        //   const stack = e.stack;
        //   const stackArr = stack.split('\n', 3);
        //   const result = /(\w+)@|at ([\w\d\s]+) \(/g.exec(stackArr[2]);
        //   console.log('stack[' + (typeof stack) + ']:', stack);
        //   console.log('stackArr[' + (typeof stackArr) + ']:', stackArr);
        //   console.log('result[' + (typeof result) + ']:', result);
        //   console.log('result[' + (typeof result) + ']:', result);
        //   console.log('callerName:', result[2]);
        // }
        // console.log('callerName:', callerName);
        // {
        //   const stack = new Error().stack;
        //   console.log('stack:', stack);
        //   const stackArr = stack.split('\n', 3);
        //   console.log('stackArr:', stackArr);
        //   const re = /([^(]+)@|at ([^(]+) \(/g;
        //   const aRegexResult = re.exec(stackArr[2]);
        //   callerName = aRegexResult[1] || aRegexResult[2];
        // }
        // console.log('callerName:', callerName);
        // Logger.logs.push(message);
        // console.log(message);
        // Add each number to the total
        // console.log('log()... params[' + params.length + ']:', params)
        // let i = 0;
        // for (const arg of arguments) {
        //   console.log('argument[' + i + ']:', arg);
        //   i++;
        // }
        // console.log.call(arguments);
        // console.log('arguments.callee.caller:', arguments.callee.caller);
        // console.log('arguments.callee.caller.name:', arguments.callee.caller.name);
        // console.log('args.callee.caller:', args.callee.caller);
        // console.log('log.caller:', Logger.log.caller);
        // console.log('log.caller.name:', Logger.log.caller.name);
    }
}
/**
 * For color see: http://voidcanvas.com/make-console-log-output-colorful-and-stylish-in-browser-node/
 * @param logLevel trace | log | warn | error
 * @param params strings or object to log
 */
// private callLog(logLevel: string, ...params: any): void {
//   // console.log('callLog()... params[' + (typeof params) + '|' + params.length + ']:', params);
//   params.unshift('[' + moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '][' + this.getCallerName(3) + ']');
//   console[logLevel].apply(this, params);
// }
// private callLogIf(logLevel: string, ...params: any): void {
//   if (this.logs) {
//     params.unshift('\x1b[34m%s\x1b[32m%s\x1b[0m', moment().format('HH:mm:ss.SSS') + ' ', this.getCallerName(3) + ':');
//     console[logLevel].apply(this, params);
//   }
// }
// private getCallerName(depth: number = 3): string {
//   const stack = new Error().stack;
//   // console.log('stack:', stack);
//   const stackArr = stack.split('\n', depth + 2);
//   const rowStackArr = stackArr[depth + 1].split('at ', 2);
//   return rowStackArr.length > 1 ? rowStackArr[1] : rowStackArr[0].trim();
// }
// console.log('stackArr:', stackArr);
// let re = /([^(]+)@|at ([^(]+) \(/g;
// // console.log('stackArr[depth + 1]:', stackArr[depth + 1]);
// let aRegexResult = re.exec(stackArr[depth + 1]);
// // console.log('aRegexResult:', aRegexResult);
// if (!aRegexResult) {
//   re = /([^(]+)@|at ([^(]+)/g;
//   // console.log('********** stackArr[depth + 1]:', stackArr[depth + 1]);
//   aRegexResult = re.exec(stackArr[depth + 1]);
//   // console.log('********** aRegexResult:', aRegexResult);
// }
// return aRegexResult[1] || aRegexResult[2];
// trace(...params: any): void {
//   this.callLog('trace', ...params);
// }
// traceIf(...params: any): void {
//   this.callLogIf('trace', ...params);
// }
// log(...params: any): void {
//   this.callLog('log', ...params);
// }
// logIf(...params: any): void {
//   this.callLogIf('log', ...params);
// }
// warn(...params: any): void {
//   this.callLog('warn', ...params);
// }
// warnIf(...params: any): void {
//   this.callLogIf('warn', ...params);
// }
// error(...params: any): void {
//   this.callLog('error', ...params);
// }
// errorIf(...params: any): void {
//   this.callLogIf('error', ...params);
// }
// private callLogIf(logLevel: string, ...params: any) {
//   const obj = params.shift();
//   // console.log('callLogIf()... obj:', obj, 'obj.logs:', obj.logs);
//   // if (_.isObject(obj) && obj.logs) {
//   if (this.logs) {
//     // console.log('callLog()... params[' + (typeof params) + '|' + params.length + ']:', params);
//     params.unshift('[' + moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '][' + this.getCallerName() + ']');
//     console[logLevel].apply(this, params);
//   }
// }
// console.trace
// console.debug
// console.log
// console.info
// console.warn
// console.error
// console.table
// const label = 'Adolescent Irradiated Espionage Tortoises';
// console.group(label);
// console.info('Leo');
// console.info('Mike');
// console.info('Don');
// console.info('Raph');
// console.groupEnd(label);
// const spacing = '5px';
// const styles = `padding: ${spacing}; background-color: darkblue; color: white; font-style:
// italic; border: ${spacing} solid crimson; font-size: 2em;`;
// console.log('%cVariety is the spice of life', styles);
// console.time("answer time");
// alert("Click to continue");
// console.timeLog("answer time");
// alert("Do a bunch of other stuff...");
// console.timeEnd("answer time");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL2Vhc3lsaWIvbG9nL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDLE9BQU8sS0FBSyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckM7O0dBRUc7QUFDSCxlQUFlO0FBQ2YsTUFBTSxPQUFPLE1BQU07SUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQVc7UUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQVc7UUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQVc7UUFDeEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQVc7UUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQVc7UUFDM0IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQVc7UUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLE1BQU0s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QUE2RjtBQUM3Riw4REFBOEQ7QUFDOUQseURBQXlEO0FBRXpELCtCQUErQjtBQUMvQiw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUN6QyxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gJ0BlYXN5bGliL3V0aWwnO1xuXG4vKipcbiAqIFVzZSBgTG9nZ2VyYCBzdGF0aWMgbWV0aG9kcyB0byBsb2cgdG8gY29uc29sZS5cbiAqL1xuLy8gQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgTG9nZ2VyIHtcblxuICBzdGF0aWMgdHJhY2UoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIuY2FsbExvZygndHJhY2UnLCAuLi5wYXJhbXMpO1xuICB9XG4gIHN0YXRpYyBsb2coLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIuY2FsbExvZygnbG9nJywgLi4ucGFyYW1zKTtcbiAgfVxuICBzdGF0aWMgd2FybiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuICAgIExvZ2dlci5jYWxsTG9nKCd3YXJuJywgLi4ucGFyYW1zKTtcbiAgfVxuICBzdGF0aWMgZXJyb3IoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIuY2FsbExvZygnZXJyb3InLCAuLi5wYXJhbXMpO1xuICB9XG5cbiAgc3RhdGljIHRyYWNlSWYoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIuY2FsbExvZ0lmKCd0cmFjZScsIC4uLnBhcmFtcyk7XG4gIH1cbiAgc3RhdGljIGxvZ0lmKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLmNhbGxMb2dJZignbG9nJywgLi4ucGFyYW1zKTtcbiAgfVxuICBzdGF0aWMgd2FybklmKC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgTG9nZ2VyLmNhbGxMb2dJZignd2FybicsIC4uLnBhcmFtcyk7XG4gIH1cbiAgc3RhdGljIGVycm9ySWYoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBMb2dnZXIuY2FsbExvZ0lmKCdlcnJvcicsIC4uLnBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjYWxsTG9nSWYobG9nTGV2ZWw6IHN0cmluZywgLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBmaXJzdEVsZW1lbnQgPSBwYXJhbXMuc2hpZnQoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2FsbExvZ0lmKCkgbG9nTGV2ZWw6JywgbG9nTGV2ZWwsICdwYXJhbXM6JywgcGFyYW1zLCAnb2JqOicsIG9iaik7XG4gICAgaWYgKFxuICAgICAgKFV0aWwuaXNPYmplY3QoZmlyc3RFbGVtZW50KSAmJlxuICAgICAgZmlyc3RFbGVtZW50Lmhhc093blByb3BlcnR5KCdsb2dzJykgJiZcbiAgICAgIChmaXJzdEVsZW1lbnQgYXMgYW55KS5sb2dzID09PSB0cnVlKVxuICAgICAgfHwgZmlyc3RFbGVtZW50ID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBMb2dnZXIuY2FsbExvZyhsb2dMZXZlbCwgLi4ucGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjYWxsTG9nKGxvZ0xldmVsOiBzdHJpbmcsIC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NhbGxMb2coKSBsb2dMZXZlbDonLCBsb2dMZXZlbCwgJ3BhcmFtczE6JywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYXJhbXMpKSwgJ3BhcmFtczonLCBwYXJhbXMpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsTG9nKCkuLi4gcGFyYW1zWycgKyAodHlwZW9mIHBhcmFtcykgKyAnfCcgKyBwYXJhbXMubGVuZ3RoICsgJ106JywgcGFyYW1zKTtcbiAgICAvLyBwYXJhbXMudW5zaGlmdCgnWycgKyBtb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MuU1NTJykgKyAnXVsnICsgTG9nZ2VyLmdldENhbGxlck5hbWUoKSArICddJyk7XG4gICAgcGFyYW1zLnVuc2hpZnQoJ1xceDFiWzM0bSVzXFx4MWJbMzJtJXNcXHgxYlswbScsIG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MuU1NTJykgKyAnICcsIExvZ2dlci5nZXRDYWxsZXJOYW1lKCkgKyAnOicpO1xuICAgIGxldCBjb25zb2xlTWV0aG9kO1xuICAgIHN3aXRjaCAobG9nTGV2ZWwpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICAgICAgY2FzZSAndHJhY2UnOiBjb25zb2xlTWV0aG9kID0gY29uc29sZS50cmFjZTsgYnJlYWs7XG4gICAgICBjYXNlICdsb2cnOiBjb25zb2xlTWV0aG9kID0gY29uc29sZS5sb2c7IGJyZWFrO1xuICAgICAgY2FzZSAnd2Fybic6IGNvbnNvbGVNZXRob2QgPSBjb25zb2xlLndhcm47IGJyZWFrO1xuICAgICAgY2FzZSAnZXJyb3InOiBjb25zb2xlTWV0aG9kID0gY29uc29sZS5lcnJvcjsgYnJlYWs7XG4gICAgfVxuICAgIGlmIChjb25zb2xlTWV0aG9kKSB7XG4gICAgICBjb25zb2xlTWV0aG9kLmFwcGx5KExvZ2dlciwgcGFyYW1zKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldENhbGxlck5hbWUoZGVwdGg6IG51bWJlciA9IDUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgaWYgKHN0YWNrKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc3RhY2s6Jywgc3RhY2spO1xuICAgICAgY29uc3Qgc3RhY2tBcnIgPSBzdGFjay5zcGxpdCgnXFxuJywgZGVwdGggKyAyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFja0FycjonLCBzdGFja0Fycik7XG4gICAgICBsZXQgcm93U3RhY2tBcnIgPSBzdGFja0FycltkZXB0aCAtIDFdLnNwbGl0KCdhdCAnLCAyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdyb3dTdGFja0FyclsxXTonLCByb3dTdGFja0FyclsxXSk7XG4gICAgICBpZiAocm93U3RhY2tBcnJbMV0uc2VhcmNoKC9eW1xcd1xcZF0rLmxvZyhJZik/IFxcKFtcXHddLykgPT09IDApIHtcbiAgICAgICAgcm93U3RhY2tBcnIgPSBzdGFja0FycltkZXB0aF0uc3BsaXQoJ2F0ICcsIDIpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ3Jvd1N0YWNrQXJyWzFdOicsIHJvd1N0YWNrQXJyWzFdKTtcbiAgICAgIGlmIChyb3dTdGFja0FyclsxXS5zZWFyY2goL15bXFx3XFxkXSsubG9nKElmKT8gXFwoW1xcd10vKSA9PT0gMCkge1xuICAgICAgICByb3dTdGFja0FyciA9IHN0YWNrQXJyW2RlcHRoICsgMV0uc3BsaXQoJ2F0ICcsIDIpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ3Jvd1N0YWNrQXJyWzFdOicsIHJvd1N0YWNrQXJyWzFdKTtcbiAgICAgIHJldHVybiByb3dTdGFja0Fyci5sZW5ndGggPiAxID8gcm93U3RhY2tBcnJbMV0gOiByb3dTdGFja0FyclswXS50cmltKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IHN0YWNrQXJyID0gc3RhY2suc3BsaXQoJ1xcbicsIGRlcHRoICsgMik7XG4gICAgLy8gLy8gY29uc29sZS5sb2coJ3N0YWNrQXJyOicsIHN0YWNrQXJyKTtcbiAgICAvLyBsZXQgcmUgPSAvKFteKF0rKUB8YXQgKFteKF0rKSBcXCgvZztcbiAgICAvLyAvLyBjb25zb2xlLmxvZygnc3RhY2tBcnJbZGVwdGggKyAxXTonLCBzdGFja0FycltkZXB0aCArIDFdKTtcbiAgICAvLyBsZXQgYVJlZ2V4UmVzdWx0ID0gcmUuZXhlYyhzdGFja0FycltkZXB0aCArIDFdKTtcbiAgICAvLyAvLyBjb25zb2xlLmxvZygnYVJlZ2V4UmVzdWx0OicsIGFSZWdleFJlc3VsdCk7XG4gICAgLy8gaWYgKCFhUmVnZXhSZXN1bHQpIHtcbiAgICAvLyAgIHJlID0gLyhbXihdKylAfGF0IChbXihdKykvZztcbiAgICAvLyAgIC8vIGNvbnNvbGUubG9nKCcqKioqKioqKioqIHN0YWNrQXJyW2RlcHRoICsgMV06Jywgc3RhY2tBcnJbZGVwdGggKyAxXSk7XG4gICAgLy8gICBhUmVnZXhSZXN1bHQgPSByZS5leGVjKHN0YWNrQXJyW2RlcHRoICsgMV0pO1xuICAgIC8vICAgLy8gY29uc29sZS5sb2coJyoqKioqKioqKiogYVJlZ2V4UmVzdWx0OicsIGFSZWdleFJlc3VsdCk7XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBhUmVnZXhSZXN1bHRbMV0gfHwgYVJlZ2V4UmVzdWx0WzJdO1xuXG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgIC8vIGNvbnN0IHJlID0gLyhcXHcrKUB8YXQgKFxcdyspIFxcKC9nO1xuICAgIC8vICAgY29uc3Qgc3RhY2sgPSBlLnN0YWNrO1xuICAgIC8vICAgY29uc3Qgc3RhY2tBcnIgPSBzdGFjay5zcGxpdCgnXFxuJywgMyk7XG4gICAgLy8gICBjb25zdCByZXN1bHQgPSAvKFxcdyspQHxhdCAoW1xcd1xcZFxcc10rKSBcXCgvZy5leGVjKHN0YWNrQXJyWzJdKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGFja1snICsgKHR5cGVvZiBzdGFjaykgKyAnXTonLCBzdGFjayk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc3RhY2tBcnJbJyArICh0eXBlb2Ygc3RhY2tBcnIpICsgJ106Jywgc3RhY2tBcnIpO1xuICAgIC8vICAgY29uc29sZS5sb2coJ3Jlc3VsdFsnICsgKHR5cGVvZiByZXN1bHQpICsgJ106JywgcmVzdWx0KTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXN1bHRbJyArICh0eXBlb2YgcmVzdWx0KSArICddOicsIHJlc3VsdCk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnY2FsbGVyTmFtZTonLCByZXN1bHRbMl0pO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZygnY2FsbGVyTmFtZTonLCBjYWxsZXJOYW1lKTtcblxuICAgIC8vIHtcbiAgICAvLyAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc3RhY2s6Jywgc3RhY2spO1xuICAgIC8vICAgY29uc3Qgc3RhY2tBcnIgPSBzdGFjay5zcGxpdCgnXFxuJywgMyk7XG4gICAgLy8gICBjb25zb2xlLmxvZygnc3RhY2tBcnI6Jywgc3RhY2tBcnIpO1xuICAgIC8vICAgY29uc3QgcmUgPSAvKFteKF0rKUB8YXQgKFteKF0rKSBcXCgvZztcbiAgICAvLyAgIGNvbnN0IGFSZWdleFJlc3VsdCA9IHJlLmV4ZWMoc3RhY2tBcnJbMl0pO1xuICAgIC8vICAgY2FsbGVyTmFtZSA9IGFSZWdleFJlc3VsdFsxXSB8fCBhUmVnZXhSZXN1bHRbMl07XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKCdjYWxsZXJOYW1lOicsIGNhbGxlck5hbWUpO1xuXG4gICAgLy8gTG9nZ2VyLmxvZ3MucHVzaChtZXNzYWdlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAvLyBBZGQgZWFjaCBudW1iZXIgdG8gdGhlIHRvdGFsXG4gICAgLy8gY29uc29sZS5sb2coJ2xvZygpLi4uIHBhcmFtc1snICsgcGFyYW1zLmxlbmd0aCArICddOicsIHBhcmFtcylcbiAgICAvLyBsZXQgaSA9IDA7XG4gICAgLy8gZm9yIChjb25zdCBhcmcgb2YgYXJndW1lbnRzKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnYXJndW1lbnRbJyArIGkgKyAnXTonLCBhcmcpO1xuICAgIC8vICAgaSsrO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZy5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnYXJndW1lbnRzLmNhbGxlZS5jYWxsZXI6JywgYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcmd1bWVudHMuY2FsbGVlLmNhbGxlci5uYW1lOicsIGFyZ3VtZW50cy5jYWxsZWUuY2FsbGVyLm5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhcmdzLmNhbGxlZS5jYWxsZXI6JywgYXJncy5jYWxsZWUuY2FsbGVyKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nLmNhbGxlcjonLCBMb2dnZXIubG9nLmNhbGxlcik7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZy5jYWxsZXIubmFtZTonLCBMb2dnZXIubG9nLmNhbGxlci5uYW1lKTtcblxuICB9XG59XG5cbi8qKlxuICogRm9yIGNvbG9yIHNlZTogaHR0cDovL3ZvaWRjYW52YXMuY29tL21ha2UtY29uc29sZS1sb2ctb3V0cHV0LWNvbG9yZnVsLWFuZC1zdHlsaXNoLWluLWJyb3dzZXItbm9kZS9cbiAqIEBwYXJhbSBsb2dMZXZlbCB0cmFjZSB8IGxvZyB8IHdhcm4gfCBlcnJvclxuICogQHBhcmFtIHBhcmFtcyBzdHJpbmdzIG9yIG9iamVjdCB0byBsb2dcbiAqL1xuLy8gcHJpdmF0ZSBjYWxsTG9nKGxvZ0xldmVsOiBzdHJpbmcsIC4uLnBhcmFtczogYW55KTogdm9pZCB7XG4vLyAgIC8vIGNvbnNvbGUubG9nKCdjYWxsTG9nKCkuLi4gcGFyYW1zWycgKyAodHlwZW9mIHBhcmFtcykgKyAnfCcgKyBwYXJhbXMubGVuZ3RoICsgJ106JywgcGFyYW1zKTtcbi8vICAgcGFyYW1zLnVuc2hpZnQoJ1snICsgbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzLlNTUycpICsgJ11bJyArIHRoaXMuZ2V0Q2FsbGVyTmFtZSgzKSArICddJyk7XG4vLyAgIGNvbnNvbGVbbG9nTGV2ZWxdLmFwcGx5KHRoaXMsIHBhcmFtcyk7XG4vLyB9XG4vLyBwcml2YXRlIGNhbGxMb2dJZihsb2dMZXZlbDogc3RyaW5nLCAuLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuLy8gICBpZiAodGhpcy5sb2dzKSB7XG4vLyAgICAgcGFyYW1zLnVuc2hpZnQoJ1xceDFiWzM0bSVzXFx4MWJbMzJtJXNcXHgxYlswbScsIG1vbWVudCgpLmZvcm1hdCgnSEg6bW06c3MuU1NTJykgKyAnICcsIHRoaXMuZ2V0Q2FsbGVyTmFtZSgzKSArICc6Jyk7XG4vLyAgICAgY29uc29sZVtsb2dMZXZlbF0uYXBwbHkodGhpcywgcGFyYW1zKTtcbi8vICAgfVxuLy8gfVxuXG4vLyBwcml2YXRlIGdldENhbGxlck5hbWUoZGVwdGg6IG51bWJlciA9IDMpOiBzdHJpbmcge1xuLy8gICBjb25zdCBzdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuLy8gICAvLyBjb25zb2xlLmxvZygnc3RhY2s6Jywgc3RhY2spO1xuLy8gICBjb25zdCBzdGFja0FyciA9IHN0YWNrLnNwbGl0KCdcXG4nLCBkZXB0aCArIDIpO1xuLy8gICBjb25zdCByb3dTdGFja0FyciA9IHN0YWNrQXJyW2RlcHRoICsgMV0uc3BsaXQoJ2F0ICcsIDIpO1xuLy8gICByZXR1cm4gcm93U3RhY2tBcnIubGVuZ3RoID4gMSA/IHJvd1N0YWNrQXJyWzFdIDogcm93U3RhY2tBcnJbMF0udHJpbSgpO1xuLy8gfVxuXG4vLyBjb25zb2xlLmxvZygnc3RhY2tBcnI6Jywgc3RhY2tBcnIpO1xuLy8gbGV0IHJlID0gLyhbXihdKylAfGF0IChbXihdKykgXFwoL2c7XG4vLyAvLyBjb25zb2xlLmxvZygnc3RhY2tBcnJbZGVwdGggKyAxXTonLCBzdGFja0FycltkZXB0aCArIDFdKTtcbi8vIGxldCBhUmVnZXhSZXN1bHQgPSByZS5leGVjKHN0YWNrQXJyW2RlcHRoICsgMV0pO1xuLy8gLy8gY29uc29sZS5sb2coJ2FSZWdleFJlc3VsdDonLCBhUmVnZXhSZXN1bHQpO1xuLy8gaWYgKCFhUmVnZXhSZXN1bHQpIHtcbi8vICAgcmUgPSAvKFteKF0rKUB8YXQgKFteKF0rKS9nO1xuLy8gICAvLyBjb25zb2xlLmxvZygnKioqKioqKioqKiBzdGFja0FycltkZXB0aCArIDFdOicsIHN0YWNrQXJyW2RlcHRoICsgMV0pO1xuLy8gICBhUmVnZXhSZXN1bHQgPSByZS5leGVjKHN0YWNrQXJyW2RlcHRoICsgMV0pO1xuLy8gICAvLyBjb25zb2xlLmxvZygnKioqKioqKioqKiBhUmVnZXhSZXN1bHQ6JywgYVJlZ2V4UmVzdWx0KTtcbi8vIH1cbi8vIHJldHVybiBhUmVnZXhSZXN1bHRbMV0gfHwgYVJlZ2V4UmVzdWx0WzJdO1xuXG4vLyB0cmFjZSguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuLy8gICB0aGlzLmNhbGxMb2coJ3RyYWNlJywgLi4ucGFyYW1zKTtcbi8vIH1cbi8vIHRyYWNlSWYoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbi8vICAgdGhpcy5jYWxsTG9nSWYoJ3RyYWNlJywgLi4ucGFyYW1zKTtcbi8vIH1cbi8vIGxvZyguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuLy8gICB0aGlzLmNhbGxMb2coJ2xvZycsIC4uLnBhcmFtcyk7XG4vLyB9XG4vLyBsb2dJZiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuLy8gICB0aGlzLmNhbGxMb2dJZignbG9nJywgLi4ucGFyYW1zKTtcbi8vIH1cbi8vIHdhcm4oLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbi8vICAgdGhpcy5jYWxsTG9nKCd3YXJuJywgLi4ucGFyYW1zKTtcbi8vIH1cbi8vIHdhcm5JZiguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuLy8gICB0aGlzLmNhbGxMb2dJZignd2FybicsIC4uLnBhcmFtcyk7XG4vLyB9XG4vLyBlcnJvciguLi5wYXJhbXM6IGFueSk6IHZvaWQge1xuLy8gICB0aGlzLmNhbGxMb2coJ2Vycm9yJywgLi4ucGFyYW1zKTtcbi8vIH1cbi8vIGVycm9ySWYoLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHtcbi8vICAgdGhpcy5jYWxsTG9nSWYoJ2Vycm9yJywgLi4ucGFyYW1zKTtcbi8vIH1cblxuLy8gcHJpdmF0ZSBjYWxsTG9nSWYobG9nTGV2ZWw6IHN0cmluZywgLi4ucGFyYW1zOiBhbnkpIHtcbi8vICAgY29uc3Qgb2JqID0gcGFyYW1zLnNoaWZ0KCk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKCdjYWxsTG9nSWYoKS4uLiBvYmo6Jywgb2JqLCAnb2JqLmxvZ3M6Jywgb2JqLmxvZ3MpO1xuLy8gICAvLyBpZiAoXy5pc09iamVjdChvYmopICYmIG9iai5sb2dzKSB7XG4vLyAgIGlmICh0aGlzLmxvZ3MpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnY2FsbExvZygpLi4uIHBhcmFtc1snICsgKHR5cGVvZiBwYXJhbXMpICsgJ3wnICsgcGFyYW1zLmxlbmd0aCArICddOicsIHBhcmFtcyk7XG4vLyAgICAgcGFyYW1zLnVuc2hpZnQoJ1snICsgbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzLlNTUycpICsgJ11bJyArIHRoaXMuZ2V0Q2FsbGVyTmFtZSgpICsgJ10nKTtcbi8vICAgICBjb25zb2xlW2xvZ0xldmVsXS5hcHBseSh0aGlzLCBwYXJhbXMpO1xuLy8gICB9XG4vLyB9XG5cbi8vIGNvbnNvbGUudHJhY2Vcbi8vIGNvbnNvbGUuZGVidWdcbi8vIGNvbnNvbGUubG9nXG4vLyBjb25zb2xlLmluZm9cbi8vIGNvbnNvbGUud2FyblxuLy8gY29uc29sZS5lcnJvclxuLy8gY29uc29sZS50YWJsZVxuXG4vLyBjb25zdCBsYWJlbCA9ICdBZG9sZXNjZW50IElycmFkaWF0ZWQgRXNwaW9uYWdlIFRvcnRvaXNlcyc7XG4vLyBjb25zb2xlLmdyb3VwKGxhYmVsKTtcbi8vIGNvbnNvbGUuaW5mbygnTGVvJyk7XG4vLyBjb25zb2xlLmluZm8oJ01pa2UnKTtcbi8vIGNvbnNvbGUuaW5mbygnRG9uJyk7XG4vLyBjb25zb2xlLmluZm8oJ1JhcGgnKTtcbi8vIGNvbnNvbGUuZ3JvdXBFbmQobGFiZWwpO1xuXG4vLyBjb25zdCBzcGFjaW5nID0gJzVweCc7XG4vLyBjb25zdCBzdHlsZXMgPSBgcGFkZGluZzogJHtzcGFjaW5nfTsgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7IGNvbG9yOiB3aGl0ZTsgZm9udC1zdHlsZTpcbi8vIGl0YWxpYzsgYm9yZGVyOiAke3NwYWNpbmd9IHNvbGlkIGNyaW1zb247IGZvbnQtc2l6ZTogMmVtO2A7XG4vLyBjb25zb2xlLmxvZygnJWNWYXJpZXR5IGlzIHRoZSBzcGljZSBvZiBsaWZlJywgc3R5bGVzKTtcblxuLy8gY29uc29sZS50aW1lKFwiYW5zd2VyIHRpbWVcIik7XG4vLyBhbGVydChcIkNsaWNrIHRvIGNvbnRpbnVlXCIpO1xuLy8gY29uc29sZS50aW1lTG9nKFwiYW5zd2VyIHRpbWVcIik7XG4vLyBhbGVydChcIkRvIGEgYnVuY2ggb2Ygb3RoZXIgc3R1ZmYuLi5cIik7XG4vLyBjb25zb2xlLnRpbWVFbmQoXCJhbnN3ZXIgdGltZVwiKTtcbiJdfQ==