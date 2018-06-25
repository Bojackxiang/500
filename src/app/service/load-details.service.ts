import { Injectable } from '@angular/core';
import { Database } from '../database/database';

@Injectable()
export class LoadDetailsService {

  constructor( private dataBase: Database) { }


  getItemDetail(id: number){
    for(let item of this.dataBase.flowerData){
      if (item.id == id){
        return item
      }
    }
  }
}
