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

  removeManagedEmployee(employee) {
    for (employee of managedEmployees) idx = ((managedEmployees.indexOf(employee)))
    this.managedEmployees.slice(employee[idx], 1)
  }
}

const atAndT = new Manager()
const atAndT2 = new Manager()

atAndT2.addManagedEmployee(2, 'chris', 'het', 0123, 5000)
atAndT.addManagedEmployee(2, 'chris', 'het', 0123, 5000)
atAndT.addManagedEmployee(45, 'Kirk', 'mcs', 536235, 37613)
console.log("atnt", atAndT.managedEmployees);
console.log("atnt2", atAndT2.managedEmployees);
