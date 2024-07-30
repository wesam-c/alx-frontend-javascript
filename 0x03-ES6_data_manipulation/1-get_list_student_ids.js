export default getListStudentIds(students) {
    if (students instanceof Array) {
        return students.map((student) => student.id);
    }
    return [];
}