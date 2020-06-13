var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.empid = id;
        this.empname = name;
        this.empsalary = salary;
    }
    Object.defineProperty(Employee.prototype, "id", {
        get: function () {
            return this.empid;
        },
        set: function (value) {
            this.empid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this.empname;
        },
        set: function (value) {
            this.empname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "salary", {
        get: function () {
            return this.empsalary;
        },
        set: function (value) {
            this.empsalary = value;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.displayemp = function () {
        console.log(this);
    };
    return Employee;
}());
var emp = new Employee(101, 'John', 20000); // creating object
emp.displayemp();
emp.empid = 201; // calling setter         
emp.empname = 'Steve';
emp.empsalary = 50000;
var eid = emp.empid; // calling getter
console.log(eid);
emp.displayemp();
