import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './modules/students/students/students.component';
import { AccountComponent } from './modules/account/account/account.component';
import { ReportComponent } from './modules/report/report/report.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
