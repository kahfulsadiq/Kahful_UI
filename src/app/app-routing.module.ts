import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './modules/students/students/students.component';
import { AccountComponent } from './modules/account/account/account.component';
import { ReportComponent } from './modules/report/report/report.component';
import { HomeComponent } from './modules/home/home.component';
import { ExpenseComponent } from './modules/account/expense/expense.component';
import { ReceivingComponent } from './modules/account/receiving/receiving.component';
import { ConsolidateComponent } from './modules/account/consolidate/consolidate.component';
import { DailyexpenseComponent } from './modules/account/dailyexpense/dailyexpense.component';
import { AddReceivingComponent } from './modules/account/add-receiving/add-receiving.component';
// import { ExpansionComponent } from './modules/account/expansion/expansion.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  // { path: 'expansion', component: ExpansionComponent },
  // { path: 'account', component: AccountComponent },ExpansionComponent
  // { path: 'report', component: ReportComponent },

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'receiving', component: ReceivingComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: 'consolidate', component: ConsolidateComponent },
  { path: 'dailyexpense', component: DailyexpenseComponent },
  { path: 'addreceive', component: AddReceivingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
