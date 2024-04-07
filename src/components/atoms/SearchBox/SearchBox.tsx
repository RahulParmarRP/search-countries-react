import React, { useState, useRef } from "react";
import { SearchBoxProps } from "../../../types";
import { useDebounce } from "../../../hooks/useDebounce";
import { useCtrlKFocus } from "../../../hooks/useCtrlKFocus";

export const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  // custom hook to focus input when Ctrl+k is pressed
  useCtrlKFocus(inputRef);

  // function to trigger API call with debouncing
  const delayedSearch = useDebounce(onSearch, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    delayedSearch(value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search countries..."
      value={searchTerm}
      onChange={handleChange}
      data-testid="search-box"
      aria-label="Search countries"
    />
  );
};

export default SearchBox;
