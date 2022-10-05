import { Request, Response, Router } from 'express';
import { NewsController } from '../controllers/news.controller';

const newsRouter = Router();

newsRouter.route('/').get(async (req: Request, res: Response) => {
  const category = req.query?.category?.toString();
  const search = req.query?.search?.toString();
  const documentsPerPage = req.query?.documentsPerPage?.toString();
  const currentPage = req.query?.currentPage?.toString();

  const controller = new NewsController();
  const response = await controller.getNews(
    documentsPerPage ? parseInt(documentsPerPage) : 10,
    currentPage ? parseInt(currentPage) : 1,
    category,
    search
  );
  res.status(response.status).send(response);
});

export default newsRouter;
