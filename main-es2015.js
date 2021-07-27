(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-section></app-section>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<footer class=\"container-fluid bg-dark\">\n  <div id=\"foot\">\n    <div>\n      <h1 class=\"text-secondary\">Aquario Land</h1>\n      <br>\n      <nav class=\"navbar navbar-expand-lg rounded\">\n        <ul class=\"navbar-nav\" id=\"foot2\">\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Terminos y condiciones</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Contacto</a></li>\n          <li class=\"nav-item\"><a class=\"nav-link\" href=\"\">Acerca de</a></li>\n        </ul>\n        <div class=\"form-inline\" id=\"nav2\">\n          <h3 class=\"text-secondary\">Contacto:</h3>\n          <a href=\"https://es-la.facebook.com/\" target=\"_blank\"><img alt=\"Siguenos en Facebook\"\n              src=\"https://lh3.googleusercontent.com/-NSLbC_ztNls/T6VX0g6z8AI/AAAAAAAAA0A/_vyIBrmZbuY/s48/facebook48.png\"\n              width=48 height=48 /></a>\n          <a href=\"https://twitter.com/?lang=es\" target=\"_blank\"><img\n              src=\"https://lh6.googleusercontent.com/-vao9pzZoGtk/T6VYC4d1YMI/AAAAAAAAA0U/4rdP2chJido/s48/twitter48.png\"\n              width=48 height=48 alt=\"Síguenos en Twitter\" /></a>\n          <a href=\"https://www.youtube.com/?hl=es-419\" target=\"_blank\"><img alt=\"Siguenos en YouTube\"\n              src=\"https://lh6.googleusercontent.com/-Atgpy-x_OwI/T6mYkA18hYI/AAAAAAAAA1U/qksUJ5uBq3c/s48/youtube48.png\"\n              width=48 height=48 /></a>\n        </div>\n      </nav>\n      <br><br>\n      <h2 class=\"text-center text-secondary\" id=\"dr\">{{mensaje}}{{fecha | date:'yyyy'}}</h2>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-dark\">\r\n  <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark\" id=\"Contenedor\">\r\n    <a class=\"navbar-brand\" href=\"#\">\r\n      <img src=\"assets/IMG/Logo.png\" alt=\"\" width=\"78px\" height=\"78px\" data-toggle=\"tooltip\" title=\"Aquario Land\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"\">Inicio</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbardrop\" role=\"button\" data-toggle=\"dropdown\">Peces</a>\r\n          <div class=\"dropdown-menu\">\r\n            <a class=\"dropdown-item\" href=\"#\">Pez Gurami</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Pez Barbo</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Pez Gato</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Pez Espada</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Pez Disco</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Pez Cometa</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"navbar-nav\">\r\n          <a class=\"nav-link\" href=\"\">Contacto</a>\r\n        </li>\r\n      </ul>\r\n      <form class=\"form-inline\" action=\"\">\r\n        <input class=\"form-control mr-sm-2\" type=\"text\" name=\"\" id=\"pezz\" placeholder=\"Buscar pez\">\r\n        <button type=\"submit\" class=\"btn btn-info\" id=\"btnbuscar\" (click)=\"pez()\">Buscar</button>\r\n      </form>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<header>\r\n  <div class=\"bg-info\">\r\n    <div class=\"bg-info\" id=\"IMG\">\r\n      <img src=\"assets/IMG/Logo.png\" alt=\"\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section>\n  <div class=\"bg-dark rounded\" id=\"DivTitulo\">\n    <h1 class=\"text-light\" id=\"tit\">Especies de peces</h1>\n  </div>\n\n  <div id=\"Principal\" class=\"bg-info\">\n    <div id=\"Cont2\">\n      <!---->\n      <div class=\"cajas card\">\n        <img src=\"assets/IMG/Barbo Rosado.jpg\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pez Barbo</h4>\n          <p class=\"card-text\">Características, habitat, alimentación y compatibilidad</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"barbo\" (click)=\"Pezbarbo()\">Información</a>\n        </div>\n      </div>\n      <!---->\n      <div class=\"cajas card\">\n        <img src=\"assets/IMG/Pez espada.jpg\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pez Espada</h4>\n          <p class=\"card-text\">Características, habitat, alimentación y compatibilidad</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"espada\" (click)=\"PezEspada()\">Información</a>\n        </div>\n      </div>\n      <!---->\n      <div class=\"cajas card\">\n        <img src=\"assets/IMG/Pez-bagre-o-gato-16.jpg\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pez Gato</h4>\n          <p class=\"card-text\">Características, habitat, alimentación y compatibilidad</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"gato\" (click)=\"PezGato()\">Información</a>\n        </div>\n      </div>\n      <!---->\n      <div class=\"cajas card\">\n        <img src=\"assets/IMG/pez-cometa.jpg\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pez Cometa</h4>\n          <p class=\"card-text\">Características, habitat, alimentación y compatibilidad</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"cometa\" (click)=\"PezCometa()\">Información</a>\n        </div>\n      </div>\n      <!---->\n      <div class=\"cajas card\">\n        <img src=\"assets/IMG/pez-disco-animapedia.jpg\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pez Disco</h4>\n          <p class=\"card-text\">Características, habitat, alimentación y compatibilidad</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"disco\" (click)=\"PezDisco()\">Información</a>\n        </div>\n      </div>\n      <!---->\n      <div class=\"cajas card\">\n        <img src=\"assets/IMG/pez-gurami-enano.jpg\" alt=\"\" class=\"card-img-top\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Pez Gurami</h4>\n          <p class=\"card-text\">Características, habitat, alimentación y compatibilidad</p>\n          <a href=\"#\" class=\"btn btn-primary\" id=\"gurami\" (click)=\"PezGurami()\">Información</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"jumbotron jumbotron-fluid bg-secondary\">\n    <div class=\"container\" id=\"CAdmin\">\n      <div class=\"card\" id=\"Admin\">\n        <img src=\"assets/IMG/Admin.png\" alt=\"\" class=\"card-img-top\">\n        <h4 class=\"card-title text-center\">Jacob</h4>\n      </div>\n      <div class=\"bg-info rounded\" id=\"desc\">\n        <h4 class=\"text-center\" id=\"text\">Amante de los peces de toda especie.</h4>\n      </div>\n      <div class=\"\" id=\"Sus\">\n        <a href=\"#\" class=\"btn btn-success mt-5\" id=\"btnSus\" (click)=\"Suscripcion()\">Suscribirse</a>\n      </div>\n    </div>\n    \n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
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
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
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
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'PaginaWeb1';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./section/section.component */ "./src/app/section/section.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _section_section_component__WEBPACK_IMPORTED_MODULE_5__["SectionComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#foot{\r\n    padding: 5px;\r\n    width: auto;\r\n    height: auto;\r\n}\r\n\r\n#nav2{\r\n    margin-left: 400px;\r\n}\r\n\r\n#btnSus:hover{\r\n    color: black;\r\n}\r\n\r\na{\r\n    font-size: 28px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4jbmF2MntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcclxufVxyXG5cclxuI2J0blN1czpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuYXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.fecha = new Date();
        this.mensaje = "Derechos reservados ";
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\na{\r\n    font-size: 28px;\r\n}\r\n\r\n#Contenedor{\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n#IMG{\r\n    width: 350px;\r\n    height: 350px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5he1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4jQ29udGVuZWRvcntcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNJTUd7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    ngOnInit() {
    }
    pez() {
        var txt = $("#pezz").val();
        if (txt == "") {
            alertify.error("Introduzca el nombre de un pez");
            return false;
        }
        else {
            alertify.success(txt);
            return false;
        }
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/section/section.component.css":
/*!***********************************************!*\
  !*** ./src/app/section/section.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    margin-top: 30px;\r\n}\r\n\r\n#DivTitulo{\r\n    width: 90%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n\r\n#tit{\r\n    padding: 5px;\r\n\r\n}\r\n\r\n#Principal{\r\n    margin-top: 40px;\r\n}\r\n\r\n#Cont2{\r\n    padding: 1rem;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.cajas{\r\n    background-color: wheat;\r\n    width: 20%;\r\n    height: auto;\r\n    margin: 3px;\r\n}\r\n\r\n#imgAdmin{\r\n    width: 15%;\r\n    height: 150px;\r\n}\r\n\r\n#CAdmin{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#Admin{\r\n    width: 15%;\r\n    height: auto;\r\n}\r\n\r\n#text{\r\n    padding: 5px;\r\n    margin-top: 20%;\r\n}\r\n\r\n#desc{\r\n    margin-right: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9ue1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuI0RpdlRpdHVsb3tcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN0aXR7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG59XHJcblxyXG4jUHJpbmNpcGFse1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuI0NvbnQye1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYWphc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogM3B4O1xyXG59XHJcblxyXG4jaW1nQWRtaW57XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuI0NBZG1pbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNBZG1pbntcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbiN0ZXh0e1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcblxyXG4jZGVzY3tcclxuICAgIG1hcmdpbi1yaWdodDogNTAwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/section/section.component.ts":
/*!**********************************************!*\
  !*** ./src/app/section/section.component.ts ***!
  \**********************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionComponent = class SectionComponent {
    Suscripcion() {
        setTimeout(() => {
            var alert = alertify.alert("Suscripción", "Suscrito a Aqualand").set('label', 'Aceptar');
            alert.set({ transition: 'slide' });
            alert.set('modal', false);
        }, 2000);
    }
    Pezbarbo() {
        var alert = alertify.alert("Pez Barbo", "Se trata de un pez que presenta forma ovalada, agradable y muy activo, su coloración es rosácea a anaranjada sobre un fondo base plateado, es característica una pequeña mancha que mantiene en la parte posterior de su cuerpo, un poco anterior al péndulo caudal. Existe dimorfismo sexual, ya que los machos presentan una pequeña coloración oscura en la aleta dorsal y anal, además las hembras poseen colores más apagados. En edad adulta pueden llegar a medir hasta los 14 cm de longitud.").set('label', 'Ok');
        alert.set({ transition: 'slide' });
        alert.set('modal', false);
    }
    PezEspada() {
        var alert = alertify.alert("Pez Espada", "Los peces cola de espada, también conocidos como Xipho, Portaespada o con su nombre científico Xiphophorus Helleri, pertenecen a la familia de los peces Poecillidae y al orden Cyprinodontiformes. Estos pececitos son originarios de arroyos, ríos y lagos de aguas muy cristalinas que poseen corrientes suaves, generalmente encontrados en ríos de Centroamérica.  Estos pececitos se caracterizan por tener la cola robusta, mientras que los radios inferiores de la aleta caudal de los peces macho se prolonga en forma de espada, por lo que adquieren este nombre peculiar.").set('label', 'Ok');
        alert.set({ transition: 'slide' });
        alert.set('modal', false);
    }
    PezGato() {
        var alert = alertify.alert("Pez Gato", "La gran mayoría de los ejemplares de pez gato que existen pertenecen al orden de los Siluriformes. Se le llama pez gato porque tienen unos bigotes formados de tentáculos en la boca que se asemejan a los bigotes de los gatos. Estos bigotes son llamados barbillones filamentosos. Hay algunos peces que los tienen debajo de la boca o incluso en el propio hocico. Al igual que en los gatos, estos filamentos son utilizados como órgano sensorial, detectando fácilmente el alimento que van a consumir.").set('label', 'Ok');
        alert.set({ transition: 'slide' });
        alert.set('modal', false);
    }
    PezCometa() {
        var alert = alertify.alert("Pez Cometa", "Este pez es comparado en numerosas ocasiones con otros peces de acuarios. Su tamaño es bastante menor al resto e incluso si lo comparamos con otros ejemplares de la misma familia. Se puede decir que el tamaño va variando dependiendo de las condiciones en las que habita y el tipo de alimentación que tiene. Sin embargo, por lo general, su tamaño es de menos de 10 centímetros. El peso ideal de estos peces es de media libra.").set('label', 'Ok');
        alert.set({ transition: 'slide' });
        alert.set('modal', false);
    }
    PezDisco() {
        var alert = alertify.alert("Pez Disco", "Estos peces pertenecen a la familia de los cíclidos, formando parte del orden de los perciformes. El nombre científico del pez disco es Symphysodon discus, cuyo significado se ve en la forma tan característica de estos peces. Si se les cuida correctamente y se cumplen las pautas necesarias para su buena alimentación y entorno saludable, estos peces pueden llegar a vivir hasta 12 años.").set('label', 'Ok');
        alert.set({ transition: 'slide' });
        alert.set('modal', false);
    }
    PezGurami() {
        var alert = alertify.alert("Pez Gurami", "Los guramis enanos se nombran principalmente por su pequeño tamaño en comparación con otras especies gurami. Estos peces presentan una brillante coloración azul de fondo con rayas de color naranja brillante o rojo oscuro. Debido a este patrón, la colisa lalia también se conoce como el gurami enano de bandas. Estos peces son por lo general muy tranquilos en el tanque de la comunidad - puede ser, incluso, un poco tímido. En ciertas situaciones, sin embargo, el gurami enano puede convertirse en una especie territorial, especialmente cuando se mantienen en un tanque que es demasiado pequeño. Cuando se mantienen en grandes tanques con otras especies pacíficas de la comunidad, la colisa lalia, por lo general no causa ningún problema.").set('label', 'Ok');
        alert.set({ transition: 'slide' });
        alert.set('modal', false);
    }
};
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/section/section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section.component.css */ "./src/app/section/section.component.css")).default]
    })
], SectionComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yeiko\Documents\Paginas web\ProyectosAngular\PaginaWeb1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map