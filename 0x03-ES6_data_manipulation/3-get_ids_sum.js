export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((sum, currentStudent) => sum + currentStudent.id, 0);
  }
  return 0;
}
