import { Location } from "src/locations/entities/location.entity";
import { User } from "src/auth/entities/user.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manager {
    @PrimaryGeneratedColumn('uuid')
    managerId: string;
    @Column('text')
    managerFullName: string;
    @Column('float')
    managerSalary: number;
    @Column('text')
    managerEmail: string;
    @Column('text')
    managerPhoneNumber: string;

    @OneToOne(() => Location)
    locayion: Location;

    @OneToOne(() => User)
    @JoinColumn({
        name: "userId"
    })
    user: User;
}
