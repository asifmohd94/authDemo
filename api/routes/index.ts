import { Router } from 'express';
import { AuthRoute } from './auth.route'

export function init(router: Router) {

    AuthRoute.initRoutes(router);

}