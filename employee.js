class Employee {
  constructor(name) {
    this.name = name;
    this.personality = 'helpful';
    this.monthsOfEmployment = 0;
    this.onboarding = true;
    this.onCall = false;

    this.name.length < 6 ? this.onCall = true : this.onCall = false;
  }

  work() {
    this.monthsOfEmployment += 4;
    this.monthsOfEmployment >= 6 ? this.onboarding = false : this.onboarding = true;
  }
}

module.exports = Employee;
