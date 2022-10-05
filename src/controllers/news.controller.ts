import { getAllNews, getNewsByCategory } from '../database/news.odm';
import { NewsResponse } from '../utils/Responses';
import { INewsController } from './interfaces/news.interface';

export class NewsController implements INewsController {
  public async getNews(category?: string | undefined): Promise<NewsResponse> {
    if (!category) return await getAllNews();
    return await getNewsByCategory(category);
  }
}
