/**
 * Schema returned from DB
 */
export interface NewsSchema {
  _id: string;
  source: any;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  category: string;
}
