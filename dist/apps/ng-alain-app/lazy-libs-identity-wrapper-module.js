(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lazy-libs-identity-wrapper-module"],{

/***/ "../../libs/identity/ng-alain/src/index.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: IdentityNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/identity/ng-alain/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityNgAlainModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["IdentityNgAlainModule"]; });





/***/ }),

/***/ "../../libs/identity/ng-alain/src/lib/components/roles/roles.component.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/components/roles/roles.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.identity */ "../../packages/identity/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");






var RolesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](RolesComponent, _super);
    function RolesComponent(_confirmationService, _fb, _store) {
        var _this = _super.call(this, _confirmationService, _fb, _store) || this;
        _this._confirmationService = _confirmationService;
        _this._fb = _fb;
        _this._store = _store;
        return _this;
    }
    RolesComponent.ctorParameters = function () { return [
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ng-alain-roles',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roles.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/identity/ng-alain/src/lib/components/roles/roles.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], RolesComponent);
    return RolesComponent;
}(_abp_ng_identity__WEBPACK_IMPORTED_MODULE_1__["RolesComponent"]));



/***/ }),

/***/ "../../libs/identity/ng-alain/src/lib/components/users/users.component.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/components/users/users.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.identity */ "../../packages/identity/src/public-api.ts");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");






var UsersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersComponent, _super);
    function UsersComponent(_confirmationService, _fb, _store) {
        var _this = _super.call(this, _confirmationService, _fb, _store) || this;
        _this._confirmationService = _confirmationService;
        _this._fb = _fb;
        _this._store = _store;
        return _this;
    }
    UsersComponent.ctorParameters = function () { return [
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'ng-alain-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/identity/ng-alain/src/lib/components/users/users.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], UsersComponent);
    return UsersComponent;
}(_abp_ng_identity__WEBPACK_IMPORTED_MODULE_1__["UsersComponent"]));



/***/ }),

/***/ "../../libs/identity/ng-alain/src/lib/identity-ng-alain-routing.module.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/identity-ng-alain-routing.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: IdentityNgAlainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityNgAlainRoutingModule", function() { return IdentityNgAlainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/users.component */ "../../libs/identity/ng-alain/src/lib/components/users/users.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/roles/roles.component */ "../../libs/identity/ng-alain/src/lib/components/roles/roles.component.ts");







var routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["LayoutDefaultComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_3__["PermissionGuard"]],
        children: [
            {
                path: 'roles',
                component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"],
                data: { requiredPolicy: 'AbpIdentity.Roles' },
            },
            {
                path: 'users',
                component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                data: { requiredPolicy: 'AbpIdentity.Users' },
            },
        ],
    },
];
var IdentityNgAlainRoutingModule = /** @class */ (function () {
    function IdentityNgAlainRoutingModule() {
    }
    IdentityNgAlainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], IdentityNgAlainRoutingModule);
    return IdentityNgAlainRoutingModule;
}());



/***/ }),

/***/ "../../libs/identity/ng-alain/src/lib/identity-ng-alain.module.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/identity-ng-alain.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: IdentityNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityNgAlainModule", function() { return IdentityNgAlainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fs_identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fs/identity */ "../../libs/identity/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
/* harmony import */ var _identity_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity-ng-alain-routing.module */ "../../libs/identity/ng-alain/src/lib/identity-ng-alain-routing.module.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.component */ "../../libs/identity/ng-alain/src/lib/components/users/users.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/roles/roles.component */ "../../libs/identity/ng-alain/src/lib/components/roles/roles.component.ts");
/* harmony import */ var _fs_permission_management_ng_alain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fs/permission-management/ng-alain */ "../../libs/permission-management/ng-alain/src/index.ts");









var IdentityNgAlainModule = /** @class */ (function () {
    function IdentityNgAlainModule() {
    }
    IdentityNgAlainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_components_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_7__["RolesComponent"]],
            imports: [
                _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["NgAlainBasicModule"],
                _identity_ng_alain_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdentityNgAlainRoutingModule"],
                _fs_permission_management_ng_alain__WEBPACK_IMPORTED_MODULE_8__["PermissionManagementNgAlainModule"],
                _fs_identity__WEBPACK_IMPORTED_MODULE_1__["IdentityModule"]
            ]
        })
    ], IdentityNgAlainModule);
    return IdentityNgAlainModule;
}());



/***/ }),

/***/ "../../libs/identity/ng-alain/src/lib/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: IdentityNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _identity_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity-ng-alain.module */ "../../libs/identity/ng-alain/src/lib/identity-ng-alain.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityNgAlainModule", function() { return _identity_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__["IdentityNgAlainModule"]; });





/***/ }),

/***/ "../../libs/identity/src/index.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/identity.module */ "../../libs/identity/src/lib/identity.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__["IdentityModule"]; });





/***/ }),

/***/ "../../libs/identity/src/lib/identity.module.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/src/lib/identity.module.ts ***!
  \************************************************************************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.identity */ "../../packages/identity/src/public-api.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @abp/ng.permission-management */ "../../packages/permission-management/src/public-api.ts");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");







var IdentityModule = /** @class */ (function () {
    function IdentityModule() {
    }
    IdentityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__["IdentityModule"]],
            exports: [
                _abp_ng_identity__WEBPACK_IMPORTED_MODULE_2__["IdentityModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementModule"],
                _ngx_validate_core__WEBPACK_IMPORTED_MODULE_6__["NgxValidateCoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTabsetModule"]
            ]
        })
    ], IdentityModule);
    return IdentityModule;
}());



/***/ }),

/***/ "../../libs/permission-management/ng-alain/src/index.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/ng-alain/src/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: PermissionManagementNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/index */ "../../libs/permission-management/ng-alain/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementNgAlainModule", function() { return _lib_index__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementNgAlainModule"]; });





/***/ }),

/***/ "../../libs/permission-management/ng-alain/src/lib/components/permission-management.component.less":
/*!***************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/ng-alain/src/lib/components/permission-management.component.less ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n:host {\n  display: block;\n  padding-top: 24px;\n}\n.main {\n  display: flex;\n  width: 100%;\n  /*padding-top: 16px;\n  padding-bottom: 16px;*/\n  overflow: auto;\n  background-color: #fff;\n}\n.menu {\n  width: 224px;\n  border-right: 1px solid #e8e8e8;\n}\n.menu ::ng-deep .ant-menu-inline {\n  border: none;\n}\n.menu ::ng-deep .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {\n  font-weight: bold;\n}\n.content {\n  flex: 1;\n  padding-top: 8px;\n  padding-right: 40px;\n  padding-bottom: 8px;\n  padding-left: 40px;\n}\n.content .title {\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 28px;\n}\n.content ::ng-deep .ant-list-split .ant-list-item:last-child {\n  border-bottom: 1px solid #e8e8e8;\n}\n.content ::ng-deep .ant-list-item {\n  padding-top: 14px;\n  padding-bottom: 14px;\n}\n@media screen and (max-width: 767px) {\n  .main {\n    flex-direction: column;\n  }\n  .main .menu {\n    width: 100%;\n    border: none;\n  }\n  .main .content {\n    padding: 40px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvcGVybWlzc2lvbi1tYW5hZ2VtZW50L25nLWFsYWluL3NyYy9saWIvY29tcG9uZW50cy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50Lmxlc3MiLCJsaWJzL3Blcm1pc3Npb24tbWFuYWdlbWVudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvQzovVXNlcnMvWWluQ2hhbmcvRG9jdW1lbnRzL1dvcmtzL0dpdEh1Yi9hYnAubmcvbGlicy9wZXJtaXNzaW9uLW1hbmFnZW1lbnQvbmctYWxhaW4vc3JjL2xpYi9jb21wb25lbnRzL3Blcm1pc3Npb24tbWFuYWdlbWVudC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsNkNBQTZDO0FBQzdDLHNCQUFzQjtBQUN0Qiw2RkFBNkY7QUNEN0Y7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QURHRjtBQ0FBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RURFQTt3QkFDc0I7RUNBdEIsY0FBQTtFQUNBLHNCQUFBO0FERUY7QUNDQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBRENGO0FDSEE7RUFLTSxZQUFBO0FEQ047QUNOQTtFQVFNLGlCQUFBO0FEQ047QUNJQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREZGO0FDSEE7RUFPSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QURESjtBQ1ZBO0VBZU0sZ0NBQUE7QURGTjtBQ2JBO0VBa0JNLGlCQUFBO0VBQ0Esb0JBQUE7QURGTjtBQ09BO0VBQ0U7SUFDRSxzQkFBQTtFRExGO0VDSUE7SUFHSSxXQUFBO0lBQ0EsWUFBQTtFREpKO0VDQUE7SUFPSSxhQUFBO0VESko7QUFDRiIsImZpbGUiOiJsaWJzL3Blcm1pc3Npb24tbWFuYWdlbWVudC9uZy1hbGFpbi9zcmMvbGliL2NvbXBvbmVudHMvcGVybWlzc2lvbi1tYW5hZ2VtZW50LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSAqL1xuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKnBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDsqL1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5tZW51IHtcbiAgd2lkdGg6IDIyNHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xufVxuLm1lbnUgOjpuZy1kZWVwIC5hbnQtbWVudS1pbmxpbmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWVudSA6Om5nLWRlZXAgLmFudC1tZW51Om5vdCguYW50LW1lbnUtaG9yaXpvbnRhbCkgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xufVxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uY29udGVudCA6Om5nLWRlZXAgLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcbn1cbi5jb250ZW50IDo6bmctZGVlcCAuYW50LWxpc3QtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5tYWluIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tYWluIC5tZW51IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLm1haW4gLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35AZGVsb24vdGhlbWUvc3R5bGVzL2RlZmF1bHQnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgLypwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7Ki9cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IEBib2R5LWJhY2tncm91bmQ7XG59XG5cbi5tZW51IHtcbiAgd2lkdGg6IDIyNHB4O1xuICBib3JkZXItcmlnaHQ6IEBib3JkZXItd2lkdGgtYmFzZSBAYm9yZGVyLXN0eWxlLWJhc2UgQGJvcmRlci1jb2xvci1zcGxpdDtcbiAgOjpuZy1kZWVwIHtcbiAgICAuYW50LW1lbnUtaW5saW5lIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgLmFudC1tZW51Om5vdCguYW50LW1lbnUtaG9yaXpvbnRhbCkgLmFudC1tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG5cbi5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB9XG4gIDo6bmctZGVlcCB7XG4gICAgLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgfVxuICAgIC5hbnQtbGlzdC1pdGVtIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IEBtb2JpbGUtbWF4KSB7XG4gIC5tYWluIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tZW51IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICAuY29udGVudCB7XG4gICAgICBwYWRkaW5nOiA0MHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "../../libs/permission-management/ng-alain/src/lib/components/permission-management.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/ng-alain/src/lib/components/permission-management.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return PermissionManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.permission-management */ "../../packages/permission-management/src/public-api.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var PermissionManagementComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PermissionManagementComponent, _super);
    function PermissionManagementComponent(_store, _renderer) {
        var _this = _super.call(this, _store, _renderer) || this;
        _this._store = _store;
        _this._renderer = _renderer;
        _this.selectAllIndeterminate = false;
        _this.selectAllThisTabIndeterminate = false;
        return _this;
    }
    Object.defineProperty(PermissionManagementComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (!this.selectedGroup)
                return;
            this._visible = value;
            this.visibleChange.emit(value);
            if (!value) {
                this.selectedGroup = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    PermissionManagementComponent.prototype.isGrantedByOtherProviderName = function (grantedProviders) {
        var _this = this;
        if (grantedProviders.length) {
            return grantedProviders.findIndex(function (p) { return p.providerName !== _this.providerName; }) > -1;
        }
        return false;
    };
    PermissionManagementComponent.prototype.onClickSelectAll = function () {
        var _this = this;
        this.selectAllIndeterminate = false;
        this.permissions = this.permissions.map(function (permission) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, permission, { isGranted: _this.isGrantedByOtherProviderName(permission.grantedProviders) || _this.selectAllTab })); });
        this.selectThisTab = this.selectAllTab;
    };
    PermissionManagementComponent.prototype.onClickSelectThisTab = function () {
        var _this = this;
        this.selectAllThisTabIndeterminate = false;
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (permissions) {
            permissions.forEach(function (permission) {
                if (permission.isGranted && _this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                var index = _this.permissions.findIndex(function (per) { return per.name === permission.name; });
                _this.permissions = _this.permissions.slice(0, index).concat([
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.permissions[index], { isGranted: _this.selectThisTab })
                ], _this.permissions.slice(index + 1));
            });
        });
        this.setGrantCheckboxState();
    };
    PermissionManagementComponent.prototype.onClickCheckbox = function (clickedPermission) {
        var _this = this;
        if (clickedPermission.isGranted && this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout(function () {
            _this.permissions = _this.permissions.map(function (per) {
                if (clickedPermission.name === per.name) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, per, { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, per, { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, per, { isGranted: true });
                }
                return per;
            });
            _this.setTabCheckboxState();
            _this.setGrantCheckboxState();
        }, 0);
    };
    PermissionManagementComponent.prototype.setTabCheckboxState = function () {
        var _this = this;
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (permissions) {
            var selectedPermissions = permissions.filter(function (per) { return per.isGranted; });
            if (selectedPermissions.length === permissions.length) {
                _this.selectAllThisTabIndeterminate = false;
                _this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                _this.selectAllThisTabIndeterminate = false;
                _this.selectThisTab = false;
            }
            else {
                _this.selectAllThisTabIndeterminate = true;
            }
        });
    };
    PermissionManagementComponent.prototype.setGrantCheckboxState = function () {
        var selectedAllPermissions = this.permissions.filter(function (per) { return per.isGranted; });
        if (selectedAllPermissions.length === this.permissions.length) {
            this.selectAllIndeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            this.selectAllIndeterminate = false;
            this.selectAllTab = false;
        }
        else {
            this.selectAllIndeterminate = true;
        }
    };
    PermissionManagementComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PermissionManagementComponent.prototype, "providerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PermissionManagementComponent.prototype, "providerKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], PermissionManagementComponent.prototype, "visible", null);
    PermissionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ng-alain-permission-management',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./permission-management.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../libs/permission-management/ng-alain/src/lib/components/permission-management.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./permission-management.component.less */ "../../libs/permission-management/ng-alain/src/lib/components/permission-management.component.less")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]])
    ], PermissionManagementComponent);
    return PermissionManagementComponent;
}(_abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementComponent"]));



/***/ }),

