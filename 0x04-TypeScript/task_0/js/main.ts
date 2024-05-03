interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Eslam',
  lastName: 'Mohamed',
  age: 24,
  location: 'Egypt',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'New York',
};

const studentList: Student[] = [student1, student2];

function renderTable(): void {
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  studentList.forEach((student) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  table.appendChild(tableBody);
  document. body.appendChild(table);

}
renderTable();