import axios from "axios";

// Initialize an instance of axios
const api = axios.create({
  baseURL: "https://api.example.com", // Base URL of the API
  timeout: 5000, // Request timeout (will throw error if exceeded)
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Interceptors to handle requests and responses
api.interceptors.request.use(
  (config) => {
    // Add token to the header (if needed)
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    //
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors (if needed)
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error
      console.error("Unauthorized");
      // Redirect or handle logout
    }
    return Promise.reject(error);
  }
);

export default api;
