import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.herokuapp.com/', {
      apiKey: 'dfbdcfe1b5e44612b03241995c1c8a3f',
    });
  }
}

export default AppLoader;
