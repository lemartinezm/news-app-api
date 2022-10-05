import { Request, Response, Router } from 'express';
import { NewsController } from '../controllers/news.controller';

const newsRouter = Router();

newsRouter.route('/').get(async (req: Request, res: Response) => {
  const category = req.query?.category?.toString();
  const search = req.query?.search?.toString();

  const controller = new NewsController();
  const response = await controller.getNews(category, search);
  res.status(response.status).send(response);
});

export default newsRouter;
