import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination component", () => {
  it("renders correctly with pagination buttons", () => {
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
    );

    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("disables Prev button on first page", () => {
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
    );

    const prevButton = screen.getByText("Prev");
    expect(prevButton).toBeDisabled();
  });

  it("disables Next button on last page", () => {
    render(
      <Pagination currentPage={3} totalPages={3} onPageChange={() => {}} />
    );

    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  it("calls onPageChange with correct page number when a page button is clicked", () => {
    const onPageChangeMock = jest.fn();
    render(
      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={onPageChangeMock}
      />
    );

    fireEvent.click(screen.getByText("2"));

    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });
});
