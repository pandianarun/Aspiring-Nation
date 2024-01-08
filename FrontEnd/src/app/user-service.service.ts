import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const BASIC_URL=["http://localhost:8080/"];
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http: HttpClient) { }

  postUser(User:any):Observable<any>{
    return this.http.post(BASIC_URL+"add",User);
  }

}
