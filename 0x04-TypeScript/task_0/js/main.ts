export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const studentA: Student = {
    firstName: "Wesam",
    lastName: "Eldeeb",
    age: 20,
    location: "Cairo",
};
const studentB: Student = {
    firstName: "Sara",
    lastName: "Ahmed",
    age: 20,
    location: "Dublin",
};

const studentList: Array<Student> = [
    studentA,
    studentB
];