/***/ "../../libs/permission-management/ng-alain/src/lib/index.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/ng-alain/src/lib/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: PermissionManagementNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management-ng-alain.module */ "../../libs/permission-management/ng-alain/src/lib/permission-management-ng-alain.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementNgAlainModule", function() { return _permission_management_ng_alain_module__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementNgAlainModule"]; });





/***/ }),

/***/ "../../libs/permission-management/ng-alain/src/lib/permission-management-ng-alain.module.ts":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/ng-alain/src/lib/permission-management-ng-alain.module.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PermissionManagementNgAlainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementNgAlainModule", function() { return PermissionManagementNgAlainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fs_permission_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fs/permission-management */ "../../libs/permission-management/src/index.ts");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fs/ng-alain/basic */ "../../themes/ng-alain/basic/src/index.ts");
/* harmony import */ var _components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/permission-management.component */ "../../libs/permission-management/ng-alain/src/lib/components/permission-management.component.ts");






var PermissionManagementNgAlainModule = /** @class */ (function () {
    function PermissionManagementNgAlainModule() {
    }
    PermissionManagementNgAlainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]],
            imports: [
                _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _fs_ng_alain_basic__WEBPACK_IMPORTED_MODULE_4__["NgAlainBasicModule"],
                _fs_permission_management__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementModule"]
            ],
            exports: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]]
        })
    ], PermissionManagementNgAlainModule);
    return PermissionManagementNgAlainModule;
}());



/***/ }),

/***/ "../../libs/permission-management/src/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/src/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: PermissionManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/permission-management.module */ "../../libs/permission-management/src/lib/permission-management.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementModule"]; });





/***/ }),

/***/ "../../libs/permission-management/src/lib/permission-management.module.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/src/lib/permission-management.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: PermissionManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return PermissionManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.permission-management */ "../../packages/permission-management/src/public-api.ts");



var PermissionManagementModule = /** @class */ (function () {
    function PermissionManagementModule() {
    }
    PermissionManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_2__["PermissionManagementModule"]],
            exports: [_abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_2__["PermissionManagementModule"]]
        })
    ], PermissionManagementModule);
    return PermissionManagementModule;
}());



