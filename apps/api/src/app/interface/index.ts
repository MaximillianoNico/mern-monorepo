import healthCheck from './routes/healthcheck';

import { IMainRoute, IRequest } from './types'

const Interface = ({ app, client }: IMainRoute) => {

  // Define Routes
  app.use((req: IRequest, res, next) => {
    req.client = client;

    next();
  })
  app.use('/app', healthCheck({ app }));

  /**
   * Catch 404 and forward to error handle.
   */
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /**
   * Global error catcher.
   */
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        errors:{
            message: err.message
        }
    });
  });
}

export default Interface;
