import News from './news/news';
import Sources from './sources/sources';
import { IDataArticles, IDataSources } from '../types/types';

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IDataArticles) {
    this.news.draw(data.articles ? data.articles : []);
  }

  drawSources(data: IDataSources) {
    this.sources.draw(data.sources ? data.sources : []);
  }
}

export default AppView;
