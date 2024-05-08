import { check } from "express-validator";

const ActivityMiddlewares = (() => {
    const create = [
        check('title').exists().withMessage('title cannot be null')
    ]
    return {
        create
    }
})();

export default ActivityMiddlewares;