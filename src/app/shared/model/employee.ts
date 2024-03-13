import { Person } from "./person";

export class Employee {

 
  role: string;
  branch: string;
  constructor(
    private name : string,
    private salary : number,
    newName :string,
    newSalary : number,
    newRole : string
    ) { 
      this.name = newName;
      this.salary = newSalary;
    }

}

let p = new Person(){
  
}
