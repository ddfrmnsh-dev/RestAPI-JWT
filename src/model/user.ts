import { Request } from 'express';

export interface UserPayload{
    id: string;
    username: string;
    email: string;
}

declare global {
    namespace Express {
      interface Request {
        user?: UserPayload;
      }
    }
  }