const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

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
        //TODO: fetch the data and display it in the table
        //the data we want is in /posts
        // if filters has checkbox1 true, we filter (only show) data for userId 1
        // if filters has checkbox2 true, we filter (only show) data for userId 2
        // if both are true, we get both userId 1 and 2
        // if none are true, we get all data
        // feel free to rename the filter keys/names as needed/appropriate
        let url = `${API_BASE_URL}/posts`;
        const params = new URLSearchParams();
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