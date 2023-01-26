import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from '../userPreferences.service';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'list-employee',
  templateUrl: 'employeeList.component.html',
  styleUrls: ['employeeList.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees!: IEmployee[];
  statusMessage = 'Loading data. Please wait...';

  //constructor() {
  //  this.employees = [
  //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
  //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
  //    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
  //    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
  //  ];
  //}

  constructor(private _employeeService: EmployeeService, private _userPreferencesService: UserPreferencesService) {
    
  }

  get color() {
    return this._userPreferencesService.colorPreference;
  }

  set color(value: string) {
    this._userPreferencesService.colorPreference = value;
  }

  ngOnInit() {
    /*this.employees = this._employeeService.getEmployees();*/
    this._employeeService.getEmployees()
      .subscribe((employeeData) => this.employees = employeeData,
        (error) => {
          this.statusMessage = 'Problem with the service. Please try again after some time'
        });
  }

  getEmployees(): void {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '6/25/1988'
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
        annualSalary: 6500.826, dateOfBirth: '10/14/1980'
      },
      {
        code: 'emp105', name: 'Nancy', gender: 'Female',
        annualSalary: 6700.826, dateOfBirth: '12/15/1982'
      },
    ];
  }

  trackByEmpCode(index: number, employee: any) {
    return employee.code;
  }

  getTotalEmployeesCount(): number {
    return this.employees.length;
  }

  getTotalMaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Male').length;
  }

  getTotalFemaleEmployeesCount(): number {
    return this.employees.filter(e => e.gender === 'Female').length;
  }

  selectedEmployeeCountRadioButton = 'All';

  onEmployeeCountRadioButtonChange(selecteRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selecteRadioButtonValue;
  }
}