/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/identity/ng-alain/src/lib/components/roles/roles.component.html":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/components/roles/roles.component.html ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'AbpIdentity::Roles' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <button nz-button [abpPermission]=\"'AbpIdentity.Roles.Create'\" (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n  </button>\r\n  <p-table *ngIf=\"[150, 0] as columnWidths\" [value]=\"data$ | async\" [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n    [lazy]=\"true\" [lazyLoadOnInit]=\"false\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalCount$ | async\"\r\n    [loading]=\"loading\" [resizableColumns]=\"true\" [scrollable]=\"true\" (onLazyLoad)=\"onPageChange($event)\">\r\n    <ng-template pTemplate=\"colgroup\">\r\n      <colgroup>\r\n        <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n      </colgroup>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"emptymessage\" let-columns>\r\n      <tr abp-table-empty-message [attr.colspan]=\"columnWidths.length\" localizationResource=\"AbpIdentity\"\r\n        localizationProp=\"NoDataAvailableInDatatable\"></tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n        <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n          {{ 'AbpIdentity::RoleName' | abpLocalization }}\r\n          <abp-sort-order-icon #sortOrderIcon key=\"name\" [(selectedSortKey)]=\"sortKey\" [(order)]=\"sortOrder\">\r\n          </abp-sort-order-icon>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-data>\r\n      <tr>\r\n        <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Update'\" (click)=\"edit(data.id)\">\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                (click)=\"providerKey = data.name; visiblePermissions = true\">\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Roles.Delete'\" (click)=\"delete(data.id, data.name)\">\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n        <td>\r\n          {{ data.name }}\r\n          <nz-tag [nzColor]=\"'#17a2b8'\" *ngIf=\"data.isPublic\">Public</nz-tag>\r\n          <nz-tag [nzColor]=\"'#28a745'\" *ngIf=\"data.isDefault\">Default</nz-tag>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</nz-card>\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{(selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n\r\n\r\n      <nz-form-item>\r\n        <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n          {{ 'AbpIdentity::RoleName' | abpLocalization }}</nz-form-label>\r\n        <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n          <input nz-input formControlName=\"name\" id=\"role-name\" />\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n      <nz-form-item>\r\n        <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n          <label nz-checkbox formControlName=\"isDefault\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n          <label nz-checkbox formControlName=\"isPublic\">\r\n            <span>\r\n              {{\r\n                  'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n              }}\r\n            </span>\r\n          </label>\r\n        </nz-form-control>\r\n      </nz-form-item>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"form?.invalid\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n<ng-alain-permission-management [(visible)]=\"visiblePermissions\" providerName=\"R\" [providerKey]=\"providerKey\">\r\n</ng-alain-permission-management>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/identity/ng-alain/src/lib/components/users/users.component.html":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/identity/ng-alain/src/lib/components/users/users.component.html ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<page-header [title]=\"'AbpIdentity::NewUser' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <button nz-button [abpPermission]=\"'AbpIdentity.Users.Create'\" (click)=\"add()\" [nzType]=\"'primary'\">\r\n    <i nz-icon nzType=\"plus\"></i>\r\n    <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n  </button>\r\n  <p-table *ngIf=\"[150, 250, 250, 250] as columnWidths\" [value]=\"data$ | async\"\r\n    [abpTableSort]=\"{ key: sortKey, order: sortOrder }\" [lazy]=\"true\" [lazyLoadOnInit]=\"false\" [paginator]=\"true\"\r\n    [rows]=\"10\" [totalRecords]=\"totalCount$ | async\" [loading]=\"loading\" [resizableColumns]=\"true\" [scrollable]=\"true\"\r\n    (onLazyLoad)=\"onPageChange($event)\">\r\n    <ng-template pTemplate=\"colgroup\">\r\n      <colgroup>\r\n        <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n      </colgroup>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"emptymessage\" let-columns>\r\n      <tr abp-table-empty-message [attr.colspan]=\"columnWidths.length\" localizationResource=\"AbpIdentity\"\r\n        localizationProp=\"NoDataAvailableInDatatable\"></tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n        <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\r\n          {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n          <abp-sort-order-icon #sortOrderIcon key=\"userName\" [(selectedSortKey)]=\"sortKey\" [(order)]=\"sortOrder\">\r\n          </abp-sort-order-icon>\r\n        </th>\r\n        <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\r\n          {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n          <abp-sort-order-icon key=\"email\" [(selectedSortKey)]=\"sortKey\" [(order)]=\"sortOrder\"></abp-sort-order-icon>\r\n        </th>\r\n        <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n          {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n          <abp-sort-order-icon key=\"phoneNumber\" [(selectedSortKey)]=\"sortKey\" [(order)]=\"sortOrder\">\r\n          </abp-sort-order-icon>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-data>\r\n      <tr>\r\n        <td>\r\n          <a class=\"ant-dropdown-link\" nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpIdentity::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Users.Update'\" (click)=\"edit(data.id)\">\r\n                {{ 'AbpIdentity::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                (click)=\"providerKey = data.id; visiblePermissions = true\">\r\n                {{ 'AbpIdentity::Permissions' | abpLocalization }}</li>\r\n              <li nz-menu-item [abpPermission]=\"'AbpIdentity.Users.Delete'\" (click)=\"delete(data.id, data.userName)\">\r\n                {{ 'AbpIdentity::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n        <td>{{ data.userName }}</td>\r\n        <td>{{ data.email }}</td>\r\n        <td>{{ data.phoneNumber }}</td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n</nz-card>\r\n<nz-modal [nzStyle]=\"{ top: '20px' }\" [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\"\r\n  [nzFooter]=\"modalFooter\" (nzOnCancel)=\"isModalVisible=false\">\r\n  <ng-template #modalTitle>\r\n    {{(selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization}}\r\n  </ng-template>\r\n\r\n  <ng-template #modalContent>\r\n    <ng-template #loaderRef>\r\n      <div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div>\r\n    </ng-template>\r\n\r\n    <form nz-form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <nz-tabset>\r\n        <nz-tab nzTitle=\"{{'AbpIdentity::UserInformations' | abpLocalization}}\">\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"user-name\">\r\n              {{ 'AbpIdentity::UserName' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"userName\" id=\"user-name\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}\r\n            </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"name\" id=\"name\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"surname\">\r\n              {{ 'AbpIdentity::DisplayName:Surname' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"surname\" id=\"surname\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"password\" nzRequired>\r\n              {{ 'AbpIdentity::Password' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input type=\"password\" id=\"password\" formControlName=\"password\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzRequired nzFor=\"email\">\r\n              {{ 'AbpIdentity::EmailAddress' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"email\" id=\"email\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"6\" [nzXs]=\"24\" nzFor=\"phoneNumber\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            </nz-form-label>\r\n            <nz-form-control [nzSm]=\"14\" [nzXs]=\"24\">\r\n              <input nz-input formControlName=\"phoneNumber\" id=\"phoneNumber\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <label nz-checkbox formControlName=\"lockoutEnabled\">\r\n                <span>\r\n                  {{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                  }}\r\n                </span>\r\n              </label>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <label nz-checkbox formControlName=\"twoFactorEnabled\">\r\n                <span>\r\n                  {{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                  }}\r\n                </span>\r\n              </label>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n        <nz-tab nzTitle=\"{{'AbpIdentity::Roles' | abpLocalization}}\">\r\n          <nz-form-item>\r\n            <nz-form-control *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\">\r\n              <label nz-checkbox [formControl]=\"roleGroup.controls[roles[i].name]\">\r\n                <span>\r\n                  {{ roles[i].name }}\r\n                </span>\r\n              </label>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </nz-tab>\r\n      </nz-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #modalFooter>\r\n    <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <button nz-button nzType=\"primary\" (click)=\"save()\" [disabled]=\"form?.invalid\">\r\n      {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n      }}\r\n    </button>\r\n  </ng-template>\r\n</nz-modal>\r\n<ng-alain-permission-management [(visible)]=\"visiblePermissions\" providerName=\"U\" [providerKey]=\"providerKey\">\r\n</ng-alain-permission-management>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../libs/permission-management/ng-alain/src/lib/components/permission-management.component.html":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/libs/permission-management/ng-alain/src/lib/components/permission-management.component.html ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n  <nz-modal [(nzVisible)]=\"visible\"\r\n            (nzAfterOpen)=\"initModal()\"\r\n            [nzTitle]=\"modalTitle\"\r\n            [nzContent]=\"modalContent\"\r\n            [nzFooter]=\"modalFooter\"\r\n            (nzOnCancel)=\"visible=false\"\r\n            nzWidth=\"1040\"\r\n  >\r\n\r\n    <ng-template #modalTitle>\r\n      {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n    </ng-template>\r\n\r\n    <ng-template #modalContent>\r\n      <nz-checkbox-wrapper >\r\n        <label nz-checkbox [(ngModel)]=\"selectAllTab\" (ngModelChange)=\"onClickSelectAll()\" [nzIndeterminate]=\"selectAllIndeterminate\">\r\n          {{'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization}}\r\n        </label>\r\n      </nz-checkbox-wrapper>\r\n\r\n\r\n      <div class=\"main\">\r\n        <div class=\"menu\">\r\n          <ul nz-menu nzMode=\"inline\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" nz-menu-item [nzSelected]=\"selectedGroup?.name === group?.name\" (click)=\"onChangeGroup(group)\">{{ group?.displayName }}</li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"title\">{{ selectedGroup?.displayName }}</div>\r\n          <nz-checkbox-wrapper>\r\n            <label nz-checkbox [(ngModel)]=\"selectThisTab\" (ngModelChange)=\"onClickSelectThisTab()\" [nzIndeterminate]=\"selectAllThisTabIndeterminate\">\r\n              {{'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization}}\r\n            </label>\r\n          </nz-checkbox-wrapper>\r\n          <div *ngFor=\"let permission of selectedGroupPermissions$ | async; let i = index; trackBy: trackByFn\"\r\n               [style.margin-left]=\"permission.margin + 'px'\">\r\n            <nz-checkbox-wrapper>\r\n              <label nz-checkbox\r\n                     [ngModel]=\"getChecked(permission.name)\"\r\n                     [nzDisabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n                     (ngModelChange)=\"onClickCheckbox(permission)\"\r\n                     >\r\n                {{ permission.displayName }}\r\n                <span *ngFor=\"let provider of permission.grantedProviders\">{{ provider.providerName }}: {{ provider.providerKey }}</span>\r\n              </label>\r\n            </nz-checkbox-wrapper>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>\r\n\r\n    <ng-template #modalFooter>\r\n      <button nz-button nzType=\"default\" (click)=\"visible=false\">\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <button nz-button nzType=\"primary\" (click)=\"submit()\">\r\n        {{\r\n      'AbpIdentity::Save' | abpLocalization\r\n        }}\r\n      </button>\r\n    </ng-template>\r\n\r\n\r\n  </nz-modal>\r\n</ng-container>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/roles/roles.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/roles/roles.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Roles' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Roles.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewRole' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <p-table\r\n      *ngIf=\"[150, 0] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpIdentity\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('name')\">\r\n            {{ 'AbpIdentity::RoleName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"name\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.name; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Roles.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.name)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            {{ data.name\r\n            }}<span *ngIf=\"data.isDefault\" class=\"badge badge-pill badge-success ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n            }}</span>\r\n            <span *ngIf=\"data.isPublic\" class=\"badge badge-pill badge-info ml-1\">{{\r\n              'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n            }}</span>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal size=\"md\" [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewRole') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <form #formRef [formGroup]=\"form\" (ngSubmit)=\"save()\" validateOnSubmit>\r\n      <div class=\"form-group\">\r\n        <label for=\"role-name\">{{ 'AbpIdentity::RoleName' | abpLocalization }}</label\r\n        ><span> * </span>\r\n        <input autofocus type=\"text\" id=\"role-name\" class=\"form-control\" formControlName=\"name\" />\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-default\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isDefault\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-default\">{{\r\n          'AbpIdentity::DisplayName:IsDefault' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"role-is-public\"\r\n          class=\"custom-control-input\"\r\n          formControlName=\"isPublic\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"role-is-public\">{{\r\n          'AbpIdentity::DisplayName:IsPublic' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" [disabled]=\"form?.invalid\" (click)=\"onClickSaveButton()\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'R' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true },\r\n        hideBadges: { value: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n\r\n<!-- <abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"{\r\n    inputs: {\r\n      providerName: { value: 'R' },\r\n      providerKey: { value: providerKey },\r\n      visible: { value: visiblePermissions, twoWay: true },\r\n      hideBadges: { value: true }\r\n    },\r\n    outputs: { visibleChange: onVisiblePermissionChange },\r\n    componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n  }\"\r\n  [(visible)]=\"visiblePermissions\"\r\n  [providerKey]=\"providerKey\"\r\n  [hideBadges]=\"true\"\r\n  providerName=\"R\"\r\n>\r\n</abp-permission-management> -->\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/users/users.component.html":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/users/users.component.html ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"identity-roles-wrapper\" class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col col-md-6\">\r\n        <h5 class=\"card-title\">{{ 'AbpIdentity::Users' | abpLocalization }}</h5>\r\n      </div>\r\n      <div class=\"text-right col col-md-6\">\r\n        <button\r\n          *abpPermission=\"'AbpIdentity.Users.Create'\"\r\n          id=\"create-role\"\r\n          class=\"btn btn-primary\"\r\n          type=\"button\"\r\n          (click)=\"add()\"\r\n        >\r\n          <i class=\"fa fa-plus mr-1\"></i>\r\n          <span>{{ 'AbpIdentity::NewUser' | abpLocalization }}</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div id=\"data-tables-table-filter\" class=\"data-tables-filter\">\r\n      <label\r\n        ><input\r\n          type=\"search\"\r\n          class=\"form-control form-control-sm\"\r\n          [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n          (input.debounce)=\"onSearch($event.target.value)\"\r\n      /></label>\r\n    </div>\r\n    <p-table\r\n      *ngIf=\"[150, 250, 250, 250] as columnWidths\"\r\n      [value]=\"data$ | async\"\r\n      [abpTableSort]=\"{ key: sortKey, order: sortOrder }\"\r\n      [lazy]=\"true\"\r\n      [lazyLoadOnInit]=\"false\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [totalRecords]=\"totalCount$ | async\"\r\n      [loading]=\"loading\"\r\n      [resizableColumns]=\"true\"\r\n      [scrollable]=\"true\"\r\n      (onLazyLoad)=\"onPageChange($event)\"\r\n    >\r\n      <ng-template pTemplate=\"colgroup\">\r\n        <colgroup>\r\n          <col *ngFor=\"let width of columnWidths\" [ngStyle]=\"{ 'width.px': width || undefined }\" />\r\n        </colgroup>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr\r\n          abp-table-empty-message\r\n          [attr.colspan]=\"columnWidths.length\"\r\n          localizationResource=\"AbpIdentity\"\r\n          localizationProp=\"NoDataAvailableInDatatable\"\r\n        ></tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\">\r\n        <tr>\r\n          <th>{{ 'AbpIdentity::Actions' | abpLocalization }}</th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('userName')\">\r\n            {{ 'AbpIdentity::UserName' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              #sortOrderIcon\r\n              sortKey=\"userName\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('email')\">\r\n            {{ 'AbpIdentity::EmailAddress' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"email\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            ></abp-sort-order-icon>\r\n          </th>\r\n          <th pResizableColumn (click)=\"sortOrderIcon.sort('phoneNumber')\">\r\n            {{ 'AbpIdentity::PhoneNumber' | abpLocalization }}\r\n            <abp-sort-order-icon\r\n              sortKey=\"phoneNumber\"\r\n              [(selectedSortKey)]=\"sortKey\"\r\n              [(order)]=\"sortOrder\"\r\n            >\r\n            </abp-sort-order-icon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-data>\r\n        <tr>\r\n          <td class=\"text-center\">\r\n            <div ngbDropdown container=\"body\" class=\"d-inline-block\">\r\n              <button\r\n                class=\"btn btn-primary btn-sm dropdown-toggle\"\r\n                data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\"\r\n                ngbDropdownToggle\r\n              >\r\n                <i class=\"fa fa-cog mr-1\"></i>{{ 'AbpIdentity::Actions' | abpLocalization }}\r\n              </button>\r\n              <div ngbDropdownMenu>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Update'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"edit(data.id)\"\r\n                >\r\n                  {{ 'AbpIdentity::Edit' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.ManagePermissions'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"providerKey = data.id; visiblePermissions = true\"\r\n                >\r\n                  {{ 'AbpIdentity::Permissions' | abpLocalization }}\r\n                </button>\r\n                <button\r\n                  *abpPermission=\"'AbpIdentity.Users.Delete'\"\r\n                  ngbDropdownItem\r\n                  (click)=\"delete(data.id, data.userName)\"\r\n                >\r\n                  {{ 'AbpIdentity::Delete' | abpLocalization }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n          <td>{{ data.userName }}</td>\r\n          <td>{{ data.email }}</td>\r\n          <td>{{ data.phoneNumber }}</td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </div>\r\n</div>\r\n\r\n<abp-modal [(visible)]=\"isModalVisible\" [busy]=\"modalBusy\" (disappear)=\"form = null\">\r\n  <ng-template #abpHeader>\r\n    <h3>{{ (selected?.id ? 'AbpIdentity::Edit' : 'AbpIdentity::NewUser') | abpLocalization }}</h3>\r\n  </ng-template>\r\n\r\n  <ng-template #abpBody>\r\n    <ng-template #loaderRef\r\n      ><div class=\"text-center\"><i class=\"fa fa-pulse fa-spinner\"></i></div\r\n    ></ng-template>\r\n\r\n    <form *ngIf=\"form; else loaderRef\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\r\n      <ngb-tabset>\r\n        <ngb-tab [title]=\"'AbpIdentity::UserInformations' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div class=\"form-group\">\r\n                <label for=\"user-name\">{{ 'AbpIdentity::UserName' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"user-name\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"userName\"\r\n                  autofocus\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">{{ 'AbpIdentity::DisplayName:Name' | abpLocalization }}</label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"surname\">{{\r\n                  'AbpIdentity::DisplayName:Surname' | abpLocalization\r\n                }}</label>\r\n                <input type=\"text\" id=\"surname\" class=\"form-control\" formControlName=\"surname\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">{{ 'AbpIdentity::Password' | abpLocalization }}</label\r\n                ><span *ngIf=\"!selected.userName\"> * </span>\r\n                <input\r\n                  type=\"password\"\r\n                  id=\"password\"\r\n                  autocomplete=\"new-password\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"password\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">{{ 'AbpIdentity::EmailAddress' | abpLocalization }}</label\r\n                ><span> * </span>\r\n                <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"phone-number\">{{ 'AbpIdentity::PhoneNumber' | abpLocalization }}</label>\r\n                <input\r\n                  type=\"text\"\r\n                  id=\"phone-number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"phoneNumber\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"lockout-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"lockoutEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"lockout-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:LockoutEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n\r\n              <div class=\"custom-checkbox custom-control mb-2\">\r\n                <input\r\n                  type=\"checkbox\"\r\n                  id=\"two-factor-checkbox\"\r\n                  class=\"custom-control-input\"\r\n                  formControlName=\"twoFactorEnabled\"\r\n                />\r\n                <label class=\"custom-control-label\" for=\"two-factor-checkbox\">{{\r\n                  'AbpIdentity::DisplayName:TwoFactorEnabled' | abpLocalization\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n        <ngb-tab [title]=\"'AbpIdentity::Roles' | abpLocalization\">\r\n          <ng-template ngbTabContent>\r\n            <div class=\"mt-2 fade-in-top\">\r\n              <div\r\n                *ngFor=\"let roleGroup of roleGroups; let i = index; trackBy: trackByFn\"\r\n                class=\"custom-checkbox custom-control mb-2\"\r\n              >\r\n                <input\r\n                  type=\"checkbox\"\r\n                  name=\"Roles[0].IsAssigned\"\r\n                  value=\"true\"\r\n                  class=\"custom-control-input\"\r\n                  [attr.id]=\"'roles-' + i\"\r\n                  [formControl]=\"roleGroup.controls[roles[i].name]\"\r\n                />\r\n                <label class=\"custom-control-label\" [attr.for]=\"'roles-' + i\">{{\r\n                  roles[i].name\r\n                }}</label>\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </ngb-tab>\r\n      </ngb-tabset>\r\n    </form>\r\n  </ng-template>\r\n\r\n  <ng-template #abpFooter>\r\n    <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n      {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n    </button>\r\n    <abp-button iconClass=\"fa fa-check\" (click)=\"save()\" [disabled]=\"form?.invalid\">{{\r\n      'AbpIdentity::Save' | abpLocalization\r\n    }}</abp-button>\r\n  </ng-template>\r\n</abp-modal>\r\n\r\n<abp-permission-management\r\n  #abpPermissionManagement=\"abpPermissionManagement\"\r\n  *abpReplaceableTemplate=\"\r\n    {\r\n      inputs: {\r\n        providerName: { value: 'U' },\r\n        providerKey: { value: providerKey },\r\n        visible: { value: visiblePermissions, twoWay: true }\r\n      },\r\n      outputs: { visibleChange: onVisiblePermissionChange },\r\n      componentKey: 'PermissionManagement.PermissionManagementComponent'\r\n    };\r\n    let init = initTemplate\r\n  \"\r\n  (abpInit)=\"init(abpPermissionManagement)\"\r\n>\r\n</abp-permission-management>\r\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!../../packages/permission-management/src/lib/components/permission-management.component.html":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/raw-loader/dist/cjs.js!C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/permission-management.component.html ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<abp-modal [(visible)]=\"visible\" (init)=\"initModal()\" [busy]=\"modalBusy\">\r\n  <ng-container *ngIf=\"{ entityName: entityName$ | async } as data\">\r\n    <ng-template #abpHeader>\r\n      <h4>\r\n        {{ 'AbpPermissionManagement::Permissions' | abpLocalization }} - {{ data.entityName }}\r\n      </h4>\r\n    </ng-template>\r\n    <ng-template #abpBody>\r\n      <div class=\"custom-checkbox custom-control mb-2\">\r\n        <input\r\n          type=\"checkbox\"\r\n          id=\"select-all-in-all-tabs\"\r\n          name=\"select-all-in-all-tabs\"\r\n          class=\"custom-control-input\"\r\n          [(ngModel)]=\"selectAllTab\"\r\n          (click)=\"onClickSelectAll()\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"select-all-in-all-tabs\">{{\r\n          'AbpPermissionManagement::SelectAllInAllTabs' | abpLocalization\r\n        }}</label>\r\n      </div>\r\n\r\n      <hr class=\"mt-2 mb-2\" />\r\n      <div class=\"row\">\r\n        <div class=\"col-4\">\r\n          <ul class=\"nav nav-pills flex-column\">\r\n            <li *ngFor=\"let group of groups$ | async; trackBy: trackByFn\" class=\"nav-item\">\r\n              <a\r\n                class=\"nav-link pointer\"\r\n                [class.active]=\"selectedGroup?.name === group?.name\"\r\n                (click)=\"onChangeGroup(group)\"\r\n                >{{ group?.displayName }}</a\r\n              >\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-8\">\r\n          <h4>{{ selectedGroup?.displayName }}</h4>\r\n          <hr class=\"mt-2 mb-3\" />\r\n          <div class=\"pl-1 pt-1\">\r\n            <div class=\"custom-checkbox custom-control mb-2\">\r\n              <input\r\n                type=\"checkbox\"\r\n                id=\"select-all-in-this-tabs\"\r\n                name=\"select-all-in-this-tabs\"\r\n                class=\"custom-control-input\"\r\n                [(ngModel)]=\"selectThisTab\"\r\n                (click)=\"onClickSelectThisTab()\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"select-all-in-this-tabs\">{{\r\n                'AbpPermissionManagement::SelectAllInThisTab' | abpLocalization\r\n              }}</label>\r\n            </div>\r\n            <hr class=\"mb-3\" />\r\n            <div\r\n              *ngFor=\"\r\n                let permission of selectedGroupPermissions$ | async;\r\n                let i = index;\r\n                trackBy: trackByFn\r\n              \"\r\n              [style.margin-left]=\"permission.margin + 'px'\"\r\n              class=\"custom-checkbox custom-control mb-2\"\r\n            >\r\n              <input\r\n                #permissionCheckbox\r\n                type=\"checkbox\"\r\n                [checked]=\"getChecked(permission.name)\"\r\n                [value]=\"getChecked(permission.name)\"\r\n                [attr.id]=\"permission.name\"\r\n                class=\"custom-control-input\"\r\n                [disabled]=\"isGrantedByOtherProviderName(permission.grantedProviders)\"\r\n              />\r\n              <label\r\n                class=\"custom-control-label\"\r\n                [attr.for]=\"permission.name\"\r\n                (click)=\"onClickCheckbox(permission, permissionCheckbox.value)\"\r\n                >{{ permission.displayName }}\r\n                <ng-container *ngIf=\"!hideBadges\">\r\n                  <span\r\n                    *ngFor=\"let provider of permission.grantedProviders\"\r\n                    class=\"badge badge-light\"\r\n                    >{{ provider.providerName }}: {{ provider.providerKey }}</span\r\n                  >\r\n                </ng-container>\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template #abpFooter>\r\n      <button type=\"button\" class=\"btn btn-secondary\" #abpClose>\r\n        {{ 'AbpIdentity::Cancel' | abpLocalization }}\r\n      </button>\r\n      <abp-button iconClass=\"fa fa-check\" (click)=\"submit()\">{{\r\n        'AbpIdentity::Save' | abpLocalization\r\n      }}</abp-button>\r\n    </ng-template>\r\n  </ng-container>\r\n</abp-modal>\r\n");

