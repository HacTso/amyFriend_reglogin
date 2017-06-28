import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';// when involve passing SPECIFIC id through routes
import { FriendService } from './../friend.service';//talk to db!

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {

  sub = null;
  showFriendId = null;
  showFriend = null;
  errors = null;

  constructor(private _route: ActivatedRoute, 
              private _friendService: FriendService) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe( (param) =>{
      console.log("param:", param);
      this.showFriendId = param.id;
    })
    this.getOneFriend(); // invoke getOneFriend() to get data or err
  }

  getOneFriend(){
    console.log("id for showFriend:", this.showFriendId);
    this._friendService.getOneFriend(this.showFriendId)
    .then( (data) => {   //getting data friend from service and need to declare and use it
      console.log("Data SHOW one friend", data);
      if (data.message == "Success in showing"){
        this.showFriend = data.friend; // put data friend (from service) into showFriend 
      }
      else {
        this.errors = data.error.message; // data passed from service and see the console if errors exits how to query the error message
      }
    })
    .catch( (err) => {
      console.log("Error when getting SHOW friend", err);      
    })
  }

  ngOnDestroy() {
    console.log("Show Component unsubscription");
    this.sub.unsubscribe();
  }

}
