import React, { useState, useEffect, useCallback } from "react";
import Filter from "./components/Filter";
import Table from "./components/Table";
import ApiService from "./services/ApiService";
import "./App.css";

function App() {
  const [tableData, setTableData] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentFilters, setCurrentFilters] = useState({});

  useEffect(() => {
    const loadDropdownOptions = async () => {
      try {
        const options = await ApiService.fetchDropdownOptions();
        setDropdownOptions(options);
      } catch (err) {
        console.error("Failed to load dropdown options:", err);
        setDropdownOptions([
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ]);
      }
    };

    loadDropdownOptions();
    loadTableData({});
  }, []);
  const loadTableData = useCallback(async (filters) => {
    setLoading(true);
    setError(null);

    try {
      await ApiService.delay(300);
      const data = await ApiService.fetchTableData(filters);
      console.log("data 2", data);
      setTableData(data);
      setCurrentFilters(filters);
    } catch (err) {
      setError(err.message || "Failed to load data");
      setTableData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFilterChange = useCallback(
    (newFilters) => {
      loadTableData(newFilters);
    },
    [loadTableData]
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Coding Test POC</h1>
        <p>Filter component with API integration and dynamic table display</p>
      </header>

      {/* Legger til id, så man kan lage skip-to-content lenker */}
      <main className="app-main" id="app-main">
        {/* Semantisk element med label */}
        <section
          className="filter-section"
          aria-label="Filtrer, TODO: god beskrivelse her"
        >
          <Filter
            onFilterChange={handleFilterChange}
            dropdownOptions={dropdownOptions}
          />
        </section>

        {/* semantisk element og id så man kan legge til skip-to-content lenker */}
        <section
          id="table-section"
          className="table-section"
          aria-label="Tabell med resultater fra filtreringsvalg"
        >
          <Table data={tableData} loading={loading} error={error} />
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with React • Uses JSONPlaceholder API for demo data</p>
      </footer>
    </div>
  );
}

export default App;
