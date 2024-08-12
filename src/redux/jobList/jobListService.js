import axios from 'axios';

const API_URL = 'https://dev6.dansmultipro.com/api/recruitment/positions.json';

export const fetchJobList = async (params) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching job list:', error);
    throw error;
  }
};
