import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Labels } from ".";

describe("Labels", () => {
  it.todo("should check a11y features", async () => {
    userEvent.setup();

    render(<Labels />);

    expect(true).toBe(true);
  });
});
