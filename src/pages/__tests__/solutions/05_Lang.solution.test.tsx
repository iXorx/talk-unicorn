import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Lang } from "../..";

describe("Lang", () => {
  it("should check lang defined", () => {
    render(<Lang />);

    let topParent = screen.getByRole("heading", {
      name: "Languages",
      level: 2,
    });

    while (topParent.parentElement) {
      if (topParent.getAttribute("lang")) {
        break;
      }
      topParent = topParent.parentElement;
    }

    expect(topParent).toHaveAttribute("lang", "en");
  });
});
