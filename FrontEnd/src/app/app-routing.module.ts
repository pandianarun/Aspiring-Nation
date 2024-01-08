import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { DocumentsComponent } from './documents/documents.component';
import { SignupComponent } from './signup/signup.component';
import { UpscComponent } from './course/upsc/upsc.component';
import { TnpscComponent } from './course/tnpsc/tnpsc.component';

const routes: Routes = [
  { path: '', redirectTo: 'UpscComponent', pathMatch: 'full' },
  {path: 'Home',component:HomeComponent},
  {path: 'Course',component:CourseComponent},
  {path: 'Document',component:DocumentsComponent},
  {path: 'Signup',component:SignupComponent},
  {path:'Course/UpscComponent',component:UpscComponent},
  {path:'Course/TnpscComponent',component:TnpscComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
