import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import {DealsService} from '../services/deals.service';

@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.css']
})
export class ViewDealComponent implements OnInit {

  dealsObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private dealsService: DealsService) {
    this.dealsObservable = dealsService.getDeals('deals');
  }

  ngOnInit() {
  }

  truncate(str) {
    return str.substring(0, 20);
  }
}
