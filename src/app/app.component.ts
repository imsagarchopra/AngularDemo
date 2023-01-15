import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //class Binding
  //template: `<button class="colorClass" [class] ='classesToApply' > My Button </button>
              //<br/><br/>
              //<button class="colorClass"d [class.boldClass] ='!applyBoldClass' > My Button </button>
              //<br/><br/>
              //<button class="colorClass" [ngClass] ='addClasses()' > My Button </button>
          //  `

  //templateUrl: 'app.component.html'

  //style Binding
  //template: `<button style = 'color: red' [style.font-weight] = "isBold ? 'bold' : 'normal'">My Button</button>
  //           <br/><br/>
  //            <button style = 'color: red' [style.font-size.px] = "fontSize">My Button</button>
  //            <br/><br/>
  //            <button style = 'color: red' [ngStyle] = "addStyles()">My Button</button>
  //          `

  //Event Binding
  /*template: `<my-employee></my-employee>`*/

  //Two Way Data Binding
  //template: `Name : <input [value]='name' (input)='name = $event.target.value'>
  //          <br/>
  //          You entered : {{name}}
  //          `

  template: `Name : <input [(ngModel)] = 'name'>
            <br/>
            You entered : {{name}}
            `
             
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  imagePath: string = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png";

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  //Class Binding
  classesToApply: string = 'boldClass italicsClass';
  applyBoldClass: boolean = true;;
  applyItalicsClass: boolean = true;;

  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };
    return classes;
  }

  //Style Binding
  isBold: boolean = true;
  fontSize: number = 30;
  isItalics: boolean = true;

  addStyles() {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalics ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
    };
    return styles;
  }

  //Event Binding

  onClick(): void {
    console.log('Button Clicked');
  }

  //Two Way Data Binding

  name: string = 'Tom';
}
