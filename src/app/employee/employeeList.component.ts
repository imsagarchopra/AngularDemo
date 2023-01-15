import { Component } from '@angular/core';

@Component({
  selector: 'list-employee',
  templateUrl: 'employeeList.component.html',
  styleUrls:['employeeList.component.css']
  })
export class EmployeeListComponent {
  employees: any[];

  constructor() {
    this.employees = [
      { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988' },
      { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
      { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
      { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '14/10/1980' },
    ];
  }

  getEmployees(): void {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '25/6/1988'
      },
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'
      },
      {
        code: 'emp105', name: 'Nancy', gender: 'Female',
        annualSalary: 6700.826, dateOfBirth: '15/12/1982'
      },
    ];
  }

  trackByEmpCode(index: number, employee: any) {
    return employee.code;
  }
}
