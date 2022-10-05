import mongoose from 'mongoose';
import { NewsSchema } from '../interfaces/news.interface';

export function newsEntity() {
  const newsSchema = new mongoose.Schema<NewsSchema>({
    _id: { type: String, required: true },
    source: { type: Object, required: true },
    author: { type: String || null, required: false },
    title: { type: String, required: true, index: 'text' },
    description: { type: String, required: true, index: 'text' },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true },
    content: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: [
        'business',
        'entertainment',
        'general',
        'health',
        'science',
        'sports',
        'technology',
      ],
    },
  });

  return mongoose.models.New || mongoose.model('New', newsSchema);
}
