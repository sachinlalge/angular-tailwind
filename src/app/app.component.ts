import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { tableDataModel } from './model/tabledata.model';
import { ApiService } from './shared/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  formValue !: FormGroup;
  tableDataObj: tableDataModel = new tableDataModel();

  constructor(private formbuilder: FormBuilder, private api: ApiService) {
  }

  ngOnInit() {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      role: [''],
    })
  }

  postUserDetails() {
    this.tableDataObj.username = this.formValue.value.name;
    this.tableDataObj.email = this.formValue.value.email;
    this.tableDataObj.mobile = this.formValue.value.mobile;
    this.tableDataObj.role = this.formValue.value.role;

    this.api.postUser(this.tableDataObj)
    .subscribe(res => {
      console.log(res);
      alert("User added successfully")
    },
    // err=> {
    //   console.log("Something went wrong");
    // }
    )
  }

}


