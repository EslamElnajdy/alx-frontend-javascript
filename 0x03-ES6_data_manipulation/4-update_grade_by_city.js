function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((obj) => obj.location === city).map((obj) => {
    for (const obj2 of newGrades) {
      if (obj2.studentId === obj.id) {
        return { ...obj, grade: obj2.grade };
      }
    }
    return { ...obj, grade: 'N/A' };
  });
}

export default updateStudentGradeByCity;
