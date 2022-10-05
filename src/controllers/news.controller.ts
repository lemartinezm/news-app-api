import {
  Example,
  Get,
  Query,
  Response,
  Route,
  SuccessResponse,
  Tags,
} from 'tsoa';
import {
  getAllNews,
  getNewsByCategory,
  searchNews,
} from '../database/news.odm';
import { NewsResponse } from '../utils/Responses';
import { INewsController } from './interfaces/news.interface';

@Route('/api/news')
@Tags('News Controller')
export class NewsController implements INewsController {
  /**
   * Endpoint to get News
   * @param {string} category Category
   * @param {string} search Search by
   * @returns {NewsResponse} Object with status code and articles or error message
   */
  @Get('/')
  @SuccessResponse(200, 'News obtained successfully')
  @Example({
    status: 200,
    articles: [
      {
        _id: '633c92782c95cc70cec4c1da',
        source: {
          id: null,
          name: 'Microsoft.com',
        },
        author: null,
        title:
          'Planetary Computer: una apuesta de Microsoft para un futuro sostenible - Microsoft News Center Latinoamérica',
        description:
          'Ciudad de México – Planetary Computer de Microsoft es una plataforma que combina un catálogo de múltiples petabytes de datos de monitoreo ambiental a nivel global. Cuenta con aplicaciones int…',
        url: 'https://news.microsoft.com/es-xl/planetary-computer-una-apuesta-de-microsoft-para-un-futuro-sostenible/',
        urlToImage:
          'https://news.microsoft.com/wp-content/uploads/prod/sites/41/2022/10/Planetary-Computer-1.png',
        publishedAt: '2022-10-04T18:15:30Z',
        content:
          'Ciudad de México – Planetary Computer de Microsoft es una plataforma que combina un catálogo de múltiples petabytes de datos de monitoreo ambiental a nivel global. Cuenta con aplicaciones intuitivas … [+3835 chars]',
        category: 'business',
      },
      {
        _id: '633c92952c95cc70cec4c21f',
        source: {
          id: null,
          name: 'News-Medical.Net',
        },
        author: null,
        title:
          'McLean Hospital-affiliated clinicians launch virtual treatment program for anxiety and OCD in children, teens - News-Medical.Net',
        description:
          'To tackle the growing mental health crisis facing children and adolescents and the difficulties families face accessing treatments for disorders such as anxiety and obsessive compulsive disorder (OCD), two McLean Hospital-affiliated clinicians have launched a…',
        url: 'https://www.news-medical.net/news/20221004/McLean-Hospital-affiliated-clinicians-launch-virtual-treatment-program-for-anxiety-and-OCD-in-children-teens.aspx',
        urlToImage:
          'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2016/3/Children_playing_sunset_-_Zurijeta_8c5bdac77e44431bb1bfec67b9c87208-620x480.jpg',
        publishedAt: '2022-10-04T18:08:00Z',
        content:
          'To tackle the growing mental health crisis facing children and adolescents and the difficulties families face accessing treatments for disorders such as anxiety and obsessive compulsive disorder (OCD… [+5389 chars]',
        category: 'health',
      },
      {
        _id: '633c92812c95cc70cec4c1f1',
        source: {
          id: null,
          name: 'YouTube',
        },
        author: null,
        title:
          'Kaley Cuoco Says "I Only Had Eyes for" \'Big Bang Theory\' Costar Johnny Galecki | PEOPLE - People',
        description:
          'Kaley Cuoco has no shame about experiencing like at first sight with Johnny Galecki.Cuoco, 36, and Galecki, 47, starred as onscreen love interests Penny and ...',
        url: 'https://www.youtube.com/watch?v=YryWClqH22c',
        urlToImage: 'https://i.ytimg.com/vi/YryWClqH22c/hqdefault.jpg',
        publishedAt: '2022-10-04T18:09:20Z',
        content: null,
        category: 'entertainment',
      },
    ],
  })
  @Response<NewsResponse>(400, 'Something went wrong', {
    status: 400,
    message: 'Something went wrong',
  })
  public async getNews(
    @Query() documentsPerPage?: number,
    @Query() currentPage?: number,
    @Query() category?: string,
    @Query() search?: string
  ): Promise<NewsResponse> {
    if (search)
      return await searchNews(search, documentsPerPage || 10, currentPage || 1);
    if (category)
      return await getNewsByCategory(
        category,
        documentsPerPage || 10,
        currentPage || 1
      );
    return await getAllNews(documentsPerPage || 10, currentPage || 1);
  }
}
