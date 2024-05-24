export function imagesRender(arr) {
  return arr
    .map(arr => `<li><a href=""><img src="${arr.previewURL}" alt=""></a></li>`)
    .join('');
}
