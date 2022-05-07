import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'members-front';

  members = [
    {name: 'Member 01' , id:1, surname: "Ciano", photo:'http://www.minhaapp.com/photo1'},
    {name: 'Member 02' , id:2, surname: "Ciano", photo:'http://www.minhaapp.com/photo1'},
    {name: 'Member 03' , id:3, surname: "Ciano", photo:'http://www.minhaapp.com/photo1'},
  ];

  constructor(private api:ApiService){
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => 
        this.members = data
    );
  };
}
