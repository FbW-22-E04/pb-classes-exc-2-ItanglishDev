// EX 1

class Employee {

  constructor(id, firstName, lastName, taxId, salary) {

    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.taxId = taxId
    this.salary = salary
  }

  generatePaySlip() {
    return this.Employee
  }
}

// Ex 2

class Manager extends Employee {

  constructor(id, firstName, lastName, taxId, salary) {


    super(id, firstName, lastName, taxId, salary)

    this.managedEmployees = []
  }

  addManagedEmployee(id, firstName, lastName, taxId, salary) {
    this.managedEmployees.push({ id, firstName, lastName, taxId, salary })
  }

  removeManagedEmployee(id, firstName, lastName, taxId, salary) {
    this.managedEmployees.splice(this.managedEmployees.indexOf({ id, firstName, lastName, taxId, salary }))
  }
}



const employeeList = new Manager()

employeeList.addManagedEmployee(2, 'chris', 'het', 0123, 5000)
employeeList.addManagedEmployee(45, 'Kirk', 'mcs', 536235, 37613)
employeeList.addManagedEmployee(33, 'Izk', 'reduce', 47348, 4948)
// employeeList.removeManagedEmployee(33, 'Izk', 'reduce', 47348, 4948)
console.log(employeeList.managedEmployees);
