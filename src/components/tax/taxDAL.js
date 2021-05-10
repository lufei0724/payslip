"use strict";

/**
 * Annual tax rates data
 *
 * @type {{}[]}
 */
const taxRates = [
  { startIncome: 0, maxIncome: 20000, rate: 0 },
  { startIncome: 20000, maxIncome: 40000, rate: 0.1 },
  { startIncome: 40000, maxIncome: 80000, rate: 0.2 },
  { startIncome: 80000, maxIncome: 180000, rate: 0.3 },
  { startIncome: 180000, maxIncome: null, rate: 0.4 },
];

/**
 * Get tax rates data.
 *
 * @returns {{}[]} Tax rates data.
 */
const getTaxRates = () => {
  return taxRates;
};

module.exports = { getTaxRates };
