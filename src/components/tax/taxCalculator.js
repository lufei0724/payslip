"use strict";
const { getTaxRates } = require("./taxDAL");
const { validateSalary } = require("../../libs/validator");

/**
 * Compare annual salary and a tax rate to calculate applicable tax amount at the tax rate level.
 *
 * @param {number} salary Annual salary.
 * @param {{startIncome: number, maxIncome: number, rate: number}} taxRate Tax rate.
 * @returns {number} Tax amount at the tax rate.
 */
const calcApplicableTax = (salary, taxRate) => {
  const { startIncome, maxIncome, rate } = taxRate;

  if (salary > maxIncome && maxIncome !== null) {
    return (maxIncome - startIncome) * rate;
  } else if (salary < startIncome) {
    return 0;
  } else {
    // salary between start and max income
    return Math.floor(salary - startIncome) * rate;
  }
};

/**
 * Calculate annual tax amount by annual salary.
 *
 * Compare annual salary with each tax rate of the tax rate list
 * to get applicable tax amount at each tax rate level,
 * so annual tax amount is the sum of all applicable tax amount.
 *
 * @param {number} salary Annual salary.
 * @returns {number} Annual tax amount.
 */
const annualIncomeTax = (salary) => {
  validateSalary(salary);
  let taxRates = getTaxRates();
  return taxRates
    .map((taxRate) => calcApplicableTax(salary, taxRate))
    .reduce((a, b) => a + b);
};

module.exports = { annualIncomeTax };
