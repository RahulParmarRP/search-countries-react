import React, { useState } from "react";
import { SearchBox } from "../../atoms/SearchBox/SearchBox";
import { Table } from "../../molecules/Table/Table";
import { useCountryData } from "../../../hooks/useCountryData";
import Pagination from "../../molecules/Pagination/Pagination";

const CountryTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data, loading, hasSearched } = useCountryData({ query: searchTerm });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset current page to 1 when searching
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <Table
        data={data}
        loading={loading}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        hasSearched={hasSearched}
      />
      {!loading ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      ) : null}
    </>
  );
};

export default CountryTable;
