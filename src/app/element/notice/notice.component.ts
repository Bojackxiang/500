import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.rePosition()

  }

  public display = 'block';

  onClick(){
    alert("clicked");
    this.display = 'none';
  }

  rePosition(){
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = ")
    const windowHeight = window.document.documentElement.clientHeight;
    const windowWidth = window.document.documentElement.clientWidth;
    const noticeBox = <HTMLElement>document.querySelector('.notice-box');
    const width: number = noticeBox.offsetWidth;
    const height: number = noticeBox.offsetHeight;
    // recaculate the height
    const newTop: number = (windowHeight - height) / 2;
    const newLeft: number = (windowWidth - width) / 2;
    console.log(windowHeight, windowWidth, width, height)

    noticeBox.style.left = newLeft + 'px';
    noticeBox.style.top = newTop + 'px';
  }

}
