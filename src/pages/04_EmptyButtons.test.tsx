import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EmptyButtons } from ".";

describe("EmptyButtons", () => {
  it.todo("should check a11y features", () => {
    render(<EmptyButtons />);

    expect(true).toBe(true);
  });
});
