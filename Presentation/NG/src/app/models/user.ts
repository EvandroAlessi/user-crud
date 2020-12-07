import { EducationalLevel } from "../enums/educationalLevel"

export class User {
    id: number;
    name: string;
    lastName: string;
    email: string;
    birthday: Date;
    educationalLevel: EducationalLevel;
}
