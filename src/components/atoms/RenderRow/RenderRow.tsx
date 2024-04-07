import React from "react";
import { RenderRowProps } from "../../../types";

export const RenderRow: React.FC<RenderRowProps> = ({ country, index }) => (
  <tr key={country.name.common}>
    <td>{index}</td>
    <td>{country.name.common}</td>
    <td>
      <img
        src={country.flags.png}
        alt={`${country.name.common} Flag`}
        width="30"
        height="20"
      />
    </td>
  </tr>
);
