import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  readonly api_url = "http://localhost:56342/api/student";

  constructor(private http_request : HttpClient) { }

  getStudents() : Observable<any[]>{
    return this.http_request.get<any>(this.api_url);
  }

  addStudent(val: any){
    return this.http_request.post(this.api_url, val);
  }

  updateStudent(val: any){
    return this.http_request.put(this.api_url, val);
  }

  deleteStudent(val: any){
    return this.http_request.delete(this.api_url, val)
  }

  uploadPhoto(val: any){
    return this.http_request.post(this.api_url+"/saveImage", val);
  }
}
