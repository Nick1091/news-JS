import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import Sources from '../view/sources/sources';

class App {
  controller: AppController;

  view: AppView;

  sources: Sources;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.sources = new Sources();
  }

  start() {
    document
      .querySelector('.sources')
      .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
    this.controller.getSources((data) => this.view.drawSources(data));
  }
}
export default App;
