import { getCustomRepository } from "typeorm";
import { CarsRepositories } from "../repositories/CarsRepositories";


interface ICarRequest {
    name_car: string;
    car_brand: string;
    user_id: string;
}

class CreateCarService {
    async execute({ name_car, car_brand, user_id }: ICarRequest) {
        const carsRepositories = getCustomRepository(CarsRepositories)
        const allBrands = ["Fiat", "Chevrolet", "Ford", "Volkswagen", "Volvo", "Ferrari", "Audi"]

        if (!name_car) {
            throw new Error("No name!");
        }

        if (!car_brand) {
            throw new Error("No brand!");
        }
        /*
        if (!userId) {
            throw new Error("No User ID!");
        }*/

        const existsBrand = allBrands.find(element => element === car_brand) == null ? false : true;

        if (existsBrand) {
            console.log("Brand already exists")
        }

        const car = carsRepositories.create({
            name_car,
            car_brand,
            user_id
        })

        await carsRepositories.save(car);

        return car;

    }
}

export { CreateCarService }

/*
    Verificar se nome e marca do carro está com letra maiúscula,
    Verificar se a marca existe no JSON que vou criar.
*/