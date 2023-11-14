import mongoose from 'mongoose';
import { mongoUri } from './config.js'; // Adjust the path as needed

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const connectWithRetry = () => {
  mongoose.connect(mongoUri, options).then(() => {
    console.log('MongoDB is connected');
  }).catch(err => {
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.', err);
    setTimeout(connectWithRetry, 5000);
  });
};

