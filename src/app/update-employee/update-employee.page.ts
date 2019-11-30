import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validator,
  Validators
} from '@angular/forms';
import { FirebaseService } from '../firebase.service';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.page.html',
  styleUrls: ['./update-employee.page.scss'],
})
export class UpdateEmployeePage implements OnInit {
updateempForm: FormGroup;
public gender = "Male";
  constructor(private fb: FormBuilder , private firebaseService: FirebaseService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.updateempForm = this.fb.group({
      fName: new FormControl('', Validators.required),
      mName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      male: new FormControl('', Validators.required),
      female: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      cpassword: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
      cond: new FormControl('', Validators.required)
    });
  }

  onSelectingGender() {
    this.updateempForm.addControl("gender", new FormControl());
    this.updateempForm.patchValue({ gender: this.gender });
  }

  onSubmit(updateempFormValue) {
    console.log(updateempFormValue);
    this.firebaseService.updateEmployee(updateempFormValue);
  }
}


