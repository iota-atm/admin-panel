import { Component, OnInit } from '@angular/core';
import {DealsService} from '../services/deals.service';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.css']
})
export class AddDealComponent implements OnInit {

  description: String;
  title: String;
  imageUrl: String;
  place: String;
  constructor(private dealsService: DealsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dealsService.addDeals(this.description, this.imageUrl, this.place, this.title);
  }
}
