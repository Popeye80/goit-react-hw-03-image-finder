import axios from 'axios';

const API_KEY = '27248041-6e0a0caa3e99197ab76e142e6';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (name, page) => {
  const res = await axios.get(
    `?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  const totalImage = res.data.totalHits;
  const images = res.data.hits;
  return {
    totalImage,
    images,
  };
};
