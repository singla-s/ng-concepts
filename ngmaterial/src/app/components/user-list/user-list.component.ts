import { Component, OnInit } from '@angular/core';
import { AppEventManagerService } from 'src/app/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [{id: 0,name: "Sinni"}];
  constructor(private eventManager: AppEventManagerService) { }

  ngOnInit(): void {
    import('../../../assets/json/users.json').then((users) => {
      this.users = users["default"];
    });

    this.eventManager.subscribe("Remove User", (event) => {
      this.users = this.users.filter(user => user.id != event.id);
    });

    this.eventManager.subscribe("Add User", (event) => {
      this.users.push({id: this.users.length + 1, name: event.userName});
    });
  }

}
