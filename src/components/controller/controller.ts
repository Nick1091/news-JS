import AppLoader from './appLoader';
import { IDataArticles, IDataSources, Callback } from '../types/types';

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
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;
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
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
