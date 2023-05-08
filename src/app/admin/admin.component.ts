import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';
// import { RouteComponent } from 'angular-routing';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  cleared: any;
  userDatas: any;
  router: any;

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }
  logout() {
    localStorage.removeItem('dataa');
    this.router.navigate(['/auth/login']);
  }

  constructor(private service: DataService) {}
}
