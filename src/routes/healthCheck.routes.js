import { Router } from "express";

import { healthCheck } from "../controllers/healthCheck.controller.js";

const healthCheckRouter = Router();

// route we are checking is :- /api/v1/healthcheck/test
healthCheckRouter.route("/").get(healthCheck)
// healthCheckRouter.route("/test").get(healthCheck)

export default healthCheckRouter;