/***/ }),

/***/ "../../packages/identity/src/lib/actions/identity.actions.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/actions/identity.actions.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GetRoles, GetRoleById, DeleteRole, CreateRole, UpdateRole, GetUsers, GetUserById, DeleteUser, CreateUser, UpdateUser, GetUserRoles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoles", function() { return GetRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRoleById", function() { return GetRoleById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRole", function() { return DeleteRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRole", function() { return CreateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRole", function() { return UpdateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return GetUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserById", function() { return GetUserById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return CreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserRoles", function() { return GetUserRoles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var GetRoles = /** @class */ (function () {
    function GetRoles(payload) {
        this.payload = payload;
    }
    GetRoles.type = '[Identity] Get Roles';
    return GetRoles;
}());

var GetRoleById = /** @class */ (function () {
    function GetRoleById(payload) {
        this.payload = payload;
    }
    GetRoleById.type = '[Identity] Get Role By Id';
    return GetRoleById;
}());

var DeleteRole = /** @class */ (function () {
    function DeleteRole(payload) {
        this.payload = payload;
    }
    DeleteRole.type = '[Identity] Delete Role';
    return DeleteRole;
}());

var CreateRole = /** @class */ (function () {
    function CreateRole(payload) {
        this.payload = payload;
    }
    CreateRole.type = '[Identity] Create Role';
    return CreateRole;
}());

var UpdateRole = /** @class */ (function () {
    function UpdateRole(payload) {
        this.payload = payload;
    }
    UpdateRole.type = '[Identity] Update Role';
    return UpdateRole;
}());

var GetUsers = /** @class */ (function () {
    function GetUsers(payload) {
        this.payload = payload;
    }
    GetUsers.type = '[Identity] Get Users';
    return GetUsers;
}());

var GetUserById = /** @class */ (function () {
    function GetUserById(payload) {
        this.payload = payload;
    }
    GetUserById.type = '[Identity] Get User By Id';
    return GetUserById;
}());

var DeleteUser = /** @class */ (function () {
    function DeleteUser(payload) {
        this.payload = payload;
    }
    DeleteUser.type = '[Identity] Delete User';
    return DeleteUser;
}());

var CreateUser = /** @class */ (function () {
    function CreateUser(payload) {
        this.payload = payload;
    }
    CreateUser.type = '[Identity] Create User';
    return CreateUser;
}());

var UpdateUser = /** @class */ (function () {
    function UpdateUser(payload) {
        this.payload = payload;
    }
    UpdateUser.type = '[Identity] Update User';
    return UpdateUser;
}());

var GetUserRoles = /** @class */ (function () {
    function GetUserRoles(payload) {
        this.payload = payload;
    }
    GetUserRoles.type = '[Identity] Get User Roles';
    return GetUserRoles;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/components/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: RolesComponent, UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles/roles.component */ "../../packages/identity/src/lib/components/roles/roles.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return _roles_roles_component__WEBPACK_IMPORTED_MODULE_1__["RolesComponent"]; });

/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "../../packages/identity/src/lib/components/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"]; });






/***/ }),

/***/ "../../packages/identity/src/lib/components/roles/roles.component.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/roles/roles.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");









