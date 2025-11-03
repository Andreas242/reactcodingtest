import React, { useState, useEffect, useCallback } from 'react';
import Filter from './components/Filter';
import Table from './components/Table';
import ApiService from './services/ApiService';
import './App.css';

function App() {
  const [tableData, setTableData] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentFilters, setCurrentFilters] = useState({});

  // Load dropdown options on component mount
  useEffect(() => {
    const loadDropdownOptions = async () => {
      try {
        const options = await ApiService.fetchDropdownOptions();
        setDropdownOptions(options);
      } catch (err) {
        console.error('Failed to load dropdown options:', err);
        // Set some fallback options if API fails
        setDropdownOptions([
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ]);
      }
    };

    loadDropdownOptions();
    // Load initial table data
    loadTableData({});
  }, []);

  // Function to load table data based on filters
  const loadTableData = useCallback(async (filters) => {
    setLoading(true);
    setError(null);
    
    try {
      // Add small delay to show loading state
      await ApiService.delay(300);
      const data = await ApiService.fetchTableData(filters);
      setTableData(data);
      setCurrentFilters(filters);
    } catch (err) {
      setError(err.message || 'Failed to load data');
      setTableData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle filter changes from Filter component
  const handleFilterChange = useCallback((newFilters) => {
    console.log('Filter changed:', newFilters);
    loadTableData(newFilters);
  }, [loadTableData]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Coding Test POC</h1>
        <p>Filter component with API integration and dynamic table display</p>
      </header>

      <main className="app-main">
        <div className="filter-section">
          <Filter 
            onFilterChange={handleFilterChange}
            dropdownOptions={dropdownOptions}
          />
        </div>

        <div className="table-section">
          <Table 
            data={tableData}
            loading={loading}
            error={error}
          />
        </div>

        {/* Debug information */}
        <div className="debug-info">
          <details>
            <summary>Debug Information (Click to expand)</summary>
            <div className="debug-content">
              <h4>Current Filters:</h4>
              <pre>{JSON.stringify(currentFilters, null, 2)}</pre>
              
              <h4>Dropdown Options:</h4>
              <pre>{JSON.stringify(dropdownOptions, null, 2)}</pre>
              
              <h4>API Status:</h4>
              <ul>
                <li>Loading: {loading ? 'Yes' : 'No'}</li>
                <li>Error: {error || 'None'}</li>
                <li>Data Count: {tableData.length}</li>
              </ul>
            </div>
          </details>
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React • Uses JSONPlaceholder API for demo data</p>
      </footer>
    </div>
  );
}

export default App;