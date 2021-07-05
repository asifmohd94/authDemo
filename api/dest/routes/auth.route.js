"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoute = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const auth_controller_1 = require("../controllers/auth.controller");
class AuthRoute {
    static initRoutes(router) {
        router.post('/register', (req, res, next) => {
            const register = new auth_controller_1.AuthController().postUser(req, res);
        });
        router.post('/signin', (req, res, next) => {
            const sign = new auth_controller_1.AuthController().signUser(req, res);
        });
        router.post('/details', (req, res, next) => {
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
            }
            else {
                res.sendStatus(403);
            }
        });
    }
}
exports.AuthRoute = AuthRoute;
//# sourceMappingURL=auth.route.js.map