import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IRequest extends Request {
  user: any
}

const verifyToken = (req: IRequest, res: Response, next: NextFunction) => {
  const authToken =
    req.body.token || req.query.token || req.headers["authorization"];
  const token = authToken?.split('bearer ')[1]

  if (!token) {
    return res.status(403).send({
      uptime: process.uptime(),
      errors: 'A token is required for authentication',
      date: new Date()
    });
  }
  try {
    const key = process.env?.JWT_TOKEN ||""
    const decoded = verify(token, key);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({
      uptime: process.uptime(),
      errors: 'Invalid token',
      date: new Date()
    });
  }
  return next();
};

export default verifyToken;
