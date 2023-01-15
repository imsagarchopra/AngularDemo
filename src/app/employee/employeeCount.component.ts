import { Component, Input } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: 'employeeCount.component.html',
  styleUrls: ['employeeCount.component.css']
  })
export class EmployeeCountComponent {
  @Input()
    all!: number;

  @Input()
    male!: number;

  @Input()
  female!: number;
}
