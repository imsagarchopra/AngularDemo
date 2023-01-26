import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'simple',
  template: `You entered : {{simpleInput}}`
})
export class SimpleComponent implements OnChanges {
  @Input() simpleInput = "Sagar";

  ngOnChanges(changes: SimpleChanges) {
    for (const propertyName in changes) {
      const change = changes[propertyName];
      const current = JSON.stringify(change.currentValue);
      const previous = JSON.stringify(change.previousValue);

      console.log(propertyName + ': currentValue = ' + current + ', previousValue = ' + previous);
      /*console.log(`${propertyName} : currentValue = ${current} , previousValue = ${previous}`);*/
    }
  }
}
