"use strict";

const validateName = (name) => {
  if (name === undefined) {
    throw new Error("Name is required.");
  }

  if (typeof name !== "string") {
    throw new Error("Name should be a string.");
  }

  if (name.length === 0) {
    throw new Error("Name should not be blank");
  }
};

const validateSalary = (salary) => {
  if (salary === undefined) {
    throw new Error("Annual salary is required.");
  }

  if (isNaN(salary)) {
    throw new Error("Annual salary must be a number");
  }

  if (salary < 0) {
    throw new Error("Annual salary must not be less than 0");
  }
};

module.exports = { validateName, validateSalary };
