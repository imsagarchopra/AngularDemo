import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

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

  //template: `Name : <input [(ngModel)] = 'name'>
  //          <br/>
  //          You entered : {{name}}
  //          `

  // NgFor
  //template: `<list-employee></list-employee>`

  //Component LifeCycle Hooks
  //template: `Input : <input type = 'text' [(ngModel)] = 'userText'>
  //          <br/>
  //          <simple [simpleInput] = 'userText'></simple>
  //          `

  //Routing
  template: `
              <div style="padding:5px">
                <ul clas="nav nav-tabs">
                  <li routerLinkActive="active"> <a routerLink="home">Home</a> </li>
                  <li routerLinkActive="active"> <a routerLink="employees">Employees</a> </li>
                </ul>
                <router-outlet></router-outlet>
              </div>
            `
             
})
export class AppComponent {
  pageHeader = 'Employee Details';
  firstName = 'Tom';
  lastName = 'Hopkins';
  imagePath = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png";

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }

  //Class Binding
  classesToApply = 'boldClass italicsClass';
  applyBoldClass = true;
  applyItalicsClass = true;

  addClasses() {
    const classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass
    };
    return classes;
  }

  //Style Binding
  isBold = true;
  fontSize = 30;
  isItalics = true;

  addStyles() {
    const styles = {
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

  name = 'Tom';

  //Component Lifecycle Hooks
  userText = 'Sagar';
}
