interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
  
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
  
}

const createEmployee = (salary: number | string): (Teacher | Director) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

const isDirector = (employee: Director | Teacher): employee is Director => {
  return (employee instanceof Director)
}

const executeWork = (employee: Teacher | Director) => {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

console.log(createEmployee(200));
type Subjects = 'Math' | 'History';
const teachClass = (todayClass: string) => {
  if (todayClass == 'Math') {
    return 'Teaching Math';
  } else if (todayClass == 'History') {
    return 'Teaching History';
  } else {
    throw new Error("Invalid class specified");
  }
}