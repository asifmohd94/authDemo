import { NextFunction, Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { IUser } from '../models/user.model';
import { IRequest } from '../models/request.model';
import * as jwt from 'jsonwebtoken'
export class AuthController {

    async postUser(req: Request, res: Response) {
        const body = req.body as IUser
        const register = new AuthService().registerUser(body);
        res.json(register);
    }

    async signUser(req: Request, res: Response) {
        const body = req.body as IUser;
        const token = await new AuthService().signinUser(body);
       
        res.json({ token: token });
    }

    async getDetails(verify: any, req: IRequest, res: Response) {
        if (typeof req.token != 'undefined') {
            const decoded = jwt.verify(req.token, 'secret');
            res.json(decoded);
        }
    }

    // verify(req: IRequest, res: Response, next: NextFunction) {
    //     const bearerHeader = req.headers['authorization'];

    //     if (typeof bearerHeader !== 'undefined') {
    //         const bearer = bearerHeader.split(' ');

    //         const bearerToken = bearer[1];
    //         req.token = bearerToken;
    //         next()
    //     }

    // }
}