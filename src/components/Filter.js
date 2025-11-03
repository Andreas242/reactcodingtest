import React, { useState, useEffect } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange, dropdownOptions = [] }) => {
  const [filters, setFilters] = useState({
    checkbox1: false,
    checkbox2: false,
    dropdown: ''
  });

  // Trigger API call whenever filter values change
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
            <span>Filter Option 1</span>
          </label>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={filters.checkbox2}
              onChange={() => handleCheckboxChange('checkbox2')}
            />
            <span>Filter Option 2</span>
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
            {dropdownOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="filter-status">
        <small>
          Active filters: 
          {filters.checkbox1 && ' Option1'}
          {filters.checkbox2 && ' Option2'}
          {filters.dropdown && ` Category: ${filters.dropdown}`}
          {!filters.checkbox1 && !filters.checkbox2 && !filters.dropdown && ' None'}
        </small>
      </div>
    </div>
  );
};

export default Filter;