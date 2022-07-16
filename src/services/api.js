import axios from 'axios';

const MY_KEY = '27248041-6e0a0caa3e99197ab76e142e6';

export const imagesApi = async (query, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
