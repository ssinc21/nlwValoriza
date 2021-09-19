import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCar1631833553268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name_car",
                        type: "varchar"
                    },
                    {
                        name: "car_brand",
                        type: "varchar",
                    },
                    {
                        name: "user_id",
                        type: "uuid"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserIdCar",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars")
    }

}
