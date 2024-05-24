import { pixabayApi } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';

const form = document.querySelector('.find-form');
const imagePlace = document.querySelector('.list-image');

form.addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(form);
  const findText = formData.get('find-text');
  if (findText === '') {
    return;
  }
  pixabayApi(findText).then(data => {
    const markup = imagesRender(data.hits);
    imagePlace.innerHTML = markup;
  });
});
