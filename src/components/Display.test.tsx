import Display from "./Display";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Display", () => {
  it("should render", () => {
    render(<Display />);
  });

  it("should render a TextField", () => {
    render(<Display />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should only accept number and the main four operator characters", () => {
    render(<Display />);
    const input = screen.getByRole("textbox");
    userEvent.click(input);
    userEvent.type(input, "abc123+-*/^&#");
    // @ts-expect-error;
    expect(input.value).toBe("123+-*/");
  });
});
