const jonas = {
  firstName: "Jonas",
  lastName: "Sharma",
  age: 2037 - 2001,
  job: "student",
  friends: ["jonny", "Karlos", "dark"],
  hasDriversLicense: true,

  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },
};

console.log(jonas.calcAge(2001));
