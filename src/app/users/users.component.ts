import { UserService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  inputName: string;

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
    });
  }

  createUsers(payload) {
    this.userService.createUser(payload).subscribe(data => {
      this.getOneUser(data.id);
    });
  }

  onAdd() {
    // this.createUsers();
    const data = {
      name: this.inputName
    };
    this.createUsers(data);
  }

  getOneUser(id) {
    this.userService.getUser(id).subscribe(
      data => {
        console.log(data);
      },
      err => console.log(err)
    );
  }
}
