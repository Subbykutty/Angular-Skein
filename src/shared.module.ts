import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http'; 
import { DataService } from "./app/data.service";

@NgModule({
    imports : [HttpClientModule],
    providers : [DataService]
})
export class SharedModule { }