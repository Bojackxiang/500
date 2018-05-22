import { Component, OnInit } from '@angular/core';
import { Database } from '../../database/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataBase: Database) { }

  ngOnInit() {
  }

  showRowInfo = [
    this.dataBase.flowerData[0],
    this.dataBase.flowerData[0],
    this.dataBase.flowerData[0],
  ];

}
