import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  title = "List Students";
  students : any;

  constructor(private studentservice : StudentServiceService) { }

  ngOnInit(): void {
    this.listStudents();
  }

  listStudents(){
    this.studentservice.getStudents().subscribe(data => {
      this.students = data;
    })
  }
}
