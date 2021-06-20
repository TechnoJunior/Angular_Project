import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  readonly api_url = "http://localhost:59629/api/student";

  constructor(private http_request : HttpClient) { }

  getStudents() : Observable<any[]>{
    return this.http_request.get<any[]>(this.api_url);
  }
}
