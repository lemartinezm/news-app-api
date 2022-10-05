import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connectToMongo() {
  const { MONGO_URI } = process.env;

  if (!MONGO_URI) throw new Error('Mongo URI is missing');

  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('[DB] Connected to DB'))
    .catch((err) => {
      console.error(`[DB ERROR] Something went wrong. Details ${err}`);
    });
}

export default connectToMongo;
