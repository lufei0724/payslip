"use strict";
const { calcMonthlyPayslip } = require("./payslipService");
const { validateName } = require("../../libs/validator");

/**
 * Output payslip to a formatted string.
 *
 * @param {{name: string, salary: number}} Employee
 * @returns {string} String.
 */

const genMonthlyPayslip = ({ name, salary }) => {
  validateName(name);

  const {
    grossMonthlyIncome,
    monthlyIncomeTax,
    netMonthlyIncome,
  } = calcMonthlyPayslip(salary);

  const str =
    `Monthly Payslip for : "${name}"\n` +
    `Gross Monthly Income : $${grossMonthlyIncome}\n` +
    `Monthly Income Tax : $${monthlyIncomeTax}\n` +
    `Net Monthly Income : $${netMonthlyIncome}`;
  return str;
};

module.exports = { genMonthlyPayslip };
