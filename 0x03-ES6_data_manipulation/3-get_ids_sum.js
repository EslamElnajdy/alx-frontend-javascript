function getStudentIdsSum(students) {
  return students.reduce((a, b) => a.id + b.id);
}

export default getStudentIdsSum;
