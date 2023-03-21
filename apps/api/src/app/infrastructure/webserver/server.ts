import express from 'express';
import cors from 'cors'
import * as Sentry from "@sentry/node";
// import Socket from '../socketio'
import Interface from '../../interface';
import NoSQL from '../repository/mongo';

const createServer = () => {
  const app = express()
  const API_PORT = process.env.PORT || process.env.API_PORT;
  const isDevelopment = process.env?.API_MODE === "staging" || process.env?.API_MODE === "production"

  // Initialize Mongoose
  NoSQL.initialize();

  app.use(cors());
  // RequestHandler creates a separate execution context using domains, so that every
  // transaction/span/breadcrumb is attached to its own Hub instance
  app.use(Sentry.Handlers.requestHandler());
  // TracingHandler creates a trace for every incoming request
  app.use(Sentry.Handlers.tracingHandler());

  // Optional fallthrough error handler
  app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });

  app.use(express.json());

  // Init Routes
  Interface({ app })

  app.listen(API_PORT || 3000, () => {
    console.log(`Server listen on port ${API_PORT} server-time ${new Date().getHours()}:${new Date().getMinutes()}`);
  });

  return app;
}

export default { createServer }
