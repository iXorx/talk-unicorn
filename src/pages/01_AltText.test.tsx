import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AltText } from ".";

describe("AltText", () => {
  it.todo("should check a11y features", () => {
    render(<AltText />);

    screen.debug();

    expect(true).toBe(true);
  });
});
