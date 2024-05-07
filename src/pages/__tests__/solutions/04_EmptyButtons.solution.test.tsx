import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EmptyButtons } from "../..";

describe("EmptyButtons", () => {
  it("should check that any button is empty", () => {
    render(<EmptyButtons />);

    // Caso base
    expect(screen.getByText("Guardar")).toBeInTheDocument();

    // Añadimos capa de accesibilidad
    expect(screen.getByRole("button")).toBeInTheDocument();

    // Mejoramos la capa de accesibilidad
    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();

    // Verificamos que el botón está oculto
    expect(
      screen.getByRole("button", { name: "Guardar", hidden: true })
    ).toBeInTheDocument();

    // Juego de botones ocultos y visibles
    expect(screen.getAllByRole("button", { hidden: true })).toHaveLength(2);
    expect(screen.getAllByRole("button", { hidden: false })).toHaveLength(1);
  });
});
