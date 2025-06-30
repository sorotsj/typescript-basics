// 2. Objects and Interfaces - ออบเจกต์และอินเตอร์เฟส
console.log("=== Objects and Interfaces ===");

// Object Type - ประเภทออบเจกต์แบบธรรมดา
let user: { name: string; age: number; email: string } = {
  name: "สมศักดิ์",
  age: 25,
  email: "somsak@example.com"
};
console.log("Object:", user);

// Interface - การกำหนดโครงสร้างออบเจกต์
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property - คุณสมบัติเสริม
  readonly id: number; // Readonly property - คุณสมบัติอ่านอย่างเดียว
}

let person1: Person = {
  id: 1,
  name: "สมหญิง",
  age: 30,
  email: "somying@example.com"
};

let person2: Person = {
  id: 2,
  name: "สมใจ",
  age: 28
  // email เป็น optional จึงไม่ต้องใส่ก็ได้
};

console.log("Person 1:", person1);
console.log("Person 2:", person2);

// Interface ที่ซับซ้อนขึ้น
interface Address {
  street: string;
  city: string;
  zipCode: string;
  country?: string;
}

interface Employee extends Person {
  department: string;
  salary: number;
  address: Address;
  skills: string[];
}

let employee: Employee = {
  id: 3,
  name: "สมศรี",
  age: 32,
  email: "somsri@company.com",
  department: "IT",
  salary: 50000,
  address: {
    street: "123 ถนนสุขุมวิท",
    city: "กรุงเทพฯ",
    zipCode: "10110",
    country: "ไทย"
  },
  skills: ["TypeScript", "React", "Node.js"]
};

console.log("Employee:", employee);

// Interface สำหรับ Method
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
}

let myCalculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

console.log("Calculator results:");
console.log("5 + 3 =", myCalculator.add(5, 3));
console.log("10 - 4 =", myCalculator.subtract(10, 4));
console.log("6 * 7 =", myCalculator.multiply(6, 7));
console.log("15 / 3 =", myCalculator.divide(15, 3));

// Interface Inheritance - การสืบทอด
interface Animal {
  name: string;
  species: string;
}

interface Pet extends Animal {
  owner: string;
  isVaccinated: boolean;
}

interface Dog extends Pet {
  breed: string;
  barkSound: string;
}

let myDog: Dog = {
  name: "บัดดี้",
  species: "สุนัข",
  owner: "สมชาย",
  isVaccinated: true,
  breed: "โกลเด้น รีทรีฟเวอร์",
  barkSound: "โฮ่ง โฮ่ง!"
};

console.log("My Dog:", myDog);

// Index Signatures - การกำหนดคีย์แบบยืดหยุ่น
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [key: string]: number;
}

let translations: StringDictionary = {
  hello: "สวัสดี",
  goodbye: "ลาก่อน",
  thank_you: "ขอบคุณ",
  you_are_welcome: "ไม่เป็นไร"
};

let scores: NumberDictionary = {
  math: 95,
  science: 88,
  english: 92,
  thai: 85
};

console.log("Translations:", translations);
console.log("Scores:", scores);

export { Person, Employee, Calculator, Animal, Pet, Dog };
