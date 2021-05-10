"use strict";

const { Type } = require("js-yaml");

const validateName = (name) => {
  if (name === undefined) {
    throw new TypeError("Name is required.");
  }

  if (typeof name !== "string") {
    throw new TypeError("Name should be a string.");
  }

  if (name.length === 0) {
    throw new TypeError("Name should not be blank");
  }
};

const validateSalary = (salary) => {
  if (salary === undefined) {
    throw new TypeError("Annual salary is required.");
  }

  if (isNaN(salary)) {
    throw new TypeError("Annual salary must be a number");
  }

  if (salary < 0) {
    throw new TypeError("Annual salary must not be less than 0");
  }
};

module.exports = { validateName, validateSalary };
