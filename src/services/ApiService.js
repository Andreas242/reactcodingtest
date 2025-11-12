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
      const response = await fetch(`${API_BASE_URL}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let posts = await response.json();

      if (filters.checkbox1) {
        posts = posts.filter(post => post.userId === 1);
      }

      if (filters.checkbox2) {
        posts = posts.filter(post => post.userId === 2);
      }

      if (filters.dropdown) {
        posts = posts.slice(0,5);
        console.log(posts);
      }

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

  static async delay(ms = 500) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default ApiService;