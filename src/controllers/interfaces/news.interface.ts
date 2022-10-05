import { NewsResponse } from '../../utils/Responses';

export interface INewsController {
  getNews(
    documentsPerPage?: number,
    currentPage?: number,
    category?: string,
    search?: string
  ): Promise<NewsResponse>;
}
