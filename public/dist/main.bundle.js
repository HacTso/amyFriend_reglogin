webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".purpleBorder {\n    border: 5px solid purple;\n    border-radius: 10px;\n    padding: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<head>\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/ng2-bootstrap/x.x.x/ng2-bootstrap.min.js\"></script>\n   <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\">\n</head>\n<div class=\"container purpleBorder\">\n  <h1>Welcome to {{ gimmick }}!!</h1>\n  <h1>Full Mean Friends!</h1>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.gimmick = 'Kris is here!';
        console.log("1. You are successful to pass through app.component.ts (app-root).");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__friend_service__ = __webpack_require__("../../../../../src/app/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__edit_edit_component__["a" /* EditComponent */],
            __WEBPACK_IMPORTED_MODULE_8__new_new_component__["a" /* NewComponent */],
            __WEBPACK_IMPORTED_MODULE_9__show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__friend_service__["a" /* FriendService */], __WEBPACK_IMPORTED_MODULE_12_angular2_cookie_services_cookies_service__["CookieService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_show_component__ = __webpack_require__("../../../../../src/app/show/show.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_new_component__ = __webpack_require__("../../../../../src/app/new/new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });






var app_routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_4__new_new_component__["a" /* NewComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_edit_component__["a" /* EditComponent */] },
    { path: 'show/:id', component: __WEBPACK_IMPORTED_MODULE_3__show_show_component__["a" /* ShowComponent */] },
    { path: '**', redirectTo: '' },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(app_routes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blueBorder {\n    border: 5px solid blue;\n    padding: 15px;\n    border-radius: 10px;\n}\n\n#friendsmenu {\n    height: 400px;\n    width: 600px;\n    overflow: scroll;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blueBorder\">\n  <h3>Dashboard</h3>\n  <h2>Hello {{ name }} {{ userid }}</h2>\n<button (click)='logout()' class=\"btn btn-primary\">Logout</button>\n  <a [routerLink]=\"['/new']\" class=\"btn btn-primary\">Create a New friend!</a>\n  <div *ngIf = 'errors'>\n    <p>{{ errors }}</p>\n  </div>\n  <div id=\"friendsmenu\">\n    <div *ngIf = 'friends'>\n      <table class=\"table table-striped\">\n        <thead>\n          <th>First name</th>\n          <th>Last name</th>\n          <th>Birthday</th>\n          <th>Actions</th>\n        </thead>\n        <tbody>\n          <tr *ngFor = 'let f of friends'>\n            <td>{{ f.first_name }}</td>\n            <td>{{ f.last_name }}</td>\n            <td>{{ f.birthday | date: \"longDate\" }}</td>\n            <td>\n              <a [routerLink]=\"['/show', f._id]\">SHOW</a>\n              <a [routerLink]=\"['/edit', f._id]\">EDIT</a>\n              <a (click) ='delete(f._id)'>DELETE</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                \n  </div>\n</div>\n\n <!--{{ friends.friend }}-->\n  <!--{{ errors }}-->"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__friend_service__ = __webpack_require__("../../../../../src/app/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //starting routing

var DashboardComponent = (function () {
    function DashboardComponent(_friendService, _cookieService, _router) {
        this._friendService = _friendService;
        this._cookieService = _cookieService;
        this._router = _router;
        this.name = this._cookieService.get('name');
        this.userid = this._cookieService.get('userid');
        this.friends = null;
        this.errors = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getFriends(); // invoke function!
    };
    DashboardComponent.prototype.getFriends = function () {
        var _this = this;
        this._friendService.getFriends()
            .then(function (data) {
            console.log("2. Got data by doing getFriends", data);
            if (data.message == "Success in index") {
                _this.friends = data.friends;
                console.log("after put data.friends into this.friends,", _this.friends);
            }
            else {
                _this.errors = "Problem here ing fetching friends from the db";
            }
        })
            .catch(function (err) {
            console.log("Got an error by doing getFriends", err);
        });
    };
    DashboardComponent.prototype.delete = function (id) {
        var _this = this;
        this._friendService.deleteFriend(id)
            .then(function (data) {
            console.log("Data after deleting", data);
            if (data.message == "Success in deleting") {
                _this.getFriends();
            }
        })
            .catch(function (err) {
            console.log("Error from deleting", err);
        });
    };
    DashboardComponent.prototype.logout = function () {
        this._cookieService.remove('userid');
        this._cookieService.remove('username');
        this._router.navigate(['']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__friend_service__["a" /* FriendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orangeBorder {\n    border: 5px solid orange;\n    padding: 15px;\n    border-radius: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"orangeBorder\">\n  <h3>Edit Component</h3>\n  <a [routerLink]=\"['/dashboard']\" class=\"btn btn-primary\">Dashboard</a>    <a [routerLink]=\"['/new']\" class=\"btn btn-primary\">Create a New friend!</a>\n  <div *ngIf=\"errors\">{{ errors }}</div>\n  <div *ngIf=\"editFriend\">\n    <form (submit) = 'updateFriend()'>\n      <div class=\"form-group\">\n        <label for=\"first_name\">First name:</label>\n        <input type=\"text\" name=\"first_name\" [(ngModel)] = 'editFriend.first_name' class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"last_name\">Last name:</label>\n        <input type=\"text\" name=\"last_name\" [(ngModel)] = 'editFriend.last_name' class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"birthday\"> Birthday:</label>\n        <input type=\"date\" name=\"birthday\" [ngModel] = \"editFriend.birthday | date: 'yyyy-MM-dd'\" (ngModelChange) = 'editFriend.birthday = $event' class=\"form-control\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\">UPDATE</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_service__ = __webpack_require__("../../../../../src/app/friend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Router: for routing; ActivatedRoute: for routing WITH parameter
 //talk to db and update friend!
var EditComponent = (function () {
    // Router: for routing; ActivatedRoute: for routing WITH parameter
    function EditComponent(_router, // private _router, private _navigator,  private _friendService could be named any;
        _navigator, _friendService) {
        this._router = _router;
        this._navigator = _navigator;
        this._friendService = _friendService;
        this.sub = null;
        this.editFriendId = null;
        this.editFriend = null;
        this.errors = null;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._router.params.subscribe(function (param) {
            _this.editFriendId = param.id;
        });
        this.getOneFriend();
    };
    EditComponent.prototype.getOneFriend = function () {
        var _this = this;
        console.log("id for editFriend:", this.editFriendId);
        this._friendService.getOneFriend(this.editFriendId)
            .then(function (data) {
            console.log("Data EDIT one friend", data);
            if (data.message == "Success in showing") {
                _this.editFriend = data.friend; // put data friend (from service) into showFriend 
                _this.errors = null;
            }
            else {
                _this.errors = data.error.message; // data passed from service and see the console if errors exits how to query the error message d
            }
        })
            .catch(function (err) {
            console.log("Error when getting SHOW friend", err);
        });
    };
    EditComponent.prototype.updateFriend = function () {
        var _this = this;
        console.log("Updating our friend", this.editFriend);
        this._friendService.updateFriend(this.editFriendId, this.editFriend)
            .then(function (data) {
            console.log("Data back after updating", data);
            _this._navigator.navigate(['/dashboard']);
        })
            .catch(function (err) {
            console.log("Error while updating", err);
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        console.log("Edit Component unsubscription");
        this.sub.unsubscribe();
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/friend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendService = (function () {
    function FriendService(_http, _cookieService) {
        this._http = _http;
        this._cookieService = _cookieService;
    }
    FriendService.prototype.getFriends = function () {
        return this._http.get('/friends')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    FriendService.prototype.createFriend = function (friend) {
        console.log("This is the friend:", friend);
        return this._http.post('/friends', friend) //where we posting  //data
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    FriendService.prototype.getOneFriend = function (id) {
        // console.log("id in service:", id);
        return this._http.get('/friends/' + id) //server/config/routes.js: app.get('/friends/:id')
            .map(function (data) { return data.json(); }) // getting friend from server side and passing it to client side
            .toPromise();
    };
    FriendService.prototype.updateFriend = function (id, friend) {
        return this._http.put('/friends/' + id, friend)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    FriendService.prototype.deleteFriend = function (id) {
        return this._http.delete('/friends/' + id)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    FriendService.prototype.accessName = function (name) {
        return this._http.post('/users', name)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return FriendService;
}());
FriendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object])
], FriendService);

var _a, _b;
//# sourceMappingURL=friend.service.js.map

/***/ }),

/***/ "../../../../../src/app/friend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friend; });
var Friend = (function () {
    function Friend(first_name, last_name, birthday) {
        if (first_name === void 0) { first_name = ""; }
        if (last_name === void 0) { last_name = ""; }
        if (birthday === void 0) { birthday = null; }
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday = birthday;
    }
    return Friend;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brownBorder {\n  border: 5px solid brown;\n  padding: 15px;\n  border-radius: 10px;\n}\n\n.red{\n  color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"brownBorder\">\n  <h2>Login</h2>\n  <form #regForm='ngForm' (submit)='onSubmit(first_name, regForm)'>\n    <input type=\"text\" name=\"name\" placeholder=\"First name\"\n    [(ngModel)] = 'first_name'\n    #name = 'ngModel'\n    required\n    minlength='2'>\n    <input [disabled]='!regForm.valid' type=\"submit\">\n  </form>\n  <div *ngIf='name.errors && (name.touched || regForm.submitted )' class='red'>\n    <div *ngIf='name.errors.required'>Name is required</div>\n    <div *ngIf='name.errors.minlength'>Name must be at least 2 characters</div>\n  </div>\n  <div class='red'>{{ err }}</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_service__ = __webpack_require__("../../../../../src/app/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    // err = '';
    function LoginComponent(_http, _cookieService, _router) {
        this._http = _http;
        this._cookieService = _cookieService;
        this._router = _router;
        this.first_name = '';
        if (this._cookieService.get('userid')) {
            this._router.navigate(['dashboard']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        // if(this._cookieService.get('username')) {
        //   this._router.navigate(['dashboard']);
        // }
    };
    LoginComponent.prototype.onSubmit = function (name, form) {
        var _this = this;
        this._http.accessName({ name: name })
            .then(function (data) {
            _this._cookieService.put('userid', data._id);
            _this._cookieService.put('name', data.name);
            _this._router.navigate(['dashboard']);
        })
            .catch(function (err) {
            console.log("Errors when login", err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_services_cookies_service__["CookieService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/new/new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".greenBorder {\n    border: 5px solid green;\n    padding: 15px;\n    border-radius: 10px;\n}\n\n.red {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"greenBorder\">\n  <h3>New Component</h3>\n  <a [routerLink]=\"['/dashboard']\" class=\"btn btn-primary\">Dashboard</a>\n  <div  *ngIf=\"errors\" class=\"red\">{{ errors }}</div>\n  <form (submit) = 'createFriend()'>\n    <div class=\"form-group\">\n      <label for=\"first_name\">First name:</label>\n      <input type=\"text\" name=\"first_name\" [(ngModel)] = 'newFriend.first_name' class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last_name\">Last name:</label>\n      <input type=\"text\" name=\"last_name\" [(ngModel)] = 'newFriend.last_name' class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"birthday\"> Birthday:</label>\n      <input type=\"date\" name=\"birthday\" [(ngModel)] = 'newFriend.birthday' class=\"form-control\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Create a FRIEND!</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new/new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__friend__ = __webpack_require__("../../../../../src/app/friend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_service__ = __webpack_require__("../../../../../src/app/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //talk to db!
 //starting routing
var NewComponent = (function () {
    function NewComponent(_friendService, _router) {
        this._friendService = _friendService;
        this._router = _router;
        this.errors = null;
        this.newFriend = new __WEBPACK_IMPORTED_MODULE_1__friend__["a" /* Friend */](); //create a newfriend before constructor!
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.createFriend = function () {
        var _this = this;
        console.log("3. Successful to invoke func createFriend()!", this.newFriend);
        this._friendService.createFriend(this.newFriend)
            .then(function (data) {
            console.log("3.1. Succesful creating a friend,", data);
            if (data.message == "Success in creating") {
                _this._router.navigate(['/dashboard']);
                _this.errors = null;
            }
            else {
                _this.errors = "Friend can't be created, please try again!";
            }
            // this.newfriend = new Friend();//comment out this after routing as we don't need the form to show in console anymore
        })
            .catch(function (err) {
            console.log("3.2. Something wrong in creation!", err);
        });
    };
    return NewComponent;
}());
NewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new',
        template: __webpack_require__("../../../../../src/app/new/new.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new/new.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NewComponent);

var _a, _b;
//# sourceMappingURL=new.component.js.map

/***/ }),

/***/ "../../../../../src/app/show/show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".aquaBorder {\n    border: 5px solid aqua;\n    padding: 10px;\n    border-radius: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"aquaBorder\">\n  <h3>Show Component</h3>\n  <a [routerLink]=\"['/dashboard']\" class=\"btn btn-primary\">Dashboard</a> | <a [routerLink]=\"['/edit', showFriendId]\" class=\"btn btn-primary\">EDIT</a><br>\n  <div *ngIf = 'errors'>\n    <p>{{ errors }}</p>\n  </div>\n  <div *ngIf = 'showFriend'>\n    <!--for first name-->\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <p>First name:</p>\n      </div>\n      <div class=\"col-md-10\">\n        <p>{{ showFriend.first_name }}</p>\n      </div>\n    </div>\n      <!--for last name-->\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <p>Last name:</p>\n      </div>\n      <div class=\"col-md-10\">\n        <p>{{ showFriend.last_name }}</p>\n      </div>\n    </div>\n      <!--for birthday-->\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <p>Birthday:</p>\n      </div>\n      <div class=\"col-md-10\">\n        <p>{{ showFriend.birthday | date: 'longDate'}}</p>\n      </div>\n    </div>\n      <!--for friendship-->\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <p>Friend since:</p>\n      </div>\n      <div class=\"col-md-10\">\n        <p>{{ showFriend.createdAt | date: 'longDate'}}</p>\n      </div>\n    </div>\n  </div>\n  <a [routerLink]=\"['/new']\" class=\"btn btn-primary\">Create a New friend</a>  AFTER reviewing someone!\n</div>\n\n\n  <!--{{ showFriendId }} for detection only-->\n"

/***/ }),

/***/ "../../../../../src/app/show/show.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_service__ = __webpack_require__("../../../../../src/app/friend.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // when involve passing SPECIFIC id through routes
 //talk to db!
var ShowComponent = (function () {
    function ShowComponent(_route, _friendService) {
        this._route = _route;
        this._friendService = _friendService;
        this.sub = null;
        this.showFriendId = null;
        this.showFriend = null;
        this.errors = null;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (param) {
            console.log("param:", param);
            _this.showFriendId = param.id;
        });
        this.getOneFriend(); // invoke getOneFriend() to get data or err
    };
    ShowComponent.prototype.getOneFriend = function () {
        var _this = this;
        console.log("id for showFriend:", this.showFriendId);
        this._friendService.getOneFriend(this.showFriendId)
            .then(function (data) {
            console.log("Data SHOW one friend", data);
            if (data.message == "Success in showing") {
                _this.showFriend = data.friend; // put data friend (from service) into showFriend 
            }
            else {
                _this.errors = data.error.message; // data passed from service and see the console if errors exits how to query the error message
            }
        })
            .catch(function (err) {
            console.log("Error when getting SHOW friend", err);
        });
    };
    ShowComponent.prototype.ngOnDestroy = function () {
        console.log("Show Component unsubscription");
        this.sub.unsubscribe();
    };
    return ShowComponent;
}());
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-show',
        template: __webpack_require__("../../../../../src/app/show/show.component.html"),
        styles: [__webpack_require__("../../../../../src/app/show/show.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendService */]) === "function" && _b || Object])
], ShowComponent);

var _a, _b;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map