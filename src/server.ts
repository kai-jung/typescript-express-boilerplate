import config from './config';
import loader from './loaders';
import express from 'express';

/**
 * Start express server
 */
async function startServer() {
  const app = express();

  await loader({ app });

  app
    .listen(config.port, () => {
      console.log(`Server listening on port: ${config.port}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
