import { Request, Response } from "express"
import { CreateCarService } from "../services/CreateCarService";

class CreateCarController {
    async handle(request: Request, response: Response) {
        const { name_car, car_brand, user_id } = request.body;

        const createCarService = new CreateCarService();

        const car = await createCarService.execute({
            name_car,
            car_brand,
            user_id
        });

        return response.json(car);
    }

}

export { CreateCarController }