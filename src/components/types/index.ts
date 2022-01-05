export interface IDataArticles {
  status: 'ok' | null;
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

export interface IDataSources {
  status: 'ok' | null;
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
