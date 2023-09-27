import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'fy', 'receiveddate', 'book','receiptno','donorname','behalfofdonor','mobile','address','category','receivedmode',
  'chequeno','cashamount','bankname','bankamount','totalamount','description'];
  // displayedColumns: string[] = ['position', 'fy'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  position:any;
  fy: any;
   receiveddate: any;
  book:any;
  receiptno:any;
  donorname: any;
  behalfofdonor:any;
  mobile: any;
  address:any;
  category:any;
  receivedmode:any;
  chequeno: any;
  cashamount:any;
  bankname:any;
  bankamount:any;
  totalamount: any;
  description: any;
}
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, fy:'2023-24'},
//   {position: 2, fy:'2023-24'},
//   {position: 3, fy:'2023-24'},
//   {position: 4, fy:'2023-24'},
//   {position: 5, fy:'2023-24'},
//   {position: 6, fy:'2023-24'},
//   {position: 7, fy:'2023-24'},
//   {position: 8, fy:'2023-24'},
//   {position: 9, fy:'2023-24'}
// ];

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, fy:'2023-24', receiveddate:'2023-Sep-01', book:'1', receiptno:'10001',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Donation', receivedmode:'Cash',chequeno:'',bankname:'',cashamount:'10000.00',bankamount:'',totalamount:'10000.00',description:''},
  {position: 2, fy:'2023-24', receiveddate:'2023-Sep-01', book:'1', receiptno:'10002',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Zakat', receivedmode:'Cash',chequeno:'',bankname:'',cashamount:'20000.00',bankamount:'',totalamount:'20000.00',description:''},
  {position: 3, fy:'2023-24', receiveddate:'2023-Sep-02', book:'1', receiptno:'10003',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Monthly Fee', receivedmode:'Bank',chequeno:'ABC23',bankname:'ICICI',cashamount:'',bankamount:'30000.00',totalamount:'30000.00',description:''},
  {position: 4, fy:'2023-24', receiveddate:'2023-Sep-03', book:'1', receiptno:'10004',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Construction', receivedmode:'Cash',chequeno:'',bankname:'',cashamount:'40000.00',bankamount:'',totalamount:'40000.00',description:''},
  {position: 5, fy:'2023-24', receiveddate:'2023-Sep-03', book:'1', receiptno:'10005',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Food', receivedmode:'Bank',chequeno:'',bankname:'HDFC',cashamount:'',bankamount:'60000.00',totalamount:'60000.00',description:''},
  {position: 6, fy:'2023-24', receiveddate:'2023-Sep-03', book:'1', receiptno:'10006',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Islamic Books', receivedmode:'PhonePay',chequeno:'',bankname:'Axis',cashamount:'',bankamount:'10000.00',totalamount:'10000.00',description:''},
  {position: 7, fy:'2023-24', receiveddate:'2023-Sep-03', book:'1', receiptno:'10007',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Donation', receivedmode:'Cash',chequeno:'',bankname:'',cashamount:'10000.00',bankamount:'',totalamount:'10000.00',description:''},
  
  // {position: 8, fy:'2023-24', receiveddate:'2023-Sep-20', book:'1', receiptno:'10008',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Donation', receivedmode:'Cash',chequeno:'',bankname:'',cashamount:'10000.00',bankamount:'',totalamount:'10000.00',description:''},
  // {position: 9, fy:'2023-24', receiveddate:'2023-Sep-25', book:'1', receiptno:'10009',donorname:'Abdul Rahim',behalfofdonor:'', mobile:'1234567',address:'Safdar Nagar,Hyderabad', category:'Donation', receivedmode:'Cash',chequeno:'',bankname:'',cashamount:'10000.00',bankamount:'',totalamount:'10000.00',description:''}


];
