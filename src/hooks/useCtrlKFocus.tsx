import React from "react";
import { useEffect } from "react";

export const useCtrlKFocus = (
  ref: React.MutableRefObject<HTMLInputElement | null>
) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        // to prevent chrome search bar from getting focused
        event.preventDefault();
        ref.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      // clean up
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [ref]);
};
