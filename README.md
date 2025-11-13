# React Coding Test - Audun 

Welcome to the React Coding Test! This project contains a working React application with filtering and table display functionality. Your task is to enhance this application by implementing the features described below - please communicate as much as possible and talk alound while you work. Feel free to ask questions/google etc. No AI allowed so please turn off all AI-tools (which is funny since most of this text is AI-generated).

## 📋 Current Application Overview

The application currently includes:

- A **Filter Component** with two checkboxes and a dropdown
- A **Table Component** that displays data from JSONPlaceholder API
- **Real-time filtering** that triggers API calls when filters change
- **Loading states** and **error handling**

**⚠️ Note:** The application currently has incomplete functionality that needs to be implemented as part of your tasks.

## 🛠️ Required Setup Tasks (Complete These First)

Before starting the advanced tasks, you need to complete these foundational TODOs found in the codebase:

### **Setup Task A: Complete API Service**

**File:** `src/services/ApiService.js`
**Requirements:**

- Complete the `fetchTableData()` method to fetch data from `/posts` endpoint
- Implement filtering logic based on the comments in the code:
  - If `checkbox1` is true: show only data for userId 1
  - If `checkbox2` is true: show only data for userId 2
  - If both are true: show data for userId 1 AND 2
  - If none are true: show all data
- Feel free to rename filter keys as appropriate

### **Setup Task B: Fix Table Component**

**File:** `src/components/Table.js`
**Requirements:**

- Dynamically generate table headers based on data keys
- Fix the incomplete `headers` variable (currently empty object)
- Ensure the table displays data correctly

### **Setup Task C: Complete Filter Component**

**File:** `src/components/Filter.js`  
**Requirements:**

- Dynamically populate dropdown options using the `dropdownOptions` prop
- Display active filters in the filter status section
- Update checkbox labels to match the filtering logic

### **Setup Task D: Fix CSS Layout**

**File:** `src/components/Table.css`
**Requirements:**

- Fix CSS so table header stays fixed while scrolling data rows
- Ensure page layout looks good with header, filter, and table components
- Make the table responsive and user-friendly

## 📁 Project Structure

```
reactcodingtest/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Filter.js          # Filter with checkboxes & dropdown (HAS TODOs)
│   │   ├── Filter.css         # Filter component styles
│   │   ├── Table.js           # Data table component (HAS TODOs)
│   │   └── Table.css          # Table styles (NEEDS CSS FIXES)
│   ├── services/
│   │   └── ApiService.js      # API service (HAS TODOs - INCOMPLETE)
│   ├── hooks/                 # Create this for Task 3 (custom hooks)
│   ├── context/               # Create this for Task 5 (Context API)
│   ├── utils/                 # Create this for utility functions
│   ├── App.js                 # Main application component
│   ├── App.css                # Main application styles
│   └── index.js               # Application entry point
├── package.json               # Dependencies and scripts
├── webpack.config.js          # Webpack configuration
├── babel.config.js            # Babel configuration
└── README.md                  # This file
```

## 🚀 Getting Started

1. **Clone and Setup:**

   ```bash
   npm install
   npm start
   ```

2. **Development Server:**

   - Application runs on `http://localhost:3000`
   - The app may not work fully until you complete the setup tasks

3. **Current State:**
   - ✅ Basic React app structure is set up
   - ✅ Filter component UI is created
   - ✅ Table component UI is created
   - ❌ API data fetching is incomplete
   - ❌ Table headers are not generated dynamically
   - ❌ Dropdown options are not populated
   - ❌ CSS layout needs fixes

## 📝 Files with TODOs (Start Here!)

### `src/services/ApiService.js`

```javascript
// TODO: Complete the fetchTableData method
// TODO: Implement userId filtering logic
// TODO: Handle API response and error cases
```

### `src/components/Table.js`

```javascript
// TODO: Dynamically generate table headers based on data keys
// TODO: Fix CSS for sticky headers and layout
```

### `src/components/Filter.js`

```javascript
// TODO: Dynamically populate dropdown options
// TODO: Display active filters status
```

### `src/components/Table.css`

```css
/* TODO: Fix table header to stay fixed while scrolling */
/* TODO: Improve page layout for all components */
```

## 🔍 Evaluation Criteria

---

## 🎯 Advanced Enhancement Tasks (After Setup)

Once you've completed the setup tasks, implement these advanced features in order:

### **Task 1: Sort the Table by Clicking Headers** ⭐

**Difficulty: Easy | Time: 30-45 minutes**

**Requirements:**

- Add click handlers to table headers (ID, Title, Body, User ID)
- Implement ascending/descending sort functionality
- Show visual indicators (arrows) for current sort direction
- Maintain sort state when filters change

### **Task 2: Implement Search Input as Part of Filter** ⭐⭐

**Difficulty: Easy-Medium | Time: 45-60 minutes**

**Requirements:**

- Add a search input field to the Filter component
- Search should filter table data by title and body content (case-insensitive)
- Implement debouncing (wait 300ms after user stops typing before making API call)
- Search should work in combination with existing checkbox and dropdown filters
- Show a clear/reset button for the search input

### **Task 3: Extract API Logic to Custom Hook** ⭐⭐⭐

