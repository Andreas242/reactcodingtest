// API service for fetching data from public APIs
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

class ApiService {
  /**
   * Fetch dropdown options from a public API
   * Using JSONPlaceholder users API and extracting company names
   */
  static async fetchDropdownOptions() {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users = await response.json();
      
      // Extract unique company names for dropdown
      const companies = users.map(user => ({
        value: user.company.name.toLowerCase().replace(/\s+/g, '-'),
        label: user.company.name
      }));
      
      return companies;
    } catch (error) {
      console.error('Error fetching dropdown options:', error);
      throw error;
    }
  }

  /**
   * Fetch table data based on filter criteria
   * Using JSONPlaceholder posts API and simulating filtering
   */
  static async fetchTableData(filters = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let posts = await response.json();

      // Simulate filtering based on checkbox and dropdown values
      // In a real application, these would be sent as query parameters
      if (filters.checkbox1) {
        // Filter posts with userId <= 5 when checkbox1 is checked
        posts = posts.filter(post => post.userId <= 5);
      }

      if (filters.checkbox2) {
        // Filter posts with id <= 50 when checkbox2 is checked
        posts = posts.filter(post => post.id <= 50);
      }

      if (filters.dropdown) {
        // Simulate filtering by dropdown selection (just limit results for demo)
        posts = posts.slice(0, 20);
      }

      // Limit to first 20 posts for better display
      return posts.slice(0, 20).map(post => ({
        id: post.id,
        title: post.title,
        body: post.body.substring(0, 100) + '...',
        userId: post.userId
      }));
    } catch (error) {
      console.error('Error fetching table data:', error);
      throw error;
    }
  }

  /**
   * Simulate delay for better UX demonstration
   */
  static async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default ApiService;