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
  studentdata : any;
  allstudents : any = [];

  modalTitle : any;
  to_show_modal : boolean = false;

  idFilter : string = "";
  nameFilter : string = "";
  emailFilter : string = "";
  cityFilter : string = "";

  constructor(private studentservice : StudentServiceService) { }

  ngOnInit(): void {
    this.listStudents();
  }

  listStudents(){
    this.studentservice.getStudents().subscribe(data => {
      this.students = data;
      this.allstudents = data;
    })
  }

  showModal(){
    this.studentdata = {
      roll: 0, name: "", email: "", city: "" , photo: ""
    }
    this.modalTitle = 'Add Student';
    this.to_show_modal = true;
  }

  editStudent(item: any){
    this.studentdata = item;
    console.log(item)
    this.modalTitle = 'Edit Student';
    this.to_show_modal = true;
  }

  deleteStudent(item: any){
    var data = {
      Id : item.id
    }
    this.studentservice.deleteStudent(data).subscribe(result =>{
      console.log(result)
    });
    console.log("Student Record Deleted")
  }

  filterdata(){
    var IdFilter = this.idFilter;
    var NameFilter:string = this.nameFilter;
    var EmailFilter:string = this.emailFilter;
    var CityFilter:string = this.cityFilter;

    this.students = this.allstudents.filter(function (data : any){
      return data.Id.toString().toLowerCase().includes(
        IdFilter.toString().trim().toLowerCase()
      )
      &&
      data.Name.toString().toLowerCase().includes(
        NameFilter.toString().trim().toLowerCase()
      )
      &&
      data.Email.toString().toLowerCase().includes(
        EmailFilter.toString().trim().toLowerCase()
      )
      &&
      data.City.toString().toLowerCase().includes(
        CityFilter.toString().trim().toLowerCase()
      )
    });
  }
}
