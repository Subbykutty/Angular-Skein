import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit{

  userData: any;
  // response: any;/

  // userProfile:string[] =[];
  userProfile : any[] = [];
  singleData:any;
  

  constructor (private http: HttpClient,private service : DataService){}

  ngOnInit(): void {

    // var singleData = this.userProfile
    // console.log('Iteration-->',singleData)

   this.getAllProjectDetails();

  }

  getAllProjectDetails()  {

    //  let options: any = { headers: this.http.appendHeaders() };

    this.service.getInPromise('getAllUser').then((response: any) => {
      console.log('response-->',response)
      // var userProfile = response.data;
      // console.warn('response-->',userProfile)

      this.userProfile = response.data;
      // console.log('this.userProfile',this.userProfile)

      // this.userProfile.forEach(element=>{
      //   // console.log('Filtering-->',element.full_name)
      //   this.singleData = element;
      //   console.log('this.singleData',this.singleData)
       
      // })
    
      // console.log('users-->',this.userProfile);


if (typeof this.userProfile === undefined)
{
    alert('undefined');
}
    });
  }
}



