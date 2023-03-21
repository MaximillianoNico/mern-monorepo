import express from 'express';

const router = express.Router();
const HealthCheckController = (ctx: any) => {
  const healthCheck = (req, res) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date()
    };

    res.status(200).send(data);
  }

  router.get('/health-check', healthCheck);

  return router;
}

export default HealthCheckController;
