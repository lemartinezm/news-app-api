import mongoose from 'mongoose';
import { NewsSchema } from '../interfaces/news.interface';

export function newsEntity() {
  const newsSchema = new mongoose.Schema<NewsSchema>({
    _id: { type: String, required: true },
    source: { type: Object, required: true },
    author: { type: String || null, required: false },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
  });

  return mongoose.models.New || mongoose.model('New', newsSchema);
}
