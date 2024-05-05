import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { AltText } from ".";

describe("AltText", () => {
  it.todo("should check a11y features", () => {
    render(<AltText />);

    // Comprobación texto alternativo sin definir
    expect(screen.getByRole("img")).toBeInTheDocument();

    // Comprobación texto alternativo sin definir
    expect(screen.getByRole("img", { name: "" })).toBeInTheDocument();
  });
});
