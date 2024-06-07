import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Lang } from ".";

describe("Lang", () => {
  it.todo("should check a11y features", () => {
    render(<Lang />);

    screen.debug();

    expect(true).toBe(true);
  });
});
