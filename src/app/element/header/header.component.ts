import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('show' , style({ opacity: 1 })),
      transition('show => hide', animate('200ms')),
      state('hide', style({ opacity: 0 })),
      transition('hide => show', animate('200ms')),
    ])
  ],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alreadySignIn? = "false"

  showForm = 'hide';

  onSignInButtonClick(){
    if(this.showForm == 'hide'){
      this.showForm = 'show';
    }else{
      this.showForm = 'hide';
    } 
  }

  signInRequest(){
    alert("right?")
    // TODO: ADD REQUEST TO DATA BASE
  }
}
