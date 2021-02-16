import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
 
const routes: Routes = [
  {
  path:'dashboard',
  component: DashboardComponent, 
},
{
  path:'navbar',
  component: NavbarComponent,
},
{
  path:'sidenav',
  component: SidenavComponent,
},
{
  path:'courses',
  component: CoursesComponent,
},
{
  path: 'course/:id',
  component: CourseEditComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
