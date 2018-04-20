import { Component, OnInit, OnChanges } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-bench',
  templateUrl: './test-bench.component.html',
  styleUrls: ['./test-bench.component.css']
})
export class TestBenchComponent implements OnInit, OnChanges {
  endpoint: string = environment.apiEndpoint;

  isClicked = false;
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  getUsers() {
    this.http
      .get(
        `https://jsonplaceholder.typicode.com/users
    `
      )
      .subscribe(
        data => {
          console.log(data);
        }, // callback function when data arrives
        err => {
          // callback function to handle error
          console.log(err);
        }
      );
  }

  ngOnChanges() {
    console.log('onChanges');
  }
  ngOnInit() {
    this.onChildClick(null);
    console.log(this.endpoint);
  }

  onChildClick(data) {
    console.log(data); // Clicked
  }

  toUserPage() {
    // to navigate to user page programatically
    // '..' means go back 1 level up
    // current path is at 'root/test';
    // so, we use '../user', to let it know that
    // we need to go to 'root/user',
    this.router.navigate(['../user'], { relativeTo: this.activatedRoute });
  }
}
