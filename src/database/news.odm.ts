import { newsEntity } from '../models/schemas/news';
import { NewsResponse } from '../utils/Responses';

export async function getAllNews(
  documentsPerPage: number,
  currentPage: number
): Promise<NewsResponse> {
  const response: NewsResponse = {
    status: 400,
  };

  try {
    const newsModel = newsEntity();
    const totalDocuments = await newsModel.find({}).countDocuments();

    await newsModel
      .find({})
      .sort({ publishedAt: -1 })
      .skip(documentsPerPage * (currentPage - 1))
      .limit(documentsPerPage)
      .then((articles) => {
        response.articles = articles;
        response.status = 200;
      });

    response.meta = {
      totalPages: Math.ceil(totalDocuments / documentsPerPage),
      currentPage,
      documentsPerPage,
      totalDocuments,
    };
  } catch (error) {
    response.message = `${error}`;
    console.error(error);
  }

  return response;
}

export async function getNewsByCategory(
  category: string,
  documentsPerPage: number,
  currentPage: number
): Promise<NewsResponse> {
  const response: NewsResponse = {
    status: 400,
  };

  try {
    const newsModel = newsEntity();
    const totalDocuments = await newsModel.find({}).countDocuments();

    await newsModel
      .find({ category })
      .sort({ publishedAt: -1 })
      .skip(documentsPerPage * (currentPage - 1))
      .limit(documentsPerPage)
      .then((articles) => {
        response.articles = articles;
        response.status = 200;
      });

    response.meta = {
      totalPages: Math.ceil(totalDocuments / documentsPerPage),
      currentPage,
      documentsPerPage,
      totalDocuments,
    };
  } catch (error) {
    console.error(error);
    response.message = `${error}`;
  }

  return response;
}

export async function searchNews(
  search: string,
  documentsPerPage: number,
  currentPage: number
): Promise<NewsResponse> {
  const response: NewsResponse = {
    status: 400,
  };

  try {
    const newsModel = newsEntity();
    const totalDocuments = await newsModel
      .find({ $text: { $search: search } })
      .countDocuments();

    await newsModel
      .find({ $text: { $search: search } })
      .sort({ publishedAt: -1 })
      .skip(documentsPerPage * (currentPage - 1))
      .limit(documentsPerPage)
      .then((articles) => {
        response.articles = articles;
        response.status = 200;
      });

    response.meta = {
      totalPages: Math.ceil(totalDocuments / documentsPerPage),
      currentPage,
      documentsPerPage,
      totalDocuments,
    };
  } catch (error) {
    console.error(error);
    response.message = `${error}`;
  }

  return response;
}
