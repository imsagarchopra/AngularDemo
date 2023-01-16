export interface IEmployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: string;
  department?: string;  //Option Property

  //computeMonthlyAnnualSalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
  //  public code: string;
  //  public name: string;
  //  public gender: string;
  //  public annualSalary: number;
  //  public dateOfBirth: string;

  //constructor(code: string, name: string, gender: string, annualSalary: number, dateOfBirth: string) {
  //  this.code = code;
  //  this.name = name;
  //  this.gender = gender;
  //  this.annualSalary = annualSalary;
  //  this.dateOfBirth = dateOfBirth;
  //}

  //ShortHand Syntax to write above code
  constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string) {
   
  }

  //computeMonthlyAnnualSalary(annualSalary: number): number {
  //  return annualSalary / 12;
  //}
}
