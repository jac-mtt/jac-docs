import React from "react";
import { parseCsv } from "../utils/parseDocCsv";

const CsvTable = ({ csvData }: { csvData: string }) => {
  const { headers, rows } = parseCsv(csvData);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>
                {cellIndex < 2 ? <code>{cell}</code> : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CsvTable;