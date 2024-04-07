import { useCtrlKFocus } from "../useCtrlKFocus";
import { useRef } from "react";
import { render, screen, renderHook } from "@testing-library/react";

describe("useCtrlKFocus hook", () => {
  it("should focus input when Ctrl+k is pressed", async () => {
    const TestComponent = () => {
      const inputRef = useRef<HTMLInputElement>(null);
      useCtrlKFocus(inputRef);
      return <input ref={inputRef} data-testid="test-input" />;
    };
    render(<TestComponent />);

    const inputElement = await screen.findByTestId("test-input");

    const ctrlKKeyPressEvent = new KeyboardEvent("keydown", {
      key: "k",
      ctrlKey: true
    });
    document.dispatchEvent(ctrlKKeyPressEvent);

    expect(inputElement).toHaveFocus();
  });

  it("should not focus input when Ctrl+k is not pressed", () => {
    const inputRef = { current: document.createElement("input") };

    renderHook(() => useCtrlKFocus(inputRef));

    const otherKeyPressEvent = new KeyboardEvent("keydown", {
      key: "a",
      ctrlKey: false
    });
    document.dispatchEvent(otherKeyPressEvent);
    expect(inputRef.current).not.toHaveFocus();
  });
});
