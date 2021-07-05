import { NextFunction } from "express";
import { IRequest } from "../models/request.model";



export function verifyToken(req: IRequest, res: Response, next: NextFunction){
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');

        const bearerToken = bearer[1];
        req.token = bearerToken;
        next()
    }

}