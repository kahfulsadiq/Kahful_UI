import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AccountComponent } from './modules/account/account/account.component';
import { StudentsComponent } from './modules/students/students/students.component';
import { ReportComponent } from './modules/report/report/report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderbarComponent } from './navigation/headerbar/headerbar.component';
import { HomeComponent } from './modules/home/home.component';
import { ReceivingComponent } from './modules/account/receiving/receiving.component';
import { ExpenseComponent } from './modules/account/expense/expense.component';
import { DailyexpenseComponent } from './modules/account/dailyexpense/dailyexpense.component';
import { ConsolidateComponent } from './modules/account/consolidate/consolidate.component';
import { AddReceivingComponent } from './modules/account/add-receiving/add-receiving.component';
// import { ExpansionComponent } from './modules/account/expansion/expansion.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    AccountComponent,
    StudentsComponent,
    ReportComponent,
    HeaderbarComponent,
    HomeComponent,
    ReceivingComponent,
    ExpenseComponent,
    DailyexpenseComponent,
    ConsolidateComponent,
    AddReceivingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
