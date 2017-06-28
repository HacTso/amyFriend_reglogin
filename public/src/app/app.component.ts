import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gimmick = 'Kris is here!';

  constructor(){

    console.log("1. You are successful to pass through app.component.ts (app-root).")
  }
  
}
