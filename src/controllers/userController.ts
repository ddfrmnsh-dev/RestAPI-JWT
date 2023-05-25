import express, {Request, Response, NextFunction}  from "express";
import { UserPayload } from "../model/user";
import jwt  from "jsonwebtoken";

async function registerUser(params:any, req: Request, res: Response) {
        
}

async function hasLogin(req: Request, res: Response) {
        res.json({message: `Anda sudah login ${req.user?.username}`})
        // res.json("hahaha")
}

async function loginUser(req: Request, res: Response) {
    try{
        const secretKey = process.env.JWT_SECRET!
        const payload : UserPayload = {id:'1', username:'dede', email:'dede@gmail.com'}
        // if(!payload){
        //     throw new Error('data tidak sesuai')
        // }
        const token = jwt.sign(payload, secretKey, {
            expiresIn: '1h'
        })
        console.log('ini tokennya', token)

        return res.send({JWT : token});
    }
    catch(e){
        console.log(e)
        res.status(500).json({ message: 'Terjadi kesalahan' })
    }
}

function coba(req: Request, res: Response){
    try {
    const data = {
      message: 'Data berhasil diambil',
      timestamp: new Date().toISOString()
    };
    res.json(data); // Mengirim respons JSON
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Terjadi kesalahan' }); // Mengirim respons kesalahan
  }
}
export default {
    registerUser,
    loginUser,
    hasLogin,
}