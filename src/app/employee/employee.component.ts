import { Component } from '@angular/core';

@Component({
  selector: 'my-employee',
  templateUrl: '/employee.component.html'
  })
export class EmployeeComponent {
  firstName : string = 'Tom';
  lastName : string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
}
