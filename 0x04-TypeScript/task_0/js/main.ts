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

const table = document.createElement("table");
//The <tbody> element is used to group rows of table data.
const tableBody = document.createElement("tbody");

table.appendChild(tableBody);

studentList.forEach((student: Student): void => {
    const tableRow = document.createElement('tr');
    const tableDataForName = document.createElement('td')
    const tableDataForLocation = document.createElement('td')

    tableDataForName.textContent = student.firstName;
    tableDataForLocation.textContent = student.location;

    tableRow.append(tableDataForName);
    tableRow.append(tableDataForLocation);
    tableBody.append(tableRow);
});

document.body.appendChild(table);
