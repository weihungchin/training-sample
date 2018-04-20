import { UserService } from './../services/users.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {
  constructor(private userService: UserService) {}

  inputName: string;

  userData: any;
  createdUser: any;

  rawDate: Date = new Date();

  ngOnChanges() {}
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe(data => {
      this.userData = data;
      console.log(data);
    });
  }

  createUsers(payload) {
    this.userService.createUser(payload).subscribe(data => {
      this.createdUser = data.id;
      console.log(data);
    });
  }

  getUser() {
    this.userService.getUser('1').subscribe(
      data => {
        console.log(data);
      },
      error => {}
    );
  }

  onAdd() {
    // this.createUsers();
    const data = {
      name: this.inputName,
      email: 'hello@tech.com'
    };
    this.createUsers(data);
  }
}
