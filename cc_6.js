// Employee properties
class Employee {
    constructor(name, department,) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
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
        return `${this.name} | ${this.level} | ${this.teamSize} works in the ${this.department} department.`;
    }
}

//New Employees
const employees = [
    new Manager("Alice", "Engineering", "Manager", 5),
    new Manager("Bob", "Marketing", "Manager", 12),
    new Employee("Charlie", "Sales"),
    new Employee("David", "HR"),
    new Employee("Eve", "Finance")
]

//Company
class company {
    constructor() {
        this.employees = employees;
    }
}


const myCompany = new company();

for (let emp of myCompany.employees) {
    console.log(emp.describe());
}
