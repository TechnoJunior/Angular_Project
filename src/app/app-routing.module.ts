import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {ListStudentComponent} from './list-student/list-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {LoginComponent} from './login/login.component';
import {RegisterationComponent}  from './registeration/registeration.component';
const routes: Routes = [
  {
    component : AddStudentComponent,
    path : 'add'
  },
  {
    component : ListStudentComponent,
    path : 'list'
  },
  {
    component : UpdateStudentComponent,
    path : 'update'
  },
  {
    component : LoginComponent,
    path : 'login'
  },
  {
    component : RegisterationComponent,
    path : 'register'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
