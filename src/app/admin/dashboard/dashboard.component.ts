import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  source: any;
  share: any;
  userDatas: any;
  field: any;
  Details: any;

  ngOnInit(): void {
    this.source = localStorage.getItem('Details');
    // console.log("this.source",this.source)
    this.userDatas = JSON.parse(this.source);
    console.log('this.Data', this.userDatas);
    // alert(this.userDatas);
  }
}
