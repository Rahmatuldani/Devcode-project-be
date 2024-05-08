import express, { Router } from "express";
import ActivityRoutes from "./activity";

const routes: Router = express.Router();

routes.use('/activity-groups', ActivityRoutes)

export default routes;