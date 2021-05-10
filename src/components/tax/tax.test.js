const { taxCalculator } = require("./index");

describe("taxCalculator", () => {
  describe("calculate annual income tax", () => {
    it("should throw error if annual salary is not a number", () => {
      expect(() => {
        taxCalculator.annualIncomeTax("abc");
      }).toThrow(/Annual salary must be a number/);
    });
    it("should throw error if annual salary less than 0", () => {
      expect(() => {
        taxCalculator.annualIncomeTax(-100);
      }).toThrow(/Annual salary must not be less than 0/);
    });

    it("should return 0 with annual salary 0", () => {
      expect(taxCalculator.annualIncomeTax(0)).toBe(0);
    });

    it("should return 0 with annual salary 20000", () => {
      expect(taxCalculator.annualIncomeTax(20000)).toBe(0);
    });

    it("should return  0.1 with annual salary 20001", () => {
      expect(taxCalculator.annualIncomeTax(20001)).toBe(0.1);
    });

    it("should return  0.1 with annual salary 20001", () => {
      expect(taxCalculator.annualIncomeTax(20001)).toBe(0.1);
    });

    it("should return 6000 with annual salary 60000", () => {
      expect(taxCalculator.annualIncomeTax(60000)).toBe(6000);
    });

    it("should return 16000 with annual salary 100000", () => {
      expect(taxCalculator.annualIncomeTax(100000)).toBe(16000);
    });

    it("should return 88000 with annual salary 300000", () => {
      expect(taxCalculator.annualIncomeTax(300000)).toBe(88000);
    });
  });
});
