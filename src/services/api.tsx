import axios from 'axios';
export const BASE_URL = 'https://newsapi.org/v2/';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getHeadlineByCountry = async () => {
  axios
    .get(
      'https://newsapi.org/v2/everything?q=tesla&from=2024-05-18&sortBy=publishedAt&apiKey=ecfb933fbc53471a92a2ed9801e59a34'
    )
    .then((response: any) => {
      // handle success
      return response.data;
    })
    .catch((error: any) => {
      // handle error
      console.log(error);
    });
};

export const fetchSearchDataApi = async (query: any) => {
  const API_KEY = 'ecfb933fbc53471a92a2ed9801e59a34';
  const key4 = '2d55f494fe674381af5e990d5d995b6e';
  const key5 = 'ac009e2e2d1b4cc3a6ec7087c51a73af';
  try {
    const data = await axios.get(
      ` https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
