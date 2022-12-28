import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  imagePath: string = "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png";

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
