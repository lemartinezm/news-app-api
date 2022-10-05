import {
  getAllNews,
  getNewsByCategory,
  searchNews,
} from '../database/news.odm';
import { NewsResponse } from '../utils/Responses';
import { INewsController } from './interfaces/news.interface';

export class NewsController implements INewsController {
  public async getNews(
    category?: string,
    search?: string
  ): Promise<NewsResponse> {
    if (search) return await searchNews(search);
    if (category) return await getNewsByCategory(category);
    return await getAllNews();
  }
}
