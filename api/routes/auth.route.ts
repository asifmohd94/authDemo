import { NextFunction, Router } from 'express';
import { verify } from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import { AuthController } from '../controllers/auth.controller';
import {verifyToken} from '../middlewares/verify-token'
import { IRequest } from '../models/request.model';

export class AuthRoute {



    public static initRoutes(router: Router) {

        router.post('/register', (req, res, next) => {
            const register = new AuthController().postUser(req, res);
        })

        router.post('/signin', (req, res, next) => {
            const sign = new AuthController().signUser(req, res);
        })
        
        router.post('/details',(req:IRequest,res,next)=>{
            const bearerHeader = req.headers['authorization'];

            if (typeof bearerHeader !== 'undefined') {
                const bearer = bearerHeader.split(' ');
    
                const bearerToken = bearer[1];
                req.token = bearerToken;
                next();
            }
           
            if (typeof req.token != 'undefined') {
                const decoded = jwt.verify(req.token, 'secret');
                res.json(decoded);
            }else{
                res.sendStatus(403);
            }
        })

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