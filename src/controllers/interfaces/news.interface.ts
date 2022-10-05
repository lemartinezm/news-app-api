import { NewsResponse } from '../../utils/Responses';

export interface INewsController {
  getNews(category?: string): Promise<NewsResponse>;
}
