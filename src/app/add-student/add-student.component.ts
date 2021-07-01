import { Component, OnInit, Input } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentServerice : StudentServiceService) { }

  @Input() data : any;
  roll : string | undefined;
  name : string | undefined;
  email : string | undefined;
  city : string | undefined;
  photo : string | undefined;
  photopath : string | undefined;


  ngOnInit(): void {
    this.roll = this.data.roll;
    this.name = this.data.name;
    this.email = this.data.email;
    this.city = this.data.city;
    this.photo = this.data.photo;
    this.photopath = this.data.photo;
  }

  addStudent(){
    var data = {
      Id : this.roll,
      Name: this.name,
      Email: this.email,
      City: this.city
    }

    this.studentServerice.addStudent(data).subscribe(result => {
      console.log(result);
      alert("New Student Added");
    })
  }

  updateStudent(){
    var data = {
      Id : this.roll,
      Name: this.name,
      Email: this.email,
      City: this.city
    }

    console.log(data)
    this.studentServerice.updateStudent(data).subscribe(result => {
      console.log(result);
      alert("New Student Added");
    })
  }

  uploadPhoto(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploaded file', file, file.name);

    this.studentServerice.uploadPhoto(formData).subscribe(result =>{
      alert(result);

      this.photo = result.toString();
      this.photopath = "http://localhost:56342/api/student/"+this.photo;
    })
  }
}
