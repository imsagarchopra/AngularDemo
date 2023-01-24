import { Component } from '@angular/core';
import { UserPreferencesService } from '../userPreferences.service';

@Component({
  template: `<h1>This is the home page</h1>
              <div>
  ColorPreference:
  <input type="text" [(ngModel)] ="color" [style.background]="color"/>
</div>
`
})
export class HomeComponent {

  constructor(private _userPreferencesService: UserPreferencesService) {

  }

  get color() {
    return this._userPreferencesService.colorPreference;
  }

  set color(value: string) {
    this._userPreferencesService.colorPreference = value;
  }
}
