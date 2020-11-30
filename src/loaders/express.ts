import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from '../config';

export default ({ app }: { app: express.Application }) => {
  // Health check
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  // It shows the real origin IP in the heroku or Cloudwatch logs
  app.enable('trust proxy');

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(bodyParser.json());
};
