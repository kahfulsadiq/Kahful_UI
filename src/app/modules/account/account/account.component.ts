import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountForm!: FormGroup;
  constructor(private builder: FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.getFormcontrol()
  }
  getFormcontrol() {
    this.accountForm = this.builder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      Comments: new FormControl(''),
    });
  }
  onSubmit() {
    console.log(this.accountForm.value,'valueee')
    this.http.post<any>('https://sample/api/posts',  this.accountForm.value )
    .subscribe(data => {
      console.log(data,'data')
  })
  }
  onReset() {
    this.accountForm.reset();
  }
}
