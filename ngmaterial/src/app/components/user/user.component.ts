import { Component, OnInit, ViewChild } from '@angular/core';
import { AppEventManagerService } from 'src/app/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userName: string;
  constructor(private eventManager: AppEventManagerService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.eventManager.broadcast({
      name: "Add User",
      userName: this.userName
    })
  }

}
