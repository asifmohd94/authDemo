"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const auth_route_1 = require("./auth.route");
function init(router) {
    auth_route_1.AuthRoute.initRoutes(router);
}
exports.init = init;
//# sourceMappingURL=index.js.map