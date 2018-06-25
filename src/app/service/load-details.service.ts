import { Injectable } from '@angular/core';
import { Database } from '../database/database';

@Injectable()
export class LoadDetailsService {

  constructor( private dataBase: Database) { }


  getItemDetail(id: number){
    console.log(this.dataBase.flowerData);
    return {name: "test"}
    
  }
}
