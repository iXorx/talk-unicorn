import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Labels } from "../..";

describe("Labels", () => {
  it("should check associated labels with inputs", async () => {
    userEvent.setup();

    render(<Labels />);

    // Obtenemos el input por su label
    const nameInput = screen.getByLabelText("Nombre");
    expect(nameInput).toBeInTheDocument();

    // Comprobamos que podemos escribir en el input
    await userEvent.type(nameInput, "John Doe");
    expect(nameInput).toHaveValue("John Doe");

    // Comprobamos que el input tiene el foco
    nameInput.focus();
    expect(nameInput).toHaveFocus();

    // Comprobamos que al hacer tab el input pierde el foco
    await userEvent.tab();
    await userEvent.tab();
    expect(nameInput).not.toHaveFocus();

    // Comprobamos que el input de domicilio tiene el foco
    expect(screen.getByLabelText("Domicilio")).toHaveFocus();
  });
});
