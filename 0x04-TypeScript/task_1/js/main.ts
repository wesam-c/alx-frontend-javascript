export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index:string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}.${lastName}`;
}

export class StudentClass {
    private _firstName!: string;
    private _lastName!: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = firstName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this._firstName;
    }
}
