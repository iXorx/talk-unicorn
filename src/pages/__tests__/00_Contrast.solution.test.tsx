import { render, screen } from "@testing-library/react";
import ColorContrastChecker from "color-contrast-checker";
import { describe, it, expect } from "vitest";
import { Contrast } from "..";

describe.skip("Contrast", () => {
  it("should has proper AA contrast level", () => {
    render(<Contrast />);

    const target = screen.getByText(/I am red text/);
    const computed = getComputedStyle(target);
    const textColor = computed.getPropertyValue("color");
    const bgColor = computed.getPropertyValue("background-color");
    const fontSize = parseInt(computed.getPropertyValue("font-size"));

    const ccc = new ColorContrastChecker();
    expect(ccc.isLevelAA(textColor, bgColor, fontSize)).toBe(true);
  });

  it("should check contrast with background on parent", () => {
    render(
      <div style={{ backgroundColor: "#000", color: "#444" }}>
        <span style={{ color: "#fff" }}>target</span>
      </div>
    );

    const target = screen.getByText("target");
    const computed = getComputedStyle(target);

    let parentTarget = target.parentElement;
    let bgColor = "#000";
    while (parentTarget) {
      bgColor =
        getComputedStyle(parentTarget).getPropertyValue("background-color");
      if (bgColor !== "rgba(0, 0, 0, 0)") {
        break;
      }
      parentTarget = parentTarget.parentElement;
    }
    const textColor = computed.getPropertyValue("color");
    const ccc = new ColorContrastChecker();
    expect(ccc.isLevelAA(textColor, bgColor, 14)).toBe(true);
  });
});
