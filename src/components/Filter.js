import React, { useState, useEffect } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange, dropdownOptions = [] }) => {
  const [filters, setFilters] = useState({
    checkbox1: false,
    checkbox2: false,
    dropdown: ''
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleCheckboxChange = (checkboxName) => {
    setFilters(prev => ({
      ...prev,
      [checkboxName]: !prev[checkboxName]
    }));
  };

  const handleDropdownChange = (event) => {
    setFilters(prev => ({
      ...prev,
      dropdown: event.target.value
    }));
  };

  return (
    <div className="filter-container">
      <h3>Filter Options</h3>
      
      <div className="filter-section">
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.checkbox1}
              onChange={() => handleCheckboxChange('checkbox1')}
            />
            <span>Users with ID 1</span>
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.checkbox2}
              onChange={() => handleCheckboxChange('checkbox2')}
            />
            <span>Users with ID 2</span>
          </label>
        </div>

        <div className="dropdown-group">
          <label htmlFor="filter-dropdown">Category:</label>
          <select
            id="filter-dropdown"
            value={filters.dropdown}
            onChange={handleDropdownChange}
            className="filter-dropdown"
          >
            <option value="">Select an option...</option>
            {/* TODO: Dynamically populate dropdown options */}
          </select>
        </div>
      </div>

      <div className="filter-status">
        <small>
          Active filters: 
          {/* Display active filters */}
        </small>
      </div>
    </div>
  );
};

export default Filter;