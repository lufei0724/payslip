"use strict";

/**
 * Round a number to two decimal places if necessary.
 *
 * @param {number} num The value to be rounded to two decimal places.
 * @returns {number}
 */

const roundToTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

module.exports = { roundToTwo };