**Difficulty: Medium | Time: 60-90 minutes**

**Requirements:**

- Create a custom hook called `useTableData` that handles data fetching, loading states, error handling, and filter management
- Create another custom hook called `useDropdownData` for dropdown options
- Refactor App.js to use these custom hooks
- Maintain all existing functionality

### **Task 4: Implement Virtual Scrolling** ⭐⭐⭐⭐

**Difficulty: Hard | Time: 2-3 hours**

**Requirements:**

- Implement virtual scrolling for the table to handle large datasets efficiently
- Only render visible rows in the DOM
- Maintain smooth scrolling experience
- Test with datasets of 1000+ items

### **Task 5: Replace Prop Drilling with Context** ⭐⭐⭐

**Difficulty: Medium-Hard | Time: 90-120 minutes**

**Requirements:**

- Create a React Context for managing application state
- Replace prop drilling between App → Filter → Table components
- Implement context provider that manages filter states, table data, loading states, and error states

### **Task 6: Add WebSocket Connection** ⭐⭐⭐⭐⭐

**Difficulty: Very Hard | Time: 3-4 hours**

**Requirements:**

- Add WebSocket connection for real-time data updates
- Simulate real-time updates to table data (you can mock the WebSocket server)
- Show visual indicators when data is updated via WebSocket
- Handle WebSocket connection states and implement reconnection logic

### **Task 7: Drag and Drop Table Rows** ⭐⭐⭐⭐

**Difficulty: Hard | Time: 2-3 hours**

**Requirements:**

- Make table rows draggable and reorderable
- Implement visual feedback during drag operations
- Persist the new order after dropping
- Ensure drag and drop works with filtered/sorted data

---

1. **Setup Completion:** Can you complete the basic TODOs to make the app functional?
2. **Code Quality:** Clean, readable, and well-commented code
3. **React Best Practices:** Proper use of hooks, components, and patterns
4. **Problem Solving:** How you approach and solve complex challenges
5. **Performance:** Consideration for optimization and user experience

## 📋 Submission Checklist

- [ ] Complete all setup tasks (A, B, C, D)
- [ ] Application runs without errors
- [ ] Table displays data correctly
- [ ] Filters work as expected
- [ ] At least 2-3 advanced tasks completed
- [ ] Code is well-documented
- [ ] Git commits show progression

## ❓ Getting Help

- Check browser console for errors
- Read the existing code comments for guidance
- Test each piece of functionality as you build it
- Focus on getting the basic functionality working first

**Start with the Setup Tasks - Good luck! 🚀**

---

## API Endpoints Used

- **Dropdown Data**: `https://jsonplaceholder.typicode.com/users`
  - Extracts company names for dropdown options
- **Table Data**: `https://jsonplaceholder.typicode.com/posts`
  - Fetches posts data for table display

## Technical Stack

- **React 18**: Functional components with hooks
- **Webpack 5**: Module bundling and development server
- **Babel**: JavaScript transpilation
- **CSS3**: Modern styling with flexbox and grid
- **Fetch API**: HTTP requests to external APIs

# React Coding Test POC

This is a React-based POC application built for programming test purposes. It demonstrates a filter component with API integration and dynamic table display.

## Features

- **Filter Component**: Two checkboxes and one dropdown that triggers API calls on change
- **Dynamic Table**: Displays data fetched from public APIs with loading and error states
- **API Integration**: Uses JSONPlaceholder API for demo data
- **Real-time Updates**: Table data updates automatically when filters change
- **Responsive Design**: Works on desktop and mobile devices

------------ MORE INFO -----------

## Getting Started

## Components

### Filter Component

- Two configurable checkboxes
- Dropdown populated from external API
- Real-time filter status display
- Triggers API calls on any change

### Table Component

- Dynamic column generation based on data structure
- Loading spinner during API calls
- Error handling and display
- Responsive table with scroll support
- Hover effects and alternating row colors

### API Service

- Fetches dropdown options from JSONPlaceholder users API
- Fetches table data from JSONPlaceholder posts API
- Simulates filtering based on checkbox and dropdown values
- Error handling and retry logic

## API Endpoints Used

- **Dropdown Data**: `https://jsonplaceholder.typicode.com/users`
  - Extracts company names for dropdown options
- **Table Data**: `https://jsonplaceholder.typicode.com/posts`
  - Fetches posts and applies simulated filtering

## Project Structure

\`\`\`
src/
├── components/
│ ├── Filter.js # Filter component with checkboxes and dropdown
│ ├── Filter.css # Filter component styles
│ ├── Table.js # Data table component
│ └── Table.css # Table component styles
├── services/
│ └── ApiService.js # API service for data fetching
├── App.js # Main application component
├── App.css # Main application styles
└── index.js # Application entry point
\`\`\`

## Technical Details

- **React 18**: Using functional components with hooks
- **Webpack 5**: Module bundling and development server
- **Babel**: JavaScript transpilation
- **CSS3**: Modern styling with flexbox and grid
- **Fetch API**: For HTTP requests to external APIs

## Development Notes

- The filter component uses `useEffect` to trigger API calls when filter values change
- Loading states and error handling are implemented throughout
- The app includes debug information panel for development purposes
- Responsive design ensures compatibility across different screen sizes
