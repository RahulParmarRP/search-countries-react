import React from "react";
import { TableProps } from "../../../types";
import { RenderRow } from "../../atoms/RenderRow/RenderRow";
import { Spinner } from "../../atoms/Spinner/Spinner";

export const Table: React.FC<TableProps> = ({
  data,
  currentPage,
  itemsPerPage,
  totalItems,
  loading,
  hasSearched
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  if (!hasSearched) {
    return <p>Start searching</p>;
  }

  if (totalItems === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <table className="table-container">
            <thead>
              <tr>
                <th>No.</th>
                <th>Country Name</th>
                <th>Country Flag</th>
              </tr>
            </thead>
            <tbody>
              {data.slice(startIndex, endIndex).map((country, index) => (
                <RenderRow
                  key={startIndex + index + 1}
                  country={country}
                  index={startIndex + index + 1}
                />
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Table;
