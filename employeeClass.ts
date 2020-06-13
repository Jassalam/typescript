
class Employee{
    empid: number;
    empname: string;
    empsalary: number;
     constructor (id: number, name:string, salary:number){
         this.empid = id;
         this.empname = name;
         this. empsalary = salary;
     }

    get id(): number{
         return this.empid;
     }

     set id(value: number){
         this.empid = value;
     }

     get name(): string{
        return this.empname;
    }

    set name(value: string){
        this.empname = value;
    }
    get salary():number{
        return this.empsalary;
    }

    set salary(value: number){
        this.empsalary = value;
    }

    displayemp(): void {
        console.log(this);
    }
}

let emp: Employee = new Employee(101, 'John', 20000);      // creating object
emp.displayemp();    
emp.empid = 201;                            // calling setter         
emp.empname = 'Steve';
emp.empsalary =50000;
let eid : number = emp.empid;               // calling getter
console.log(eid);
emp.displayemp();