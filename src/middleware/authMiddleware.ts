import { Request, Response, NextFunction } from "express";
import  jwt  from "jsonwebtoken";
import { UserPayload } from "../model/user";
// require("dotenv").config();

interface TokenPayload extends UserPayload{
    iat: number;
    exp: number;
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    const secretKey = process.env.JWT_SECRET!

    if(!token) {
        return res.status(401).json({message: 'Unauthorized'})
    }
    // return res.status(200).json({message:'success'})
    try{
        const decoded = jwt.verify(
            token,
            secretKey
        ) as TokenPayload;
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({message: 'Unauthorized'});
    }
}