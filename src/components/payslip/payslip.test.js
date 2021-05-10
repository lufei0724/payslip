const { expect } = require("@jest/globals");
const { payslipController, payslipService } = require("./index");

describe("payslipController", () => {
  describe("input validation", () => {
    it("should throw error if name is not passed", () => {
      expect(() => {
        payslipController.genMonthlyPayslip({ salary: 100000 });
      }).toThrow(/Name is required/);
    });

    it("should throw error if name is not a string", () => {
      expect(() => {
        payslipController.genMonthlyPayslip({ name: null, salary: 100000 });
      }).toThrow(/Name should be a string/);
    });

    it("should throw error if name is an empty string", () => {
      expect(() => {
        payslipController.genMonthlyPayslip({ name: "", salary: 100000 });
      }).toThrow(/Name should not be blank/);
    });

    it("should throw error if salary is not passed", () => {
      expect(() => {
        payslipController.genMonthlyPayslip({ name: "Christ" });
      }).toThrow(/Annual salary is required/);
    });

    it("should throw error if salary is not a number", () => {
      expect(() => {
        payslipController.genMonthlyPayslip({ name: "Christ", salary: "abc" });
      }).toThrow(/Annual salary must be a number/);
    });

    it("should throw error if salary is less than 0", () => {
      expect(() => {
        payslipController.genMonthlyPayslip({ name: "Christ", salary: -100 });
      }).toThrow(/Annual salary must not be less than 0/);
    });
  });

  describe("output ", () => {
    it("should return correct payslip string ", () => {
      const employee = {
        name: "Mary Song",
        salary: 60000,
      };
      const expectedResult =
        `Monthly Payslip for : "Mary Song"\n` +
        `Gross Monthly Income : $5000\n` +
        `Monthly Income Tax : $500\n` +
        `Net Monthly Income : $4500`;
      expect(payslipController.genMonthlyPayslip(employee)).toBe(
        expectedResult
      );
    });
  });
});

describe("payslipService", () => {
  describe("input validation", () => {
    it("should throw error if salary is not passed", () => {
      expect(() => {
        payslipService.calcMonthlyPayslip();
      }).toThrow(/Annual salary is required/);
    });

    it("should throw error if salary is not a number", () => {
      expect(() => {
        payslipService.calcMonthlyPayslip("abc");
      }).toThrow(/Annual salary must be a number/);
    });

    it("should throw error if salary is less than 0", () => {
      expect(() => {
        payslipService.calcMonthlyPayslip(-100);
      }).toThrow(/Annual salary must not be less than 0/);
    });
  });

  describe("calculate monthly payslip", () => {
    describe("with annual salary 0", () => {
      const salary = 0;
      it("should have grossMonthlyIncome equal 0", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          0
        );
      });

      it("should have monthlyIncomeTax equal 0", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          0
        );
      });

      it("should have netMonthlyIncome equal 0", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          0
        );
      });
    });

    describe("with annual salary 20000", () => {
      const salary = 20000;
      it("should have grossMonthlyIncome equal 1666.67", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          1666.67
        );
      });

      it("should have monthlyIncomeTax equal 0", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          0
        );
      });

      it("should have netMonthlyIncome equal 1666.67", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          1666.67
        );
      });
    });

    describe("with annual salary 20000.99", () => {
      const salary = 20000.99;
      it("should have grossMonthlyIncome equal 1666.67", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          1666.75
        );
      });

      it("should have monthlyIncomeTax equal 0", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          0
        );
      });

      it("should have netMonthlyIncome equal 1666.67", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          1666.75
        );
      });
    });

    describe("with annual salary 20001", () => {
      const salary = 20001;
      it("should have grossMonthlyIncome equal 1666.75", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          1666.75
        );
      });

      it("should have monthlyIncomeTax equal 0.01", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          0.01
        );
      });

      it("should have netMonthlyIncome equal 1666.74", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          1666.74
        );
      });
    });

    describe("with annual salary 60000", () => {
      const salary = 60000;
      it("should have grossMonthlyIncome equal 5000", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          5000
        );
      });

      it("should have monthlyIncomeTax equal 500", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          500
        );
      });

      it("should have netMonthlyIncome equal 4500 ", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          4500
        );
      });
    });

    describe("with annual salary 100000", () => {
      const salary = 100000;
      it("should have grossMonthlyIncome equal 8333.33", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          8333.33
        );
      });

      it("should have monthlyIncomeTax equal 1333.33", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          1333.33
        );
      });

      it("should have netMonthlyIncome equal 7000 ", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          7000
        );
      });
    });

    describe("with annual salary 300000", () => {
      const salary = 300000;
      it("should have grossMonthlyIncome equal 25000", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "grossMonthlyIncome",
          25000
        );
      });

      it("should have monthlyIncomeTax equal 7333.33", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "monthlyIncomeTax",
          7333.33
        );
      });

      it("should have netMonthlyIncome equal 17666.67 ", () => {
        expect(payslipService.calcMonthlyPayslip(salary)).toHaveProperty(
          "netMonthlyIncome",
          17666.67
        );
      });
    });
  });
});
