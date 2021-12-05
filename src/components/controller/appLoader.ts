import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super(
      // 'https://newsapi.org/v2/',
      'https://nodenews.herokuapp.com/',
      // const express = require('express');
      // const morgan = require('morgan');
      // const axios = require('axios');
      // const cors = require('cors');
      // require('dotenv').config();
      // const app = express();
      // app.use(cors());
      // const Port = process.env.PORT || 3000;
      // const API_SERVICE_URL = 'https://newsapi.org/v2/';
      // app.get('/*', (req, res) => {
      //   axios
      //     .get(`${API_SERVICE_URL}/${req.url}`)
      //     .then((response) => {
      //       res.send(response.data);
      //     })
      //     .catch((error) => {
      //       res.send(error.message);
      //     });
      // });
      // app.listen(PORT, () => {
      //   console.log (`Starting server at $(PORT)`);
      // })
      {
        apiKey: 'e1c29e9c0d8847339c53a4c45019c61e',
      }
    );
  }
}

export default AppLoader;
