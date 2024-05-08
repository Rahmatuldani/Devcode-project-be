import { Response } from 'express';

interface Props {
    res: Response;
    statusCode: number;
    message: string;
    data?: object | object[];
}

function Respons({
    res,
    statusCode, 
    message, 
    data 
}: Props) {
    let status: string = '';

    switch (statusCode) {
    case 200:
        status = 'Success';
        break;
    
    case 201:
        status = 'Success';
        break;

    case 400:
        status = 'Bad Request';
        break;
    
    case 401:
        status = 'Unauthorized';
        break;
    
    case 404:
        status = 'Not Found';
        break;
    
    case 500:
        status = 'Internal Server Error';
        break;
    
    default:
        status = 'Error';
        break;
    }

    return res.status(statusCode).json({
        status,
        message,
        data
    });
}

export default Respons;