import { Component } from '@angular/core';
import { UsersDataService } from './users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APIs';

  constructor(private user:UsersDataService){
    this.user.getData().subscribe(data=>{
      console.warn(data);
    })
  }
}
