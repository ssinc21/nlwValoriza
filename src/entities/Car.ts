import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("cars")
class Car {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name_car: string;

    @Column()
    car_brand: string;

    @Column()
    user_id: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    userId: User;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Car };