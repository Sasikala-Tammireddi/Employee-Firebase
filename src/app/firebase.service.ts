import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor() {
    this.employeeDatabase = firebase.firestore;
    this.employeeCollection = this.employeeDatabase().collection('Employee');
  }
  employeeDatabase: any;
  employeeCollection: any;

  getEmployees() {
    return new Promise((resolve, reject) => {
      this.employeeCollection.get().then(
        resp => {
          const empList: Array<any> = [];
          resp.forEach(element => {
            empList.push(element.data());
          });
          resolve(empList);
        },
        error => {
          reject(error);
        });
    });
  }

  addEmployee(empData) {
    this.employeeCollection
      .doc(empData.mobile)
      .set(empData)
      .then(
        resp => {
          console.log('Employee added Succesfully');
        },
        err => {
          console.log('Error ::::::::::', err);
        }
      );
  }

  updateEmployee(empData) {
    this.employeeCollection
      .doc(empData.mobile)
      .update(empData)
      .then(
        resp => {
          console.log('Employee Updated Successfully');
        },
        err => {
          console.log('Error :::::::::::::', err);
        }
      );
  }

  deleteEmployee(mobile) {
    this.employeeCollection
      .doc(mobile)
      .delete()
      .then(
        resp => {
          console.log('Employee deleted successfully');
        },
        err => {
          console.log('Error:::::::::', err);
        }
      );
  }
}
