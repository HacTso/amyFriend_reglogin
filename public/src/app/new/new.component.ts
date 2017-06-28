import { Component, OnInit } from '@angular/core';
import { Friend } from './../friend';
import { FriendService } from './../friend.service';//talk to db!
import { Router } from '@angular/router'; //starting routing

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  
  errors = null;
  newFriend = new Friend(); //create a newfriend before constructor!

  constructor(private _friendService: FriendService,
              private _router: Router) { }

  ngOnInit() {
  }
  createFriend(){
    console.log("3. Successful to invoke func createFriend()!", this.newFriend);
    this._friendService.createFriend(this.newFriend)
    .then((data)=>{
      console.log("3.1. Succesful creating a friend,", data);
      if (data.message == "Success in creating") {
        this._router.navigate(['/dashboard'])
        this.errors = null;
      }
      else {
        this.errors = "Friend can't be created, please try again!";
      }
      // this.newfriend = new Friend();//comment out this after routing as we don't need the form to show in console anymore
    })
    .catch((err)=>{
      console.log("3.2. Something wrong in creation!", err);
    })
  }
}
