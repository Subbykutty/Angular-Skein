import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root',
})
export class DataService {

  url = 'http://demo.emeetify.com:8080/daytodaytask/users/register';
  link ='http://demo.emeetify.com:5052/appraisel/users/adminLogin';

  getapi = 'http://demo.emeetify.com:8080/daytodaytask/';
  projectApi = 'http://demo.emeetify.com:8080/daytodaytask/projects';



  serverURL2 ='http://demo.emeetify.com:8080/daytodaytask/admin/';


   

  constructor(private http: HttpClient){  }
  


  getInPromise(path: string) {
    // let options: any = { headers: this.appendHeaders() }
    return new Promise(async (resolve, reject) => {
      await this.http.get(this.serverURL2 + path).subscribe((data: any) => {
        resolve(data);
      },
        (error:any) => {
          reject(error);
        });
    });

  }
  // appendHeaders() {
  //   // this.dataService.getData("token");
  //   let headers: HttpHeaders;
  //   console.log("hitting222",)
  //   headers = new HttpHeaders(
  //     {
  //       'X-Api-Key': "M2ZlMWM0Y2YtMjJlMC00YTRiLWJjZGYtM2VjMGNhNDJiMzNi",
  //     }
  //   )
  //   return headers;
  // }
  





  getApi(){
    return this.http.get(this.projectApi)
  }

  dataView(logindata: any) {
    return this.http.post(this.link, logindata);
  }

  saveUser(data: any) {
    return this.http.post(this.url, data);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object)
      .values(formGroup.controls)
      .forEach((control: FormGroup<any>) => {
        control.markAsTouched();

        if (control.controls) {
          this.markFormGroupTouched(control);
        }
      });
  }
}
