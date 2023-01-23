import { Injectable } from '@angular/core';
import { IEmployee } from './employee'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private _http: HttpClient) {

  }

  //getEmployees(): IEmployee[] {
  //  return [
  //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25 / 1988' },
  //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
  //    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
  //    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' }
  //  ];
  //}

  getEmployees(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>("https://localhost:44392/api/Employees")
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err.message)));
  }

  getEmployeeByCode(empCode: string): Observable<IEmployee> {
    return this._http.get<IEmployee>("https://localhost:44392/api/Employees/" + empCode)
      .pipe(catchError((err: HttpErrorResponse) => throwError(() => err.message)));
  }
}
