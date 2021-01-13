import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: {id: number, name: string, status: string}[];

  constructor(private userService: UserService) {
    userService.updateUsers.subscribe((message) => {
      if (message == "update") {  
        this.users = this.userService.users.filter(user => user.status == 'active');
      }
    });
   }

  ngOnInit(): void {
    this.users = this.userService.users.filter(user => user.status == 'active');
  }

  setToInactive(id: number) {
    this.userService.users[id-1].status = 'inactive';
    this.users = this.userService.users.filter(user => user.status == 'active');
    this.userService.updateUsers.emit("update");
    console.log(this.userService.users);
  }

}
