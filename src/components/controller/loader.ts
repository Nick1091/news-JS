import { ErrorCode } from './options';
import { ApiResponse, Callback, Option } from '../types';

class Loader {
  baseLink: string;

  options: Option;

  constructor(baseLink: string, options: Option) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options }: { endpoint: string; options?: Option },
    callback: Callback<ApiResponse> = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === ErrorCode.unauthorized || res.status === ErrorCode.notFound)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Option, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;
    Object.keys(urlOptions).forEach((key, i) => {
      url += `${key}=${urlOptions[key]}`;
      if (i == 0) {
        url += '&';
      }
    });

    return url;
  }

  load(method: string, endpoint: string, callback: Callback<ApiResponse>, options: Option) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