var RolesComponent = /** @class */ (function () {
    function RolesComponent(confirmationService, fb, store) {
        var _this = this;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.onVisiblePermissionChange = function (event) {
            _this.visiblePermissions = event;
        };
    }
    RolesComponent.prototype.ngOnInit = function () {
        this.get();
    };
    RolesComponent.prototype.buildForm = function () {
        this.form = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({ value: this.selected.name || '', disabled: this.selected.isStatic }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(256),
            ]),
            isDefault: [this.selected.isDefault || false],
            isPublic: [this.selected.isPublic || false],
        });
    };
    RolesComponent.prototype.openModal = function () {
        this.buildForm();
        this.isModalVisible = true;
    };
    RolesComponent.prototype.add = function () {
        this.selected = {};
        this.openModal();
    };
    RolesComponent.prototype.edit = function (id) {
        var _this = this;
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["GetRoleById"](id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["pluck"])('IdentityState', 'selectedRole'))
            .subscribe(function (selectedRole) {
            _this.selected = selectedRole;
            _this.openModal();
        });
    };
    RolesComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.valid)
            return;
        this.modalBusy = true;
        this.store
            .dispatch(this.selected.id
            ? new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateRole"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.selected, this.form.value, { id: this.selected.id }))
            : new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["CreateRole"](this.form.value))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.modalBusy = false); }))
            .subscribe(function () {
            _this.isModalVisible = false;
            _this.get();
        });
    };
    RolesComponent.prototype.delete = function (id, name) {
        var _this = this;
        this.confirmationService
            .warn('AbpIdentity::RoleDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [name],
        })
            .subscribe(function (status) {
            if (status === "confirm" /* confirm */) {
                _this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["DeleteRole"](id)).subscribe(function () { return _this.get(); });
            }
        });
    };
    RolesComponent.prototype.onPageChange = function (data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    };
    RolesComponent.prototype.get = function () {
        var _this = this;
        this.loading = true;
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_7__["GetRoles"](this.pageQuery))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return (_this.loading = false); }))
            .subscribe();
    };
    RolesComponent.prototype.onClickSaveButton = function () {
        this.formRef.nativeElement.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    };
    RolesComponent.ctorParameters = function () { return [
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_8__["IdentityState"].getRoles),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], RolesComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_8__["IdentityState"].getRolesTotalCount),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], RolesComponent.prototype, "totalCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('formRef', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], RolesComponent.prototype, "formRef", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'abp-roles',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roles.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/roles/roles.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/components/users/users.component.ts":
/*!*********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/components/users/users.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var snq__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! snq */ "../../node_modules/snq/dist/snq.es5.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");












var UsersComponent = /** @class */ (function () {
    function UsersComponent(confirmationService, fb, store) {
        var _this = this;
        this.confirmationService = confirmationService;
        this.fb = fb;
        this.store = store;
        this.visiblePermissions = false;
        this.pageQuery = {};
        this.loading = false;
        this.modalBusy = false;
        this.sortOrder = '';
        this.sortKey = '';
        this.passwordRulesArr = [];
        this.requiredPasswordLength = 1;
        this.trackByFn = function (index, item) { return Object.keys(item)[0] || index; };
        this.onVisiblePermissionChange = function (event) {
            _this.visiblePermissions = event;
        };
    }
    Object.defineProperty(UsersComponent.prototype, "roleGroups", {
        get: function () {
            var _this = this;
            return Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(function () { return _this.form.get('roleNames').controls; }, []);
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.ngOnInit = function () {
        this.get();
        var passwordRules = this.store.selectSnapshot(_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ConfigState"].getSettings('Identity.Password'));
        if ((passwordRules['Abp.Identity.Password.RequireDigit'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('number');
        }
        if ((passwordRules['Abp.Identity.Password.RequireLowercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('small');
        }
        if ((passwordRules['Abp.Identity.Password.RequireUppercase'] || '').toLowerCase() === 'true') {
            this.passwordRulesArr.push('capital');
        }
        if (+(passwordRules['Abp.Identity.Password.RequiredUniqueChars'] || 0) > 0) {
            this.passwordRulesArr.push('special');
        }
        if (Number.isInteger(+passwordRules['Abp.Identity.Password.RequiredLength'])) {
            this.requiredPasswordLength = +passwordRules['Abp.Identity.Password.RequiredLength'];
        }
    };
    UsersComponent.prototype.onSearch = function (value) {
        this.pageQuery.filter = value;
        this.get();
    };
    UsersComponent.prototype.buildForm = function () {
        var _this = this;
        this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetRoles"]()).subscribe(function () {
            _this.roles = _this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getRoles);
            _this.form = _this.fb.group({
                userName: [_this.selected.userName || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)]],
                email: [
                    _this.selected.email || '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(256)],
                ],
                name: [_this.selected.name || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(64)]],
                surname: [_this.selected.surname || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(64)]],
                phoneNumber: [_this.selected.phoneNumber || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)]],
                lockoutEnabled: [_this.selected.lockoutEnabled || (_this.selected.id ? false : true)],
                twoFactorEnabled: [_this.selected.twoFactorEnabled || (_this.selected.id ? false : true)],
                roleNames: _this.fb.array(_this.roles.map(function (role) {
                    var _a;
                    return _this.fb.group((_a = {},
                        _a[role.name] = [
                            !!Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(function () { return _this.selectedUserRoles.find(function (userRole) { return userRole.id === role.id; }); }),
                        ],
                        _a));
                })),
            });
            var passwordValidators = [
                Object(_ngx_validate_core__WEBPACK_IMPORTED_MODULE_5__["validatePassword"])(_this.passwordRulesArr),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(_this.requiredPasswordLength),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32),
            ];
            _this.form.addControl('password', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', passwordValidators.slice()));
            if (!_this.selected.userName) {
                _this.form.get('password').setValidators(passwordValidators.concat([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]));
                _this.form.get('password').updateValueAndValidity();
            }
        });
    };
    UsersComponent.prototype.openModal = function () {
        this.buildForm();
        this.isModalVisible = true;
    };
    UsersComponent.prototype.add = function () {
        this.selected = {};
        this.selectedUserRoles = [];
        this.openModal();
    };
    UsersComponent.prototype.edit = function (id) {
        var _this = this;
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserById"](id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(function () { return _this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUserRoles"](id)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('IdentityState'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function (state) {
            _this.selected = state.selectedUser;
            _this.selectedUserRoles = state.selectedUserRoles;
            _this.openModal();
        });
    };
    UsersComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.valid || this.modalBusy)
            return;
        this.modalBusy = true;
        var roleNames = this.form.value.roleNames;
        var mappedRoleNames = Object(snq__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
            return roleNames.filter(function (role) { return !!role[Object.keys(role)[0]]; }).map(function (role) { return Object.keys(role)[0]; });
        }, []);
        this.store
            .dispatch(this.selected.id
            ? new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["UpdateUser"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.selected, this.form.value, { id: this.selected.id, roleNames: mappedRoleNames }))
            : new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["CreateUser"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form.value, { roleNames: mappedRoleNames })))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return (_this.modalBusy = false); }))
            .subscribe(function () {
            _this.isModalVisible = false;
            _this.get();
        });
    };
    UsersComponent.prototype.delete = function (id, userName) {
        var _this = this;
        this.confirmationService
            .warn('AbpIdentity::UserDeletionConfirmationMessage', 'AbpIdentity::AreYouSure', {
            messageLocalizationParams: [userName],
        })
            .subscribe(function (status) {
            if (status === "confirm" /* confirm */) {
                _this.store.dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["DeleteUser"](id)).subscribe(function () { return _this.get(); });
            }
        });
    };
    UsersComponent.prototype.onPageChange = function (data) {
        this.pageQuery.skipCount = data.first;
        this.pageQuery.maxResultCount = data.rows;
        this.get();
    };
    UsersComponent.prototype.get = function () {
        var _this = this;
        this.loading = true;
        this.store
            .dispatch(new _actions_identity_actions__WEBPACK_IMPORTED_MODULE_10__["GetUsers"](this.pageQuery))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () { return (_this.loading = false); }))
            .subscribe();
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getUsers),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], UsersComponent.prototype, "data$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_states_identity_state__WEBPACK_IMPORTED_MODULE_11__["IdentityState"].getUsersTotalCount),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], UsersComponent.prototype, "totalCount$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('modalContent', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], UsersComponent.prototype, "modalContent", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'abp-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/identity/src/lib/components/users/users.component.html")).default,
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/identity-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/identity-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: IdentityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityRoutingModule", function() { return IdentityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/roles/roles.component */ "../../packages/identity/src/lib/components/roles/roles.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/users.component */ "../../packages/identity/src/lib/components/users/users.component.ts");






