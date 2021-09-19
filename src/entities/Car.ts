import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("cars")
class Car {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(() => User)
    user_id: User;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

}

export { Car };