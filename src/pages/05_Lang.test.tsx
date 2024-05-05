import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Lang } from ".";

describe("Lang", () => {
  it.todo("should check a11y features", () => {
    render(<Lang />);

    // let topParent = screen.getByText("Lang page content");
    let topParent = screen.getByRole("heading", { name: "Languages" });
    while (topParent.parentElement) {
      if (topParent.getAttribute("lang")) {
        break;
      }
      topParent = topParent.parentElement;
    }

    expect(topParent).toHaveAttribute("lang", "en");
  });
});
