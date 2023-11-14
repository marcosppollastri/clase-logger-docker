import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';
import mainRouter from './routes/indexRouter.js';
import { connectWithRetry } from './config/mongodb.js';
import cluster from 'node:cluster'
import { cpus } from 'node:os'
import { logger } from './utils/logger.js';

if(cluster.isPrimary) {
    const cpuNumber = cpus().length
    logger.info('Soy el cluster primary! Behold!')
    logger.info(process.pid)
    for(let i = 0; i < 4; i++) {
        cluster.fork()
    }
    cluster.on('disconnect', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      console.log('Forking a new worker');
      cluster.fork();
    });
} else {
    logger.info(process.pid)
    const app = express();
    const port = 3000;

   // connectWithRetry()

    app.use(express.json());
    app.use('/api', mainRouter);

    app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    });
}


