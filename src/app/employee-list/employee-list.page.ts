import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.page.html",
  styleUrls: ["./employee-list.page.scss"],
})
export class EmployeeListPage implements OnInit {
public employees: Array<any> = [];
  constructor(private navCtrl: NavController, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getEmployees();
  }

 addEmployee() {
   this.navCtrl.navigateRoot("/add-employee");
 }

getEmployees() {
  this.firebaseService.getEmployees().then((data: any) => {
    this.employees = data;
    console.log(data);
  }, err => {
       console.log("Error::::::", err);
  });
}

updateEmployee() {
  this.navCtrl.navigateRoot("/update-employee");
  this.getEmployees();
}

deleteEmployee(employee) {
  this.firebaseService.deleteEmployee(employee.mobile);
  this.getEmployees();
}
}