var routes = [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    {
        path: '',
        component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["DynamicLayoutComponent"],
        canActivate: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["PermissionGuard"]],
        children: [
            {
                path: 'roles',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: {
                    requiredPolicy: 'AbpIdentity.Roles',
                    replaceableComponent: {
                        key: 'Identity.RolesComponent',
                        defaultComponent: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"],
                    },
                },
            },
            {
                path: 'users',
                component: _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["ReplaceableRouteContainerComponent"],
                data: {
                    requiredPolicy: 'AbpIdentity.Users',
                    replaceableComponent: {
                        key: 'Identity.UsersComponent',
                        defaultComponent: _components_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
                    },
                },
            },
        ],
    },
];
var IdentityRoutingModule = /** @class */ (function () {
    function IdentityRoutingModule() {
    }
    IdentityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], IdentityRoutingModule);
    return IdentityRoutingModule;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/identity.module.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/identity.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: IdentityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return IdentityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/roles/roles.component */ "../../packages/identity/src/lib/components/roles/roles.component.ts");
/* harmony import */ var _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./identity-routing.module */ "../../packages/identity/src/lib/identity-routing.module.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "../../node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users/users.component */ "../../packages/identity/src/lib/components/users/users.component.ts");
/* harmony import */ var _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @abp/ng.permission-management */ "../../packages/permission-management/src/public-api.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/table */ "../../node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-validate/core */ "../../node_modules/@ngx-validate/core/fesm5/ngx-validate-core.js");













var IdentityModule = /** @class */ (function () {
    function IdentityModule() {
    }
    IdentityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_roles_roles_component__WEBPACK_IMPORTED_MODULE_4__["RolesComponent"], _components_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]],
            imports: [
                _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([_states_identity_state__WEBPACK_IMPORTED_MODULE_6__["IdentityState"]]),
                _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
                _identity_routing_module__WEBPACK_IMPORTED_MODULE_5__["IdentityRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"],
                _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_8__["ThemeSharedModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_11__["TableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"],
                _abp_ng_permission_management__WEBPACK_IMPORTED_MODULE_10__["PermissionManagementModule"],
                _ngx_validate_core__WEBPACK_IMPORTED_MODULE_12__["NgxValidateCoreModule"],
            ],
        })
    ], IdentityModule);
    return IdentityModule;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/services/identity-state.service.ts":
/*!********************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/identity-state.service.ts ***!
  \********************************************************************************************************************/
/*! exports provided: IdentityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityStateService", function() { return IdentityStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _states_identity_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");





var IdentityStateService = /** @class */ (function () {
    function IdentityStateService(store) {
        this.store = store;
    }
    IdentityStateService.prototype.getRoles = function () {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getRoles);
    };
    IdentityStateService.prototype.getRolesTotalCount = function () {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getRolesTotalCount);
    };
    IdentityStateService.prototype.getUsers = function () {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getUsers);
    };
    IdentityStateService.prototype.getUsersTotalCount = function () {
        return this.store.selectSnapshot(_states_identity_state__WEBPACK_IMPORTED_MODULE_4__["IdentityState"].getUsersTotalCount);
    };
    IdentityStateService.prototype.dispatchGetRoles = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchGetRoleById = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchDeleteRole = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchCreateRole = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchUpdateRole = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchGetUsers = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchGetUserById = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchDeleteUser = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchCreateUser = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchUpdateUser = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"], [void 0].concat(args)))());
    };
    IdentityStateService.prototype.dispatchGetUserRoles = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"].bind.apply(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"], [void 0].concat(args)))());
    };
    IdentityStateService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    IdentityStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], IdentityStateService);
    return IdentityStateService;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/services/identity.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/identity.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: IdentityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return IdentityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");



var IdentityService = /** @class */ (function () {
    function IdentityService(rest) {
        this.rest = rest;
    }
    IdentityService.prototype.getRoles = function (params) {
        if (params === void 0) { params = {}; }
        var request = {
            method: 'GET',
            url: '/api/identity/roles',
            params: params,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.getRoleById = function (id) {
        var request = {
            method: 'GET',
            url: "/api/identity/roles/" + id,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.deleteRole = function (id) {
        var request = {
            method: 'DELETE',
            url: "/api/identity/roles/" + id,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.createRole = function (body) {
        var request = {
            method: 'POST',
            url: '/api/identity/roles',
            body: body,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.updateRole = function (body) {
        var url = "/api/identity/roles/" + body.id;
        delete body.id;
        var request = {
            method: 'PUT',
            url: url,
            body: body,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.getUsers = function (params) {
        if (params === void 0) { params = {}; }
        var request = {
            method: 'GET',
            url: '/api/identity/users',
            params: params,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.getUserById = function (id) {
        var request = {
            method: 'GET',
            url: "/api/identity/users/" + id,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.getUserRoles = function (id) {
        var request = {
            method: 'GET',
            url: "/api/identity/users/" + id + "/roles",
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.deleteUser = function (id) {
        var request = {
            method: 'DELETE',
            url: "/api/identity/users/" + id,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.createUser = function (body) {
        var request = {
            method: 'POST',
            url: '/api/identity/users',
            body: body,
        };
        return this.rest.request(request);
    };
    IdentityService.prototype.updateUser = function (body) {
        var url = "/api/identity/users/" + body.id;
        delete body.id;
        var request = {
            method: 'PUT',
            url: url,
            body: body,
        };
        return this.rest.request(request);
    };
    IdentityService.ctorParameters = function () { return [
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
    ]; };
    IdentityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], IdentityService);
    return IdentityService;
}());



/***/ }),

/***/ "../../packages/identity/src/lib/services/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/services/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: IdentityService, IdentityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _identity_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.service */ "../../packages/identity/src/lib/services/identity.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return _identity_service__WEBPACK_IMPORTED_MODULE_1__["IdentityService"]; });

/* harmony import */ var _identity_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./identity-state.service */ "../../packages/identity/src/lib/services/identity-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityStateService", function() { return _identity_state_service__WEBPACK_IMPORTED_MODULE_2__["IdentityStateService"]; });






/***/ }),

/***/ "../../packages/identity/src/lib/states/identity.state.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/lib/states/identity.state.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IdentityState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityState", function() { return IdentityState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony import */ var _services_identity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/identity.service */ "../../packages/identity/src/lib/services/identity.service.ts");





var IdentityState = /** @class */ (function () {
    function IdentityState(identityService) {
        this.identityService = identityService;
    }
    IdentityState.getRoles = function (_a) {
        var roles = _a.roles;
        return roles.items || [];
    };
    IdentityState.getRolesTotalCount = function (_a) {
        var roles = _a.roles;
        return roles.totalCount || 0;
    };
    IdentityState.getUsers = function (_a) {
        var users = _a.users;
        return users.items || [];
    };
    IdentityState.getUsersTotalCount = function (_a) {
        var users = _a.users;
        return users.totalCount || 0;
    };
    IdentityState.prototype.getRoles = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.identityService.getRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (roles) {
            return patchState({
                roles: roles,
            });
        }));
    };
    IdentityState.prototype.getRole = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.identityService.getRoleById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedRole) {
            return patchState({
                selectedRole: selectedRole,
            });
        }));
    };
    IdentityState.prototype.deleteRole = function (_, _a) {
        var payload = _a.payload;
        return this.identityService.deleteRole(payload);
    };
    IdentityState.prototype.addRole = function (_, _a) {
        var payload = _a.payload;
        return this.identityService.createRole(payload);
    };
    IdentityState.prototype.updateRole = function (_a, _b) {
        var getState = _a.getState;
        var payload = _b.payload;
        return this.identityService.updateRole(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, getState().selectedRole, payload));
    };
    IdentityState.prototype.getUsers = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.identityService.getUsers(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (users) {
            return patchState({
                users: users,
            });
        }));
    };
    IdentityState.prototype.getUser = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.identityService.getUserById(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedUser) {
            return patchState({
                selectedUser: selectedUser,
            });
        }));
    };
    IdentityState.prototype.deleteUser = function (_, _a) {
        var payload = _a.payload;
        return this.identityService.deleteUser(payload);
    };
    IdentityState.prototype.addUser = function (_, _a) {
        var payload = _a.payload;
        return this.identityService.createUser(payload);
    };
    IdentityState.prototype.updateUser = function (_a, _b) {
        var getState = _a.getState;
        var payload = _b.payload;
        return this.identityService.updateUser(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, getState().selectedUser, payload));
    };
    IdentityState.prototype.getUserRoles = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.identityService.getUserRoles(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('items'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (selectedUserRoles) {
            return patchState({
                selectedUserRoles: selectedUserRoles,
            });
        }));
    };
    IdentityState.ctorParameters = function () { return [
        { type: _services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoles"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "getRoles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "getRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteRole"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetRoleById"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "deleteRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateRole"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "addRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateRole"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "updateRole", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUsers"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "getUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "getUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["DeleteUser"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserById"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "deleteUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["CreateUser"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "addUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUser"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "updateUser", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_identity_actions__WEBPACK_IMPORTED_MODULE_3__["GetUserRoles"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], IdentityState.prototype, "getUserRoles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
    ], IdentityState, "getRoles", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)
    ], IdentityState, "getRolesTotalCount", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Array)
    ], IdentityState, "getUsers", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Number)
    ], IdentityState, "getUsersTotalCount", null);
    IdentityState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'IdentityState',
            defaults: { roles: {}, selectedRole: {}, users: {}, selectedUser: {} },
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_identity_service__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]])
    ], IdentityState);
    return IdentityState;
}());



