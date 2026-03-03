var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
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
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    });
    __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/ajv/dist/runtime/equal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports2.default = equal;
  }
});

// node_modules/@companion-module/base/generated/validate_manifest.js
var require_validate_manifest = __commonJS({
  "node_modules/@companion-module/base/generated/validate_manifest.js"(exports2, module2) {
    "use strict";
    module2.exports = validate10;
    module2.exports.default = validate10;
    var schema11 = { "$schema": "http://json-schema.org/draft-07/schema#", "type": "object", "title": "ModuleManifest", "properties": { "$schema": { "type": "string" }, "id": { "type": "string", "description": "Unique identifier for the module" }, "name": { "type": "string", "description": "Name of the module" }, "shortname": { "type": "string" }, "description": { "type": "string", "description": "Description of the module " }, "version": { "type": "string", "description": "Current version of the module" }, "isPrerelease": { "type": "boolean", "description": "Is this a pre-release version" }, "license": { "type": "string", "description": "SPDX identifier for license of the module" }, "repository": { "type": "string", "description": "URL to the source repository" }, "bugs": { "type": "string", "description": "URL to bug tracker" }, "maintainers": { "type": "array", "description": "List of active maintiners", "uniqueItems": true, "items": { "type": "object", "title": "ModuleManifestMaintainer", "properties": { "name": { "type": "string" }, "email": { "type": "string" }, "github": { "type": "string" }, "url": { "type": "string" } }, "required": ["name"], "additionalProperties": false } }, "legacyIds": { "type": "array", "description": "If the module had a different unique identifier previously, then specify it here", "uniqueItems": true, "items": { "type": "string" } }, "runtime": { "type": "object", "title": "ModuleManifestRuntime", "description": "Information on how to execute the module", "properties": { "type": { "type": "string", "description": "Type of the module. Must be: node18 or node22", "enum": ["node18", "node22"] }, "api": { "type": "string", "description": "Which host-api does it use. In the future alternate options will be allowed", "enum": ["nodejs-ipc"] }, "apiVersion": { "type": "string", "description": "The version of the host-api used" }, "entrypoint": { "type": "string", "description": "Entrypoint to pass to the runtime. eg index.js" }, "permissions": { "type": "object", "description": "Permissions required by the module. This is used to inform the user of the permissions required by the module.\nNote: this requires the node22 or newer runtime", "properties": { "worker-threads": { "type": "boolean", "description": "Enable if the module uses worker threads" }, "child-process": { "type": "boolean", "description": "Enable if the module uses child processes" }, "native-addons": { "type": "boolean", "description": "Enable if the module uses native addons" }, "filesystem": { "type": "boolean", "description": "Enable if the module requires read/write access to the filesystem" } }, "additionalProperties": false } }, "required": ["type", "api", "apiVersion", "entrypoint"] }, "manufacturer": { "type": "string" }, "products": { "type": "array", "uniqueItems": true, "items": { "type": "string" }, "minItems": 1 }, "keywords": { "type": "array", "uniqueItems": true, "items": { "type": "string" } }, "bonjourQueries": { "type": "object", "description": "If the device or software for your module supports bonjour announcements, Companion will offer an easy way to watch for these announcements.\nEach query you define must have a matching config field of type 'bonjour-device' with the same name", "patternProperties": { "": { "oneOf": [{ "$ref": "#/definitions/bonjourQuery" }, { "type": "array", "items": { "$ref": "#/definitions/bonjourQuery" } }] } } } }, "required": ["id", "name", "shortname", "description", "version", "license", "repository", "bugs", "maintainers", "legacyIds", "runtime", "manufacturer", "products", "keywords"], "definitions": { "bonjourQuery": { "type": "object", "title": "ModuleBonjourQuery", "description": "", "properties": { "type": { "type": "string" }, "protocol": { "type": "string", "enum": ["tcp", "udp"] }, "port": { "type": "number" }, "txt": { "type": "object", "description": "Match on any txt values returned in the query. This is useful to filter out devices of the same 'type' that are not supported", "patternProperties": { "": { "type": "string" } } } }, "required": ["type", "protocol"] } } };
    var schema12 = { "type": "object", "title": "ModuleBonjourQuery", "description": "", "properties": { "type": { "type": "string" }, "protocol": { "type": "string", "enum": ["tcp", "udp"] }, "port": { "type": "number" }, "txt": { "type": "object", "description": "Match on any txt values returned in the query. This is useful to filter out devices of the same 'type' that are not supported", "patternProperties": { "": { "type": "string" } } } }, "required": ["type", "protocol"] };
    var func0 = require_equal().default;
    var pattern0 = new RegExp("", "u");
    function validate10(data, { instancePath = "", parentData, parentDataProperty, rootData = data } = {}) {
      let vErrors = null;
      let errors = 0;
      if (errors === 0) {
        if (data && typeof data == "object" && !Array.isArray(data)) {
          let missing0;
          if (data.id === void 0 && (missing0 = "id") || data.name === void 0 && (missing0 = "name") || data.shortname === void 0 && (missing0 = "shortname") || data.description === void 0 && (missing0 = "description") || data.version === void 0 && (missing0 = "version") || data.license === void 0 && (missing0 = "license") || data.repository === void 0 && (missing0 = "repository") || data.bugs === void 0 && (missing0 = "bugs") || data.maintainers === void 0 && (missing0 = "maintainers") || data.legacyIds === void 0 && (missing0 = "legacyIds") || data.runtime === void 0 && (missing0 = "runtime") || data.manufacturer === void 0 && (missing0 = "manufacturer") || data.products === void 0 && (missing0 = "products") || data.keywords === void 0 && (missing0 = "keywords")) {
            validate10.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
            return false;
          } else {
            if (data.$schema !== void 0) {
              const _errs1 = errors;
              if (typeof data.$schema !== "string") {
                validate10.errors = [{ instancePath: instancePath + "/$schema", schemaPath: "#/properties/%24schema/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs1 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.id !== void 0) {
                const _errs3 = errors;
                if (typeof data.id !== "string") {
                  validate10.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs3 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.name !== void 0) {
                  const _errs5 = errors;
                  if (typeof data.name !== "string") {
                    validate10.errors = [{ instancePath: instancePath + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs5 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.shortname !== void 0) {
                    const _errs7 = errors;
                    if (typeof data.shortname !== "string") {
                      validate10.errors = [{ instancePath: instancePath + "/shortname", schemaPath: "#/properties/shortname/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    var valid0 = _errs7 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.description !== void 0) {
                      const _errs9 = errors;
                      if (typeof data.description !== "string") {
                        validate10.errors = [{ instancePath: instancePath + "/description", schemaPath: "#/properties/description/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid0 = _errs9 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.version !== void 0) {
                        const _errs11 = errors;
                        if (typeof data.version !== "string") {
                          validate10.errors = [{ instancePath: instancePath + "/version", schemaPath: "#/properties/version/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                        var valid0 = _errs11 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.isPrerelease !== void 0) {
                          const _errs13 = errors;
                          if (typeof data.isPrerelease !== "boolean") {
                            validate10.errors = [{ instancePath: instancePath + "/isPrerelease", schemaPath: "#/properties/isPrerelease/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                            return false;
                          }
                          var valid0 = _errs13 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.license !== void 0) {
                            const _errs15 = errors;
                            if (typeof data.license !== "string") {
                              validate10.errors = [{ instancePath: instancePath + "/license", schemaPath: "#/properties/license/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid0 = _errs15 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                            if (data.repository !== void 0) {
                              const _errs17 = errors;
                              if (typeof data.repository !== "string") {
                                validate10.errors = [{ instancePath: instancePath + "/repository", schemaPath: "#/properties/repository/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid0 = _errs17 === errors;
                            } else {
                              var valid0 = true;
                            }
                            if (valid0) {
                              if (data.bugs !== void 0) {
                                const _errs19 = errors;
                                if (typeof data.bugs !== "string") {
                                  validate10.errors = [{ instancePath: instancePath + "/bugs", schemaPath: "#/properties/bugs/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid0 = _errs19 === errors;
                              } else {
                                var valid0 = true;
                              }
                              if (valid0) {
                                if (data.maintainers !== void 0) {
                                  let data10 = data.maintainers;
                                  const _errs21 = errors;
                                  if (errors === _errs21) {
                                    if (Array.isArray(data10)) {
                                      var valid1 = true;
                                      const len0 = data10.length;
                                      for (let i0 = 0; i0 < len0; i0++) {
                                        let data11 = data10[i0];
                                        const _errs23 = errors;
                                        if (errors === _errs23) {
                                          if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
                                            let missing1;
                                            if (data11.name === void 0 && (missing1 = "name")) {
                                              validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0, schemaPath: "#/properties/maintainers/items/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                                              return false;
                                            } else {
                                              const _errs25 = errors;
                                              for (const key0 in data11) {
                                                if (!(key0 === "name" || key0 === "email" || key0 === "github" || key0 === "url")) {
                                                  validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0, schemaPath: "#/properties/maintainers/items/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                                                  return false;
                                                  break;
                                                }
                                              }
                                              if (_errs25 === errors) {
                                                if (data11.name !== void 0) {
                                                  const _errs26 = errors;
                                                  if (typeof data11.name !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/name", schemaPath: "#/properties/maintainers/items/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid2 = _errs26 === errors;
                                                } else {
                                                  var valid2 = true;
                                                }
                                                if (valid2) {
                                                  if (data11.email !== void 0) {
                                                    const _errs28 = errors;
                                                    if (typeof data11.email !== "string") {
                                                      validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/email", schemaPath: "#/properties/maintainers/items/properties/email/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                      return false;
                                                    }
                                                    var valid2 = _errs28 === errors;
                                                  } else {
                                                    var valid2 = true;
                                                  }
                                                  if (valid2) {
                                                    if (data11.github !== void 0) {
                                                      const _errs30 = errors;
                                                      if (typeof data11.github !== "string") {
                                                        validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/github", schemaPath: "#/properties/maintainers/items/properties/github/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                        return false;
                                                      }
                                                      var valid2 = _errs30 === errors;
                                                    } else {
                                                      var valid2 = true;
                                                    }
                                                    if (valid2) {
                                                      if (data11.url !== void 0) {
                                                        const _errs32 = errors;
                                                        if (typeof data11.url !== "string") {
                                                          validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0 + "/url", schemaPath: "#/properties/maintainers/items/properties/url/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                          return false;
                                                        }
                                                        var valid2 = _errs32 === errors;
                                                      } else {
                                                        var valid2 = true;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            validate10.errors = [{ instancePath: instancePath + "/maintainers/" + i0, schemaPath: "#/properties/maintainers/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                            return false;
                                          }
                                        }
                                        var valid1 = _errs23 === errors;
                                        if (!valid1) {
                                          break;
                                        }
                                      }
                                      if (valid1) {
                                        let i1 = data10.length;
                                        let j0;
                                        if (i1 > 1) {
                                          outer0: for (; i1--; ) {
                                            for (j0 = i1; j0--; ) {
                                              if (func0(data10[i1], data10[j0])) {
                                                validate10.errors = [{ instancePath: instancePath + "/maintainers", schemaPath: "#/properties/maintainers/uniqueItems", keyword: "uniqueItems", params: { i: i1, j: j0 }, message: "must NOT have duplicate items (items ## " + j0 + " and " + i1 + " are identical)" }];
                                                return false;
                                                break outer0;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      validate10.errors = [{ instancePath: instancePath + "/maintainers", schemaPath: "#/properties/maintainers/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                      return false;
                                    }
                                  }
                                  var valid0 = _errs21 === errors;
                                } else {
                                  var valid0 = true;
                                }
                                if (valid0) {
                                  if (data.legacyIds !== void 0) {
                                    let data16 = data.legacyIds;
                                    const _errs34 = errors;
                                    if (errors === _errs34) {
                                      if (Array.isArray(data16)) {
                                        var valid4 = true;
                                        const len1 = data16.length;
                                        for (let i2 = 0; i2 < len1; i2++) {
                                          const _errs36 = errors;
                                          if (typeof data16[i2] !== "string") {
                                            validate10.errors = [{ instancePath: instancePath + "/legacyIds/" + i2, schemaPath: "#/properties/legacyIds/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                            return false;
                                          }
                                          var valid4 = _errs36 === errors;
                                          if (!valid4) {
                                            break;
                                          }
                                        }
                                        if (valid4) {
                                          let i3 = data16.length;
                                          let j1;
                                          if (i3 > 1) {
                                            const indices0 = {};
                                            for (; i3--; ) {
                                              let item0 = data16[i3];
                                              if (typeof item0 !== "string") {
                                                continue;
                                              }
                                              if (typeof indices0[item0] == "number") {
                                                j1 = indices0[item0];
                                                validate10.errors = [{ instancePath: instancePath + "/legacyIds", schemaPath: "#/properties/legacyIds/uniqueItems", keyword: "uniqueItems", params: { i: i3, j: j1 }, message: "must NOT have duplicate items (items ## " + j1 + " and " + i3 + " are identical)" }];
                                                return false;
                                                break;
                                              }
                                              indices0[item0] = i3;
                                            }
                                          }
                                        }
                                      } else {
                                        validate10.errors = [{ instancePath: instancePath + "/legacyIds", schemaPath: "#/properties/legacyIds/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                        return false;
                                      }
                                    }
                                    var valid0 = _errs34 === errors;
                                  } else {
                                    var valid0 = true;
                                  }
                                  if (valid0) {
                                    if (data.runtime !== void 0) {
                                      let data18 = data.runtime;
                                      const _errs38 = errors;
                                      if (errors === _errs38) {
                                        if (data18 && typeof data18 == "object" && !Array.isArray(data18)) {
                                          let missing2;
                                          if (data18.type === void 0 && (missing2 = "type") || data18.api === void 0 && (missing2 = "api") || data18.apiVersion === void 0 && (missing2 = "apiVersion") || data18.entrypoint === void 0 && (missing2 = "entrypoint")) {
                                            validate10.errors = [{ instancePath: instancePath + "/runtime", schemaPath: "#/properties/runtime/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }];
                                            return false;
                                          } else {
                                            if (data18.type !== void 0) {
                                              let data19 = data18.type;
                                              const _errs40 = errors;
                                              if (typeof data19 !== "string") {
                                                validate10.errors = [{ instancePath: instancePath + "/runtime/type", schemaPath: "#/properties/runtime/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                return false;
                                              }
                                              if (!(data19 === "node18" || data19 === "node22")) {
                                                validate10.errors = [{ instancePath: instancePath + "/runtime/type", schemaPath: "#/properties/runtime/properties/type/enum", keyword: "enum", params: { allowedValues: schema11.properties.runtime.properties.type.enum }, message: "must be equal to one of the allowed values" }];
                                                return false;
                                              }
                                              var valid6 = _errs40 === errors;
                                            } else {
                                              var valid6 = true;
                                            }
                                            if (valid6) {
                                              if (data18.api !== void 0) {
                                                let data20 = data18.api;
                                                const _errs42 = errors;
                                                if (typeof data20 !== "string") {
                                                  validate10.errors = [{ instancePath: instancePath + "/runtime/api", schemaPath: "#/properties/runtime/properties/api/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                  return false;
                                                }
                                                if (!(data20 === "nodejs-ipc")) {
                                                  validate10.errors = [{ instancePath: instancePath + "/runtime/api", schemaPath: "#/properties/runtime/properties/api/enum", keyword: "enum", params: { allowedValues: schema11.properties.runtime.properties.api.enum }, message: "must be equal to one of the allowed values" }];
                                                  return false;
                                                }
                                                var valid6 = _errs42 === errors;
                                              } else {
                                                var valid6 = true;
                                              }
                                              if (valid6) {
                                                if (data18.apiVersion !== void 0) {
                                                  const _errs44 = errors;
                                                  if (typeof data18.apiVersion !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/runtime/apiVersion", schemaPath: "#/properties/runtime/properties/apiVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid6 = _errs44 === errors;
                                                } else {
                                                  var valid6 = true;
                                                }
                                                if (valid6) {
                                                  if (data18.entrypoint !== void 0) {
                                                    const _errs46 = errors;
                                                    if (typeof data18.entrypoint !== "string") {
                                                      validate10.errors = [{ instancePath: instancePath + "/runtime/entrypoint", schemaPath: "#/properties/runtime/properties/entrypoint/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                      return false;
                                                    }
                                                    var valid6 = _errs46 === errors;
                                                  } else {
                                                    var valid6 = true;
                                                  }
                                                  if (valid6) {
                                                    if (data18.permissions !== void 0) {
                                                      let data23 = data18.permissions;
                                                      const _errs48 = errors;
                                                      if (errors === _errs48) {
                                                        if (data23 && typeof data23 == "object" && !Array.isArray(data23)) {
                                                          const _errs50 = errors;
                                                          for (const key1 in data23) {
                                                            if (!(key1 === "worker-threads" || key1 === "child-process" || key1 === "native-addons" || key1 === "filesystem")) {
                                                              validate10.errors = [{ instancePath: instancePath + "/runtime/permissions", schemaPath: "#/properties/runtime/properties/permissions/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key1 }, message: "must NOT have additional properties" }];
                                                              return false;
                                                              break;
                                                            }
                                                          }
                                                          if (_errs50 === errors) {
                                                            if (data23["worker-threads"] !== void 0) {
                                                              const _errs51 = errors;
                                                              if (typeof data23["worker-threads"] !== "boolean") {
                                                                validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/worker-threads", schemaPath: "#/properties/runtime/properties/permissions/properties/worker-threads/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                return false;
                                                              }
                                                              var valid7 = _errs51 === errors;
                                                            } else {
                                                              var valid7 = true;
                                                            }
                                                            if (valid7) {
                                                              if (data23["child-process"] !== void 0) {
                                                                const _errs53 = errors;
                                                                if (typeof data23["child-process"] !== "boolean") {
                                                                  validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/child-process", schemaPath: "#/properties/runtime/properties/permissions/properties/child-process/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                  return false;
                                                                }
                                                                var valid7 = _errs53 === errors;
                                                              } else {
                                                                var valid7 = true;
                                                              }
                                                              if (valid7) {
                                                                if (data23["native-addons"] !== void 0) {
                                                                  const _errs55 = errors;
                                                                  if (typeof data23["native-addons"] !== "boolean") {
                                                                    validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/native-addons", schemaPath: "#/properties/runtime/properties/permissions/properties/native-addons/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                    return false;
                                                                  }
                                                                  var valid7 = _errs55 === errors;
                                                                } else {
                                                                  var valid7 = true;
                                                                }
                                                                if (valid7) {
                                                                  if (data23.filesystem !== void 0) {
                                                                    const _errs57 = errors;
                                                                    if (typeof data23.filesystem !== "boolean") {
                                                                      validate10.errors = [{ instancePath: instancePath + "/runtime/permissions/filesystem", schemaPath: "#/properties/runtime/properties/permissions/properties/filesystem/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                                      return false;
                                                                    }
                                                                    var valid7 = _errs57 === errors;
                                                                  } else {
                                                                    var valid7 = true;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        } else {
                                                          validate10.errors = [{ instancePath: instancePath + "/runtime/permissions", schemaPath: "#/properties/runtime/properties/permissions/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                          return false;
                                                        }
                                                      }
                                                      var valid6 = _errs48 === errors;
                                                    } else {
                                                      var valid6 = true;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        } else {
                                          validate10.errors = [{ instancePath: instancePath + "/runtime", schemaPath: "#/properties/runtime/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                          return false;
                                        }
                                      }
                                      var valid0 = _errs38 === errors;
                                    } else {
                                      var valid0 = true;
                                    }
                                    if (valid0) {
                                      if (data.manufacturer !== void 0) {
                                        const _errs59 = errors;
                                        if (typeof data.manufacturer !== "string") {
                                          validate10.errors = [{ instancePath: instancePath + "/manufacturer", schemaPath: "#/properties/manufacturer/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                          return false;
                                        }
                                        var valid0 = _errs59 === errors;
                                      } else {
                                        var valid0 = true;
                                      }
                                      if (valid0) {
                                        if (data.products !== void 0) {
                                          let data29 = data.products;
                                          const _errs61 = errors;
                                          if (errors === _errs61) {
                                            if (Array.isArray(data29)) {
                                              if (data29.length < 1) {
                                                validate10.errors = [{ instancePath: instancePath + "/products", schemaPath: "#/properties/products/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }];
                                                return false;
                                              } else {
                                                var valid8 = true;
                                                const len2 = data29.length;
                                                for (let i4 = 0; i4 < len2; i4++) {
                                                  const _errs63 = errors;
                                                  if (typeof data29[i4] !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/products/" + i4, schemaPath: "#/properties/products/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid8 = _errs63 === errors;
                                                  if (!valid8) {
                                                    break;
                                                  }
                                                }
                                                if (valid8) {
                                                  let i5 = data29.length;
                                                  let j2;
                                                  if (i5 > 1) {
                                                    const indices1 = {};
                                                    for (; i5--; ) {
                                                      let item1 = data29[i5];
                                                      if (typeof item1 !== "string") {
                                                        continue;
                                                      }
                                                      if (typeof indices1[item1] == "number") {
                                                        j2 = indices1[item1];
                                                        validate10.errors = [{ instancePath: instancePath + "/products", schemaPath: "#/properties/products/uniqueItems", keyword: "uniqueItems", params: { i: i5, j: j2 }, message: "must NOT have duplicate items (items ## " + j2 + " and " + i5 + " are identical)" }];
                                                        return false;
                                                        break;
                                                      }
                                                      indices1[item1] = i5;
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              validate10.errors = [{ instancePath: instancePath + "/products", schemaPath: "#/properties/products/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                              return false;
                                            }
                                          }
                                          var valid0 = _errs61 === errors;
                                        } else {
                                          var valid0 = true;
                                        }
                                        if (valid0) {
                                          if (data.keywords !== void 0) {
                                            let data31 = data.keywords;
                                            const _errs65 = errors;
                                            if (errors === _errs65) {
                                              if (Array.isArray(data31)) {
                                                var valid10 = true;
                                                const len3 = data31.length;
                                                for (let i6 = 0; i6 < len3; i6++) {
                                                  const _errs67 = errors;
                                                  if (typeof data31[i6] !== "string") {
                                                    validate10.errors = [{ instancePath: instancePath + "/keywords/" + i6, schemaPath: "#/properties/keywords/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                  var valid10 = _errs67 === errors;
                                                  if (!valid10) {
                                                    break;
                                                  }
                                                }
                                                if (valid10) {
                                                  let i7 = data31.length;
                                                  let j3;
                                                  if (i7 > 1) {
                                                    const indices2 = {};
                                                    for (; i7--; ) {
                                                      let item2 = data31[i7];
                                                      if (typeof item2 !== "string") {
                                                        continue;
                                                      }
                                                      if (typeof indices2[item2] == "number") {
                                                        j3 = indices2[item2];
                                                        validate10.errors = [{ instancePath: instancePath + "/keywords", schemaPath: "#/properties/keywords/uniqueItems", keyword: "uniqueItems", params: { i: i7, j: j3 }, message: "must NOT have duplicate items (items ## " + j3 + " and " + i7 + " are identical)" }];
                                                        return false;
                                                        break;
                                                      }
                                                      indices2[item2] = i7;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate10.errors = [{ instancePath: instancePath + "/keywords", schemaPath: "#/properties/keywords/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                return false;
                                              }
                                            }
                                            var valid0 = _errs65 === errors;
                                          } else {
                                            var valid0 = true;
                                          }
                                          if (valid0) {
                                            if (data.bonjourQueries !== void 0) {
                                              let data33 = data.bonjourQueries;
                                              const _errs69 = errors;
                                              if (errors === _errs69) {
                                                if (data33 && typeof data33 == "object" && !Array.isArray(data33)) {
                                                  var valid12 = true;
                                                  for (const key2 in data33) {
                                                    if (pattern0.test(key2)) {
                                                      let data34 = data33[key2];
                                                      const _errs71 = errors;
                                                      const _errs72 = errors;
                                                      let valid13 = false;
                                                      let passing0 = null;
                                                      const _errs73 = errors;
                                                      const _errs74 = errors;
                                                      if (errors === _errs74) {
                                                        if (data34 && typeof data34 == "object" && !Array.isArray(data34)) {
                                                          let missing3;
                                                          if (data34.type === void 0 && (missing3 = "type") || data34.protocol === void 0 && (missing3 = "protocol")) {
                                                            const err0 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/required", keyword: "required", params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" };
                                                            if (vErrors === null) {
                                                              vErrors = [err0];
                                                            } else {
                                                              vErrors.push(err0);
                                                            }
                                                            errors++;
                                                          } else {
                                                            if (data34.type !== void 0) {
                                                              const _errs76 = errors;
                                                              if (typeof data34.type !== "string") {
                                                                const err1 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/type", schemaPath: "#/definitions/bonjourQuery/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                if (vErrors === null) {
                                                                  vErrors = [err1];
                                                                } else {
                                                                  vErrors.push(err1);
                                                                }
                                                                errors++;
                                                              }
                                                              var valid15 = _errs76 === errors;
                                                            } else {
                                                              var valid15 = true;
                                                            }
                                                            if (valid15) {
                                                              if (data34.protocol !== void 0) {
                                                                let data36 = data34.protocol;
                                                                const _errs78 = errors;
                                                                if (typeof data36 !== "string") {
                                                                  const err2 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err2];
                                                                  } else {
                                                                    vErrors.push(err2);
                                                                  }
                                                                  errors++;
                                                                }
                                                                if (!(data36 === "tcp" || data36 === "udp")) {
                                                                  const err3 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/enum", keyword: "enum", params: { allowedValues: schema12.properties.protocol.enum }, message: "must be equal to one of the allowed values" };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err3];
                                                                  } else {
                                                                    vErrors.push(err3);
                                                                  }
                                                                  errors++;
                                                                }
                                                                var valid15 = _errs78 === errors;
                                                              } else {
                                                                var valid15 = true;
                                                              }
                                                              if (valid15) {
                                                                if (data34.port !== void 0) {
                                                                  let data37 = data34.port;
                                                                  const _errs80 = errors;
                                                                  if (!(typeof data37 == "number" && isFinite(data37))) {
                                                                    const err4 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/port", schemaPath: "#/definitions/bonjourQuery/properties/port/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                                    if (vErrors === null) {
                                                                      vErrors = [err4];
                                                                    } else {
                                                                      vErrors.push(err4);
                                                                    }
                                                                    errors++;
                                                                  }
                                                                  var valid15 = _errs80 === errors;
                                                                } else {
                                                                  var valid15 = true;
                                                                }
                                                                if (valid15) {
                                                                  if (data34.txt !== void 0) {
                                                                    let data38 = data34.txt;
                                                                    const _errs82 = errors;
                                                                    if (errors === _errs82) {
                                                                      if (data38 && typeof data38 == "object" && !Array.isArray(data38)) {
                                                                        var valid16 = true;
                                                                        for (const key3 in data38) {
                                                                          if (pattern0.test(key3)) {
                                                                            const _errs84 = errors;
                                                                            if (typeof data38[key3] !== "string") {
                                                                              const err5 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/txt/" + key3.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/properties/txt/patternProperties//type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                              if (vErrors === null) {
                                                                                vErrors = [err5];
                                                                              } else {
                                                                                vErrors.push(err5);
                                                                              }
                                                                              errors++;
                                                                            }
                                                                            var valid16 = _errs84 === errors;
                                                                            if (!valid16) {
                                                                              break;
                                                                            }
                                                                          }
                                                                        }
                                                                      } else {
                                                                        const err6 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/txt", schemaPath: "#/definitions/bonjourQuery/properties/txt/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err6];
                                                                        } else {
                                                                          vErrors.push(err6);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                    }
                                                                    var valid15 = _errs82 === errors;
                                                                  } else {
                                                                    var valid15 = true;
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        } else {
                                                          const err7 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                          if (vErrors === null) {
                                                            vErrors = [err7];
                                                          } else {
                                                            vErrors.push(err7);
                                                          }
                                                          errors++;
                                                        }
                                                      }
                                                      var _valid0 = _errs73 === errors;
                                                      if (_valid0) {
                                                        valid13 = true;
                                                        passing0 = 0;
                                                      }
                                                      const _errs86 = errors;
                                                      if (errors === _errs86) {
                                                        if (Array.isArray(data34)) {
                                                          var valid17 = true;
                                                          const len4 = data34.length;
                                                          for (let i8 = 0; i8 < len4; i8++) {
                                                            let data40 = data34[i8];
                                                            const _errs88 = errors;
                                                            const _errs89 = errors;
                                                            if (errors === _errs89) {
                                                              if (data40 && typeof data40 == "object" && !Array.isArray(data40)) {
                                                                let missing4;
                                                                if (data40.type === void 0 && (missing4 = "type") || data40.protocol === void 0 && (missing4 = "protocol")) {
                                                                  const err8 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8, schemaPath: "#/definitions/bonjourQuery/required", keyword: "required", params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" };
                                                                  if (vErrors === null) {
                                                                    vErrors = [err8];
                                                                  } else {
                                                                    vErrors.push(err8);
                                                                  }
                                                                  errors++;
                                                                } else {
                                                                  if (data40.type !== void 0) {
                                                                    const _errs91 = errors;
                                                                    if (typeof data40.type !== "string") {
                                                                      const err9 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/type", schemaPath: "#/definitions/bonjourQuery/properties/type/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                      if (vErrors === null) {
                                                                        vErrors = [err9];
                                                                      } else {
                                                                        vErrors.push(err9);
                                                                      }
                                                                      errors++;
                                                                    }
                                                                    var valid19 = _errs91 === errors;
                                                                  } else {
                                                                    var valid19 = true;
                                                                  }
                                                                  if (valid19) {
                                                                    if (data40.protocol !== void 0) {
                                                                      let data42 = data40.protocol;
                                                                      const _errs93 = errors;
                                                                      if (typeof data42 !== "string") {
                                                                        const err10 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err10];
                                                                        } else {
                                                                          vErrors.push(err10);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                      if (!(data42 === "tcp" || data42 === "udp")) {
                                                                        const err11 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/protocol", schemaPath: "#/definitions/bonjourQuery/properties/protocol/enum", keyword: "enum", params: { allowedValues: schema12.properties.protocol.enum }, message: "must be equal to one of the allowed values" };
                                                                        if (vErrors === null) {
                                                                          vErrors = [err11];
                                                                        } else {
                                                                          vErrors.push(err11);
                                                                        }
                                                                        errors++;
                                                                      }
                                                                      var valid19 = _errs93 === errors;
                                                                    } else {
                                                                      var valid19 = true;
                                                                    }
                                                                    if (valid19) {
                                                                      if (data40.port !== void 0) {
                                                                        let data43 = data40.port;
                                                                        const _errs95 = errors;
                                                                        if (!(typeof data43 == "number" && isFinite(data43))) {
                                                                          const err12 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/port", schemaPath: "#/definitions/bonjourQuery/properties/port/type", keyword: "type", params: { type: "number" }, message: "must be number" };
                                                                          if (vErrors === null) {
                                                                            vErrors = [err12];
                                                                          } else {
                                                                            vErrors.push(err12);
                                                                          }
                                                                          errors++;
                                                                        }
                                                                        var valid19 = _errs95 === errors;
                                                                      } else {
                                                                        var valid19 = true;
                                                                      }
                                                                      if (valid19) {
                                                                        if (data40.txt !== void 0) {
                                                                          let data44 = data40.txt;
                                                                          const _errs97 = errors;
                                                                          if (errors === _errs97) {
                                                                            if (data44 && typeof data44 == "object" && !Array.isArray(data44)) {
                                                                              var valid20 = true;
                                                                              for (const key4 in data44) {
                                                                                if (pattern0.test(key4)) {
                                                                                  const _errs99 = errors;
                                                                                  if (typeof data44[key4] !== "string") {
                                                                                    const err13 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/txt/" + key4.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/definitions/bonjourQuery/properties/txt/patternProperties//type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                                                    if (vErrors === null) {
                                                                                      vErrors = [err13];
                                                                                    } else {
                                                                                      vErrors.push(err13);
                                                                                    }
                                                                                    errors++;
                                                                                  }
                                                                                  var valid20 = _errs99 === errors;
                                                                                  if (!valid20) {
                                                                                    break;
                                                                                  }
                                                                                }
                                                                              }
                                                                            } else {
                                                                              const err14 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8 + "/txt", schemaPath: "#/definitions/bonjourQuery/properties/txt/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                                              if (vErrors === null) {
                                                                                vErrors = [err14];
                                                                              } else {
                                                                                vErrors.push(err14);
                                                                              }
                                                                              errors++;
                                                                            }
                                                                          }
                                                                          var valid19 = _errs97 === errors;
                                                                        } else {
                                                                          var valid19 = true;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              } else {
                                                                const err15 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1") + "/" + i8, schemaPath: "#/definitions/bonjourQuery/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                                                if (vErrors === null) {
                                                                  vErrors = [err15];
                                                                } else {
                                                                  vErrors.push(err15);
                                                                }
                                                                errors++;
                                                              }
                                                            }
                                                            var valid17 = _errs88 === errors;
                                                            if (!valid17) {
                                                              break;
                                                            }
                                                          }
                                                        } else {
                                                          const err16 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/bonjourQueries/patternProperties//oneOf/1/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                          if (vErrors === null) {
                                                            vErrors = [err16];
                                                          } else {
                                                            vErrors.push(err16);
                                                          }
                                                          errors++;
                                                        }
                                                      }
                                                      var _valid0 = _errs86 === errors;
                                                      if (_valid0 && valid13) {
                                                        valid13 = false;
                                                        passing0 = [passing0, 1];
                                                      } else {
                                                        if (_valid0) {
                                                          valid13 = true;
                                                          passing0 = 1;
                                                        }
                                                      }
                                                      if (!valid13) {
                                                        const err17 = { instancePath: instancePath + "/bonjourQueries/" + key2.replace(/~/g, "~0").replace(/\//g, "~1"), schemaPath: "#/properties/bonjourQueries/patternProperties//oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                                                        if (vErrors === null) {
                                                          vErrors = [err17];
                                                        } else {
                                                          vErrors.push(err17);
                                                        }
                                                        errors++;
                                                        validate10.errors = vErrors;
                                                        return false;
                                                      } else {
                                                        errors = _errs72;
                                                        if (vErrors !== null) {
                                                          if (_errs72) {
                                                            vErrors.length = _errs72;
                                                          } else {
                                                            vErrors = null;
                                                          }
                                                        }
                                                      }
                                                      var valid12 = _errs71 === errors;
                                                      if (!valid12) {
                                                        break;
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  validate10.errors = [{ instancePath: instancePath + "/bonjourQueries", schemaPath: "#/properties/bonjourQueries/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                  return false;
                                                }
                                              }
                                              var valid0 = _errs69 === errors;
                                            } else {
                                              var valid0 = true;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          validate10.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
          return false;
        }
      }
      validate10.errors = vErrors;
      return errors === 0;
    }
  }
});

// node_modules/@companion-module/base/dist/manifest.js
var require_manifest = __commonJS({
  "node_modules/@companion-module/base/dist/manifest.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.validateManifest = validateManifest;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var validate_manifest_js_1 = tslib_1.__importDefault(require_validate_manifest());
    function validateManifest(manifest, looseChecks) {
      if (!looseChecks) {
        const manifestStr = JSON.stringify(manifest);
        if (manifestStr.includes("companion-module-your-module-name"))
          throw new Error(`Manifest incorrectly references template module 'companion-module-your-module-name'`);
        if (manifestStr.includes("module-shortname"))
          throw new Error(`Manifest incorrectly references template module 'module-shortname'`);
        if (manifestStr.includes("A short one line description of your module"))
          throw new Error(`Manifest incorrectly references template module 'A short one line description of your module'`);
        if (manifestStr.includes("Your name"))
          throw new Error(`Manifest incorrectly references template module 'Your name'`);
        if (manifestStr.includes("Your email"))
          throw new Error(`Manifest incorrectly references template module 'Your email'`);
        if (manifestStr.includes("Your company"))
          throw new Error(`Manifest incorrectly references template module 'Your company'`);
        if (manifestStr.includes("Your product"))
          throw new Error(`Manifest incorrectly references template module 'Your product'`);
      }
      if (manifest.legacyIds.includes(manifest.id)) {
        throw new Error(`Manifest contains itself '${manifest.id}' in legacyIds`);
      }
      if (!(0, validate_manifest_js_1.default)(manifest)) {
        const errors = validate_manifest_js_1.default.errors;
        if (!errors)
          throw new Error(`Manifest failed validation with unknown reason`);
        throw new Error(`Manifest validation failed: ${JSON.stringify(errors)}`);
      }
    }
  }
});

// node_modules/@companion-module/base/dist/module-api/action.js
var require_action = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/action.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/colord/index.js
var require_colord = __commonJS({
  "node_modules/colord/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
    var t = function(r2) {
      return "string" == typeof r2 ? r2.length > 0 : "number" == typeof r2;
    };
    var n = function(r2, t2, n2) {
      return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r2) / n2 + 0;
    };
    var e = function(r2, t2, n2) {
      return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r2 > n2 ? n2 : r2 > t2 ? r2 : t2;
    };
    var u = function(r2) {
      return (r2 = isFinite(r2) ? r2 % 360 : 0) > 0 ? r2 : r2 + 360;
    };
    var o = function(r2) {
      return { r: e(r2.r, 0, 255), g: e(r2.g, 0, 255), b: e(r2.b, 0, 255), a: e(r2.a) };
    };
    var a = function(r2) {
      return { r: n(r2.r), g: n(r2.g), b: n(r2.b), a: n(r2.a, 3) };
    };
    var s = /^#([0-9a-f]{3,8})$/i;
    var i = function(r2) {
      var t2 = r2.toString(16);
      return t2.length < 2 ? "0" + t2 : t2;
    };
    var h = function(r2) {
      var t2 = r2.r, n2 = r2.g, e2 = r2.b, u2 = r2.a, o2 = Math.max(t2, n2, e2), a2 = o2 - Math.min(t2, n2, e2), s2 = a2 ? o2 === t2 ? (n2 - e2) / a2 : o2 === n2 ? 2 + (e2 - t2) / a2 : 4 + (t2 - n2) / a2 : 0;
      return { h: 60 * (s2 < 0 ? s2 + 6 : s2), s: o2 ? a2 / o2 * 100 : 0, v: o2 / 255 * 100, a: u2 };
    };
    var b = function(r2) {
      var t2 = r2.h, n2 = r2.s, e2 = r2.v, u2 = r2.a;
      t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
      var o2 = Math.floor(t2), a2 = e2 * (1 - n2), s2 = e2 * (1 - (t2 - o2) * n2), i2 = e2 * (1 - (1 - t2 + o2) * n2), h2 = o2 % 6;
      return { r: 255 * [e2, s2, a2, a2, i2, e2][h2], g: 255 * [i2, e2, e2, s2, a2, a2][h2], b: 255 * [a2, a2, i2, e2, e2, s2][h2], a: u2 };
    };
    var d = function(r2) {
      return { h: u(r2.h), s: e(r2.s, 0, 100), l: e(r2.l, 0, 100), a: e(r2.a) };
    };
    var g = function(r2) {
      return { h: n(r2.h), s: n(r2.s), l: n(r2.l), a: n(r2.a, 3) };
    };
    var f = function(r2) {
      return b((n2 = (t2 = r2).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
      var t2, n2, e2;
    };
    var p = function(r2) {
      return { h: (t2 = h(r2)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
      var t2, n2, e2, u2;
    };
    var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var c = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
    var y = { string: [[function(r2) {
      var t2 = s.exec(r2);
      return t2 ? (r2 = t2[1]).length <= 4 ? { r: parseInt(r2[0] + r2[0], 16), g: parseInt(r2[1] + r2[1], 16), b: parseInt(r2[2] + r2[2], 16), a: 4 === r2.length ? n(parseInt(r2[3] + r2[3], 16) / 255, 2) : 1 } : 6 === r2.length || 8 === r2.length ? { r: parseInt(r2.substr(0, 2), 16), g: parseInt(r2.substr(2, 2), 16), b: parseInt(r2.substr(4, 2), 16), a: 8 === r2.length ? n(parseInt(r2.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
    }, "hex"], [function(r2) {
      var t2 = v.exec(r2) || m.exec(r2);
      return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : o({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
    }, "rgb"], [function(t2) {
      var n2 = l.exec(t2) || c.exec(t2);
      if (!n2) return null;
      var e2, u2, o2 = d({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
      return f(o2);
    }, "hsl"]], object: [[function(r2) {
      var n2 = r2.r, e2 = r2.g, u2 = r2.b, a2 = r2.a, s2 = void 0 === a2 ? 1 : a2;
      return t(n2) && t(e2) && t(u2) ? o({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(s2) }) : null;
    }, "rgb"], [function(r2) {
      var n2 = r2.h, e2 = r2.s, u2 = r2.l, o2 = r2.a, a2 = void 0 === o2 ? 1 : o2;
      if (!t(n2) || !t(e2) || !t(u2)) return null;
      var s2 = d({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(a2) });
      return f(s2);
    }, "hsl"], [function(r2) {
      var n2 = r2.h, o2 = r2.s, a2 = r2.v, s2 = r2.a, i2 = void 0 === s2 ? 1 : s2;
      if (!t(n2) || !t(o2) || !t(a2)) return null;
      var h2 = (function(r3) {
        return { h: u(r3.h), s: e(r3.s, 0, 100), v: e(r3.v, 0, 100), a: e(r3.a) };
      })({ h: Number(n2), s: Number(o2), v: Number(a2), a: Number(i2) });
      return b(h2);
    }, "hsv"]] };
    var N = function(r2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var e2 = t2[n2][0](r2);
        if (e2) return [e2, t2[n2][1]];
      }
      return [null, void 0];
    };
    var x = function(r2) {
      return "string" == typeof r2 ? N(r2.trim(), y.string) : "object" == typeof r2 && null !== r2 ? N(r2, y.object) : [null, void 0];
    };
    var M = function(r2, t2) {
      var n2 = p(r2);
      return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
    };
    var I = function(r2) {
      return (299 * r2.r + 587 * r2.g + 114 * r2.b) / 1e3 / 255;
    };
    var H = function(r2, t2) {
      var n2 = p(r2);
      return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
    };
    var $ = (function() {
      function r2(r3) {
        this.parsed = x(r3)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
      }
      return r2.prototype.isValid = function() {
        return null !== this.parsed;
      }, r2.prototype.brightness = function() {
        return n(I(this.rgba), 2);
      }, r2.prototype.isDark = function() {
        return I(this.rgba) < 0.5;
      }, r2.prototype.isLight = function() {
        return I(this.rgba) >= 0.5;
      }, r2.prototype.toHex = function() {
        return r3 = a(this.rgba), t2 = r3.r, e2 = r3.g, u2 = r3.b, s2 = (o2 = r3.a) < 1 ? i(n(255 * o2)) : "", "#" + i(t2) + i(e2) + i(u2) + s2;
        var r3, t2, e2, u2, o2, s2;
      }, r2.prototype.toRgb = function() {
        return a(this.rgba);
      }, r2.prototype.toRgbString = function() {
        return r3 = a(this.rgba), t2 = r3.r, n2 = r3.g, e2 = r3.b, (u2 = r3.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
        var r3, t2, n2, e2, u2;
      }, r2.prototype.toHsl = function() {
        return g(p(this.rgba));
      }, r2.prototype.toHslString = function() {
        return r3 = g(p(this.rgba)), t2 = r3.h, n2 = r3.s, e2 = r3.l, (u2 = r3.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
        var r3, t2, n2, e2, u2;
      }, r2.prototype.toHsv = function() {
        return r3 = h(this.rgba), { h: n(r3.h), s: n(r3.s), v: n(r3.v), a: n(r3.a, 3) };
        var r3;
      }, r2.prototype.invert = function() {
        return j({ r: 255 - (r3 = this.rgba).r, g: 255 - r3.g, b: 255 - r3.b, a: r3.a });
        var r3;
      }, r2.prototype.saturate = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(M(this.rgba, r3));
      }, r2.prototype.desaturate = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(M(this.rgba, -r3));
      }, r2.prototype.grayscale = function() {
        return j(M(this.rgba, -1));
      }, r2.prototype.lighten = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(H(this.rgba, r3));
      }, r2.prototype.darken = function(r3) {
        return void 0 === r3 && (r3 = 0.1), j(H(this.rgba, -r3));
      }, r2.prototype.rotate = function(r3) {
        return void 0 === r3 && (r3 = 15), this.hue(this.hue() + r3);
      }, r2.prototype.alpha = function(r3) {
        return "number" == typeof r3 ? j({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r3 }) : n(this.rgba.a, 3);
        var t2;
      }, r2.prototype.hue = function(r3) {
        var t2 = p(this.rgba);
        return "number" == typeof r3 ? j({ h: r3, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
      }, r2.prototype.isEqual = function(r3) {
        return this.toHex() === j(r3).toHex();
      }, r2;
    })();
    var j = function(r2) {
      return r2 instanceof $ ? r2 : new $(r2);
    };
    var w = [];
    exports2.Colord = $, exports2.colord = j, exports2.extend = function(r2) {
      r2.forEach(function(r3) {
        w.indexOf(r3) < 0 && (r3($, y), w.push(r3));
      });
    }, exports2.getFormat = function(r2) {
      return x(r2)[1];
    }, exports2.random = function() {
      return new $({ r: 255 * Math.random(), g: 255 * Math.random(), b: 255 * Math.random() });
    };
  }
});

// node_modules/@companion-module/base/dist/util.js
var require_util = __commonJS({
  "node_modules/@companion-module/base/dist/util.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.literal = literal;
    exports2.assertNever = assertNever;
    exports2.combineRgb = combineRgb2;
    exports2.splitRgb = splitRgb;
    exports2.splitHsl = splitHsl;
    exports2.splitHsv = splitHsv;
    exports2.splitHex = splitHex;
    exports2.parseEscapeCharacters = parseEscapeCharacters;
    exports2.substituteEscapeCharacters = substituteEscapeCharacters;
    var colord_1 = require_colord();
    function literal(v) {
      return v;
    }
    function assertNever(_val) {
    }
    function combineRgb2(r, g, b, a) {
      let colorNumber = (r & 255) << 16 | (g & 255) << 8 | b & 255;
      if (a && a >= 0 && a < 1) {
        colorNumber += 16777216 * Math.round(255 * (1 - a));
      }
      return colorNumber;
    }
    function splitRgb(color) {
      if (typeof color === "number") {
        if (color > 16777215) {
          return {
            r: color >> 16 & 255,
            g: color >> 8 & 255,
            b: color & 255,
            a: (255 - (color >> 24 & 255)) / 255
          };
        } else {
          return {
            r: color >> 16 & 255,
            g: color >> 8 & 255,
            b: color & 255,
            a: 1
          };
        }
      } else if (typeof color === "string" && (0, colord_1.colord)(color).isValid()) {
        const rgb = (0, colord_1.colord)(color).toRgb();
        return {
          r: rgb.r,
          g: rgb.g,
          b: rgb.b,
          a: rgb.a
        };
      } else {
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        };
      }
    }
    function splitHsl(color) {
      const rgb = splitRgb(color);
      const hsl = (0, colord_1.colord)(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHsl();
      return hsl;
    }
    function splitHsv(color) {
      const rgb = splitRgb(color);
      const hsv = (0, colord_1.colord)(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHsv();
      return hsv;
    }
    function splitHex(color) {
      const rgb = splitRgb(color);
      const hex = (0, colord_1.colord)(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`).toHex();
      return hex;
    }
    function parseEscapeCharacters(msg) {
      const message = msg.replaceAll("\\n", "\n").replaceAll("\\r", "\r").replaceAll("\\t", "	").replaceAll("\\f", "\f").replaceAll("\\v", "\v").replaceAll("\\b", "\b").replaceAll("\\\\", "\\").replaceAll("\\x00", "\0").replaceAll("\\x01", "").replaceAll("\\x02", "").replaceAll("\\x03", "");
      return message;
    }
    function substituteEscapeCharacters(msg) {
      const message = msg.replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("	", "\\t").replaceAll("\f", "\\f").replaceAll("\v", "\\v").replaceAll("\b", "\\b").replaceAll("\\", "\\\\").replaceAll("\0", "\\x00").replaceAll("", "\\x01").replaceAll("", "\\x02").replaceAll("", "\\x03");
      return message;
    }
  }
});

// node_modules/p-queue/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/p-queue/node_modules/eventemitter3/index.js"(exports2, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter;
    }
  }
});

// node_modules/p-finally/index.js
var require_p_finally = __commonJS({
  "node_modules/p-finally/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (promise, onFinally) => {
      onFinally = onFinally || (() => {
      });
      return promise.then(
        (val) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => val),
        (err) => new Promise((resolve) => {
          resolve(onFinally());
        }).then(() => {
          throw err;
        })
      );
    };
  }
});

// node_modules/p-queue/node_modules/p-timeout/index.js
var require_p_timeout = __commonJS({
  "node_modules/p-queue/node_modules/p-timeout/index.js"(exports2, module2) {
    "use strict";
    var pFinally = require_p_finally();
    var TimeoutError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "TimeoutError";
      }
    };
    var pTimeout = (promise, milliseconds, fallback) => new Promise((resolve, reject) => {
      if (typeof milliseconds !== "number" || milliseconds < 0) {
        throw new TypeError("Expected `milliseconds` to be a positive number");
      }
      if (milliseconds === Infinity) {
        resolve(promise);
        return;
      }
      const timer = setTimeout(() => {
        if (typeof fallback === "function") {
          try {
            resolve(fallback());
          } catch (error) {
            reject(error);
          }
          return;
        }
        const message = typeof fallback === "string" ? fallback : `Promise timed out after ${milliseconds} milliseconds`;
        const timeoutError = fallback instanceof Error ? fallback : new TimeoutError(message);
        if (typeof promise.cancel === "function") {
          promise.cancel();
        }
        reject(timeoutError);
      }, milliseconds);
      pFinally(
        // eslint-disable-next-line promise/prefer-await-to-then
        promise.then(resolve, reject),
        () => {
          clearTimeout(timer);
        }
      );
    });
    module2.exports = pTimeout;
    module2.exports.default = pTimeout;
    module2.exports.TimeoutError = TimeoutError;
  }
});

// node_modules/p-queue/dist/lower-bound.js
var require_lower_bound = __commonJS({
  "node_modules/p-queue/dist/lower-bound.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function lowerBound(array, value, comparator) {
      let first = 0;
      let count = array.length;
      while (count > 0) {
        const step = count / 2 | 0;
        let it = first + step;
        if (comparator(array[it], value) <= 0) {
          first = ++it;
          count -= step + 1;
        } else {
          count = step;
        }
      }
      return first;
    }
    exports2.default = lowerBound;
  }
});

// node_modules/p-queue/dist/priority-queue.js
var require_priority_queue = __commonJS({
  "node_modules/p-queue/dist/priority-queue.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var lower_bound_1 = require_lower_bound();
    var PriorityQueue = class {
      constructor() {
        this._queue = [];
      }
      enqueue(run, options) {
        options = Object.assign({ priority: 0 }, options);
        const element = {
          priority: options.priority,
          run
        };
        if (this.size && this._queue[this.size - 1].priority >= options.priority) {
          this._queue.push(element);
          return;
        }
        const index = lower_bound_1.default(this._queue, element, (a, b) => b.priority - a.priority);
        this._queue.splice(index, 0, element);
      }
      dequeue() {
        const item = this._queue.shift();
        return item === null || item === void 0 ? void 0 : item.run;
      }
      filter(options) {
        return this._queue.filter((element) => element.priority === options.priority).map((element) => element.run);
      }
      get size() {
        return this._queue.length;
      }
    };
    exports2.default = PriorityQueue;
  }
});

// node_modules/p-queue/dist/index.js
var require_dist = __commonJS({
  "node_modules/p-queue/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var EventEmitter = require_eventemitter3();
    var p_timeout_1 = require_p_timeout();
    var priority_queue_1 = require_priority_queue();
    var empty = () => {
    };
    var timeoutError = new p_timeout_1.TimeoutError();
    var PQueue = class extends EventEmitter {
      constructor(options) {
        var _a, _b, _c, _d;
        super();
        this._intervalCount = 0;
        this._intervalEnd = 0;
        this._pendingCount = 0;
        this._resolveEmpty = empty;
        this._resolveIdle = empty;
        options = Object.assign({ carryoverConcurrencyCount: false, intervalCap: Infinity, interval: 0, concurrency: Infinity, autoStart: true, queueClass: priority_queue_1.default }, options);
        if (!(typeof options.intervalCap === "number" && options.intervalCap >= 1)) {
          throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${(_b = (_a = options.intervalCap) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""}\` (${typeof options.intervalCap})`);
        }
        if (options.interval === void 0 || !(Number.isFinite(options.interval) && options.interval >= 0)) {
          throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${(_d = (_c = options.interval) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : ""}\` (${typeof options.interval})`);
        }
        this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
        this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
        this._intervalCap = options.intervalCap;
        this._interval = options.interval;
        this._queue = new options.queueClass();
        this._queueClass = options.queueClass;
        this.concurrency = options.concurrency;
        this._timeout = options.timeout;
        this._throwOnTimeout = options.throwOnTimeout === true;
        this._isPaused = options.autoStart === false;
      }
      get _doesIntervalAllowAnother() {
        return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
      }
      get _doesConcurrentAllowAnother() {
        return this._pendingCount < this._concurrency;
      }
      _next() {
        this._pendingCount--;
        this._tryToStartAnother();
        this.emit("next");
      }
      _resolvePromises() {
        this._resolveEmpty();
        this._resolveEmpty = empty;
        if (this._pendingCount === 0) {
          this._resolveIdle();
          this._resolveIdle = empty;
          this.emit("idle");
        }
      }
      _onResumeInterval() {
        this._onInterval();
        this._initializeIntervalIfNeeded();
        this._timeoutId = void 0;
      }
      _isIntervalPaused() {
        const now = Date.now();
        if (this._intervalId === void 0) {
          const delay = this._intervalEnd - now;
          if (delay < 0) {
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
          } else {
            if (this._timeoutId === void 0) {
              this._timeoutId = setTimeout(() => {
                this._onResumeInterval();
              }, delay);
            }
            return true;
          }
        }
        return false;
      }
      _tryToStartAnother() {
        if (this._queue.size === 0) {
          if (this._intervalId) {
            clearInterval(this._intervalId);
          }
          this._intervalId = void 0;
          this._resolvePromises();
          return false;
        }
        if (!this._isPaused) {
          const canInitializeInterval = !this._isIntervalPaused();
          if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
            const job = this._queue.dequeue();
            if (!job) {
              return false;
            }
            this.emit("active");
            job();
            if (canInitializeInterval) {
              this._initializeIntervalIfNeeded();
            }
            return true;
          }
        }
        return false;
      }
      _initializeIntervalIfNeeded() {
        if (this._isIntervalIgnored || this._intervalId !== void 0) {
          return;
        }
        this._intervalId = setInterval(() => {
          this._onInterval();
        }, this._interval);
        this._intervalEnd = Date.now() + this._interval;
      }
      _onInterval() {
        if (this._intervalCount === 0 && this._pendingCount === 0 && this._intervalId) {
          clearInterval(this._intervalId);
          this._intervalId = void 0;
        }
        this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
        this._processQueue();
      }
      /**
      Executes all queued functions until it reaches the limit.
      */
      _processQueue() {
        while (this._tryToStartAnother()) {
        }
      }
      get concurrency() {
        return this._concurrency;
      }
      set concurrency(newConcurrency) {
        if (!(typeof newConcurrency === "number" && newConcurrency >= 1)) {
          throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${newConcurrency}\` (${typeof newConcurrency})`);
        }
        this._concurrency = newConcurrency;
        this._processQueue();
      }
      /**
      Adds a sync or async task to the queue. Always returns a promise.
      */
      async add(fn, options = {}) {
        return new Promise((resolve, reject) => {
          const run = async () => {
            this._pendingCount++;
            this._intervalCount++;
            try {
              const operation = this._timeout === void 0 && options.timeout === void 0 ? fn() : p_timeout_1.default(Promise.resolve(fn()), options.timeout === void 0 ? this._timeout : options.timeout, () => {
                if (options.throwOnTimeout === void 0 ? this._throwOnTimeout : options.throwOnTimeout) {
                  reject(timeoutError);
                }
                return void 0;
              });
              resolve(await operation);
            } catch (error) {
              reject(error);
            }
            this._next();
          };
          this._queue.enqueue(run, options);
          this._tryToStartAnother();
          this.emit("add");
        });
      }
      /**
          Same as `.add()`, but accepts an array of sync or async functions.
      
          @returns A promise that resolves when all functions are resolved.
          */
      async addAll(functions, options) {
        return Promise.all(functions.map(async (function_) => this.add(function_, options)));
      }
      /**
      Start (or resume) executing enqueued tasks within concurrency limit. No need to call this if queue is not paused (via `options.autoStart = false` or by `.pause()` method.)
      */
      start() {
        if (!this._isPaused) {
          return this;
        }
        this._isPaused = false;
        this._processQueue();
        return this;
      }
      /**
      Put queue execution on hold.
      */
      pause() {
        this._isPaused = true;
      }
      /**
      Clear the queue.
      */
      clear() {
        this._queue = new this._queueClass();
      }
      /**
          Can be called multiple times. Useful if you for example add additional items at a later time.
      
          @returns A promise that settles when the queue becomes empty.
          */
      async onEmpty() {
        if (this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveEmpty;
          this._resolveEmpty = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
          The difference with `.onEmpty` is that `.onIdle` guarantees that all work from the queue has finished. `.onEmpty` merely signals that the queue is empty, but it could mean that some promises haven't completed yet.
      
          @returns A promise that settles when the queue becomes empty, and all promises have completed; `queue.size === 0 && queue.pending === 0`.
          */
      async onIdle() {
        if (this._pendingCount === 0 && this._queue.size === 0) {
          return;
        }
        return new Promise((resolve) => {
          const existingResolve = this._resolveIdle;
          this._resolveIdle = () => {
            existingResolve();
            resolve();
          };
        });
      }
      /**
      Size of the queue.
      */
      get size() {
        return this._queue.size;
      }
      /**
          Size of the queue, filtered by the given options.
      
          For example, this can be used to find the number of items remaining in the queue with a specific priority level.
          */
      sizeBy(options) {
        return this._queue.filter(options).length;
      }
      /**
      Number of pending promises.
      */
      get pending() {
        return this._pendingCount;
      }
      /**
      Whether the queue is currently paused.
      */
      get isPaused() {
        return this._isPaused;
      }
      get timeout() {
        return this._timeout;
      }
      /**
      Set the timeout for future operations.
      */
      set timeout(milliseconds) {
        this._timeout = milliseconds;
      }
    };
    exports2.default = PQueue;
  }
});

// node_modules/@companion-module/base/dist/internal/base.js
var require_base = __commonJS({
  "node_modules/@companion-module/base/dist/internal/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.serializeIsVisibleFn = serializeIsVisibleFn;
    exports2.isInstanceBaseProps = isInstanceBaseProps;
    function serializeIsVisibleFn(options) {
      return (options ?? []).map((option) => {
        if ("isVisibleExpression" in option && typeof option.isVisibleExpression === "string") {
          return {
            ...option,
            isVisibleFnType: "expression",
            isVisibleFn: option.isVisibleExpression,
            isVisible: void 0,
            isVisibleExpression: void 0
          };
        } else if ("isVisible" in option && typeof option.isVisible === "function") {
          return {
            ...option,
            isVisibleFn: option.isVisible.toString(),
            isVisibleFnType: "function",
            isVisible: void 0,
            isVisibleExpression: void 0
          };
        }
        return {
          ...option,
          isVisible: void 0,
          isVisibleFn: void 0,
          isVisibleFnType: void 0,
          isVisibleExpression: void 0
        };
      });
    }
    function isInstanceBaseProps(obj) {
      const obj2 = obj;
      return typeof obj2 === "object" && typeof obj2.id === "string" && obj2._isInstanceBaseProps === true;
    }
  }
});

// node_modules/@companion-module/base/dist/internal/upgrade.js
var require_upgrade = __commonJS({
  "node_modules/@companion-module/base/dist/internal/upgrade.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.runThroughUpgradeScripts = runThroughUpgradeScripts;
    var util_js_1 = require_util();
    function clone(val) {
      return JSON.parse(JSON.stringify(val));
    }
    function runThroughUpgradeScripts(allActionsArray, allFeedbacksArray, defaultUpgradeIndex, upgradeScripts, config, secrets, skipConfigAndSecretsUpgrade) {
      const pendingUpgradesGrouped = /* @__PURE__ */ new Map();
      const getPendingUpgradeGroup = (i) => {
        let v = pendingUpgradesGrouped.get(i);
        if (!v) {
          v = { actions: [], feedbacks: [], config: false };
          pendingUpgradesGrouped.set(i, v);
        }
        return v;
      };
      for (const action of allActionsArray) {
        const upgradeIndex = action?.upgradeIndex ?? defaultUpgradeIndex;
        if (action && typeof upgradeIndex === "number") {
          const pending = getPendingUpgradeGroup(upgradeIndex);
          pending.actions.push(action.id);
        }
      }
      for (const feedback of allFeedbacksArray) {
        const upgradeIndex = feedback?.upgradeIndex ?? defaultUpgradeIndex;
        if (feedback && typeof upgradeIndex === "number") {
          const pending = getPendingUpgradeGroup(upgradeIndex);
          pending.feedbacks.push(feedback.id);
        }
      }
      if (!skipConfigAndSecretsUpgrade) {
        for (let i = defaultUpgradeIndex ?? -1; i < upgradeScripts.length; i++) {
          getPendingUpgradeGroup(i).config = true;
        }
      }
      const allActions = Object.fromEntries(allActionsArray.map((a) => [a.id, a]));
      const allFeedbacks = Object.fromEntries(allFeedbacksArray.map((a) => [a.id, a]));
      const updatedFeedbacks = {};
      const updatedActions = {};
      let updatedConfig;
      let updatedSecrets;
      if (pendingUpgradesGrouped.size > 0) {
        const pendingUpgradeGroups = Array.from(pendingUpgradesGrouped.keys()).sort();
        const firstUpgradeGroup = Math.min(...pendingUpgradeGroups, defaultUpgradeIndex ?? -1) + 1;
        const actionsIdsToUpgrade = [];
        const feedbackIdsToUpgrade = [];
        const targetCount = upgradeScripts.length;
        for (let i = firstUpgradeGroup; i < targetCount; i++) {
          const group = pendingUpgradesGrouped.get(i - 1);
          if (group) {
            actionsIdsToUpgrade.push(...group.actions);
            feedbackIdsToUpgrade.push(...group.feedbacks);
          }
          const upgradeConfigAndSecrets = !!group?.config;
          if (!upgradeConfigAndSecrets && actionsIdsToUpgrade.length === 0 && feedbackIdsToUpgrade.length === 0)
            continue;
          const inputConfig = updatedConfig ?? config;
          const inputSecrets = updatedSecrets ?? secrets;
          const fcn = upgradeScripts[i];
          const res = fcn({
            // Pass a clone to avoid mutations
            currentConfig: clone(inputConfig)
          }, {
            config: upgradeConfigAndSecrets ? inputConfig : null,
            secrets: upgradeConfigAndSecrets ? inputSecrets : null,
            // Only pass the actions & feedbacks which need upgrading from this version
            actions: actionsIdsToUpgrade.map((id) => {
              const inst = allActions[id];
              if (inst) {
                return (0, util_js_1.literal)({
                  id: inst.id,
                  controlId: inst.controlId,
                  actionId: inst.actionId,
                  options: inst.options !== void 0 ? clone(inst.options) : {}
                });
              }
            }).filter((v) => !!v),
            feedbacks: feedbackIdsToUpgrade.map((id) => {
              const inst = allFeedbacks[id];
              if (inst) {
                return (0, util_js_1.literal)({
                  id: inst.id,
                  controlId: inst.controlId,
                  feedbackId: inst.feedbackId,
                  options: inst.options !== void 0 ? clone(inst.options) : {},
                  // TODO - style?
                  isInverted: inst.isInverted
                });
              }
            }).filter((v) => !!v)
          });
          if (upgradeConfigAndSecrets && res.updatedConfig)
            updatedConfig = res.updatedConfig;
          if (upgradeConfigAndSecrets && res.updatedSecrets)
            updatedSecrets = res.updatedSecrets;
          for (const action of res.updatedActions) {
            if (action) {
              const instance = allActions[action.id];
              if (instance) {
                instance.actionId = action.actionId;
                instance.options = action.options;
                instance.upgradeIndex = i;
                updatedActions[action.id] = instance;
              }
            }
          }
          for (const feedback of res.updatedFeedbacks) {
            if (feedback) {
              const instance = allFeedbacks[feedback.id];
              if (instance) {
                instance.feedbackId = feedback.feedbackId;
                instance.options = feedback.options;
                instance.upgradeIndex = i;
                updatedFeedbacks[feedback.id] = {
                  ...instance,
                  style: updatedFeedbacks[feedback.id]?.style ?? feedback.style,
                  isInverted: feedback.isInverted ?? false
                };
              }
            }
          }
        }
        for (const [id, action] of Object.entries(allActions)) {
          if (!updatedActions[id] && typeof action?.upgradeIndex === "number") {
            updatedActions[id] = action;
          }
        }
        for (const [id, feedback] of Object.entries(allFeedbacks)) {
          if (!updatedFeedbacks[id] && typeof feedback?.upgradeIndex === "number") {
            updatedFeedbacks[id] = feedback;
          }
        }
      }
      return {
        updatedActions: Object.values(updatedActions),
        updatedFeedbacks: Object.values(updatedFeedbacks),
        updatedConfig,
        updatedSecrets,
        latestUpgradeIndex: upgradeScripts.length - 1
      };
    }
  }
});

// node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "node_modules/mimic-fn/index.js"(exports2, module2) {
    "use strict";
    var copyProperty = (to, from, property, ignoreNonConfigurable) => {
      if (property === "length" || property === "prototype") {
        return;
      }
      if (property === "arguments" || property === "caller") {
        return;
      }
      const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
      const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
      if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
        return;
      }
      Object.defineProperty(to, property, fromDescriptor);
    };
    var canCopyProperty = function(toDescriptor, fromDescriptor) {
      return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
    };
    var changePrototype = (to, from) => {
      const fromPrototype = Object.getPrototypeOf(from);
      if (fromPrototype === Object.getPrototypeOf(to)) {
        return;
      }
      Object.setPrototypeOf(to, fromPrototype);
    };
    var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
    var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
    var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
    var changeToString = (to, from, name) => {
      const withName = name === "" ? "" : `with ${name.trim()}() `;
      const newToString = wrappedToString.bind(null, withName, from.toString());
      Object.defineProperty(newToString, "name", toStringName);
      Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
    };
    var mimicFn = (to, from, { ignoreNonConfigurable = false } = {}) => {
      const { name } = to;
      for (const property of Reflect.ownKeys(from)) {
        copyProperty(to, from, property, ignoreNonConfigurable);
      }
      changePrototype(to, from);
      changeToString(to, from, name);
      return to;
    };
    module2.exports = mimicFn;
  }
});

// node_modules/@companion-module/base/lib/debounce-fn/index.js
var require_debounce_fn = __commonJS({
  "node_modules/@companion-module/base/lib/debounce-fn/index.js"(exports2, module2) {
    "use strict";
    var mimicFn = require_mimic_fn();
    module2.exports = (inputFunction, options = {}) => {
      if (typeof inputFunction !== "function") {
        throw new TypeError(`Expected the first argument to be a function, got \`${typeof inputFunction}\``);
      }
      const { wait = 0, maxWait = 0, before = false, after = true } = options;
      if (!before && !after) {
        throw new Error("Both `before` and `after` are false, function wouldn't be called.");
      }
      let timeout;
      let maxTimeout;
      let result;
      const debouncedFunction = function(...arguments_) {
        const context = this;
        const later = () => {
          timeout = void 0;
          if (maxTimeout) {
            clearTimeout(maxTimeout);
            maxTimeout = void 0;
          }
          if (after) {
            result = inputFunction.apply(context, arguments_);
          }
        };
        const maxLater = () => {
          maxTimeout = void 0;
          if (timeout) {
            clearTimeout(timeout);
            timeout = void 0;
          }
          result = inputFunction.apply(context, arguments_);
        };
        const shouldCallNow = before && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (maxWait > 0 && !maxTimeout && after) {
          maxTimeout = setTimeout(maxLater, maxWait);
        }
        if (shouldCallNow) {
          result = inputFunction.apply(context, arguments_);
        }
        return result;
      };
      mimicFn(debouncedFunction, inputFunction);
      debouncedFunction.cancel = () => {
        if (timeout) {
          clearTimeout(timeout);
          timeout = void 0;
        }
        if (maxTimeout) {
          clearTimeout(maxTimeout);
          maxTimeout = void 0;
        }
      };
      return debouncedFunction;
    };
  }
});

// node_modules/@companion-module/base/dist/internal/feedback.js
var require_feedback = __commonJS({
  "node_modules/@companion-module/base/dist/internal/feedback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.FeedbackManager = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var base_js_1 = require_base();
    var index_js_1 = tslib_1.__importDefault(require_debounce_fn());
    var util_js_1 = require_util();
    function convertFeedbackInstanceToEvent(type, feedback) {
      return {
        type,
        id: feedback.id,
        feedbackId: feedback.feedbackId,
        controlId: feedback.controlId,
        options: feedback.options
      };
    }
    var FeedbackManager = class {
      #parseVariablesInString;
      #updateFeedbackValues;
      #setFeedbackDefinitions;
      #log;
      #feedbackDefinitions = /* @__PURE__ */ new Map();
      #feedbackInstances = /* @__PURE__ */ new Map();
      // Feedback values waiting to be sent
      #pendingFeedbackValues = /* @__PURE__ */ new Map();
      // Feedbacks currently being checked
      #feedbacksBeingChecked = /* @__PURE__ */ new Map();
      // while in a context which provides an alternate parseVariablesInString, we should log when the original is called
      #parseVariablesContext;
      get parseVariablesContext() {
        return this.#parseVariablesContext;
      }
      constructor(parseVariablesInString, updateFeedbackValues, setFeedbackDefinitions, log) {
        this.#parseVariablesInString = parseVariablesInString;
        this.#updateFeedbackValues = updateFeedbackValues;
        this.#setFeedbackDefinitions = setFeedbackDefinitions;
        this.#log = log;
      }
      getDefinitionIds() {
        return Array.from(this.#feedbackDefinitions.keys());
      }
      getInstanceIds() {
        return Array.from(this.#feedbackInstances.keys());
      }
      handleUpdateFeedbacks(feedbacks) {
        for (const [id, feedback] of Object.entries(feedbacks)) {
          const existing = this.#feedbackInstances.get(id);
          if (existing && !feedback) {
            const definition = this.#feedbackDefinitions.get(existing.feedbackId);
            if (definition?.unsubscribe) {
              const context = {
                parseVariablesInString: async (text) => {
                  return text;
                }
              };
              Promise.resolve(definition.unsubscribe(convertFeedbackInstanceToEvent(definition.type, existing), context)).catch((e) => {
                this.#log("error", `Feedback unsubscribe failed: ${JSON.stringify(existing)} - ${e?.message ?? e} ${e?.stack}`);
              });
            }
          }
          if (!feedback || feedback.disabled) {
            this.#feedbackInstances.delete(id);
          } else {
            this.#feedbackInstances.set(id, { ...feedback });
            if (!existing) {
              const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
              if (definition?.subscribe) {
                const context = {
                  parseVariablesInString: async (text) => {
                    return text;
                  }
                };
                Promise.resolve(definition.subscribe(convertFeedbackInstanceToEvent(definition.type, feedback), context)).catch((e) => {
                  this.#log("error", `Feedback subscribe failed: ${JSON.stringify(feedback)} - ${e?.message ?? e} ${e?.stack}`);
                });
              }
            }
            this.#triggerCheckFeedback(id);
          }
        }
      }
      async handleLearnFeedback(msg) {
        const definition = this.#feedbackDefinitions.get(msg.feedback.feedbackId);
        if (definition && definition.learn) {
          const context = {
            parseVariablesInString: async (text) => {
              const res = await this.#parseVariablesInString({
                text,
                controlId: msg.feedback.controlId,
                actionInstanceId: void 0,
                feedbackInstanceId: msg.feedback.id
              });
              return res.text;
            }
          };
          const newOptions = await definition.learn({
            id: msg.feedback.id,
            feedbackId: msg.feedback.feedbackId,
            controlId: msg.feedback.controlId,
            options: msg.feedback.options,
            type: definition.type
          }, context);
          return {
            options: newOptions
          };
        } else {
          return {
            options: void 0
          };
        }
      }
      #triggerCheckFeedback(id) {
        const existingRecheck = this.#feedbacksBeingChecked.get(id);
        if (existingRecheck) {
          existingRecheck.needsRecheck = true;
          return;
        }
        const feedback0 = this.#feedbackInstances.get(id);
        if (!feedback0)
          return;
        const feedback = feedback0;
        const feedbackCheckStatus = {
          needsRecheck: false
        };
        this.#feedbacksBeingChecked.set(id, feedbackCheckStatus);
        Promise.resolve().then(async () => {
          const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
          let value;
          if (definition) {
            this.#parseVariablesContext = `Feedback ${feedback.feedbackId} (${id})`;
            const context = {
              parseVariablesInString: async (text) => {
                const res = await this.#parseVariablesInString({
                  text,
                  controlId: feedback.controlId,
                  actionInstanceId: void 0,
                  feedbackInstanceId: id
                });
                return res.text;
              }
            };
            switch (definition.type) {
              case "boolean":
                value = definition.callback({
                  ...convertFeedbackInstanceToEvent("boolean", feedback),
                  type: "boolean"
                }, context);
                break;
              case "value":
                value = definition.callback({
                  ...convertFeedbackInstanceToEvent("value", feedback),
                  type: "value"
                }, context);
                break;
              case "advanced":
                value = definition.callback({
                  ...convertFeedbackInstanceToEvent("advanced", feedback),
                  type: "advanced",
                  image: feedback.image
                }, context);
                break;
              default:
                (0, util_js_1.assertNever)(definition);
                break;
            }
            this.#parseVariablesContext = void 0;
          }
          const resolvedValue = await value;
          this.#pendingFeedbackValues.set(id, {
            id,
            controlId: feedback.controlId,
            value: resolvedValue
          });
          this.#sendFeedbackValues();
        }).catch((e) => {
          console.error(`Feedback check failed: ${JSON.stringify(feedback)} - ${e?.message ?? e} ${e?.stack}`);
        }).finally(() => {
          this.#parseVariablesContext = void 0;
          this.#feedbacksBeingChecked.delete(id);
          if (feedbackCheckStatus.needsRecheck) {
            setImmediate(() => {
              this.#triggerCheckFeedback(id);
            });
          }
        });
      }
      /**
       * Send pending feedback values (from this.#pendingFeedbackValues) to companion, with a debounce
       */
      #sendFeedbackValues = (0, index_js_1.default)(() => {
        const newValues = this.#pendingFeedbackValues;
        this.#pendingFeedbackValues = /* @__PURE__ */ new Map();
        if (newValues.size > 0) {
          this.#updateFeedbackValues({
            values: Array.from(newValues.values())
          });
        }
      }, {
        wait: 5,
        maxWait: 25
      });
      setFeedbackDefinitions(feedbacks) {
        const hostFeedbacks = [];
        this.#feedbackDefinitions.clear();
        for (const [feedbackId, feedback] of Object.entries(feedbacks)) {
          if (feedback) {
            hostFeedbacks.push({
              id: feedbackId,
              name: feedback.name,
              description: feedback.description,
              options: (0, base_js_1.serializeIsVisibleFn)(feedback.options),
              type: feedback.type,
              defaultStyle: feedback.type === "boolean" ? feedback.defaultStyle : void 0,
              hasLearn: !!feedback.learn,
              learnTimeout: feedback.learnTimeout,
              showInvert: feedback.type === "boolean" ? feedback.showInvert : false
            });
            this.#feedbackDefinitions.set(feedbackId, feedback);
          }
        }
        this.#setFeedbackDefinitions({ feedbacks: hostFeedbacks });
      }
      checkFeedbacks(feedbackTypes) {
        const types = new Set(feedbackTypes);
        for (const [id, feedback] of this.#feedbackInstances.entries()) {
          const definition = this.#feedbackDefinitions.get(feedback.feedbackId);
          if (definition) {
            if (types.size === 0 || types.has(feedback.feedbackId)) {
              this.#triggerCheckFeedback(id);
            }
          }
        }
      }
      checkFeedbacksById(feedbackIds) {
        for (const id of feedbackIds) {
          this.#triggerCheckFeedback(id);
        }
      }
      subscribeFeedbacks(feedbackIds) {
        let feedbacks = Array.from(this.#feedbackInstances.values());
        const feedbackIdSet = new Set(feedbackIds);
        if (feedbackIdSet.size)
          feedbacks = feedbacks.filter((fb) => feedbackIdSet.has(fb.feedbackId));
        for (const fb of feedbacks) {
          const def = this.#feedbackDefinitions.get(fb.feedbackId);
          if (def?.subscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              }
            };
            Promise.resolve(def.subscribe(convertFeedbackInstanceToEvent(def.type, fb), context)).catch((e) => {
              this.#log("error", `Feedback subscribe failed: ${JSON.stringify(fb)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
      unsubscribeFeedbacks(feedbackIds) {
        let feedbacks = Array.from(this.#feedbackInstances.values());
        const feedbackIdSet = new Set(feedbackIds);
        if (feedbackIdSet.size)
          feedbacks = feedbacks.filter((fb) => feedbackIdSet.has(fb.feedbackId));
        for (const fb of feedbacks) {
          const def = this.#feedbackDefinitions.get(fb.feedbackId);
          if (def && def.unsubscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              }
            };
            Promise.resolve(def.unsubscribe(convertFeedbackInstanceToEvent(def.type, fb), context)).catch((e) => {
              this.#log("error", `Feedback unsubscribe failed: ${JSON.stringify(fb)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
    };
    exports2.FeedbackManager = FeedbackManager;
  }
});

// node_modules/ejson/index.js
var require_ejson = __commonJS({
  "node_modules/ejson/index.js"(exports2, module2) {
    (function() {
      "use strict";
      var __webpack_modules__ = [
        ,
        /* 1 */
        /***/
        (function(__unused_webpack_module, exports3) {
          Object.defineProperty(exports3, "__esModule", {
            value: true
          });
          exports3.lengthOf = exports3.keysOf = exports3.isObject = exports3.isInfOrNaN = exports3.isFunction = exports3.isArguments = exports3.hasOwn = exports3.handleError = exports3.convertMapToObject = exports3.checkError = void 0;
          function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
          }
          function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
          }
          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          }
          function _iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;
            var _s, _e;
            try {
              for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
              }
            } catch (err) {
              _d = true;
              _e = err;
            } finally {
              try {
                if (!_n && _i["return"] != null) _i["return"]();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          }
          function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          }
          function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
              return typeof obj2;
            } : function(obj2) {
              return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            }, _typeof(obj);
          }
          var isFunction = function isFunction2(fn) {
            return typeof fn === "function";
          };
          exports3.isFunction = isFunction;
          var isObject = function isObject2(fn) {
            return _typeof(fn) === "object";
          };
          exports3.isObject = isObject;
          var keysOf = function keysOf2(obj) {
            return Object.keys(obj);
          };
          exports3.keysOf = keysOf;
          var lengthOf = function lengthOf2(obj) {
            return Object.keys(obj).length;
          };
          exports3.lengthOf = lengthOf;
          var hasOwn = function hasOwn2(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          };
          exports3.hasOwn = hasOwn;
          var convertMapToObject = function convertMapToObject2(map) {
            return Array.from(map).reduce(function(acc, _ref) {
              var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
              acc[key] = value;
              return acc;
            }, {});
          };
          exports3.convertMapToObject = convertMapToObject;
          var isArguments = function isArguments2(obj) {
            return obj != null && hasOwn(obj, "callee");
          };
          exports3.isArguments = isArguments;
          var isInfOrNaN = function isInfOrNaN2(obj) {
            return Number.isNaN(obj) || obj === Infinity || obj === -Infinity;
          };
          exports3.isInfOrNaN = isInfOrNaN;
          var checkError = {
            maxStack: function maxStack(msgError) {
              return new RegExp("Maximum call stack size exceeded", "g").test(msgError);
            }
          };
          exports3.checkError = checkError;
          var handleError = function handleError2(fn) {
            return function() {
              try {
                return fn.apply(this, arguments);
              } catch (error) {
                var isMaxStack = checkError.maxStack(error.message);
                if (isMaxStack) {
                  throw new Error("Converting circular structure to JSON");
                }
                throw error;
              }
            };
          };
          exports3.handleError = handleError;
        }),
        /* 2 */
        /***/
        (function(__unused_webpack_module, exports3) {
          Object.defineProperty(exports3, "__esModule", {
            value: true
          });
          exports3.Base64 = void 0;
          var BASE_64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
          var BASE_64_VALS = /* @__PURE__ */ Object.create(null);
          var getChar = function getChar2(val) {
            return BASE_64_CHARS.charAt(val);
          };
          var getVal = function getVal2(ch) {
            return ch === "=" ? -1 : BASE_64_VALS[ch];
          };
          for (var i = 0; i < BASE_64_CHARS.length; i++) {
            BASE_64_VALS[getChar(i)] = i;
          }
          ;
          var encode = function encode2(array) {
            if (typeof array === "string") {
              var str = array;
              array = newBinary(str.length);
              for (var _i = 0; _i < str.length; _i++) {
                var ch = str.charCodeAt(_i);
                if (ch > 255) {
                  throw new Error("Not ascii. Base64.encode can only take ascii strings.");
                }
                array[_i] = ch;
              }
            }
            var answer = [];
            var a = null;
            var b = null;
            var c = null;
            var d = null;
            for (var _i2 = 0; _i2 < array.length; _i2++) {
              switch (_i2 % 3) {
                case 0:
                  a = array[_i2] >> 2 & 63;
                  b = (array[_i2] & 3) << 4;
                  break;
                case 1:
                  b = b | array[_i2] >> 4 & 15;
                  c = (array[_i2] & 15) << 2;
                  break;
                case 2:
                  c = c | array[_i2] >> 6 & 3;
                  d = array[_i2] & 63;
                  answer.push(getChar(a));
                  answer.push(getChar(b));
                  answer.push(getChar(c));
                  answer.push(getChar(d));
                  a = null;
                  b = null;
                  c = null;
                  d = null;
                  break;
              }
            }
            if (a != null) {
              answer.push(getChar(a));
              answer.push(getChar(b));
              if (c == null) {
                answer.push("=");
              } else {
                answer.push(getChar(c));
              }
              if (d == null) {
                answer.push("=");
              }
            }
            return answer.join("");
          };
          var newBinary = function newBinary2(len) {
            if (typeof Uint8Array === "undefined" || typeof ArrayBuffer === "undefined") {
              var ret = [];
              for (var _i3 = 0; _i3 < len; _i3++) {
                ret.push(0);
              }
              ret.$Uint8ArrayPolyfill = true;
              return ret;
            }
            return new Uint8Array(new ArrayBuffer(len));
          };
          var decode = function decode2(str) {
            var len = Math.floor(str.length * 3 / 4);
            if (str.charAt(str.length - 1) == "=") {
              len--;
              if (str.charAt(str.length - 2) == "=") {
                len--;
              }
            }
            var arr = newBinary(len);
            var one = null;
            var two = null;
            var three = null;
            var j = 0;
            for (var _i4 = 0; _i4 < str.length; _i4++) {
              var c = str.charAt(_i4);
              var v = getVal(c);
              switch (_i4 % 4) {
                case 0:
                  if (v < 0) {
                    throw new Error("invalid base64 string");
                  }
                  one = v << 2;
                  break;
                case 1:
                  if (v < 0) {
                    throw new Error("invalid base64 string");
                  }
                  one = one | v >> 4;
                  arr[j++] = one;
                  two = (v & 15) << 4;
                  break;
                case 2:
                  if (v >= 0) {
                    two = two | v >> 2;
                    arr[j++] = two;
                    three = (v & 3) << 6;
                  }
                  break;
                case 3:
                  if (v >= 0) {
                    arr[j++] = three | v;
                  }
                  break;
              }
            }
            return arr;
          };
          var Base64 = {
            encode,
            decode,
            newBinary
          };
          exports3.Base64 = Base64;
        }),
        /* 3 */
        /***/
        (function(module3) {
          module3.exports = {
            //
            // When fibers are not supported on you system Meteor automatically sets this
            // function to a nope function. We're going to do the same here as there are
            // small parts of the code that call this function.
            //
            _noYieldsAllowed: function _noYieldsAllowed(f) {
              return f();
            }
          };
        }),
        /* 4 */
        /***/
        (function(module3, exports3) {
          Object.defineProperty(exports3, "__esModule", {
            value: true
          });
          exports3["default"] = void 0;
          function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
              return typeof obj2;
            } : function(obj2) {
              return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            }, _typeof(obj);
          }
          function quote(string) {
            return JSON.stringify(string);
          }
          var str = function str2(key, holder, singleIndent, outerIndent, canonical) {
            var value = holder[key];
            switch (_typeof(value)) {
              case "string":
                return quote(value);
              case "number":
                return isFinite(value) ? String(value) : "null";
              case "boolean":
                return String(value);
              // If the type is 'object', we might be dealing with an object or an array or
              // null.
              case "object": {
                if (!value) {
                  return "null";
                }
                var innerIndent = outerIndent + singleIndent;
                var partial = [];
                var v;
                if (Array.isArray(value) || {}.hasOwnProperty.call(value, "callee")) {
                  var length = value.length;
                  for (var i = 0; i < length; i += 1) {
                    partial[i] = str2(i, value, singleIndent, innerIndent, canonical) || "null";
                  }
                  if (partial.length === 0) {
                    v = "[]";
                  } else if (innerIndent) {
                    v = "[\n" + innerIndent + partial.join(",\n" + innerIndent) + "\n" + outerIndent + "]";
                  } else {
                    v = "[" + partial.join(",") + "]";
                  }
                  return v;
                }
                var keys = Object.keys(value);
                if (canonical) {
                  keys = keys.sort();
                }
                keys.forEach(function(k) {
                  v = str2(k, value, singleIndent, innerIndent, canonical);
                  if (v) {
                    partial.push(quote(k) + (innerIndent ? ": " : ":") + v);
                  }
                });
                if (partial.length === 0) {
                  v = "{}";
                } else if (innerIndent) {
                  v = "{\n" + innerIndent + partial.join(",\n" + innerIndent) + "\n" + outerIndent + "}";
                } else {
                  v = "{" + partial.join(",") + "}";
                }
                return v;
              }
              default:
            }
          };
          var canonicalStringify = function canonicalStringify2(value, options) {
            var allOptions = Object.assign({
              indent: "",
              canonical: false
            }, options);
            if (allOptions.indent === true) {
              allOptions.indent = "  ";
            } else if (typeof allOptions.indent === "number") {
              var newIndent = "";
              for (var i = 0; i < allOptions.indent; i++) {
                newIndent += " ";
              }
              allOptions.indent = newIndent;
            }
            return str("", {
              "": value
            }, allOptions.indent, "", allOptions.canonical);
          };
          var _default = canonicalStringify;
          exports3["default"] = _default;
          module3.exports = exports3.default;
        })
        /******/
      ];
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module3 = __webpack_module_cache__[moduleId] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        __webpack_modules__[moduleId](module3, module3.exports, __webpack_require__);
        return module3.exports;
      }
      var __webpack_exports__ = {};
      !(function() {
        var exports3 = __webpack_exports__;
        var Base64 = __webpack_require__(2)["Base64"];
        var Meteor = __webpack_require__(3);
        Object.defineProperty(exports3, "__esModule", {
          value: true
        });
        exports3.EJSON = void 0;
        var _utils = __webpack_require__(1);
        var EJSON = {};
        exports3.EJSON = EJSON;
        var customTypes = /* @__PURE__ */ new Map();
        EJSON.addType = function(name, factory) {
          if (customTypes.has(name)) {
            throw new Error("Type ".concat(name, " already present"));
          }
          customTypes.set(name, factory);
        };
        var builtinConverters = [{
          // Date
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$date") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: function matchObject(obj) {
            return obj instanceof Date;
          },
          toJSONValue: function toJSONValue(obj) {
            return {
              $date: obj.getTime()
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return new Date(obj.$date);
          }
        }, {
          // RegExp
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$regexp") && (0, _utils.hasOwn)(obj, "$flags") && (0, _utils.lengthOf)(obj) === 2;
          },
          matchObject: function matchObject(obj) {
            return obj instanceof RegExp;
          },
          toJSONValue: function toJSONValue(regexp) {
            return {
              $regexp: regexp.source,
              $flags: regexp.flags
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return new RegExp(obj.$regexp, obj.$flags.slice(0, 50).replace(/[^gimuy]/g, "").replace(/(.)(?=.*\1)/g, ""));
          }
        }, {
          // NaN, Inf, -Inf. (These are the only objects with typeof !== 'object'
          // which we match.)
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$InfNaN") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: _utils.isInfOrNaN,
          toJSONValue: function toJSONValue(obj) {
            var sign;
            if (Number.isNaN(obj)) {
              sign = 0;
            } else if (obj === Infinity) {
              sign = 1;
            } else {
              sign = -1;
            }
            return {
              $InfNaN: sign
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return obj.$InfNaN / 0;
          }
        }, {
          // Binary
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$binary") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: function matchObject(obj) {
            return typeof Uint8Array !== "undefined" && obj instanceof Uint8Array || obj && (0, _utils.hasOwn)(obj, "$Uint8ArrayPolyfill");
          },
          toJSONValue: function toJSONValue(obj) {
            return {
              $binary: Base64.encode(obj)
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            return Base64.decode(obj.$binary);
          }
        }, {
          // Escaping one level
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$escape") && (0, _utils.lengthOf)(obj) === 1;
          },
          matchObject: function matchObject(obj) {
            var match = false;
            if (obj) {
              var keyCount = (0, _utils.lengthOf)(obj);
              if (keyCount === 1 || keyCount === 2) {
                match = builtinConverters.some(function(converter) {
                  return converter.matchJSONValue(obj);
                });
              }
            }
            return match;
          },
          toJSONValue: function toJSONValue(obj) {
            var newObj = {};
            (0, _utils.keysOf)(obj).forEach(function(key) {
              newObj[key] = EJSON.toJSONValue(obj[key]);
            });
            return {
              $escape: newObj
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            var newObj = {};
            (0, _utils.keysOf)(obj.$escape).forEach(function(key) {
              newObj[key] = EJSON.fromJSONValue(obj.$escape[key]);
            });
            return newObj;
          }
        }, {
          // Custom
          matchJSONValue: function matchJSONValue(obj) {
            return (0, _utils.hasOwn)(obj, "$type") && (0, _utils.hasOwn)(obj, "$value") && (0, _utils.lengthOf)(obj) === 2;
          },
          matchObject: function matchObject(obj) {
            return EJSON._isCustomType(obj);
          },
          toJSONValue: function toJSONValue(obj) {
            var jsonValue = Meteor._noYieldsAllowed(function() {
              return obj.toJSONValue();
            });
            return {
              $type: obj.typeName(),
              $value: jsonValue
            };
          },
          fromJSONValue: function fromJSONValue(obj) {
            var typeName = obj.$type;
            if (!customTypes.has(typeName)) {
              throw new Error("Custom EJSON type ".concat(typeName, " is not defined"));
            }
            var converter = customTypes.get(typeName);
            return Meteor._noYieldsAllowed(function() {
              return converter(obj.$value);
            });
          }
        }];
        EJSON._isCustomType = function(obj) {
          return obj && (0, _utils.isFunction)(obj.toJSONValue) && (0, _utils.isFunction)(obj.typeName) && customTypes.has(obj.typeName());
        };
        EJSON._getTypes = function() {
          var isOriginal = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          return isOriginal ? customTypes : (0, _utils.convertMapToObject)(customTypes);
        };
        EJSON._getConverters = function() {
          return builtinConverters;
        };
        var toJSONValueHelper = function toJSONValueHelper2(item) {
          for (var i = 0; i < builtinConverters.length; i++) {
            var converter = builtinConverters[i];
            if (converter.matchObject(item)) {
              return converter.toJSONValue(item);
            }
          }
          return void 0;
        };
        var adjustTypesToJSONValue = function adjustTypesToJSONValue2(obj) {
          if (obj === null) {
            return null;
          }
          var maybeChanged = toJSONValueHelper(obj);
          if (maybeChanged !== void 0) {
            return maybeChanged;
          }
          if (!(0, _utils.isObject)(obj)) {
            return obj;
          }
          (0, _utils.keysOf)(obj).forEach(function(key) {
            var value = obj[key];
            if (!(0, _utils.isObject)(value) && value !== void 0 && !(0, _utils.isInfOrNaN)(value)) {
              return;
            }
            var changed = toJSONValueHelper(value);
            if (changed) {
              obj[key] = changed;
              return;
            }
            adjustTypesToJSONValue2(value);
          });
          return obj;
        };
        EJSON._adjustTypesToJSONValue = adjustTypesToJSONValue;
        EJSON.toJSONValue = function(item) {
          var changed = toJSONValueHelper(item);
          if (changed !== void 0) {
            return changed;
          }
          var newItem = item;
          if ((0, _utils.isObject)(item)) {
            newItem = EJSON.clone(item);
            adjustTypesToJSONValue(newItem);
          }
          return newItem;
        };
        var fromJSONValueHelper = function fromJSONValueHelper2(value) {
          if ((0, _utils.isObject)(value) && value !== null) {
            var keys = (0, _utils.keysOf)(value);
            if (keys.length <= 2 && keys.every(function(k) {
              return typeof k === "string" && k.substr(0, 1) === "$";
            })) {
              for (var i = 0; i < builtinConverters.length; i++) {
                var converter = builtinConverters[i];
                if (converter.matchJSONValue(value)) {
                  return converter.fromJSONValue(value);
                }
              }
            }
          }
          return value;
        };
        var adjustTypesFromJSONValue = function adjustTypesFromJSONValue2(obj) {
          if (obj === null) {
            return null;
          }
          var maybeChanged = fromJSONValueHelper(obj);
          if (maybeChanged !== obj) {
            return maybeChanged;
          }
          if (!(0, _utils.isObject)(obj)) {
            return obj;
          }
          (0, _utils.keysOf)(obj).forEach(function(key) {
            var value = obj[key];
            if ((0, _utils.isObject)(value)) {
              var changed = fromJSONValueHelper(value);
              if (value !== changed) {
                obj[key] = changed;
                return;
              }
              adjustTypesFromJSONValue2(value);
            }
          });
          return obj;
        };
        EJSON._adjustTypesFromJSONValue = adjustTypesFromJSONValue;
        EJSON.fromJSONValue = function(item) {
          var changed = fromJSONValueHelper(item);
          if (changed === item && (0, _utils.isObject)(item)) {
            changed = EJSON.clone(item);
            adjustTypesFromJSONValue(changed);
          }
          return changed;
        };
        EJSON.stringify = (0, _utils.handleError)(function(item, options) {
          var serialized;
          var json = EJSON.toJSONValue(item);
          if (options && (options.canonical || options.indent)) {
            var canonicalStringify = __webpack_require__(4);
            serialized = canonicalStringify(json, options);
          } else {
            serialized = JSON.stringify(json);
          }
          return serialized;
        });
        EJSON.parse = function(item) {
          if (typeof item !== "string") {
            throw new Error("EJSON.parse argument should be a string");
          }
          return EJSON.fromJSONValue(JSON.parse(item));
        };
        EJSON.isBinary = function(obj) {
          return !!(typeof Uint8Array !== "undefined" && obj instanceof Uint8Array || obj && obj.$Uint8ArrayPolyfill);
        };
        EJSON.equals = function(a, b, options) {
          var i;
          var keyOrderSensitive = !!(options && options.keyOrderSensitive);
          if (a === b) {
            return true;
          }
          if (Number.isNaN(a) && Number.isNaN(b)) {
            return true;
          }
          if (!a || !b) {
            return false;
          }
          if (!((0, _utils.isObject)(a) && (0, _utils.isObject)(b))) {
            return false;
          }
          if (a instanceof Date && b instanceof Date) {
            return a.valueOf() === b.valueOf();
          }
          if (EJSON.isBinary(a) && EJSON.isBinary(b)) {
            if (a.length !== b.length) {
              return false;
            }
            for (i = 0; i < a.length; i++) {
              if (a[i] !== b[i]) {
                return false;
              }
            }
            return true;
          }
          if ((0, _utils.isFunction)(a.equals)) {
            return a.equals(b, options);
          }
          if ((0, _utils.isFunction)(b.equals)) {
            return b.equals(a, options);
          }
          var aIsArray = Array.isArray(a);
          var bIsArray = Array.isArray(b);
          if (aIsArray !== bIsArray) {
            return false;
          }
          if (aIsArray && bIsArray) {
            if (a.length !== b.length) {
              return false;
            }
            for (i = 0; i < a.length; i++) {
              if (!EJSON.equals(a[i], b[i], options)) {
                return false;
              }
            }
            return true;
          }
          switch (EJSON._isCustomType(a) + EJSON._isCustomType(b)) {
            case 1:
              return false;
            case 2:
              return EJSON.equals(EJSON.toJSONValue(a), EJSON.toJSONValue(b));
            default:
          }
          var ret;
          var aKeys = (0, _utils.keysOf)(a);
          var bKeys = (0, _utils.keysOf)(b);
          if (keyOrderSensitive) {
            i = 0;
            ret = aKeys.every(function(key) {
              if (i >= bKeys.length) {
                return false;
              }
              if (key !== bKeys[i]) {
                return false;
              }
              if (!EJSON.equals(a[key], b[bKeys[i]], options)) {
                return false;
              }
              i++;
              return true;
            });
          } else {
            i = 0;
            ret = aKeys.every(function(key) {
              if (!(0, _utils.hasOwn)(b, key)) {
                return false;
              }
              if (!EJSON.equals(a[key], b[key], options)) {
                return false;
              }
              i++;
              return true;
            });
          }
          return ret && i === bKeys.length;
        };
        EJSON.clone = function(v) {
          var ret;
          if (!(0, _utils.isObject)(v)) {
            return v;
          }
          if (v === null) {
            return null;
          }
          if (v instanceof Date) {
            return new Date(v.getTime());
          }
          if (v instanceof RegExp) {
            return v;
          }
          if (EJSON.isBinary(v)) {
            ret = EJSON.newBinary(v.length);
            for (var i = 0; i < v.length; i++) {
              ret[i] = v[i];
            }
            return ret;
          }
          if (Array.isArray(v)) {
            return v.map(EJSON.clone);
          }
          if ((0, _utils.isArguments)(v)) {
            return Array.from(v).map(EJSON.clone);
          }
          if ((0, _utils.isFunction)(v.clone)) {
            return v.clone();
          }
          if (EJSON._isCustomType(v)) {
            return EJSON.fromJSONValue(EJSON.clone(EJSON.toJSONValue(v)), true);
          }
          ret = {};
          (0, _utils.keysOf)(v).forEach(function(key) {
            ret[key] = EJSON.clone(v[key]);
          });
          return ret;
        };
        EJSON.newBinary = Base64.newBinary;
      })();
      module2.exports = __webpack_exports__.EJSON;
    })();
  }
});

// node_modules/@companion-module/base/dist/host-api/ipc-wrapper.js
var require_ipc_wrapper = __commonJS({
  "node_modules/@companion-module/base/dist/host-api/ipc-wrapper.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.IpcWrapper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_js_1 = require_util();
    var ejson_1 = tslib_1.__importDefault(require_ejson());
    var MAX_CALLBACK_ID = 1 << 28;
    var IpcWrapper = class {
      #handlers;
      #sendMessage;
      #defaultTimeout;
      #nextCallbackId = 1;
      #pendingCallbacks = /* @__PURE__ */ new Map();
      constructor(handlers, sendMessage, defaultTimeout) {
        this.#handlers = handlers;
        this.#sendMessage = sendMessage;
        this.#defaultTimeout = defaultTimeout;
      }
      async sendWithCb(name, msg, defaultResponse, timeout = 0) {
        if (timeout <= 0)
          timeout = this.#defaultTimeout;
        const callbacks = { timeout: void 0, resolve: () => null, reject: () => null };
        const promise = new Promise((resolve, reject) => {
          callbacks.resolve = resolve;
          callbacks.reject = reject;
        });
        if (this.#nextCallbackId > MAX_CALLBACK_ID)
          this.#nextCallbackId = 1;
        const id = this.#nextCallbackId++;
        this.#pendingCallbacks.set(id, callbacks);
        this.#sendMessage({
          direction: "call",
          name: String(name),
          payload: ejson_1.default.stringify(msg),
          callbackId: id
        });
        const timeoutError = new Error("Call timed out");
        callbacks.timeout = setTimeout(() => {
          callbacks.reject(defaultResponse ? defaultResponse() : timeoutError);
          this.#pendingCallbacks.delete(id);
        }, timeout);
        return promise;
      }
      sendWithNoCb(name, msg) {
        this.#sendMessage({
          direction: "call",
          name: String(name),
          payload: ejson_1.default.stringify(msg),
          callbackId: void 0
        });
      }
      receivedMessage(msg) {
        const rawMsg = msg;
        switch (msg.direction) {
          case "call": {
            const handler = this.#handlers[msg.name];
            if (!handler) {
              if (msg.callbackId) {
                this.#sendMessage({
                  direction: "response",
                  callbackId: msg.callbackId,
                  success: false,
                  payload: ejson_1.default.stringify({ message: `Unknown command "${msg.name}"` })
                });
              }
              return;
            }
            const data = msg.payload ? ejson_1.default.parse(msg.payload) : void 0;
            handler(data).then((res) => {
              if (msg.callbackId) {
                this.#sendMessage({
                  direction: "response",
                  callbackId: msg.callbackId,
                  success: true,
                  payload: ejson_1.default.stringify(res)
                });
              }
            }, (err) => {
              if (msg.callbackId) {
                this.#sendMessage({
                  direction: "response",
                  callbackId: msg.callbackId,
                  success: false,
                  payload: err instanceof Error ? JSON.stringify(err, Object.getOwnPropertyNames(err)) : ejson_1.default.stringify(err)
                });
              }
            });
            break;
          }
          case "response": {
            if (!msg.callbackId) {
              console.error(`Ipc: Response message has no callbackId`);
              return;
            }
            const callbacks = this.#pendingCallbacks.get(msg.callbackId);
            this.#pendingCallbacks.delete(msg.callbackId);
            if (!callbacks) {
              return;
            }
            clearTimeout(callbacks.timeout);
            const data = msg.payload ? ejson_1.default.parse(msg.payload) : void 0;
            if (msg.success) {
              callbacks.resolve(data);
            } else {
              let err = data;
              if (data && typeof data === "object" && "message" in data) {
                err = new Error(data.message);
                if (data.stack)
                  err.stack = data.stack;
              }
              callbacks.reject(err);
            }
            break;
          }
          default:
            (0, util_js_1.assertNever)(msg);
            console.error(`Ipc: Message of unknown direction "${rawMsg.direction}"`);
            break;
        }
      }
    };
    exports2.IpcWrapper = IpcWrapper;
  }
});

// node_modules/@companion-module/base/dist/internal/actions.js
var require_actions = __commonJS({
  "node_modules/@companion-module/base/dist/internal/actions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ActionManager = void 0;
    var base_js_1 = require_base();
    function convertActionInstanceToEvent(action) {
      return {
        id: action.id,
        actionId: action.actionId,
        controlId: action.controlId,
        options: action.options
      };
    }
    var ActionManager = class {
      #parseVariablesInString;
      #setActionDefinitions;
      #setCustomVariableValue;
      #log;
      #actionDefinitions = /* @__PURE__ */ new Map();
      #actionInstances = /* @__PURE__ */ new Map();
      constructor(parseVariablesInString, setActionDefinitions, setCustomVariableValue, log) {
        this.#parseVariablesInString = parseVariablesInString;
        this.#setActionDefinitions = setActionDefinitions;
        this.#setCustomVariableValue = setCustomVariableValue;
        this.#log = log;
      }
      async handleExecuteAction(msg) {
        const actionDefinition = this.#actionDefinitions.get(msg.action.actionId);
        if (!actionDefinition)
          throw new Error(`Unknown action: ${msg.action.actionId}`);
        const context = {
          parseVariablesInString: async (text) => {
            const res = await this.#parseVariablesInString({
              text,
              controlId: msg.action.controlId,
              actionInstanceId: msg.action.id,
              feedbackInstanceId: void 0
            });
            return res.text;
          },
          setCustomVariableValue: (variableName, value) => {
            this.#setCustomVariableValue({
              customVariableId: variableName,
              value,
              controlId: msg.action.controlId
            });
          }
        };
        await actionDefinition.callback({
          id: msg.action.id,
          actionId: msg.action.actionId,
          controlId: msg.action.controlId,
          options: msg.action.options,
          surfaceId: msg.surfaceId
        }, context);
      }
      handleUpdateActions(actions) {
        for (const [id, action] of Object.entries(actions)) {
          const existing = this.#actionInstances.get(id);
          if (existing) {
            const definition = this.#actionDefinitions.get(existing.actionId);
            if (definition?.unsubscribe && !definition.skipUnsubscribeOnOptionsChange) {
              const context = {
                parseVariablesInString: async (text) => {
                  return text;
                },
                setCustomVariableValue: () => {
                  throw new Error(`setCustomVariableValue is not available during unsubscribe`);
                }
              };
              Promise.resolve(definition.unsubscribe(convertActionInstanceToEvent(existing), context)).catch((e) => {
                this.#log("error", `Action unsubscribe failed: ${JSON.stringify(existing)} - ${e?.message ?? e} ${e?.stack}`);
              });
            }
          }
          if (!action || action.disabled) {
            this.#actionInstances.delete(id);
          } else {
            this.#actionInstances.set(id, action);
            const definition = this.#actionDefinitions.get(action.actionId);
            if (definition?.subscribe) {
              const context = {
                parseVariablesInString: async (text) => {
                  return text;
                },
                setCustomVariableValue: () => {
                  throw new Error(`setCustomVariableValue is not available during subscribe`);
                }
              };
              Promise.resolve(definition.subscribe(convertActionInstanceToEvent(action), context)).catch((e) => {
                this.#log("error", `Action subscribe failed: ${JSON.stringify(action)} - ${e?.message ?? e} ${e?.stack}`);
              });
            }
          }
        }
      }
      async handleLearnAction(msg) {
        const definition = this.#actionDefinitions.get(msg.action.actionId);
        if (definition && definition.learn) {
          const context = {
            parseVariablesInString: async (text) => {
              const res = await this.#parseVariablesInString({
                text,
                controlId: msg.action.controlId,
                actionInstanceId: msg.action.id,
                feedbackInstanceId: void 0
              });
              return res.text;
            },
            setCustomVariableValue: () => {
              throw new Error(`setCustomVariableValue is not available during learn`);
            }
          };
          const newOptions = await definition.learn({
            id: msg.action.id,
            actionId: msg.action.actionId,
            controlId: msg.action.controlId,
            options: msg.action.options,
            surfaceId: void 0
          }, context);
          return {
            options: newOptions
          };
        } else {
          return {
            options: void 0
          };
        }
      }
      setActionDefinitions(actions) {
        const hostActions = [];
        this.#actionDefinitions.clear();
        for (const [actionId, action] of Object.entries(actions)) {
          if (action) {
            hostActions.push({
              id: actionId,
              name: action.name,
              description: action.description,
              options: (0, base_js_1.serializeIsVisibleFn)(action.options),
              optionsToIgnoreForSubscribe: action.optionsToIgnoreForSubscribe,
              hasLearn: !!action.learn,
              learnTimeout: action.learnTimeout,
              hasLifecycleFunctions: !!action.subscribe || !!action.unsubscribe
            });
            this.#actionDefinitions.set(actionId, action);
          }
        }
        this.#setActionDefinitions({ actions: hostActions });
      }
      subscribeActions(actionIds) {
        let actions = Array.from(this.#actionInstances.values());
        const actionIdSet = new Set(actionIds);
        if (actionIdSet.size)
          actions = actions.filter((fb) => actionIdSet.has(fb.actionId));
        for (const act of actions) {
          const def = this.#actionDefinitions.get(act.actionId);
          if (def?.subscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              },
              setCustomVariableValue: () => {
                throw new Error(`setCustomVariableValue is not available during subscribe`);
              }
            };
            Promise.resolve(def.subscribe(convertActionInstanceToEvent(act), context)).catch((e) => {
              this.#log("error", `Action subscribe failed: ${JSON.stringify(act)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
      unsubscribeActions(actionIds) {
        let actions = Array.from(this.#actionInstances.values());
        const actionIdSet = new Set(actionIds);
        if (actionIdSet.size)
          actions = actions.filter((fb) => actionIdSet.has(fb.actionId));
        for (const act of actions) {
          const def = this.#actionDefinitions.get(act.actionId);
          if (def && def.unsubscribe) {
            const context = {
              parseVariablesInString: async (text) => {
                return text;
              },
              setCustomVariableValue: () => {
                throw new Error(`setCustomVariableValue is not available during unsubscribe`);
              }
            };
            Promise.resolve(def.unsubscribe(convertActionInstanceToEvent(act), context)).catch((e) => {
              this.#log("error", `Action unsubscribe failed: ${JSON.stringify(act)} - ${e?.message ?? e} ${e?.stack}`);
            });
          }
        }
      }
    };
    exports2.ActionManager = ActionManager;
  }
});

// node_modules/eventemitter3/index.js
var require_eventemitter32 = __commonJS({
  "node_modules/eventemitter3/index.js"(exports2, module2) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0) return names;
      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module2) {
      module2.exports = EventEmitter;
    }
  }
});

// node_modules/@companion-module/base/dist/module-api/shared-udp-socket.js
var require_shared_udp_socket = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/shared-udp-socket.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.SharedUdpSocketImpl = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var eventemitter3_1 = tslib_1.__importDefault(require_eventemitter32());
    var util_js_1 = require_util();
    var SharedUdpSocketImpl = class extends eventemitter3_1.default {
      #ipcWrapper;
      #moduleUdpSockets;
      #options;
      get handleId() {
        return this.boundState?.handleId;
      }
      get portNumber() {
        return this.boundState?.portNumber;
      }
      get boundState() {
        if (this.#state && typeof this.#state === "object") {
          return this.#state;
        } else {
          return void 0;
        }
      }
      #state = "pending";
      constructor(ipcWrapper, moduleUdpSockets, options) {
        super();
        this.#ipcWrapper = ipcWrapper;
        this.#moduleUdpSockets = moduleUdpSockets;
        this.#options = { ...options };
      }
      bind(port, _address, callback) {
        if (this.#state && typeof this.#state === "object")
          throw new Error("Socket is already bound");
        switch (this.#state) {
          case "fatalError":
            throw new Error("Socket has encountered fatal error");
          case "binding":
            throw new Error("Socket is already bound");
          case "closed":
            throw new Error("Socket is closing");
          case "pending":
            break;
          default:
            (0, util_js_1.assertNever)(this.#state);
            throw new Error("Invalid socket state");
        }
        this.#state = "binding";
        if (callback)
          this.on("listening", callback);
        this.#ipcWrapper.sendWithCb("sharedUdpSocketJoin", {
          family: this.#options.type,
          portNumber: port
          // Future: use address?
        }).then((handleId) => {
          this.#state = { portNumber: port, handleId };
          this.#moduleUdpSockets.set(handleId, this);
          this.emit("listening");
        }, (err) => {
          this.#state = "closed";
          this.emit("error", err instanceof Error ? err : new Error(err));
        }).catch(() => null);
      }
      close(callback) {
        if (this.#state && typeof this.#state === "object") {
        } else {
          switch (this.#state) {
            case "fatalError":
              throw new Error("Socket has encountered fatal error");
            case "pending":
            case "closed":
            case "binding":
              throw new Error("Socket is not open");
            default:
              (0, util_js_1.assertNever)(this.#state);
              throw new Error("Invalid socket state");
          }
        }
        const handleId = this.#state.handleId;
        this.#state = "closed";
        if (callback)
          this.on("close", callback);
        this.#ipcWrapper.sendWithCb("sharedUdpSocketLeave", {
          handleId
        }).then(() => {
          this.#moduleUdpSockets.delete(handleId);
          this.emit("close");
        }, (err) => {
          this.#moduleUdpSockets.delete(handleId);
          this.emit("error", err instanceof Error ? err : new Error(err));
        }).catch(() => null);
      }
      send(bufferOrList, offsetOrPort, lengthOrAddress, portOrCallback, address, callback) {
        if (typeof offsetOrPort !== "number")
          throw new Error("Invalid arguments");
        if (typeof lengthOrAddress === "number") {
          if (typeof portOrCallback !== "number" || typeof address !== "string")
            throw new Error("Invalid arguments");
          if (callback !== void 0 && typeof callback !== "function")
            throw new Error("Invalid arguments");
          const buffer = this.#processBuffer(bufferOrList, offsetOrPort, lengthOrAddress);
          this.#sendInner(buffer, portOrCallback, address, callback);
        } else if (typeof lengthOrAddress === "string") {
          if (portOrCallback !== void 0 && typeof portOrCallback !== "function")
            throw new Error("Invalid arguments");
          const buffer = this.#processBuffer(bufferOrList, 0, void 0);
          this.#sendInner(buffer, offsetOrPort, lengthOrAddress, portOrCallback);
        } else {
          throw new Error("Invalid arguments");
        }
      }
      #processBuffer(bufferOrList, offset, length) {
        let buffer;
        if (typeof bufferOrList === "string") {
          buffer = Buffer.from(bufferOrList, "utf-8");
        } else if (Buffer.isBuffer(bufferOrList)) {
          buffer = bufferOrList;
        } else if (Array.isArray(bufferOrList)) {
          return Buffer.from(bufferOrList);
        } else {
          buffer = Buffer.from(bufferOrList.buffer, bufferOrList.byteOffset, bufferOrList.byteLength);
        }
        return buffer.subarray(offset, length !== void 0 ? length + offset : void 0);
      }
      #sendInner(buffer, port, address, callback) {
        if (!this.#state || typeof this.#state !== "object")
          throw new Error("Socket is not open");
        this.#ipcWrapper.sendWithCb("sharedUdpSocketSend", {
          handleId: this.#state.handleId,
          message: buffer,
          address,
          port
        }).then(() => {
          callback?.();
        }, (err) => {
          this.emit("error", err instanceof Error ? err : new Error(err));
        }).catch(() => null);
      }
      receiveSocketMessage(message) {
        try {
          this.emit("message", message.message, message.source);
        } catch (_e) {
        }
      }
      receiveSocketError(error) {
        this.#state = "fatalError";
        const boundState = this.boundState;
        if (boundState)
          this.#moduleUdpSockets.delete(boundState.handleId);
        try {
          this.emit("error", error);
        } catch (_e) {
        }
      }
    };
    exports2.SharedUdpSocketImpl = SharedUdpSocketImpl;
  }
});

// node_modules/@companion-module/base/dist/module-api/base.js
var require_base2 = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.InstanceBase = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var util_js_1 = require_util();
    var p_queue_1 = tslib_1.__importDefault(require_dist());
    var base_js_1 = require_base();
    var upgrade_js_1 = require_upgrade();
    var feedback_js_1 = require_feedback();
    var ipc_wrapper_js_1 = require_ipc_wrapper();
    var actions_js_1 = require_actions();
    var shared_udp_socket_js_1 = require_shared_udp_socket();
    var InstanceBase2 = class {
      #ipcWrapper;
      #upgradeScripts;
      id;
      #lifecycleQueue = new p_queue_1.default({ concurrency: 1 });
      #initialized = false;
      #recordingActions = false;
      #lastConfig = {};
      #lastSecrets = {};
      #actionManager;
      #feedbackManager;
      #sharedUdpSocketHandlers = /* @__PURE__ */ new Map();
      #variableDefinitions = /* @__PURE__ */ new Map();
      #variableValues = /* @__PURE__ */ new Map();
      #options;
      #label;
      get instanceOptions() {
        return this.#options;
      }
      /**
       * The user chosen name for this instance.
       * This can be changed just before `configUpdated` is called
       */
      get label() {
        return this.#label;
      }
      /**
       * Create an instance of the module
       */
      constructor(internal) {
        if (!(0, base_js_1.isInstanceBaseProps)(internal) || !internal._isInstanceBaseProps)
          throw new Error(`Module instance is being constructed incorrectly. Make sure you aren't trying to do this manually`);
        this.createSharedUdpSocket = this.createSharedUdpSocket.bind(this);
        this.#options = {
          disableVariableValidation: false
        };
        this.#ipcWrapper = new ipc_wrapper_js_1.IpcWrapper({
          init: this._handleInit.bind(this),
          destroy: this._handleDestroy.bind(this),
          updateConfigAndLabel: this._handleConfigUpdateAndLabel.bind(this),
          updateConfig: async () => void 0,
          // Replaced by updateConfigAndLabel
          executeAction: this._handleExecuteAction.bind(this),
          updateFeedbacks: this._handleUpdateFeedbacks.bind(this),
          updateActions: this._handleUpdateActions.bind(this),
          upgradeActionsAndFeedbacks: this._handleUpgradeActionsAndFeedbacks.bind(this),
          getConfigFields: this._handleGetConfigFields.bind(this),
          handleHttpRequest: this._handleHttpRequest.bind(this),
          learnAction: this._handleLearnAction.bind(this),
          learnFeedback: this._handleLearnFeedback.bind(this),
          startStopRecordActions: this._handleStartStopRecordActions.bind(this),
          variablesChanged: async () => void 0,
          // Not needed since 1.13.0
          sharedUdpSocketMessage: this._handleSharedUdpSocketMessage.bind(this),
          sharedUdpSocketError: this._handleSharedUdpSocketError.bind(this)
        }, (msg) => {
          process.send(msg);
        }, 5e3);
        process.on("message", (msg) => {
          this.#ipcWrapper.receivedMessage(msg);
        });
        const parseVariablesInStringIfNeeded = async (msg) => {
          if (!msg.text.includes("$("))
            return {
              text: msg.text,
              variableIds: void 0
            };
          return this.#ipcWrapper.sendWithCb("parseVariablesInString", msg);
        };
        this.#actionManager = new actions_js_1.ActionManager(parseVariablesInStringIfNeeded, (msg) => this.#ipcWrapper.sendWithNoCb("setActionDefinitions", msg), (msg) => this.#ipcWrapper.sendWithNoCb("setCustomVariable", msg), this.log.bind(this));
        this.#feedbackManager = new feedback_js_1.FeedbackManager(parseVariablesInStringIfNeeded, (msg) => this.#ipcWrapper.sendWithNoCb("updateFeedbackValues", msg), (msg) => this.#ipcWrapper.sendWithNoCb("setFeedbackDefinitions", msg), this.log.bind(this));
        this.#upgradeScripts = internal.upgradeScripts;
        this.id = internal.id;
        this.#label = internal.id;
        this.log("debug", "Initializing");
      }
      async _handleInit(msg) {
        return this.#lifecycleQueue.add(async () => {
          if (this.#initialized)
            throw new Error("Already initialized");
          this.#lastConfig = msg.config;
          this.#lastSecrets = msg.secrets;
          this.#label = msg.label;
          process.title = msg.label;
          if (msg.isFirstInit) {
            const newConfig = {};
            const newSecrets = {};
            const fields = this.getConfigFields();
            for (const field of fields) {
              if ("default" in field) {
                if (field.type.startsWith("secret")) {
                  newSecrets[field.id] = field.default;
                } else {
                  newConfig[field.id] = field.default;
                }
              }
            }
            this.#lastConfig = newConfig;
            this.#lastSecrets = newSecrets;
            this.saveConfig(this.#lastConfig, this.#lastSecrets);
            msg.lastUpgradeIndex = this.#upgradeScripts.length - 1;
          }
          const { updatedConfig, updatedSecrets } = (0, upgrade_js_1.runThroughUpgradeScripts)([], [], msg.lastUpgradeIndex, this.#upgradeScripts, this.#lastConfig, this.#lastSecrets, false);
          this.#lastConfig = updatedConfig ?? this.#lastConfig;
          this.#lastSecrets = updatedSecrets ?? this.#lastSecrets;
          try {
            await this.init(this.#lastConfig, !!msg.isFirstInit, this.#lastSecrets);
            this.#initialized = true;
          } catch (e) {
            console.trace(`Init failed: ${e}`);
            throw e;
          }
          return {
            hasHttpHandler: typeof this.handleHttpRequest === "function",
            hasRecordActionsHandler: typeof this.handleStartStopRecordActions == "function",
            newUpgradeIndex: this.#upgradeScripts.length - 1,
            updatedConfig: this.#lastConfig,
            updatedSecrets: this.#lastSecrets
          };
        });
      }
      async _handleDestroy() {
        await this.#lifecycleQueue.add(async () => {
          if (!this.#initialized)
            throw new Error("Not initialized");
          await this.destroy();
          this.#initialized = false;
        });
      }
      async _handleConfigUpdateAndLabel(msg) {
        await this.#lifecycleQueue.add(async () => {
          if (!this.#initialized)
            throw new Error("Not initialized");
          this.#label = msg.label;
          process.title = msg.label;
          this.#lastConfig = msg.config;
          this.#lastSecrets = msg.secrets;
          await this.configUpdated(this.#lastConfig, this.#lastSecrets);
        });
      }
      async _handleExecuteAction(msg) {
        return this.#actionManager.handleExecuteAction(msg);
      }
      async _handleUpdateFeedbacks(msg) {
        this.#feedbackManager.handleUpdateFeedbacks(msg.feedbacks);
      }
      async _handleUpdateActions(msg) {
        this.#actionManager.handleUpdateActions(msg.actions);
      }
      async _handleUpgradeActionsAndFeedbacks(msg) {
        return (0, upgrade_js_1.runThroughUpgradeScripts)(msg.actions, msg.feedbacks, null, this.#upgradeScripts, this.#lastConfig, this.#lastSecrets, true);
      }
      async _handleGetConfigFields(_msg) {
        return {
          fields: (0, base_js_1.serializeIsVisibleFn)(this.getConfigFields())
        };
      }
      async _handleHttpRequest(msg) {
        if (!this.handleHttpRequest)
          throw new Error(`handleHttpRequest is not supported!`);
        const res = await this.handleHttpRequest(msg.request);
        return { response: res };
      }
      async _handleLearnAction(msg) {
        return this.#actionManager.handleLearnAction(msg);
      }
      async _handleLearnFeedback(msg) {
        return this.#feedbackManager.handleLearnFeedback(msg);
      }
      async _handleStartStopRecordActions(msg) {
        if (!msg.recording) {
          if (!this.#recordingActions) {
            return;
          }
        } else {
          if (this.#recordingActions) {
            return;
          }
        }
        if (!this.handleStartStopRecordActions) {
          this.#recordingActions = false;
          throw new Error("Recording actions is not supported by this module!");
        }
        this.#recordingActions = msg.recording;
        this.handleStartStopRecordActions(this.#recordingActions);
      }
      async _handleSharedUdpSocketMessage(msg) {
        for (const socket of this.#sharedUdpSocketHandlers.values()) {
          if (socket.handleId === msg.handleId) {
            socket.receiveSocketMessage(msg);
          }
        }
      }
      async _handleSharedUdpSocketError(msg) {
        for (const socket of this.#sharedUdpSocketHandlers.values()) {
          if (socket.handleId === msg.handleId) {
            socket.receiveSocketError(msg.error);
          }
        }
      }
      saveConfig(newConfig, newSecrets) {
        if (newConfig)
          this.#lastConfig = newConfig;
        if (newSecrets)
          this.#lastSecrets = newSecrets;
        this.#ipcWrapper.sendWithNoCb("saveConfig", { config: newConfig, secrets: newSecrets });
      }
      /**
       * Set the action definitions for this instance
       * @param actions The action definitions
       */
      setActionDefinitions(actions) {
        this.#actionManager.setActionDefinitions(actions);
      }
      /**
       * Set the feedback definitions for this instance
       * @param feedbacks The feedback definitions
       */
      setFeedbackDefinitions(feedbacks) {
        this.#feedbackManager.setFeedbackDefinitions(feedbacks);
      }
      /**
       * Set the peset definitions for this instance
       * @param presets The preset definitions
       */
      setPresetDefinitions(presets) {
        const hostPresets = [];
        for (const [id, preset] of Object.entries(presets)) {
          if (preset) {
            hostPresets.push({
              ...preset,
              id
            });
          }
        }
        this.#ipcWrapper.sendWithNoCb("setPresetDefinitions", { presets: hostPresets });
      }
      /**
       * Set the variable definitions for this instance
       * @param variables The variable definitions
       */
      setVariableDefinitions(variables) {
        const hostVariables = [];
        const hostValues = [];
        this.#variableDefinitions.clear();
        for (const variable of variables) {
          hostVariables.push({
            id: variable.variableId,
            name: variable.name
          });
          this.#variableDefinitions.set(variable.variableId, variable);
          if (!this.#variableValues.has(variable.variableId)) {
            this.#variableValues.set(variable.variableId, "");
            hostValues.push({
              id: variable.variableId,
              value: ""
            });
          }
        }
        if (!this.#options.disableVariableValidation) {
          const validIds = new Set(this.#variableDefinitions.keys());
          for (const id of this.#variableValues.keys()) {
            if (!validIds.has(id)) {
              this.#variableValues.delete(id);
              hostValues.push({
                id,
                value: void 0
              });
            }
          }
        }
        this.#ipcWrapper.sendWithNoCb("setVariableDefinitions", { variables: hostVariables, newValues: hostValues });
      }
      /**
       * Set the values of some variables
       * @param values The new values for the variables
       */
      setVariableValues(values) {
        const hostValues = [];
        for (const [variableId, value] of Object.entries(values)) {
          if (this.#options.disableVariableValidation) {
            if (value === void 0) {
              this.#variableValues.delete(variableId);
            } else {
              this.#variableValues.set(variableId, value);
            }
            hostValues.push({
              id: variableId,
              value
            });
          } else if (this.#variableDefinitions.has(variableId)) {
            this.#variableValues.set(variableId, value ?? "");
            hostValues.push({
              id: variableId,
              value: value ?? ""
            });
          } else {
            hostValues.push({
              id: variableId,
              value: void 0
            });
          }
        }
        this.#ipcWrapper.sendWithNoCb("setVariableValues", { newValues: hostValues });
      }
      /**
       * Get the last set value of a variable from this connection
       * @param variableId id of the variable
       * @returns The value
       */
      getVariableValue(variableId) {
        return this.#variableValues.get(variableId);
      }
      /**
       * @deprecated Companion now handles this for you, for actions and feedbacks. If you need this for another purpose, let us know as we intend to remove this
       *
       * Parse and replace all the variables in a string
       * Note: You must not use this for feedbacks, as your feedback will not update when the variable changes.
       * There is an alternate version of this supplied to each of the action/feedback callbacks that tracks
       * usages properly and will retrigger the feedback when the variables change.
       * @param text The text to parse
       * @returns The string with variables replaced with their values
       */
      async parseVariablesInString(text) {
        const currentContext = this.#feedbackManager.parseVariablesContext;
        if (currentContext) {
          this.log("debug", `parseVariablesInString called while in: ${currentContext}. You should use the parseVariablesInString provided to the callback instead`);
        }
        if (!text.includes("$("))
          return text;
        const res = await this.#ipcWrapper.sendWithCb("parseVariablesInString", {
          text,
          controlId: void 0,
          actionInstanceId: void 0,
          feedbackInstanceId: void 0
        });
        return res.text;
      }
      /**
       * Request all feedbacks of the specified types to be checked for changes
       * @param feedbackTypes The feedback types to check
       */
      checkFeedbacks(...feedbackTypes) {
        this.#feedbackManager.checkFeedbacks(feedbackTypes);
      }
      /**
       * Request the specified feedback instances to be checked for changes
       * @param feedbackIds The ids of the feedback instances to check
       */
      checkFeedbacksById(...feedbackIds) {
        this.#feedbackManager.checkFeedbacksById(feedbackIds);
      }
      /**
       * Call subscribe on all currently known placed actions.
       * It can be useful to trigger this upon establishing a connection, to ensure all data is loaded.
       * @param actionIds The actionIds to call subscribe for. If no values are provided, then all are called.
       */
      subscribeActions(...actionIds) {
        this.#actionManager.subscribeActions(actionIds);
      }
      /**
       * Call unsubscribe on all currently known placed actions.
       * It can be useful to do some cleanup upon a connection closing.
       * @param actionIds The actionIds to call subscribe for. If no values are provided, then all are called.
       */
      unsubscribeActions(...actionIds) {
        this.#actionManager.unsubscribeActions(actionIds);
      }
      /**
       * Call subscribe on all currently known placed feedbacks.
       * It can be useful to trigger this upon establishing a connection, to ensure all data is loaded.
       * @param feedbackIds The feedbackIds to call subscribe for. If no values are provided, then all are called.
       */
      subscribeFeedbacks(...feedbackIds) {
        this.#feedbackManager.subscribeFeedbacks(feedbackIds);
      }
      /**
       * Call unsubscribe on all currently known placed feedbacks.
       * It can be useful to do some cleanup upon a connection closing.
       * @param feedbackIds The feedbackIds to call subscribe for. If no values are provided, then all are called.
       */
      unsubscribeFeedbacks(...feedbackIds) {
        this.#feedbackManager.unsubscribeFeedbacks(feedbackIds);
      }
      /**
       * Add an action to the current recording session
       * @param action The action to be added to the recording session
       * @param uniquenessId A unique id for the action being recorded. This should be different for each action, but by passing the same as a previous call will replace the previous value.
       */
      recordAction(action, uniquenessId) {
        if (!this.#recordingActions)
          throw new Error("Not currently recording actions");
        this.#ipcWrapper.sendWithNoCb("recordAction", {
          uniquenessId: uniquenessId ?? null,
          actionId: action.actionId,
          options: action.options,
          delay: action.delay
        });
      }
      /**
       * Send an osc message from the system osc sender
       * @param host destination ip address
       * @param port destination port number
       * @param path message path
       * @param args mesage arguments
       */
      oscSend(host, port, path, args) {
        this.#ipcWrapper.sendWithNoCb("send-osc", (0, util_js_1.literal)({
          host,
          port,
          path,
          args
        }));
      }
      /**
       * Update the status of this connection
       * @param status The status level
       * @param message Additional information about the status
       *
       * ### Example
       * ```js
       * this.updateStatus(InstanceStatus.Ok)
       * ```
       */
      updateStatus(status, message) {
        this.#ipcWrapper.sendWithNoCb("set-status", (0, util_js_1.literal)({
          status,
          message: message ?? null
        }));
      }
      /**
       * Write a line to the log
       * @param level The level of the message
       * @param message The message text to write
       */
      log(level, message) {
        this.#ipcWrapper.sendWithNoCb("log-message", (0, util_js_1.literal)({
          level,
          message
        }));
      }
      createSharedUdpSocket(typeOrOptions, callback) {
        const options = typeof typeOrOptions === "string" ? { type: typeOrOptions } : typeOrOptions;
        const socket = new shared_udp_socket_js_1.SharedUdpSocketImpl(this.#ipcWrapper, this.#sharedUdpSocketHandlers, options);
        if (callback)
          socket.on("message", callback);
        return socket;
      }
    };
    exports2.InstanceBase = InstanceBase2;
  }
});

// node_modules/@companion-module/base/dist/module-api/config.js
var require_config = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/config.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/enums.js
var require_enums = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/enums.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Regex = exports2.InstanceStatus = void 0;
    var InstanceStatus2;
    (function(InstanceStatus3) {
      InstanceStatus3["Ok"] = "ok";
      InstanceStatus3["Connecting"] = "connecting";
      InstanceStatus3["Disconnected"] = "disconnected";
      InstanceStatus3["ConnectionFailure"] = "connection_failure";
      InstanceStatus3["BadConfig"] = "bad_config";
      InstanceStatus3["UnknownError"] = "unknown_error";
      InstanceStatus3["UnknownWarning"] = "unknown_warning";
      InstanceStatus3["AuthenticationFailure"] = "authentication_failure";
    })(InstanceStatus2 || (exports2.InstanceStatus = InstanceStatus2 = {}));
    var Regex;
    (function(Regex2) {
      Regex2.IP = "/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/";
      Regex2.HOSTNAME = "/^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/";
      Regex2.BOOLEAN = "/^(true|false|0|1)$/i";
      Regex2.PORT = "/^([1-9]|[1-8][0-9]|9[0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-4])$/";
      Regex2.MAC_ADDRESS = "/^(?:[a-fA-F0-9]{2}:){5}([a-fA-F0-9]{2})$/";
      Regex2.PERCENT = "/^(100|[0-9]|[0-9][0-9])$/";
      Regex2.FLOAT = "/^([0-9]*\\.)?[0-9]+$/";
      Regex2.SIGNED_FLOAT = "/^[+-]?([0-9]*\\.)?[0-9]+$/";
      Regex2.FLOAT_OR_INT = "/^([0-9]+)(\\.[0-9]+)?$/";
      Regex2.NUMBER = "/^\\d+$/";
      Regex2.SIGNED_NUMBER = "/^[+-]?\\d+$/";
      Regex2.SOMETHING = "/^.+$/";
      Regex2.TIMECODE = "/^(0*[0-9]|1[0-9]|2[0-4]):(0*[0-9]|[1-5][0-9]|60):(0*[0-9]|[1-5][0-9]|60):(0*[0-9]|[12][0-9]|30)$/";
    })(Regex || (exports2.Regex = Regex = {}));
  }
});

// node_modules/@companion-module/base/dist/module-api/feedback.js
var require_feedback2 = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/feedback.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/http.js
var require_http = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/http.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/input.js
var require_input = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/input.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/preset.js
var require_preset = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/preset.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/style.js
var require_style = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/style.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/upgrade.js
var require_upgrade2 = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/upgrade.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.EmptyUpgradeScript = void 0;
    exports2.CreateConvertToBooleanFeedbackUpgradeScript = CreateConvertToBooleanFeedbackUpgradeScript;
    exports2.CreateUseBuiltinInvertForFeedbacksUpgradeScript = CreateUseBuiltinInvertForFeedbacksUpgradeScript;
    var EmptyUpgradeScript = () => ({
      updatedConfig: null,
      updatedSecrets: null,
      updatedActions: [],
      updatedFeedbacks: []
    });
    exports2.EmptyUpgradeScript = EmptyUpgradeScript;
    function CreateConvertToBooleanFeedbackUpgradeScript(upgradeMap) {
      return (_context, props) => {
        const changedFeedbacks = [];
        for (const feedback of props.feedbacks) {
          let upgrade_rules = upgradeMap[feedback.feedbackId];
          if (upgrade_rules === true) {
            upgrade_rules = {
              bg: "bgcolor",
              bgcolor: "bgcolor",
              fg: "color",
              color: "color",
              png64: "png64",
              png: "png64"
            };
          }
          if (upgrade_rules) {
            if (!feedback.style)
              feedback.style = {};
            for (const [option_key, style_key] of Object.entries(upgrade_rules)) {
              if (feedback.options[option_key] !== void 0) {
                feedback.style[style_key] = feedback.options[option_key];
                delete feedback.options[option_key];
                changedFeedbacks.push(feedback);
              }
            }
          }
        }
        return {
          updatedConfig: null,
          updatedSecrets: null,
          updatedActions: [],
          updatedFeedbacks: changedFeedbacks
        };
      };
    }
    function CreateUseBuiltinInvertForFeedbacksUpgradeScript(upgradeMap) {
      return (_context, props) => {
        const changedFeedbacks = [];
        for (const feedback of props.feedbacks) {
          const propertyName = upgradeMap[feedback.feedbackId];
          if (typeof propertyName !== "string")
            continue;
          const rawValue = feedback.options[propertyName];
          if (rawValue === void 0)
            continue;
          delete feedback.options[propertyName];
          feedback.isInverted = rawValue === "true" || Boolean(rawValue) === true || Number(rawValue) > 0;
          changedFeedbacks.push(feedback);
        }
        return {
          updatedConfig: null,
          updatedSecrets: null,
          updatedActions: [],
          updatedFeedbacks: changedFeedbacks
        };
      };
    }
  }
});

// node_modules/@companion-module/base/dist/module-api/variable.js
var require_variable = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/variable.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/module-api/index.js
var require_module_api = __commonJS({
  "node_modules/@companion-module/base/dist/module-api/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_action(), exports2);
    tslib_1.__exportStar(require_base2(), exports2);
    tslib_1.__exportStar(require_config(), exports2);
    tslib_1.__exportStar(require_enums(), exports2);
    tslib_1.__exportStar(require_feedback2(), exports2);
    tslib_1.__exportStar(require_http(), exports2);
    tslib_1.__exportStar(require_input(), exports2);
    tslib_1.__exportStar(require_preset(), exports2);
    tslib_1.__exportStar(require_style(), exports2);
    tslib_1.__exportStar(require_upgrade2(), exports2);
    tslib_1.__exportStar(require_variable(), exports2);
  }
});

// node_modules/@companion-module/base/dist/common/osc.js
var require_osc = __commonJS({
  "node_modules/@companion-module/base/dist/common/osc.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/common/json-value.js
var require_json_value = __commonJS({
  "node_modules/@companion-module/base/dist/common/json-value.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
  }
});

// node_modules/@companion-module/base/dist/helpers/tcp.js
var require_tcp = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/tcp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TCPHelper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var net_1 = tslib_1.__importDefault(require("net"));
    var eventemitter3_1 = require_eventemitter32();
    var enums_js_1 = require_enums();
    var TCPHelper = class extends eventemitter3_1.EventEmitter {
      #host;
      #port;
      _socket;
      #options;
      #connected = false;
      #connecting = false;
      #destroyed = false;
      #lastStatus;
      #reconnectTimer;
      #missingErrorHandlerTimer;
      get isConnected() {
        return this.#connected;
      }
      get isConnecting() {
        return this.#connecting;
      }
      get isDestroyed() {
        return this.#destroyed;
      }
      constructor(host, port, options) {
        super();
        this.#host = host;
        this.#port = port;
        this.#options = {
          reconnect_interval: 2e3,
          reconnect: true,
          ...options
        };
        this._socket = new net_1.default.Socket();
        this._socket.setKeepAlive(true);
        this._socket.setNoDelay(true);
        this._socket.on("error", (err) => {
          this.#connecting = false;
          this.#connected = false;
          if (this.#options.reconnect) {
            this.#queueReconnect();
          }
          this.#new_status(enums_js_1.InstanceStatus.UnknownError, err.message);
          this.emit("error", err);
        });
        this._socket.on("ready", () => {
          this.#connected = true;
          this.#connecting = false;
          this.#new_status(enums_js_1.InstanceStatus.Ok);
          this.emit("connect");
        });
        this._socket.on("end", () => {
          this.#connected = false;
          this.#new_status(enums_js_1.InstanceStatus.Disconnected);
          if (!this.#connecting && this.#options.reconnect) {
            this.#queueReconnect();
          }
          this.emit("end");
        });
        this._socket.on("data", (data) => this.emit("data", data));
        this._socket.on("drain", () => this.emit("drain"));
        setImmediate(() => {
          if (!this.#destroyed)
            this.connect();
        });
        this.#missingErrorHandlerTimer = setTimeout(() => {
          this.#missingErrorHandlerTimer = void 0;
          if (!this.#destroyed && !this.listenerCount("error")) {
            console.error(`Danger: TCP client for ${this.#host}:${this.#port} is missing an error handler!`);
          }
        }, 5e3);
      }
      connect() {
        if (this.#destroyed)
          throw new Error("Cannot connect destroyed socket");
        if (this.#connecting)
          return false;
        this.#connecting = true;
        this._socket.connect(this.#port, this.#host);
        return true;
      }
      async send(message) {
        if (this.#destroyed || this._socket.destroyed)
          throw new Error("Cannot write to destroyed socket");
        if (!message || !message.length)
          throw new Error("No message to send");
        if (!this.#connected) {
          return false;
        }
        try {
          return new Promise((resolve, reject) => {
            this._socket.write(message, (error) => {
              if (error) {
                reject(error);
                return;
              }
              resolve(true);
            });
          });
        } catch (error) {
          this.#connected = false;
          const error2 = error instanceof Error ? error : new Error(`${error}`);
          this.#new_status(enums_js_1.InstanceStatus.UnknownError, error2.message);
          this.emit("error", error2);
          throw error2;
        }
      }
      destroy() {
        this.#destroyed = true;
        if (this.#reconnectTimer !== void 0) {
          clearTimeout(this.#reconnectTimer);
          this.#reconnectTimer = void 0;
        }
        if (this.#missingErrorHandlerTimer !== void 0) {
          clearTimeout(this.#missingErrorHandlerTimer);
          this.#missingErrorHandlerTimer = void 0;
        }
        this._socket.removeAllListeners();
        this.removeAllListeners();
        this._socket.destroy();
      }
      #queueReconnect() {
        if (this.#reconnectTimer !== void 0) {
          clearTimeout(this.#reconnectTimer);
        }
        this.#reconnectTimer = setTimeout(() => {
          this.#reconnectTimer = void 0;
          this.#new_status(enums_js_1.InstanceStatus.Connecting);
          this.connect();
        }, this.#options.reconnect_interval);
      }
      // Private function
      #new_status(status, message) {
        if (this.#lastStatus != status) {
          this.#lastStatus = status;
          this.emit("status_change", status, message);
        }
      }
    };
    exports2.TCPHelper = TCPHelper;
  }
});

// node_modules/@companion-module/base/dist/helpers/telnet.js
var require_telnet = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/telnet.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.TelnetHelper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var eventemitter3_1 = tslib_1.__importDefault(require_eventemitter32());
    var stream_1 = require("stream");
    var tcp_js_1 = require_tcp();
    var DATA = 0;
    var SE = 240;
    var SB = 250;
    var WILL = 251;
    var WONT = 252;
    var DO = 253;
    var DONT = 254;
    var IAC = 255;
    var TelnetHelper = class extends eventemitter3_1.default {
      #tcp;
      #stream;
      #missingErrorHandlerTimer;
      get isConnected() {
        return this.#tcp.isConnected;
      }
      get isConnecting() {
        return this.#tcp.isConnecting;
      }
      get isDestroyed() {
        return this.#tcp.isDestroyed;
      }
      constructor(host, port, options) {
        super();
        this.#tcp = new tcp_js_1.TCPHelper(host, port, options);
        this.#stream = new TelnetStream();
        this.#tcp._socket.pipe(this.#stream);
        this.#tcp.on("connect", () => this.emit("connect"));
        this.#tcp.on("end", () => this.emit("end"));
        this.#tcp.on("error", (error) => this.emit("error", error));
        this.#tcp.on("status_change", (status, message) => this.emit("status_change", status, message));
        this.#stream.on("iac", (a, b) => this.emit("iac", a, b));
        this.#stream.on("sb", (buffer) => this.emit("sb", buffer));
        this.#stream.on("data", (data) => this.emit("data", data));
        this.#stream.on("drain", () => this.emit("drain"));
        this.#missingErrorHandlerTimer = setTimeout(() => {
          this.#missingErrorHandlerTimer = void 0;
          if (!this.isDestroyed && !this.listenerCount("error")) {
            console.error(`Danger: Telnet client for ${host}:${port} is missing an error handler!`);
          }
        }, 5e3);
      }
      connect() {
        return this.#tcp.connect();
      }
      async send(message) {
        return this.#tcp.send(message);
      }
      destroy() {
        this.#tcp.destroy();
        if (this.#missingErrorHandlerTimer !== void 0) {
          clearTimeout(this.#missingErrorHandlerTimer);
          this.#missingErrorHandlerTimer = void 0;
        }
        this.#stream.removeAllListeners();
        this.#stream.destroy();
      }
    };
    exports2.TelnetHelper = TelnetHelper;
    var TelnetStream = class extends stream_1.Transform {
      #buffer;
      #subbuffer;
      #state;
      constructor(options) {
        super(options);
        this.#buffer = Buffer.alloc(0);
        this.#subbuffer = Buffer.alloc(0);
        this.#state = DATA;
      }
      _transform(obj, _encoding, callback) {
        for (let i = 0; i < obj.length; ++i) {
          this.#handleByte(obj[i]);
        }
        const data = this.#getData();
        if (data.length) {
          this.push(data);
        }
        callback();
      }
      #handleByte(byte) {
        if (this.#state === DATA) {
          if (byte === IAC) {
            this.#state = IAC;
            return;
          }
          this.#buffer = Buffer.concat([this.#buffer, Buffer.from([byte])]);
        } else if (this.#state === IAC) {
          switch (byte) {
            case SB:
            case WILL:
            case WONT:
            case DO:
            case DONT:
              this.#state = byte;
              break;
            default:
              this.#state = DATA;
              break;
          }
        } else if (this.#state >= WILL && this.#state <= DONT) {
          let iac = void 0;
          switch (this.#state) {
            case WILL:
              iac = "WILL";
              break;
            case WONT:
              iac = "WONT";
              break;
            case DO:
              iac = "DO";
              break;
            case DONT:
              iac = "DONT";
              break;
            default:
              return;
          }
          this.emit("iac", iac, byte);
          this.#state = DATA;
          return;
        } else if (this.#state === SB) {
          if (byte === SE) {
            this.emit("sb", this.#subbuffer);
            this.#state = DATA;
            this.#subbuffer = Buffer.alloc(0);
            return;
          }
          this.#subbuffer = Buffer.concat([this.#subbuffer, Buffer.from([byte])]);
        }
      }
      #getData() {
        const buff = this.#buffer;
        this.#buffer = Buffer.alloc(0);
        return buff;
      }
    };
  }
});

// node_modules/@companion-module/base/dist/helpers/udp.js
var require_udp = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/udp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UDPHelper = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var dgram_1 = tslib_1.__importDefault(require("dgram"));
    var eventemitter3_1 = require_eventemitter32();
    var enums_js_1 = require_enums();
    var UDPHelper = class extends eventemitter3_1.EventEmitter {
      #host;
      #port;
      #socket;
      #options;
      #destroyed = false;
      #lastStatus;
      #missingErrorHandlerTimer;
      get isDestroyed() {
        return this.#destroyed;
      }
      constructor(host, port, options) {
        super();
        this.#host = host;
        this.#port = port;
        this.#options = { ...options };
        this.#socket = dgram_1.default.createSocket("udp4");
        try {
          this.#socket.bind(this.#options.bind_port || 0, this.#options.bind_ip);
        } catch (_e) {
          throw new Error(`Unable to bind to ip/port: ${this.#options.bind_ip || "0.0.0.0"}:${this.#options.bind_port || 0}`);
        }
        if (this.#options.ttl !== void 0) {
          this.#socket.setTTL(this.#options.ttl);
        }
        if (this.#options.multicast_ttl !== void 0) {
          this.#socket.setMulticastTTL(this.#options.multicast_ttl);
        }
        this.#socket.on("error", (error) => {
          this.#new_status(enums_js_1.InstanceStatus.UnknownError, error.message);
          this.emit("error", error);
        });
        this.#socket.on("listening", () => {
          if (this.#options.broadcast) {
            this.#socket.setBroadcast(true);
          }
          if (this.#options.multicast_interface) {
            this.#socket.setMulticastInterface(this.#options.multicast_interface);
          }
          this.#new_status(enums_js_1.InstanceStatus.Ok);
          this.emit("listening");
        });
        this.#socket.on("message", (data, rinfo) => this.emit("data", data, rinfo));
        this.#missingErrorHandlerTimer = setTimeout(() => {
          if (!this.#destroyed && !this.listenerCount("error")) {
            console.error(`Danger: UDP socket for ${this.#host}:${this.#port} is missing an error handler!`);
          }
        }, 5e3);
      }
      async send(message) {
        if (this.#destroyed)
          throw new Error("Cannot write to destroyed socket");
        if (!message || !message.length)
          throw new Error("No message to send");
        return new Promise((resolve, reject) => {
          this.#socket.send(message, this.#port, this.#host, (error) => {
            if (error) {
              reject(error);
              return;
            }
            resolve();
          });
        });
      }
      // addMembership(member) {
      // 	if (!this.bound) {
      // 		this.pending_memberships.push(member)
      // 	} else {
      // 		this.socket.addMembership(member)
      // 	}
      // }
      destroy() {
        this.#destroyed = true;
        if (this.#missingErrorHandlerTimer !== void 0) {
          clearTimeout(this.#missingErrorHandlerTimer);
          this.#missingErrorHandlerTimer = void 0;
        }
        this.#socket.removeAllListeners();
        this.#socket.close();
        this.removeAllListeners();
      }
      // Private function
      #new_status(status, message) {
        if (this.#lastStatus != status) {
          this.#lastStatus = status;
          this.emit("status_change", status, message);
        }
      }
    };
    exports2.UDPHelper = UDPHelper;
  }
});

// node_modules/@companion-module/base/dist/helpers/index.js
var require_helpers = __commonJS({
  "node_modules/@companion-module/base/dist/helpers/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UDPHelper = exports2.TelnetHelper = exports2.TCPHelper = void 0;
    var tcp_js_1 = require_tcp();
    Object.defineProperty(exports2, "TCPHelper", { enumerable: true, get: function() {
      return tcp_js_1.TCPHelper;
    } });
    var telnet_js_1 = require_telnet();
    Object.defineProperty(exports2, "TelnetHelper", { enumerable: true, get: function() {
      return telnet_js_1.TelnetHelper;
    } });
    var udp_js_1 = require_udp();
    Object.defineProperty(exports2, "UDPHelper", { enumerable: true, get: function() {
      return udp_js_1.UDPHelper;
    } });
  }
});

// node_modules/@companion-module/base/dist/host-api/versions.js
var require_versions = __commonJS({
  "node_modules/@companion-module/base/dist/host-api/versions.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.HostApiNodeJsIpc = void 0;
    exports2.HostApiNodeJsIpc = "nodejs-ipc";
  }
});

// node_modules/@companion-module/base/dist/entrypoint.js
var require_entrypoint = __commonJS({
  "node_modules/@companion-module/base/dist/entrypoint.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.runEntrypoint = runEntrypoint2;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var versions_js_1 = require_versions();
    var promises_1 = tslib_1.__importDefault(require("fs/promises"));
    var util_js_1 = require_util();
    var ipc_wrapper_js_1 = require_ipc_wrapper();
    var path_1 = tslib_1.__importDefault(require("path"));
    var hasEntrypoint = false;
    var moduleInstance;
    function runEntrypoint2(factory, upgradeScripts) {
      Promise.resolve().then(async () => {
        if (hasEntrypoint)
          throw new Error(`runEntrypoint can only be called once`);
        hasEntrypoint = true;
        if (!upgradeScripts)
          upgradeScripts = [];
        if (!Array.isArray(upgradeScripts))
          throw new Error("upgradeScripts must be an array");
        for (const upgradeScript of upgradeScripts) {
          if (typeof upgradeScript !== "function")
            throw new Error("upgradeScripts must be an array of functions");
        }
        const manifestPath = process.env.MODULE_MANIFEST;
        if (!manifestPath)
          throw new Error("Module initialise is missing MODULE_MANIFEST");
        const manifestBlob = await promises_1.default.readFile(manifestPath);
        const manifestJson = JSON.parse(manifestBlob.toString());
        if (manifestJson.runtime?.api !== versions_js_1.HostApiNodeJsIpc)
          throw new Error(`Module manifest 'api' mismatch`);
        if (!manifestJson.runtime.apiVersion)
          throw new Error(`Module manifest 'apiVersion' missing`);
        let apiVersion = manifestJson.runtime.apiVersion;
        if (apiVersion === "0.0.0") {
          try {
            const baseJsonStr = await promises_1.default.readFile(path_1.default.join(__dirname, "../package.json"));
            const baseJson = JSON.parse(baseJsonStr.toString());
            if (baseJson.name === "@companion-module/base") {
              apiVersion = baseJson.version;
            }
          } catch (_e) {
            throw new Error("Failed to determine module api version");
          }
        }
        if (!process.send)
          throw new Error("Module is not being run with ipc");
        console.log(`Starting up module class: ${factory.name}`);
        const connectionId = process.env.CONNECTION_ID;
        if (typeof connectionId !== "string" || !connectionId)
          throw new Error("Module initialise is missing CONNECTION_ID");
        const verificationToken = process.env.VERIFICATION_TOKEN;
        if (typeof verificationToken !== "string" || !verificationToken)
          throw new Error("Module initialise is missing VERIFICATION_TOKEN");
        const ipcWrapper = new ipc_wrapper_js_1.IpcWrapper({}, (msg) => {
          process.send(msg);
        }, 5e3);
        process.once("message", (msg) => {
          ipcWrapper.receivedMessage(msg);
        });
        moduleInstance = new factory((0, util_js_1.literal)({
          id: connectionId,
          upgradeScripts,
          _isInstanceBaseProps: true
        }));
        ipcWrapper.sendWithCb("register", { apiVersion, connectionId, verificationToken }).then(() => {
          console.log(`Module-host accepted registration`);
        }, (err) => {
          console.error("Module registration failed", err);
          process.exit(11);
        });
      }).catch((e) => {
        console.error(`Failed to startup module:`);
        console.error(e.stack || e.message);
        process.exit(1);
      });
    }
  }
});

// node_modules/@companion-module/base/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@companion-module/base/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.runEntrypoint = exports2.substituteEscapeCharacters = exports2.parseEscapeCharacters = exports2.assertNever = exports2.splitHex = exports2.splitHsv = exports2.splitHsl = exports2.splitRgb = exports2.combineRgb = exports2.literal = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_manifest(), exports2);
    tslib_1.__exportStar(require_module_api(), exports2);
    tslib_1.__exportStar(require_osc(), exports2);
    tslib_1.__exportStar(require_json_value(), exports2);
    var util_js_1 = require_util();
    Object.defineProperty(exports2, "literal", { enumerable: true, get: function() {
      return util_js_1.literal;
    } });
    Object.defineProperty(exports2, "combineRgb", { enumerable: true, get: function() {
      return util_js_1.combineRgb;
    } });
    Object.defineProperty(exports2, "splitRgb", { enumerable: true, get: function() {
      return util_js_1.splitRgb;
    } });
    Object.defineProperty(exports2, "splitHsl", { enumerable: true, get: function() {
      return util_js_1.splitHsl;
    } });
    Object.defineProperty(exports2, "splitHsv", { enumerable: true, get: function() {
      return util_js_1.splitHsv;
    } });
    Object.defineProperty(exports2, "splitHex", { enumerable: true, get: function() {
      return util_js_1.splitHex;
    } });
    Object.defineProperty(exports2, "assertNever", { enumerable: true, get: function() {
      return util_js_1.assertNever;
    } });
    Object.defineProperty(exports2, "parseEscapeCharacters", { enumerable: true, get: function() {
      return util_js_1.parseEscapeCharacters;
    } });
    Object.defineProperty(exports2, "substituteEscapeCharacters", { enumerable: true, get: function() {
      return util_js_1.substituteEscapeCharacters;
    } });
    tslib_1.__exportStar(require_helpers(), exports2);
    var entrypoint_js_1 = require_entrypoint();
    Object.defineProperty(exports2, "runEntrypoint", { enumerable: true, get: function() {
      return entrypoint_js_1.runEntrypoint;
    } });
  }
});

// main.js
var { InstanceBase, runEntrypoint, InstanceStatus, combineRgb } = require_dist2();
var DEFAULT_PORT = 80;
var ShellyMiniGen3Instance = class extends InstanceBase {
  switchStatus = { output: false };
  inputStatus = { state: false };
  _lastInputState = false;
  _buttonPressCount = 0;
  _impulseTimer = null;
  pollTimer = null;
  async init(config) {
    this.config = config;
    this.updateStatus(InstanceStatus.Ok);
    this.initVariables();
    this.initActions();
    this.initFeedbacks();
    this.startPolling();
  }
  async destroy() {
    this.stopPolling();
    if (this._impulseTimer) clearTimeout(this._impulseTimer);
  }
  async configUpdated(config) {
    this.config = config;
    this.stopPolling();
    this.updateStatus(InstanceStatus.Ok);
    this.initVariables();
    this.initActions();
    this.initFeedbacks();
    this.startPolling();
  }
  getConfigFields() {
    return [
      { type: "textinput", id: "host", label: "IP Address", width: 6, default: "192.168.1.100" },
      { type: "number", id: "port", label: "Port", width: 3, default: DEFAULT_PORT, min: 1, max: 65535 },
      { type: "number", id: "pollingInterval", label: "Polling interval (ms, 0=disabled)", width: 4, default: 300, min: 0, max: 6e4 }
    ];
  }
  async shellyRpc(method, params = {}) {
    const host = this.config.host || "127.0.0.1";
    const port = this.config.port || DEFAULT_PORT;
    const query = new URLSearchParams(params).toString();
    const url = "http://" + host + ":" + port + "/rpc/" + method + "?" + query;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5e3);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error("HTTP " + response.status);
      return await response.json();
    } catch (err) {
      this.log("error", "Shelly RPC error [" + method + "]: " + err.message);
      this.updateStatus(InstanceStatus.ConnectionFailure, err.message);
      throw err;
    }
  }
  startPolling() {
    const interval = this.config.pollingInterval ?? 300;
    if (interval > 0) {
      this.pollTimer = setInterval(() => this.pollStatus(), interval);
    }
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  async pollStatus() {
    try {
      const [switchRes, inputRes] = await Promise.all([
        this.shellyRpc("Switch.GetStatus", { id: "0" }),
        this.shellyRpc("Input.GetStatus", { id: "0" })
      ]);
      this.switchStatus = { output: !!switchRes.output };
      const newState = !!inputRes.state;
      if (newState && !this._lastInputState) {
        this._buttonPressCount++;
        this.inputStatus = { state: true };
        if (this._impulseTimer) clearTimeout(this._impulseTimer);
        this._impulseTimer = setTimeout(() => {
          this.inputStatus = { state: false };
          this.updateVariableValues();
          this.checkFeedbacks("button_pressed");
        }, 500);
      }
      this._lastInputState = newState;
      this.updateStatus(InstanceStatus.Ok);
      this.updateVariableValues();
      this.checkFeedbacks("relay_is_on", "button_pressed");
    } catch (_) {
    }
  }
  initActions() {
    this.setActionDefinitions({
      relay_on: { name: "Relay - On", options: [], callback: async () => {
        await this.shellyRpc("Switch.Set", { id: "0", on: "true" });
        this.switchStatus.output = true;
        this.updateVariableValues();
        this.checkFeedbacks("relay_is_on");
      } },
      relay_off: { name: "Relay - Off", options: [], callback: async () => {
        await this.shellyRpc("Switch.Set", { id: "0", on: "false" });
        this.switchStatus.output = false;
        this.updateVariableValues();
        this.checkFeedbacks("relay_is_on");
      } },
      relay_toggle: { name: "Relay - Toggle", options: [], callback: async () => {
        await this.shellyRpc("Switch.Toggle", { id: "0" });
        this.switchStatus.output = !this.switchStatus.output;
        this.updateVariableValues();
        this.checkFeedbacks("relay_is_on");
      } },
      reset_press_count: { name: "Reset Button Press Counter", options: [], callback: async () => {
        this._buttonPressCount = 0;
        this.updateVariableValues();
      } }
    });
  }
  initVariables() {
    this.setVariableDefinitions([
      { variableId: "relay_state", name: "Relay State (ON/OFF)" },
      { variableId: "button_impulse", name: "Button Impulse (TAP/idle)" },
      { variableId: "button_press_count", name: "Button Press Count" }
    ]);
    this.updateVariableValues();
  }
  updateVariableValues() {
    this.setVariableValues({
      relay_state: this.switchStatus.output ? "ON" : "OFF",
      button_impulse: this.inputStatus.state ? "TAP" : "idle",
      button_press_count: String(this._buttonPressCount)
    });
  }
  initFeedbacks() {
    this.setFeedbackDefinitions({
      relay_is_on: { name: "Relay is ON", type: "boolean", defaultStyle: { bgcolor: combineRgb(0, 200, 0), color: combineRgb(0, 0, 0) }, options: [], callback: () => this.switchStatus.output },
      button_pressed: { name: "Button Impulse Detected", type: "boolean", defaultStyle: { bgcolor: combineRgb(255, 200, 0), color: combineRgb(0, 0, 0) }, options: [], callback: () => this.inputStatus.state }
    });
  }
};
runEntrypoint(ShellyMiniGen3Instance, []);
