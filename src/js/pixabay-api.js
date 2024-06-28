import axios from "axios";
export async function searchImg(value, page) {
    axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44528758-32c26e02cbc7bd56fd7d9b89c',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  try {
    const response = await axios.get('/api/', { params });
      return response.data;
  } catch (err) {
    console.log(err);
  }
};