/***/ }),

/***/ "../../packages/identity/src/public-api.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/identity/src/public-api.ts ***!
  \*******************************************************************************************/
/*! exports provided: IdentityModule, GetRoles, GetRoleById, DeleteRole, CreateRole, UpdateRole, GetUsers, GetUserById, DeleteUser, CreateUser, UpdateUser, GetUserRoles, RolesComponent, UsersComponent, IdentityService, IdentityState, IdentityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/identity.module */ "../../packages/identity/src/lib/identity.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityModule", function() { return _lib_identity_module__WEBPACK_IMPORTED_MODULE_1__["IdentityModule"]; });

/* harmony import */ var _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions/identity.actions */ "../../packages/identity/src/lib/actions/identity.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRoles", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetRoles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetRoleById", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetRoleById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteRole", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateRole", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["CreateRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateRole", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateRole"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUsers", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserById", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateUser", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["CreateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetUserRoles", function() { return _lib_actions_identity_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserRoles"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/identity/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ "../../packages/identity/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["IdentityService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["IdentityStateService"]; });

/* harmony import */ var _lib_states_identity_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/states/identity.state */ "../../packages/identity/src/lib/states/identity.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityState", function() { return _lib_states_identity_state__WEBPACK_IMPORTED_MODULE_5__["IdentityState"]; });

/*
 * Public API Surface of identity
 */








/***/ }),

/***/ "../../packages/permission-management/src/lib/actions/index.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/actions/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: GetPermissions, UpdatePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.actions */ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__["GetPermissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return _permission_management_actions__WEBPACK_IMPORTED_MODULE_1__["UpdatePermissions"]; });





/***/ }),

/***/ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/actions/permission-management.actions.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: GetPermissions, UpdatePermissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return GetPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return UpdatePermissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var GetPermissions = /** @class */ (function () {
    function GetPermissions(payload) {
        this.payload = payload;
    }
    GetPermissions.type = '[PermissionManagement] Get Permissions';
    return GetPermissions;
}());

var UpdatePermissions = /** @class */ (function () {
    function UpdatePermissions(payload) {
        this.payload = payload;
    }
    UpdatePermissions.type = '[PermissionManagement] Update Permissions';
    return UpdatePermissions;
}());



/***/ }),

/***/ "../../packages/permission-management/src/lib/components/index.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/index.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.component */ "../../packages/permission-management/src/lib/components/permission-management.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return _permission_management_component__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementComponent"]; });





/***/ }),

/***/ "../../packages/permission-management/src/lib/components/permission-management.component.ts":
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/components/permission-management.component.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: PermissionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return PermissionManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/permission-management.actions */ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
/* harmony import */ var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../states/permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");







var PermissionManagementComponent = /** @class */ (function () {
    function PermissionManagementComponent(store, renderer) {
        this.store = store;
        this.renderer = renderer;
        this.hideBadges = false;
        this._visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.permissions = [];
        this.selectThisTab = false;
        this.selectAllTab = false;
        this.modalBusy = false;
        this.trackByFn = function (_, item) { return item.name; };
    }
    Object.defineProperty(PermissionManagementComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            var _this = this;
            if (value === this._visible)
                return;
            if (value) {
                this.openModal().subscribe(function () {
                    _this._visible = true;
                    _this.visibleChange.emit(true);
                });
            }
            else {
                this.selectedGroup = null;
                this._visible = false;
                this.visibleChange.emit(false);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PermissionManagementComponent.prototype, "selectedGroupPermissions$", {
        get: function () {
            var _this = this;
            return this.groups$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (groups) {
                return _this.selectedGroup
                    ? groups.find(function (group) { return group.name === _this.selectedGroup.name; }).permissions
                    : [];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (permissions) {
                return permissions.map(function (permission) {
                    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, permission, { margin: findMargin(permissions, permission), isGranted: _this.permissions.find(function (per) { return per.name === permission.name; }).isGranted }));
                });
            }));
        },
        enumerable: true,
        configurable: true
    });
    PermissionManagementComponent.prototype.getChecked = function (name) {
        return (this.permissions.find(function (per) { return per.name === name; }) || { isGranted: false }).isGranted;
    };
    PermissionManagementComponent.prototype.isGrantedByOtherProviderName = function (grantedProviders) {
        var _this = this;
        if (grantedProviders.length) {
            return grantedProviders.findIndex(function (p) { return p.providerName !== _this.providerName; }) > -1;
        }
        return false;
    };
    PermissionManagementComponent.prototype.onClickCheckbox = function (clickedPermission, value) {
        var _this = this;
        if (clickedPermission.isGranted &&
            this.isGrantedByOtherProviderName(clickedPermission.grantedProviders))
            return;
        setTimeout(function () {
            _this.permissions = _this.permissions.map(function (per) {
                if (clickedPermission.name === per.name) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, per, { isGranted: !per.isGranted });
                }
                else if (clickedPermission.name === per.parentName && clickedPermission.isGranted) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, per, { isGranted: false });
                }
                else if (clickedPermission.parentName === per.name && !clickedPermission.isGranted) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, per, { isGranted: true });
                }
                return per;
            });
            _this.setTabCheckboxState();
            _this.setGrantCheckboxState();
        }, 0);
    };
    PermissionManagementComponent.prototype.setTabCheckboxState = function () {
        var _this = this;
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (permissions) {
            var selectedPermissions = permissions.filter(function (per) { return per.isGranted; });
            var element = document.querySelector('#select-all-in-this-tabs');
            if (selectedPermissions.length === permissions.length) {
                element.indeterminate = false;
                _this.selectThisTab = true;
            }
            else if (selectedPermissions.length === 0) {
                element.indeterminate = false;
                _this.selectThisTab = false;
            }
            else {
                element.indeterminate = true;
            }
        });
    };
    PermissionManagementComponent.prototype.setGrantCheckboxState = function () {
        var selectedAllPermissions = this.permissions.filter(function (per) { return per.isGranted; });
        var checkboxElement = document.querySelector('#select-all-in-all-tabs');
        if (selectedAllPermissions.length === this.permissions.length) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = true;
        }
        else if (selectedAllPermissions.length === 0) {
            checkboxElement.indeterminate = false;
            this.selectAllTab = false;
        }
        else {
            checkboxElement.indeterminate = true;
        }
    };
    PermissionManagementComponent.prototype.onClickSelectThisTab = function () {
        var _this = this;
        this.selectedGroupPermissions$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (permissions) {
            permissions.forEach(function (permission) {
                if (permission.isGranted && _this.isGrantedByOtherProviderName(permission.grantedProviders))
                    return;
                var index = _this.permissions.findIndex(function (per) { return per.name === permission.name; });
                _this.permissions = _this.permissions.slice(0, index).concat([
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.permissions[index], { isGranted: !_this.selectThisTab })
                ], _this.permissions.slice(index + 1));
            });
        });
        this.setGrantCheckboxState();
    };
    PermissionManagementComponent.prototype.onClickSelectAll = function () {
        var _this = this;
        this.permissions = this.permissions.map(function (permission) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, permission, { isGranted: _this.isGrantedByOtherProviderName(permission.grantedProviders) || !_this.selectAllTab })); });
        this.selectThisTab = !this.selectAllTab;
    };
    PermissionManagementComponent.prototype.onChangeGroup = function (group) {
        this.selectedGroup = group;
        this.setTabCheckboxState();
    };
    PermissionManagementComponent.prototype.submit = function () {
        var _this = this;
        this.modalBusy = true;
        var unchangedPermissions = getPermissions(this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getPermissionGroups));
        var changedPermissions = this.permissions
            .filter(function (per) {
            return unchangedPermissions.find(function (unchanged) { return unchanged.name === per.name; }).isGranted ===
                per.isGranted
                ? false
                : true;
        })
            .map(function (_a) {
            var name = _a.name, isGranted = _a.isGranted;
            return ({ name: name, isGranted: isGranted });
        });
        if (changedPermissions.length) {
            this.store
                .dispatch(new _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__["UpdatePermissions"]({
                providerKey: this.providerKey,
                providerName: this.providerName,
                permissions: changedPermissions,
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return (_this.modalBusy = false); }))
                .subscribe(function () {
                _this.visible = false;
            });
        }
        else {
            this.modalBusy = false;
            this.visible = false;
        }
    };
    PermissionManagementComponent.prototype.openModal = function () {
        var _this = this;
        if (!this.providerKey || !this.providerName) {
            throw new Error('Provider Key and Provider Name are required.');
        }
        return this.store
            .dispatch(new _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_5__["GetPermissions"]({
            providerKey: this.providerKey,
            providerName: this.providerName,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('PermissionManagementState', 'permissionRes'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (permissionRes) {
            _this.selectedGroup = permissionRes.groups[0];
            _this.permissions = getPermissions(permissionRes.groups);
        }));
    };
    PermissionManagementComponent.prototype.initModal = function () {
        this.setTabCheckboxState();
        this.setGrantCheckboxState();
    };
    PermissionManagementComponent.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PermissionManagementComponent.prototype, "providerName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PermissionManagementComponent.prototype, "providerKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PermissionManagementComponent.prototype, "hideBadges", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], PermissionManagementComponent.prototype, "visible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PermissionManagementComponent.prototype, "visibleChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getPermissionGroups),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PermissionManagementComponent.prototype, "groups$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"].getEntityDisplayName),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], PermissionManagementComponent.prototype, "entityName$", void 0);
    PermissionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'abp-permission-management',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./permission-management.component.html */ "../../node_modules/raw-loader/dist/cjs.js!../../packages/permission-management/src/lib/components/permission-management.component.html")).default,
            exportAs: 'abpPermissionManagement',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PermissionManagementComponent);
    return PermissionManagementComponent;
}());

