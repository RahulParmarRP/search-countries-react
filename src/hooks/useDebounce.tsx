import { useState } from "react";

// Custom hook for debouncing
export const useDebounce = (callback: Function, delay: number) => {
  const [timerId, setTimerId] = useState<any>(null);

  return (...args: any[]) => {
    clearTimeout(timerId);
    const id = setTimeout(() => {
      callback(...args);
    }, delay);
    setTimerId(id);
  };
};
