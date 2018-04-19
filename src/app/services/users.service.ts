import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }

  createUser(payload: any): Observable<any> {
    const data = JSON.stringify(payload);
    return this.http.post(`https://jsonplaceholder.typicode.com/users`, data);
  }

  getUser(id: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
