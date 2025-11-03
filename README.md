# React Coding Test POC

This is a React-based POC application built for programming test purposes. It demonstrates a filter component with API integration and dynamic table display.

## Features

- **Filter Component**: Two checkboxes and one dropdown that triggers API calls on change
- **Dynamic Table**: Displays data fetched from public APIs with loading and error states
- **API Integration**: Uses JSONPlaceholder API for demo data
- **Real-time Updates**: Table data updates automatically when filters change
- **Responsive Design**: Works on desktop and mobile devices

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

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm start
\`\`\`

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

## API Endpoints Used

- **Dropdown Data**: `https://jsonplaceholder.typicode.com/users`
  - Extracts company names for dropdown options
- **Table Data**: `https://jsonplaceholder.typicode.com/posts`  
  - Fetches posts and applies simulated filtering

## Project Structure

\`\`\`
src/
├── components/
│   ├── Filter.js          # Filter component with checkboxes and dropdown
│   ├── Filter.css         # Filter component styles
│   ├── Table.js           # Data table component
│   └── Table.css          # Table component styles
├── services/
│   └── ApiService.js      # API service for data fetching
├── App.js                 # Main application component
├── App.css                # Main application styles
└── index.js               # Application entry point
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

## Future Enhancements

- Add more sophisticated filtering options
- Implement pagination for large datasets  
- Add sorting capabilities to table columns
- Include unit tests and integration tests
- Add more comprehensive error handling
- Implement caching for API responses