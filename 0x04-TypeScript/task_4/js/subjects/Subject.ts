namespace Subjects {
  export class Subject {
    protected _teacher: Teacher | undefined;

    set setTeacher(teacher: Teacher) {
      this._teacher = teacher;
    }
  }
}