const API_URL = "https://api.api-ninjas.com";
const API_V1 = `${API_URL}/v1`;

const API_URLS = {
  exercises: (search: string) => `${API_V1}/exercises?${search}`,
};

export default API_URLS;
