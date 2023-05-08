import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  userData: any;
  // response: any;/

  // userProfile:string[] =[];
  userProfile : any[] = [];
  singleData:any;
  

  constructor (private http: HttpClient,private service : DataService){}

  ngOnInit(): void {

    // for(let d of this.userProfile){
    //   if(d.full_name == 'subash'){break;}
    //   console.log('every',d)  
    // }

    // this.userProfile.every(element =>{
    //   console.log('every-->',element)
    // })
    // this.userProfile.forEach(element =>{
    //   console.log(element)
    // })

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
    });
  }
}
