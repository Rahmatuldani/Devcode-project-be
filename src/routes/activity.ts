import express, { Router } from "express";
import ActivityController from "../controllers/activity";
import ActivityMiddlewares from "../middlewares/activity";

const ActivityRoutes: Router = express.Router();

ActivityRoutes.get('/', ActivityController.Find)
ActivityRoutes.get('/:id', ActivityController.FindOne)
ActivityRoutes.patch('/:id', ActivityMiddlewares.update, ActivityController.Update)
ActivityRoutes.post('/', ActivityMiddlewares.create, ActivityController.Create)
ActivityRoutes.delete('/:id', ActivityController.Delete)

export default ActivityRoutes;