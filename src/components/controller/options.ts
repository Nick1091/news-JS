export interface IDataResponse {
  status: 'ok' | null;
  // totalResults?: number,
}
export interface IDataArticles extends IDataResponse {
  totalResults: number;
  articles: DataNews[];
}
export type Source = {
  id: string;
  name: string;
};
export type DataNews = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export interface IDataSources extends IDataResponse {
  sources: DataSource[];
}
export type ApiResponse = IDataSources | IDataArticles;
export type DataSource = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};
export type Callback<T> = (data: T) => void;
export type Option = {
  [key: string]: string;
};
// export interface IData {
//   sources: DataSource[],
//   articles: DataNews[]
// }
// export type CallbackType<T> = (data: T) => void

// export type IDataEverythingResponse = {
//   status: string,
//   totalResult: number,
//   articles: DataArticles,
// }
// export type Options ={
//   [apiKey: string] : string,
// }