function findMargin(permissions, permission) {
    var parentPermission = permissions.find(function (per) { return per.name === permission.parentName; });
    if (parentPermission && parentPermission.parentName) {
        var margin = 20;
        return (margin += findMargin(permissions, parentPermission));
    }
    return parentPermission ? 20 : 0;
}
function getPermissions(groups) {
    return groups.reduce(function (acc, val) { return acc.concat(val.permissions); }, []);
}


/***/ }),

/***/ "../../packages/permission-management/src/lib/permission-management.module.ts":
/*!******************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/permission-management.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: PermissionManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return PermissionManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");
/* harmony import */ var _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.theme.shared */ "../../dist/theme-shared/fesm5/abp-ng.theme.shared.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/permission-management.component */ "../../packages/permission-management/src/lib/components/permission-management.component.ts");
/* harmony import */ var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");







var PermissionManagementModule = /** @class */ (function () {
    function PermissionManagementModule() {
    }
    PermissionManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]],
            imports: [_abp_ng_core__WEBPACK_IMPORTED_MODULE_1__["CoreModule"], _abp_ng_theme_shared__WEBPACK_IMPORTED_MODULE_2__["ThemeSharedModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([_states_permission_management_state__WEBPACK_IMPORTED_MODULE_6__["PermissionManagementState"]])],
            exports: [_components_permission_management_component__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementComponent"]],
        })
    ], PermissionManagementModule);
    return PermissionManagementModule;
}());



/***/ }),

/***/ "../../packages/permission-management/src/lib/services/index.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: PermissionManagementService, PermissionManagementStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.service */ "../../packages/permission-management/src/lib/services/permission-management.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return _permission_management_service__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementService"]; });

/* harmony import */ var _permission_management_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission-management-state.service */ "../../packages/permission-management/src/lib/services/permission-management-state.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return _permission_management_state_service__WEBPACK_IMPORTED_MODULE_2__["PermissionManagementStateService"]; });






/***/ }),

/***/ "../../packages/permission-management/src/lib/services/permission-management-state.service.ts":
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/permission-management-state.service.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PermissionManagementStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return PermissionManagementStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../states/permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "../../packages/permission-management/src/lib/actions/index.ts");





var PermissionManagementStateService = /** @class */ (function () {
    function PermissionManagementStateService(store) {
        this.store = store;
    }
    PermissionManagementStateService.prototype.getPermissionGroups = function () {
        return this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementState"].getPermissionGroups);
    };
    PermissionManagementStateService.prototype.getEntityDisplayName = function () {
        return this.store.selectSnapshot(_states_permission_management_state__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementState"].getEntityDisplayName);
    };
    PermissionManagementStateService.prototype.dispatchGetPermissions = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions__WEBPACK_IMPORTED_MODULE_4__["GetPermissions"].bind.apply(_actions__WEBPACK_IMPORTED_MODULE_4__["GetPermissions"], [void 0].concat(args)))());
    };
    PermissionManagementStateService.prototype.dispatchUpdatePermissions = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.store.dispatch(new (_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePermissions"].bind.apply(_actions__WEBPACK_IMPORTED_MODULE_4__["UpdatePermissions"], [void 0].concat(args)))());
    };
    PermissionManagementStateService.ctorParameters = function () { return [
        { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    PermissionManagementStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PermissionManagementStateService);
    return PermissionManagementStateService;
}());



/***/ }),

/***/ "../../packages/permission-management/src/lib/services/permission-management.service.ts":
/*!****************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/services/permission-management.service.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: PermissionManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return PermissionManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @abp/ng.core */ "../../dist/core/fesm5/abp-ng.core.js");



var PermissionManagementService = /** @class */ (function () {
    function PermissionManagementService(rest) {
        this.rest = rest;
    }
    PermissionManagementService.prototype.getPermissions = function (params) {
        var request = {
            method: 'GET',
            url: '/api/abp/permissions',
            params: params,
        };
        return this.rest.request(request);
    };
    PermissionManagementService.prototype.updatePermissions = function (_a) {
        var permissions = _a.permissions, providerKey = _a.providerKey, providerName = _a.providerName;
        var request = {
            method: 'PUT',
            url: '/api/abp/permissions',
            body: { permissions: permissions },
            params: { providerKey: providerKey, providerName: providerName },
        };
        return this.rest.request(request);
    };
    PermissionManagementService.ctorParameters = function () { return [
        { type: _abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"] }
    ]; };
    PermissionManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_abp_ng_core__WEBPACK_IMPORTED_MODULE_2__["RestService"]])
    ], PermissionManagementService);
    return PermissionManagementService;
}());



/***/ }),

/***/ "../../packages/permission-management/src/lib/states/index.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/states/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: PermissionManagementState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _permission_management_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permission-management.state */ "../../packages/permission-management/src/lib/states/permission-management.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return _permission_management_state__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementState"]; });





/***/ }),

/***/ "../../packages/permission-management/src/lib/states/permission-management.state.ts":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/lib/states/permission-management.state.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: PermissionManagementState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return PermissionManagementState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "../../node_modules/@ngxs/store/fesm5/ngxs-store.js");
/* harmony import */ var _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/permission-management.actions */ "../../packages/permission-management/src/lib/actions/permission-management.actions.ts");
/* harmony import */ var _services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/permission-management.service */ "../../packages/permission-management/src/lib/services/permission-management.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");





var PermissionManagementState = /** @class */ (function () {
    function PermissionManagementState(permissionManagementService) {
        this.permissionManagementService = permissionManagementService;
    }
    PermissionManagementState.getPermissionGroups = function (_a) {
        var permissionRes = _a.permissionRes;
        return permissionRes.groups || [];
    };
    PermissionManagementState.getEntityDisplayName = function (_a) {
        var permissionRes = _a.permissionRes;
        return permissionRes.entityDisplayName;
    };
    PermissionManagementState.prototype.permissionManagementGet = function (_a, _b) {
        var patchState = _a.patchState;
        var payload = _b.payload;
        return this.permissionManagementService.getPermissions(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (permissionResponse) {
            return patchState({
                permissionRes: permissionResponse,
            });
        }));
    };
    PermissionManagementState.prototype.permissionManagementUpdate = function (_, _a) {
        var payload = _a.payload;
        return this.permissionManagementService.updatePermissions(payload);
    };
    PermissionManagementState.ctorParameters = function () { return [
        { type: _services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PermissionManagementState.prototype, "permissionManagementGet", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _actions_permission_management_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PermissionManagementState.prototype, "permissionManagementUpdate", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PermissionManagementState, "getPermissionGroups", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", String)
    ], PermissionManagementState, "getEntityDisplayName", null);
    PermissionManagementState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
            name: 'PermissionManagementState',
            defaults: { permissionRes: {} },
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_permission_management_service__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementService"]])
    ], PermissionManagementState);
    return PermissionManagementState;
}());



/***/ }),

/***/ "../../packages/permission-management/src/public-api.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/packages/permission-management/src/public-api.ts ***!
  \********************************************************************************************************/
/*! exports provided: PermissionManagementModule, GetPermissions, UpdatePermissions, PermissionManagementComponent, PermissionManagementService, PermissionManagementState, PermissionManagementStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/permission-management.module */ "../../packages/permission-management/src/lib/permission-management.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementModule", function() { return _lib_permission_management_module__WEBPACK_IMPORTED_MODULE_1__["PermissionManagementModule"]; });

/* harmony import */ var _lib_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/actions */ "../../packages/permission-management/src/lib/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPermissions", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["GetPermissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePermissions", function() { return _lib_actions__WEBPACK_IMPORTED_MODULE_2__["UpdatePermissions"]; });

/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/components */ "../../packages/permission-management/src/lib/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementComponent", function() { return _lib_components__WEBPACK_IMPORTED_MODULE_3__["PermissionManagementComponent"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services */ "../../packages/permission-management/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementStateService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_4__["PermissionManagementStateService"]; });

/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/states */ "../../packages/permission-management/src/lib/states/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionManagementState", function() { return _lib_states__WEBPACK_IMPORTED_MODULE_5__["PermissionManagementState"]; });

/*
 * Public API Surface of permission-management
 */








/***/ }),

/***/ "./src/app/lazy-libs/identity-wrapper.module.ts":
/*!******************************************************!*\
  !*** ./src/app/lazy-libs/identity-wrapper.module.ts ***!
  \******************************************************/
/*! exports provided: IdentityWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityWrapperModule", function() { return IdentityWrapperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fs_identity_ng_alain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fs/identity/ng-alain */ "../../libs/identity/ng-alain/src/index.ts");



var IdentityWrapperModule = /** @class */ (function () {
    function IdentityWrapperModule() {
    }
    IdentityWrapperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_fs_identity_ng_alain__WEBPACK_IMPORTED_MODULE_2__["IdentityNgAlainModule"]],
        })
    ], IdentityWrapperModule);
    return IdentityWrapperModule;
}());



/***/ })

}]);
//# sourceMappingURL=lazy-libs-identity-wrapper-module.js.map