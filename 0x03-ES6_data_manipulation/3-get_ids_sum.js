function getStudentIdsSum(students) {
  return students.reduce((a, b) => a.id + b.id, 0);
}

export default getStudentIdsSum;
