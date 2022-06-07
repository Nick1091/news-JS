import { News } from './news';
import { Sources } from './sources';
import { IDataArticles, IDataSources } from '../types';

export class AppView {
  news: typeof News;

  sources: typeof Sources;

  constructor() {
    this.news = News;
    this.sources = Sources;
  }

  drawNews(data: IDataArticles) {
    this.news.draw(data.articles ? data.articles : []);
  }

  drawSources(data: IDataSources) {
    this.sources.draw(data.sources ? data.sources : []);
  }
}

export default AppView;
