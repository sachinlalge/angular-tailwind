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

  userData: any = [
    {
      email: "abc@gmail.com",
      mobile: "+91 895623157",
      role: "Manager",
    },
    {
      email: "",
      mobile: "+91 12356486",
      role: "Learner",
    },
    {
      email: "xyz@gmail.com",
      mobile: "+91 12356486",
      role: "Trainer",
    },
    {
      email: "admin@gmail.com",
      mobile: "+91 6541326549",
      role: "Admin",
    },
    {
      email: "",
      mobile: "+91 756984126",
      role: "User",
    },
    {
      email: "plki@gmail.com",
      mobile: "+91 12356486",
      role: "Manager",
    },
    {
      email: "",
      mobile: "+91 654512346",
      role: "Admin",
    },
  ];
  showAddbtn: boolean = true;
  showUpdatebtn: boolean = false;

  constructor(private formbuilder: FormBuilder, private api: ApiService) {
    this.getAllUsers();
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
      console.log('postUser ==', res);
      // alert("User added successfully")
    },
    // err=> {
    //   console.log("Something went wrong");
    // }
    )

    this.getAllUsers();
  }

  getAllUsers() {
    this.api.getUser().subscribe(res=> {
      this.userData = res;
      console.log('getAllUsers ==', this.userData);
      
    })
  }

  deleteUser(item: any) {
    this.api.deleteUser(item.id).subscribe(res=> {
      alert('User deleted');
      this.getAllUsers();
    })
  }

  onEdit(item: any) {
    this.tableDataObj.id = item.id
    this.formValue.controls['name'].setValue(item.username);
    this.formValue.controls['email'].setValue(item.email);
    this.formValue.controls['mobile'].setValue(item.mobile);
    this.formValue.controls['role'].setValue(item.role);
    this.showAddbtn = false;
    this.showUpdatebtn = true;
  }

  updateUser() {
    this.tableDataObj.username = this.formValue.value.name;
    this.tableDataObj.email = this.formValue.value.email;
    this.tableDataObj.mobile = this.formValue.value.mobile;
    this.tableDataObj.role = this.formValue.value.role;
    this.api.updateUser(this.tableDataObj, this.tableDataObj.id).subscribe(res=> {
      alert('updated successfully');
    })
    this.getAllUsers();
    this.formValue.reset();
  }

  resetForm() {
    this.formValue.reset();
  }
}


