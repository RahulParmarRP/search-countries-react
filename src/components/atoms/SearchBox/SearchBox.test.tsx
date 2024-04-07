import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("SearchBox component", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders without crashing", () => {
    render(<SearchBox onSearch={() => {}} />);
    const inputElement = screen.getByTestId("search-box");
    expect(inputElement).toBeInTheDocument();
  });

  it("updates search term on input change", () => {
    render(<SearchBox onSearch={() => {}} />);
    const inputElement = screen.getByTestId("search-box") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test" } });
    expect(inputElement.value).toBe("test");
  });

  it("focuses input on Ctrl+k key press", () => {
    render(<SearchBox onSearch={() => {}} />);
    const inputElement = screen.getByTestId("search-box");
    fireEvent.keyDown(document, { key: "k", ctrlKey: true });
    expect(inputElement).toHaveFocus();
  });

  it("has correct aria-label attribute", () => {
    render(<SearchBox onSearch={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("aria-label", "Search countries");
  });
});
