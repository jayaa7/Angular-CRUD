export class EmployeeModel{
    id: number =0;
    firstName : string = '';
    lastName : string = '';
    email : string = '';
    mobile : string = '';
    salary : string = '';
}

export interface Employee{
    id: number
    firstName : string
    lastName : string 
    email : string 
    mobile : string 
    salary : string 
}