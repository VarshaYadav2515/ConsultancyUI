import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './shared/user-layout.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: '', component: UserLayoutComponent, children: [
      { path: '', component: DashbaordComponent },
      { path: 'courses', component: CoursesComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
