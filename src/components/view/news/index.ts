import './news.css';
import { DataNews } from '../../types';

class News {
  draw(data: DataNews[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp');
    if (!(newsItemTemp instanceof HTMLTemplateElement)) {
      throw new Error('');
    }
    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true);
      if (!(newsClone instanceof HTMLElement)) {
        throw new Error('');
      }

      if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

      const newsClonePhoto = newsClone.querySelector('.news__meta-photo');
      const newsCloneAuthor = newsClone.querySelector('.news__meta-author');
      const newsCloneDate = newsClone.querySelector('.news__meta-date');
      if (!(newsClonePhoto instanceof HTMLElement)) {
        throw new Error('');
      }
      if (!(newsCloneAuthor instanceof HTMLElement)) {
        throw new Error('');
      }
      if (!(newsCloneDate instanceof HTMLElement)) {
        throw new Error('');
      }
      newsClonePhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
      newsCloneAuthor.textContent = item.author || item.source.name;
      newsCloneDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      newsClone.querySelector('.news__description-title').textContent = item.title;
      newsClone.querySelector('.news__description-source').textContent = item.source.name;
      newsClone.querySelector('.news__description-content').textContent = item.description;
      newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    document.querySelector('.news').innerHTML = '';
    document.querySelector('.news').appendChild(fragment);
  }
}

export default News;
