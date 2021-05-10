"use strict";
const { taxCalculator } = require("../tax");
const { roundToTwo } = require("../../libs/round");
const { validateSalary } = require("../../libs/validator");

/** @constant {number} */
const MONTHS_IN_A_YEAR = 12;

/**
 * Calculate gross monthly income.
 *
 * @param {number} salary Annual salary.
 * @returns {number} Gross monthly income.
 */
const calcGrossMonthlyIncome = (salary) =>
  roundToTwo(salary / MONTHS_IN_A_YEAR);

/**
 * Calculate monthly income tax.
 *
 * @param {number} salary Annual salary.
 * @returns {number} Monthly income tax.
 */
const calcMonthlyIncomeTax = (salary) =>
  roundToTwo(taxCalculator.annualIncomeTax(salary) / MONTHS_IN_A_YEAR);

/**
 * Calculate net monthly income.
 *
 * @param {number} salary Annual salary.
 * @returns {number} Net monthly income.
 */
const calcNetMonthlyIncome = (salary) =>
  roundToTwo(calcGrossMonthlyIncome(salary) - calcMonthlyIncomeTax(salary));

/**
 * @typedef {Object} Payslip
 * @property {number} grossMonthlyIncome Gross monthly income.
 * @property {number} monthlyIncomeTax Monthly Income Tax.
 * @property {number} netMonthlyIncome Net monthly income.
 */

/**
 * Calculate monthly payslip.
 *
 * @param {string} name Employee name.
 * @param {number} salary Annual salary.
 * @returns {Payslip} Payslip has been generated.
 */
const calcMonthlyPayslip = (salary) => {
  validateSalary(salary);

  return {
    grossMonthlyIncome: calcGrossMonthlyIncome(salary),
    monthlyIncomeTax: calcMonthlyIncomeTax(salary),
    netMonthlyIncome: calcNetMonthlyIncome(salary),
  };
};

module.exports = { calcMonthlyPayslip };
