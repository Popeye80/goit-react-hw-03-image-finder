import axios from 'axios';

export async function fechImg(searchQwery, page) {
  const BASIC_URL = 'https://pixabay.com/api/';
  const KEY = '27248041-6e0a0caa3e99197ab76e142e6';
  return await axios.get(
    `${BASIC_URL}?key=${KEY}&q=${searchQwery}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
}

