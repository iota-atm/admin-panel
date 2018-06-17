import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-deal',
  templateUrl: './view-deal.component.html',
  styleUrls: ['./view-deal.component.css']
})
export class ViewDealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  truncate(str){
    return str.substring(0,20);
  }
}
