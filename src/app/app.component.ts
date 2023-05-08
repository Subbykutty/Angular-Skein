import { Component } from '@angular/core';
import { DataService} from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened = false;
  title = 'proj-new';
  constructor(private dataService:DataService ){}


  toggleSidebar(){
    this.opened = !this.opened;
  }
  
}
