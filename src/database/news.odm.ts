import { newsEntity } from '../models/schemas/news';
import { NewsResponse } from '../utils/Responses';

export async function getAllNews(): Promise<NewsResponse> {
  const response: NewsResponse = {
    status: 400,
  };

  try {
    const newsModel = newsEntity();
    await newsModel.find({}).then((articles) => {
      response.articles = articles;
      response.status = 200;
    });
  } catch (error) {
    response.message = `${error}`;
    console.error(error);
  }

  return response;
}

export async function getNewsByCategory(
  category: string
): Promise<NewsResponse> {
  const response: NewsResponse = {
    status: 400,
  };

  try {
    const newsModel = newsEntity();
    await newsModel.find({ category }).then((articles) => {
      response.articles = articles;
      response.status = 200;
    });
  } catch (error) {
    console.error(error);
    response.message = `${error}`;
  }

  return response;
}

export async function searchNews(search: string): Promise<NewsResponse> {
  const response: NewsResponse = {
    status: 400,
  };

  try {
    const newsModel = newsEntity();
    await newsModel.find({ $text: { $search: search } }).then((articles) => {
      response.articles = articles;
      response.status = 200;
    });
  } catch (error) {
    console.error(error);
    response.message = `${error}`;
  }

  return response;
}
