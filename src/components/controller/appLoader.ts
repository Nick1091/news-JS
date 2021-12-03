import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'e1c29e9c0d8847339c53a4c45019c61e',
    });
  }
}

export default AppLoader;
