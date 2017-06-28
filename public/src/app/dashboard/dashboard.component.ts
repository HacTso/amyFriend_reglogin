import { Component, OnInit } from '@angular/core';
import { FriendService } from './../friend.service';
import { Router } from '@angular/router'; //starting routing
import { Friend } from './../friend';
import { User } from './../user';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name = this._cookieService.get('name');
  userid = this._cookieService.get('userid');

  constructor(private _friendService: FriendService,
              private _cookieService: CookieService,
              private _router: Router) {
              
  }
  friends = null;
  errors = null;

  ngOnInit() {
    this.getFriends(); // invoke function!
  }
  getFriends(){
    this._friendService.getFriends()
    .then((data)=>{
      console.log("2. Got data by doing getFriends", data);
      if (data.message == "Success in index"){
          this.friends = data.friends;
          console.log("after put data.friends into this.friends,", this.friends);
      }
      else {
        this.errors = "Problem here ing fetching friends from the db";
      }
    })
    .catch((err)=>{
      console.log("Got an error by doing getFriends", err);
    })
  }

  delete(id){
    this._friendService.deleteFriend(id)
    .then( (data) => {
      console.log("Data after deleting", data);
      if (data.message == "Success in deleting") {
        this.getFriends();
      }    
    })
    .catch( (err) => {
      console.log("Error from deleting", err);      
    })
  }

  logout(){
    this._cookieService.remove('userid');
    this._cookieService.remove('username');
    this._router.navigate(['']);
  }

}




