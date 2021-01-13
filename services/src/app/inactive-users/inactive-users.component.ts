import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: {id: number, name: string, status: string}[];
  
  constructor(private userService: UserService) { 
    userService.updateUsers.subscribe((message) => {
      if (message == "update") {  
        this.users = this.userService.users.filter(user => user.status == 'inactive');
      }
    });
  }

  ngOnInit(): void {
    this.users = this.userService.users.filter(user => user.status == 'inactive');
  }

  setToActive(id: number) {
    this.userService.users[id-1].status = 'active';
    this.users = this.userService.users.filter(user => user.status == 'inactive');
    this.userService.updateUsers.emit("update");
    console.log(this.userService.users);
  }

}
