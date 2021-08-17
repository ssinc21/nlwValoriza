import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPauload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    //Receber token
    const authtoken = request.headers.authorization

    if (!authtoken) {
        return response.status(401).end();
    }

    const [, token] = authtoken.split(" ") //Split divide o authtoken em 2 e guarda somente dentro do indice 2 do vetor onde tem a variavel token.

    try {
        const { sub } = verify(token, "343437c7fa7b4931f8c085f34776ebfb") as IPauload;
        request.user_id = sub;
        return next();
    } catch (err) {
        return response.status(401).end();
    }



    // Validar se token está preenchido

    // Validar se token é válido

    // Recuperar info do usuário

}