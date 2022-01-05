import AppLoader from './appLoader';
import { IDataArticles, IDataSources, Callback } from '../types';

class AppController extends AppLoader {
  getSources(callback: Callback<IDataSources>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback<IDataArticles>) {
    if (!(e.target instanceof HTMLElement)) {
      throw new Error('Error');
    }
    let target = e.target;
    if (!(e.currentTarget instanceof HTMLElement)) {
      throw new Error('Error');
    }
    const newsContainer = e.currentTarget;
    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId: string = target.getAttribute('data-source-id');
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      if (!(target.parentNode instanceof HTMLElement)) {
        throw new Error('Error');
      }
      target = target.parentNode;
    }
  }
}

export default AppController;
