class Employee {
  constructor(name, id, email) {
    // if (!name || !name.trim().length) {
    //   throw new Error("Expected parameter 'name' to be a non-empty string");
    // }
    // if (typeof id !== 'number' || isNaN(id) || id < 0) {
    //   throw new Error("Expected parameter 'id' to be a non-negative number");
    // }
    // if (!email || !email.trim().length) {
    //   throw new Error("Expected parameter 'name' to be a non-empty string");
    // }
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
