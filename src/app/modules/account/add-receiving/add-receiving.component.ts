import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-receiving',
  templateUrl: './add-receiving.component.html',
  styleUrls: ['./add-receiving.component.css']
})
export class AddReceivingComponent implements OnInit {

  constructor() { }
  fys = ['2023-24', '2022-23'];
  selectedFy:any ='';

  ngOnInit(): void {
  }
  
}

