import { Request, Response } from "express";
import Respons from "../utils/respons";
import Activity from "../models/activity";
import { validationResult } from "express-validator";

const ActivityController = (() => {
    async function Find(req: Request, res: Response) {
        try {
            const activity: Activity[] = await Activity.findAll()
            return Respons({
                res,
                statusCode: 200,
                message: 'Success',
                data: activity
            })
        } catch (error) {
            return Respons({
                res,
                statusCode: 500,
                message: error as string,
            })
        }
    }
    
    async function FindOne(req: Request, res: Response) {
        try {
            const { id } = req.params
            const activity: Activity | null = await Activity.findByPk(id)
            if (!activity) {
                return Respons({
                    res,
                    statusCode: 404,
                    message: `Activity with ID ${id} Not Found`,
                })
            }
            return Respons({
                res,
                statusCode: 200,
                message: 'Success',
                data: activity
            })
        } catch (error) {
            return Respons({
                res,
                statusCode: 500,
                message: error as string,
            })
        }
    }
    
    async function Create(req: Request, res: Response) {
        const validationError = validationResult(req);
        if (!validationError.isEmpty()) {
            return Respons({ 
                res, 
                statusCode: 400, 
                message: validationError.array()[0].msg, 
            });
        }
        try {
            const activity: Activity = await Activity.create(req.body)
            return Respons({
                res,
                statusCode: 201,
                message: 'Success',
                data: activity
            })
        } catch (error) {
            return Respons({
                res,
                statusCode: 500,
                message: error as string,
            })
        }
    }
    
    async function Update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const { title, email } = req.body

            const activity: Activity | null = await Activity.findByPk(id)
            if (!activity) {
                return Respons({
                    res,
                    statusCode: 404,
                    message: `Activity with ID ${id} Not Found`,
                })
            }
            const validationError = validationResult(req);
            if (!validationError.isEmpty()) {
                return Respons({ 
                    res, 
                    statusCode: 400, 
                    message: validationError.array()[0].msg, 
                });
            }
            activity.update({
                title: title,
                email: email
            })
            return Respons({
                res,
                statusCode: 200,
                message: 'Success',
                data: activity
            })
        } catch (error) {
            return Respons({
                res,
                statusCode: 500,
                message: error as string,
            })
        }
    }

    async function Delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const activity: number = await Activity.destroy({
                where: {
                    id: id
                }
            })
            if (activity <= 0) {
                return Respons({
                    res,
                    statusCode: 404,
                    message: `Activity with ID ${id} Not Found`
                })
            }
            return Respons({
                res,
                statusCode: 200,
                message: 'Success',
                data: {}
            })
        } catch (error) {
            return Respons({
                res,
                statusCode: 500,
                message: error as string,
            })
        }
    }

    return {
        Find,
        FindOne,
        Create,
        Update,
        Delete
    }
})();

export default ActivityController;