import { Request, Response, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    const { user_id } = request
    console.log(user_id)
    
    const admin = true;

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "User is not admin!",
    });
}



//Middleware fica entre a requisição e a resposta. Podendo assim interceptar no meio delas.