import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
import { UsersRepositories } from "../repositories/UsersRepositories";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({
            email
        });

        if (!user) {
            throw new Error("Email/Password incorrect")
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect")
        }

        const token = sign({
            email: user.email
        }, "343437c7fa7b4931f8c085f34776ebfb", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;

    }
}

export { AuthenticateUserService }