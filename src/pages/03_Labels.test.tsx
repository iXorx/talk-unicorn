import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Labels } from ".";

describe("Labels", () => {
  it.todo("should check a11y features", async () => {
    userEvent.setup();

    render(<Labels />);

    const nameInput = screen.getByLabelText("Nombre");
    expect(nameInput).toBeInTheDocument();

    await userEvent.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");

    // nameInput.focus();
    // expect(nameInput).toHaveFocus();

    // await userEvent.tab();
    // await userEvent.tab();
    // expect(nameInput).not.toHaveFocus();

    // expect(screen.getByLabelText("Domicilio")).toHaveFocus();
  });
});
