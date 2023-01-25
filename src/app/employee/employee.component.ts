import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { catchError, retry, retryWhen } from 'rxjs/operators';

@Component({
  selector: 'my-employee',
  templateUrl: '/employee.component.html',
  styleUrls: ['/employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //firstName : string = 'Tom';
  //lastName : string = 'Hopkins';
  //gender: string = 'Male';
  //age: number = 20;
  //columnSpan: number = 2;

  //Event Binding
  //showDetails: boolean = false;
  //toggleDetails(): void {
  //  this.showDetails = !this.showDetails;
  //}

  employee!: IEmployee;
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute, private _router: Router) {

  }

  onBackButtonClick(): void {
    this._router.navigate(['/employees']);
  }

  ngOnInit() {
    let empCode: string = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployeeByCode(empCode).pipe(retry(3))
      .subscribe(
      (employeeData) => {
        if (employeeData == null) {
          this.statusMessage = 'Employee with the specified Employee code does not exist';
        }
        else {
          this.employee = employeeData
        }
      },
      (error) => {
        this.statusMessage = 'Problem with the service. Please try again after some time'
        console.log(error);
      }
    );
  }
}
