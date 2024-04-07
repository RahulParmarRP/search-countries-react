import { RenderRow } from "./RenderRow";
import { render, screen } from "@testing-library/react";

describe("RenderRow component", () => {
  const country = {
    name: {
      common: "Test Country"
    },
    flags: {
      png: "test.png"
    }
  };
  const index = 1;

  it("renders country name and flag", () => {
    render(<RenderRow country={country} index={index} />);

    const countryNameElement = screen.getByText("Test Country");
    expect(countryNameElement).toBeInTheDocument();

    const flagElement = screen.getByAltText("Test Country Flag");
    expect(flagElement).toBeInTheDocument();
    expect(flagElement).toHaveAttribute("src", "test.png");
  });

  it("renders index correctly", () => {
    render(<RenderRow country={country} index={index} />);

    const indexElement = screen.getByText("1");
    expect(indexElement).toBeInTheDocument();
  });
});
