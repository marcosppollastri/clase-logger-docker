import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import mainRouter from './routes/indexRouter.js';
import { connectWithRetry } from './config/mongodb.js';

const app = express();
const port = 3000;

connectWithRetry()

app.use(express.json());
app.use('/api', mainRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
