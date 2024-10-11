import { Employee } from "src/employees/entities/employee.entity";
import { Manager } from "src/managers/entities/manager.entity";
import { Region } from "src/regions/entities/region.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Location {
    @PrimaryGeneratedColumn('increment')
    locationId: number;
    @Column('text')
    locationName: string;
    @Column('text')
    locationAdress: string;
    @Column('simple-array')
    locationLatng: number;

    @OneToOne(() => Manager)
    @JoinColumn({
        name: "managerId"
    })
    manager: Manager;
    @OneToOne(() => Region, (region) => region.locations)
    @JoinColumn({
        name: "regionId"
    })
    region: Region;

    @OneToOne(() => Employee, (employee) => employee.location)
    employees: Employee[];
}
