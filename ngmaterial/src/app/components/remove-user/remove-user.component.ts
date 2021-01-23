import { Component, Input, OnInit } from '@angular/core';
import { AppEventManagerService } from 'src/app/services';

@Component({
  selector: 'app-remove-user',
  templateUrl: './remove-user.component.html',
  styleUrls: ['./remove-user.component.scss']
})
export class RemoveUserComponent implements OnInit {
  @Input("userid") userid: number;
  constructor(private eventManager: AppEventManagerService) { }

  ngOnInit(): void {
  }

  removeUser(userid: number) {
    this.eventManager.broadcast({
      name: "Remove User",
      id: userid
    });
  }

}
