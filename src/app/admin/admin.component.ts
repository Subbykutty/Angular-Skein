import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as $ from 'jquery';
import { RouteComponent } from 'angular-routing';
import { Router } from '@angular/router';

// import { RouteComponent } from 'angular-routing';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  cleared: any;
  userDatas: any;
  
  

  constructor(private service: DataService,private router : Router) {}

  ngOnInit(): void {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }
  logout(){
   let logout = localStorage.removeItem('Details');
   console.log(logout)
    this.router.navigate(['/auth/login']);
  }
}
