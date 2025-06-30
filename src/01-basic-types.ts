// 1. Basic Types - ประเภทข้อมูลพื้นฐาน
console.log("=== TypeScript Basic Types ===");

// String - ข้อความ
let message: string = "สวัสดี TypeScript!";
let name: string = "นาย A";
console.log("String:", message, name);

// Number - ตัวเลข
let age: number = 25;
let price: number = 99.99;
let negativeNumber: number = -10;
console.log("Numbers:", age, price, negativeNumber);

// Boolean - ค่าจริง/เท็จ
let isActive: boolean = true;
let isCompleted: boolean = false;
console.log("Boolean:", isActive, isCompleted);

// Array - อาร์เรย์
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
let mixed: (string | number)[] = ["hello", 42, "world"];
console.log("Arrays:", numbers, fruits, mixed);

// Alternative array syntax
let colors: Array<string> = ["red", "green", "blue"];
console.log("Colors:", colors);

// Tuple - อาร์เรย์ที่กำหนดจำนวนและประเภท
let person: [string, number] = ["John", 30];
let coordinate: [number, number, number] = [10, 20, 30];
console.log("Tuple:", person, coordinate);

// Any - ประเภทใดก็ได้ (ไม่แนะนำให้ใช้บ่อย)
let anything: any = "hello";
anything = 42;
anything = true;
console.log("Any:", anything);

// Void - ไม่มีการส่งค่ากลับ
function sayHello(): void {
  console.log("Hello from void function!");
}
sayHello();

// Null และ Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
console.log("Null and Undefined:", nullValue, undefinedValue);

// ตัวอย่างการใช้งาน
console.log("\n=== การใช้งานจริง ===");
let studentName: string = "สมชาย";
let studentAge: number = 20;
let isGraduated: boolean = false;
let grades: number[] = [85, 90, 78, 92];

console.log(`นักเรียน: ${studentName}, อายุ: ${studentAge}, จบการศึกษา: ${isGraduated}`);
console.log(`เกรดทั้งหมด: ${grades.join(", ")}`);

export { message, age, isActive, numbers, fruits, person };
