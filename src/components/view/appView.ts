import News from './news';
import Sources from './sources';
import { IDataArticles, IDataSources } from '../types';

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
