import React, { useState, useEffect } from "react";
import "./Table.css";
// TODO: we need to fix the CSS so that the table header stays fixed while scrolling the data rows
// and that the page layout looks good with header, filter and table components
const Table = ({ data = [], loading = false, error = null }) => {
  const [screenreaderMsg, setScreenreaderMsg] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [headers, setHeaders] = useState([]);

  // Update screen reader message når, loading, error, data endres
  useEffect(() => {
    setShowSpinner(loading);
    if (loading) {
      setScreenreaderMsg("Loading data...");
    } else if (error) {
      setScreenreaderMsg(`Error loading data`);
    } else if (!data || data.length === 0) {
      setScreenreaderMsg("No data available");
    } else {
      setScreenreaderMsg(`Fant ${data.length} resultater`);
      setHeaders(Object.keys(data[0]));
    }
  }, [loading, error, data]);

  return (
    <div className="table-container">
      {/* La til screen reader announce ved statusoppdatering */}
      <div>
        {showSpinner && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p className="flex justify-center" aria-hidden="true">
              {screenreaderMsg}
            </p>
          </div>
        )}

        <p
          aria-atomic="true"
          role="alert"
          className="flex justify-center visually-hidden"
        >
          {screenreaderMsg}
        </p>
      </div>

      {/* Conditional rendering når vi har data */}
      {data && data.length > 0 && (
        <>
          {/* Justerte til riktig h2 */}
          <h2>Results ({data.length} items)</h2>
          <div className="table-wrapper">
            <table className="data-table">
              {/* Visuelt skjult caption for kontekst til assistive tech */}
              <caption className="visually-hidden">
                Tabell med resultater fra filtervalg
              </caption>
              <thead>
                <tr>
                  {headers.map((header) => (
                    <th key={header} className="capitalize">
                      {/* Splitt ord, stor forbokstav med CSS */}
                      {header.slice(0).replace(/([A-Z])/g, " $1")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {headers.map((header) => (
                      <td key={header}>
                        {typeof row[header] === "object"
                          ? JSON.stringify(row[header])
                          : String(row[header] || "")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Table;
