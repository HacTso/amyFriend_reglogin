import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class FriendService {

  constructor(private _http: Http, 
              private _cookieService: CookieService) { }

  getFriends(){
    return this._http.get('/friends')
    .map( (data) => data.json() )
    .toPromise();
  }

  createFriend(friend){
    console.log("This is the friend:", friend);
    return this._http.post('/friends', friend)//where we posting  //data
    .map( (data) => data.json() )
    .toPromise();
  }

  getOneFriend(id){
    // console.log("id in service:", id);
    return this._http.get('/friends/'+ id) //server/config/routes.js: app.get('/friends/:id')
    .map( (data) => data.json() )   // getting friend from server side and passing it to client side
    .toPromise();
  }

  updateFriend(id, friend){   // server/config/routes.js  app.put(...friend.update) ..need 
    return this._http.put('/friends/'+ id, friend)
    .map( (data) => data.json() )
    .toPromise();
  }

  deleteFriend(id){
    return this._http.delete('/friends/'+ id)
    .map( (data) => data.json() )
    .toPromise();
  }

  accessName(name) {
    return this._http.post('/users', name)
    .map( (data) => data.json() )
    .toPromise();
  }


}

