(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\r\n  <div class=\"card-header\">{{ '::Welcome' | abpLocalization }}</div>\r\n  <div class=\"card-body\">\r\n    <p>\r\n      {{ '::LongWelcomeMessage' | abpLocalization }}\r\n    </p>\r\n    <p *ngIf=\"!hasLoggedIn\">\r\n      <a routerLink=\"/account/login\" [state]=\"{ redirectUrl: '/' }\" class=\"btn btn-primary\" role=\"button\"\r\n        ><i class=\"fa fa-sign-in\"></i>{{ 'AbpIdentity::Login' | abpLocalization }}</a\r\n      >\r\n    </p>\r\n    <hr />\r\n    <p class=\"text-right\"><a href=\"https://abp.io?ref=tmpl\" target=\"_blank\">abp.io</a></p>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @abp/ng.theme.basic */ "../../packages/theme-basic/src/public-api.ts");





const routes = [
    {
        path: '',
        component: _abp_ng_theme_basic__WEBPACK_IMPORTED_MODULE_4__["ApplicationLayoutComponent"],
        children: [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }],
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ "../../node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");



let HomeComponent = class HomeComponent {
    constructor(oAuthService) {
        this.oAuthService = oAuthService;
    }
    get hasLoggedIn() {
        return this.oAuthService.hasValidAccessToken();
    }
};
HomeComponent.ctorParameters = () => [
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__["OAuthService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]],
    })
], HomeModule);



/***/ })

}]);