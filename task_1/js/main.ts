interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}
const teacher1: Teacher = {
    firstName: 'Frank',
    lastName: 'Donald',
    fullTimeEmployee: true,
    location: 'New Jersey',
    contract: false,
}

console.log(teacher1);

function printTeacher(firstName:string, lastName:string) {
  const initial = firstName.split("");
  return (initial[0] + "." + lastName)
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

console.log(printTeacher("Michael","johnson"))