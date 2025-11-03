const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
//posterne ligger i /posts

class ApiService {
  static async fetchDropdownOptions() {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const users = await response.json();
      
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

  static async fetchTableData(filters = {}) {
    try {
        // hente data og vise den i tabellen
    } catch (error) {
      console.error('Error fetching table data:', error);
      throw error;
    }
  }

  static async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default ApiService;