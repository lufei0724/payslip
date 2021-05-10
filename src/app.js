#!/usr/bin/env node
"use strict";
const { payslipController } = require("./components/payslip");

try {
  let args = process.argv.slice(2);
  if (!args[0] || !args[1]) {
    throw new Error("Usage: npm start <employee name> <annual salary>");
  }
  const payslip = payslipController.genMonthlyPayslip({
    name: args[0],
    salary: args[1],
  });
  console.log(payslip);
} catch (error) {
  console.log(error.message);
}
