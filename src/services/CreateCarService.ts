import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateCarService {
    async execute(name, brand: string) {
        const allBrands = ["Fiat", "Chevrolet", "Ford", "Volkswagen", "Volvo", "Ferrari", "Audi"]

        if (!name) {
            throw new Error("No name!");
        }

        if (!brand) {
            throw new Error("No brand!");
        }

        const existsBrand = allBrands.find(element => element === brand) == null ? false : true;

        if (existsBrand) {

        }

    }
}

export { CreateCarService }

/*
    Verificar se nome e marca do carro está com letra maiúscula,
    Verificar se a marca existe no JSON que vou criar.
*/