function getStudentIdsSum(students) {
  return students.reduce((sum, b) => sum + b.id, 0);
}

export default getStudentIdsSum;
