const { roundToTwo } = require("./round");

describe("roundToTwo", () => {
  it("should return 100 if input is 100", () => {
    expect(roundToTwo(100)).toBe(100);
  });

  it("should return 0.01 if input is 0.014", () => {
    expect(roundToTwo(0.014)).toBe(0.01);
  });

  it("should return 0.02 if input is 0.015", () => {
    expect(roundToTwo(0.015)).toBe(0.02);
  });

  it("should return 1000 if input is 999.995", () => {
    expect(roundToTwo(999.995)).toBe(1000);
  });
});
