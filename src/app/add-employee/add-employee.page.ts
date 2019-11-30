import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { FirebaseService } from "../firebase.service";
@Component({
  selector: "app-add-employee",
  templateUrl: "./add-employee.page.html",
  styleUrls: ["./add-employee.page.scss"]
})
export class AddEmployeePage implements OnInit {
  public addempForm: FormGroup;
  public gender = "Male";
  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.addempForm = this.formBuilder.group({
      fName: new FormControl("", Validators.required),
      mName: new FormControl("", Validators.required),
      lName: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      cpassword: new FormControl("", Validators.required),
      mobile: new FormControl("", Validators.required),
      cond: new FormControl("", Validators.required)
    });
  }

  onSelectingGender() {
    this.addempForm.addControl("gender", new FormControl());
    this.addempForm.patchValue({ gender: this.gender });
  }

  onSubmit(addempFormValue) {
    if (addempFormValue.password === addempFormValue.cpassword) {
      this.firebaseService.addEmployee(addempFormValue);
    } else {
      alert("password mismatch");
    }
  }
}
