import axios from 'axios';

const API_URL = 'https://dev6.dansmultipro.com/api/recruitment/positions';

export const fetchJobDetail = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
