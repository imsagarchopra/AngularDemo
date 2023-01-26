import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: 'employeeCount.component.html',
  styleUrls: ['employeeCount.component.css']
  })
export class EmployeeCountComponent {

  selectedRadioButtonValue = 'All';

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  @Input()
    all!: number;

  @Input()
    male!: number;

  @Input()
  female!: number;

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
