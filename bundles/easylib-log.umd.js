(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment'), require('@easylib/util'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@easylib/log', ['exports', 'moment', '@easylib/util', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.easylib = global.easylib || {}, global.easylib.log = {}), global.moment, global.util, global.ng.core));
}(this, (function (exports, moment, util, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Use `Logger` static methods to log to console.
     */
    // @Directive()
    var Logger = /** @class */ (function () {
        function Logger() {
        }
        Logger.trace = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLog.apply(Logger, __spread(['trace'], params));
        };
        Logger.log = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLog.apply(Logger, __spread(['log'], params));
        };
        Logger.warn = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLog.apply(Logger, __spread(['warn'], params));
        };
        Logger.error = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLog.apply(Logger, __spread(['error'], params));
        };
        Logger.traceIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLogIf.apply(Logger, __spread(['trace'], params));
        };
        Logger.logIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLogIf.apply(Logger, __spread(['log'], params));
        };
        Logger.warnIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLogIf.apply(Logger, __spread(['warn'], params));
        };
        Logger.errorIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.callLogIf.apply(Logger, __spread(['error'], params));
        };
        Logger.callLogIf = function (logLevel) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var firstElement = params.shift();
            // console.log('callLogIf() logLevel:', logLevel, 'params:', params, 'obj:', obj);
            if ((util.Util.isObject(firstElement) &&
                firstElement.hasOwnProperty('logs') &&
                firstElement.logs === true)
                || firstElement === true) {
                Logger.callLog.apply(Logger, __spread([logLevel], params));
            }
        };
        Logger.callLog = function (logLevel) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            // console.log('callLog() logLevel:', logLevel, 'params1:', JSON.parse(JSON.stringify(params)), 'params:', params);
            // console.log('callLog()... params[' + (typeof params) + '|' + params.length + ']:', params);
            // params.unshift('[' + moment().format('YYYY-MM-DD HH:mm:ss.SSS') + '][' + Logger.getCallerName() + ']');
            params.unshift('\x1b[34m%s\x1b[32m%s\x1b[0m', moment__namespace().format('HH:mm:ss.SSS') + ' ', Logger.getCallerName() + ':');
            var consoleMethod;
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
        };
        Logger.getCallerName = function (depth) {
            if (depth === void 0) { depth = 5; }
            var stack = new Error().stack;
            if (stack) {
                // console.log('stack:', stack);
                var stackArr = stack.split('\n', depth + 2);
                // console.log('stackArr:', stackArr);
                var rowStackArr = stackArr[depth - 1].split('at ', 2);
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
        };
        return Logger;
    }());
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

    /**
     * Use `LogService` to log to console.
     */
    var LogService = /** @class */ (function () {
        function LogService() {
            // this.log('*** LogService constructor');
        }
        LogService.prototype.trace = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.trace.apply(Logger, __spread(params));
        };
        LogService.prototype.log = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.log.apply(Logger, __spread(params));
        };
        LogService.prototype.warn = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.warn.apply(Logger, __spread(params));
        };
        LogService.prototype.error = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.error.apply(Logger, __spread(params));
        };
        LogService.prototype.traceIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.traceIf.apply(Logger, __spread(params));
        };
        LogService.prototype.logIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.logIf.apply(Logger, __spread(params));
        };
        LogService.prototype.warnIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.warnIf.apply(Logger, __spread(params));
        };
        LogService.prototype.errorIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.errorIf.apply(Logger, __spread(params));
        };
        return LogService;
    }());
    LogService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogService_Factory() { return new LogService(); }, token: LogService, providedIn: "root" });
    LogService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    LogService.ctorParameters = function () { return []; };

    /**
     * Extend `Loggable` in components and set boolean `logs` property
     * to enable logs. Use `this.log()` and the other methods to print to console
     * if `logs` is `true`.
     */
    var Loggable = /** @class */ (function () {
        // constructor(private Logger: LoggerService) {
        function Loggable() {
            this.logs = false;
            this.log('Loggable constructor');
        }
        Loggable.prototype.trace = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            if (this.logs) {
                Logger.trace.apply(Logger, __spread(params));
            }
        };
        Loggable.prototype.log = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            if (this.logs) {
                Logger.log.apply(Logger, __spread(params));
            }
        };
        Loggable.prototype.warn = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            if (this.logs) {
                Logger.warn.apply(Logger, __spread(params));
            }
        };
        Loggable.prototype.error = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            if (this.logs) {
                Logger.error.apply(Logger, __spread(params));
            }
        };
        Loggable.prototype.traceIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.traceIf.apply(Logger, __spread(params));
        };
        Loggable.prototype.logIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.logIf.apply(Logger, __spread(params));
        };
        Loggable.prototype.warnIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.warnIf.apply(Logger, __spread(params));
        };
        Loggable.prototype.errorIf = function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            Logger.errorIf.apply(Logger, __spread(params));
        };
        return Loggable;
    }());

    /**
     * Extend `Loggable` in components and set boolean `logs` property
     * to enable logs. Use `this.log()` and the other methods to print to console
     * if `logs` is `true`.
     */
    var LoggableComponent = /** @class */ (function (_super) {
        __extends(LoggableComponent, _super);
        function LoggableComponent() {
            var _this = _super.call(this) || this;
            _this.logs = false;
            return _this;
        }
        return LoggableComponent;
    }(Loggable));
    LoggableComponent.decorators = [
        { type: i0.Component, args: [{
                    template: ''
                },] }
    ];
    LoggableComponent.ctorParameters = function () { return []; };
    LoggableComponent.propDecorators = {
        logs: [{ type: i0.Input }]
    };

    var LogModule = /** @class */ (function () {
        function LogModule() {
        }
        return LogModule;
    }());
    LogModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [LoggableComponent],
                    imports: [],
                    exports: [LoggableComponent]
                },] }
    ];

    /*
     * Public API Surface of log
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LogModule = LogModule;
    exports.LogService = LogService;
    exports.LoggableComponent = LoggableComponent;
    exports.Logger = Logger;
    exports.ɵa = Loggable;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=easylib-log.umd.js.map
