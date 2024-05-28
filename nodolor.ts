type Student = {
  id: number;
  name: string;
  age: number;
  // ... other required student properties
};

function storeStudent(student: Required<Student>): Student {
  // Assuming there's a database or storage mechanism to store the student
  const storedStudent = database.store(student);
  return storedStudent;
}
