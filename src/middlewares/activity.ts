import { check } from "express-validator";

const ActivityMiddlewares = (() => {
    const create = [
        check('title').exists().withMessage('title cannot be null')
    ]
    
    const update = [
        check('title').exists().withMessage('title is required')
    ]
    return {
        create,
        update
    }
})();

export default ActivityMiddlewares;