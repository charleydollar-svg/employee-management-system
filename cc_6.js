// Employee properties
class Employee {
    constructor(name, department, level="Employee") {
        this.name = name;
        this.department = department;
        this.level = level;
    }
    describe() {
        return `${this.name} | ${this.level} | ${this.department} department.`;
    }
}

// Manager properties
class Manager extends Employee {
    constructor(name, department, level="Manager", teamSize) {
        super(name, department);
        this.level = level;
        this.teamSize = teamSize;
        if (this.teamSize >= 10) this.level = "Executive";
    }
    describe() {
        return `${this.name} | ${this.level} | ${this.teamSize} Employee(s) in the ${this.department} department.`;
    }
}

//New Employees
const employees = [
    new Manager("Alice", "Engineering", "Manager", 5),
    new Manager("Bob", "Marketing", "Manager", 12),
    new Employee("Charlie", "Sales"),
    new Employee("David", "HR"),
    new Employee("Eve", "Finance"),
]

//Company
class company {
    constructor() {
        this.employees = employees;
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    listEmployees() {
        this.listEmployees.employees.forEach(emp => console.log(emp.describe()));
    }
}

//instantiate company
for (let employee of employees) {
    console.log(employee.describe());
}