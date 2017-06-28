import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FriendService } from './../friend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  first_name = '';
  // err = '';
  constructor(
    private _http: FriendService,
    private _cookieService: CookieService,
    private _router: Router,
  ) {
    if (this._cookieService.get('userid')){
      this._router.navigate(['dashboard']);
    }
  }
  ngOnInit() {
    // if(this._cookieService.get('username')) {
    //   this._router.navigate(['dashboard']);
    // }
  }

  onSubmit(name, form){
    this._http.accessName({name: name})
    .then( (data) => {
        this._cookieService.put('userid', data._id);
        this._cookieService.put('name', data.name);
        this._router.navigate(['dashboard']);
    })
    .catch( (err) => {
      console.log("Errors when login", err);
    })
  }

}
