import React from 'react';
import './Table.css';
// TODO: we need to fix the CSS so that the table header stays fixed while scrolling the data rows 
// and that the page layout looks good with header, filter and table components
const Table = ({ data = [], loading = false, error = null }) => {
  if (loading) {
    return (
      <div className="table-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-container">
        <div className="error-message">
          <h4>Error loading data</h4>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="table-container">
        <div className="no-data">
          <p>No data available</p>
        </div>
      </div>
    );
  }

  // TODO: Dynamically generate table headers based on data keys
  const headers = {};

  return (
    <div className="table-container">
      <h3>Data Results ({data.length} items)</h3>
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>
                  {header.charAt(0).toUpperCase() + header.slice(1).replace(/([A-Z])/g, ' $1')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header}>
                    {typeof row[header] === 'object' 
                      ? JSON.stringify(row[header]) 
                      : String(row[header] || '')
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;