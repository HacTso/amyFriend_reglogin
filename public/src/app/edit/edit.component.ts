import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // Router: for routing; ActivatedRoute: for routing WITH parameter
import { FriendService } from './../friend.service';//talk to db and update friend!

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  sub = null;
  editFriendId = null;
  editFriend = null;
  errors = null;
// Router: for routing; ActivatedRoute: for routing WITH parameter
  constructor(private _router: ActivatedRoute, // private _router, private _navigator,  private _friendService could be named any;
              private _navigator: Router,
              private _friendService: FriendService) { }

  ngOnInit() {
     this.sub = this._router.params.subscribe( (param) =>{
      this.editFriendId = param.id;
    })
    this.getOneFriend();
  }

  getOneFriend(){
    console.log("id for editFriend:", this.editFriendId);
    this._friendService.getOneFriend(this.editFriendId)
    .then( (data) => {   //getting data friend from service and need to declare and use it
      console.log("Data EDIT one friend", data);
      if (data.message == "Success in showing"){ //when invoke getOneFriend, then go to service and _http.get('/friends/'+ id), then go to server/config/routes.js: app.get('/friends/:id'...) and invoke friends.show(req, res); then go to server/controller/friends.js to invoke show: function
        this.editFriend = data.friend; // put data friend (from service) into showFriend 
        this.errors = null;
      }
      else {
        this.errors = data.error.message; // data passed from service and see the console if errors exits how to query the error message d
      }
    })
    .catch( (err) => {
      console.log("Error when getting SHOW friend", err);      
    })
  }

  updateFriend() {
    console.log("Updating our friend", this.editFriend);
    this._friendService.updateFriend(this.editFriendId, this.editFriend)
    .then( (data) => {
      console.log("Data back after updating", data);
      this._navigator.navigate(['/dashboard'])
    })
    .catch( (err) => {
      console.log("Error while updating", err);
    })
  }

  ngOnDestroy() {
    console.log("Edit Component unsubscription");
    this.sub.unsubscribe();
  }

}
