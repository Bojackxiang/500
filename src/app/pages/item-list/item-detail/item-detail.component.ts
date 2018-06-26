import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { LoadDetailsService } from '../../../service/load-details.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor( private activateRouter: ActivatedRoute, private getItemService:LoadDetailsService ) { }

  id: number;
  item = {};

  ngOnInit() {
    this.activateRouter.params
      .subscribe( // 动态获取url里面的id信息
        (params: Params) =>{
          this.id = Number(params['id'])
          this.item = this.getItemService.getItemDetail(this.id);
        }
      );
  }

}
