// 3. Functions - ฟังก์ชัน
console.log("=== Functions ===");

// Function Declaration - การประกาศฟังก์ชัน
function greet(name: string): string {
  return `สวัสดี, ${name}!`;
}

function add(a: number, b: number): number {
  return a + b;
}

console.log(greet("สมชาย"));
console.log("5 + 3 =", add(5, 3));

// Arrow Functions - ฟังก์ชันลูกศร
const greetArrow = (name: string): string => {
  return `หวัดดี, ${name}!`;
};

const multiply = (a: number, b: number): number => a * b;

console.log(greetArrow("สมหญิง"));
console.log("4 * 6 =", multiply(4, 6));

// Optional Parameters - พารามิเตอร์เสริม
function introduce(name: string, age?: number): string {
  if (age) {
    return `ฉันชื่อ ${name} อายุ ${age} ปี`;
  }
  return `ฉันชื่อ ${name}`;
}

console.log(introduce("สมศักดิ์"));
console.log(introduce("สมศรี", 25));

// Default Parameters - พารามิเตอร์ค่าเริ่มต้น
function createUser(name: string, role: string = "user", isActive: boolean = true): object {
  return { name, role, isActive };
}

console.log("Default user:", createUser("สมใจ"));
console.log("Admin user:", createUser("สมพงษ์", "admin"));
console.log("Inactive user:", createUser("สมหมาย", "user", false));

// Rest Parameters - พารามิเตอร์แบบหลายตัว
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

function combineStrings(separator: string, ...strings: string[]): string {
  return strings.join(separator);
}

console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
console.log("Combined strings:", combineStrings(" - ", "สวัสดี", "ยินดีต้อนรับ", "TypeScript"));

// Function Types - ประเภทฟังก์ชัน
type MathOperation = (a: number, b: number) => number;
type StringProcessor = (input: string) => string;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;

const toUpperCase: StringProcessor = (text) => text.toUpperCase();
const addPrefix: StringProcessor = (text) => `PREFIX: ${text}`;

console.log("10 - 3 =", subtract(10, 3));
console.log("20 / 4 =", divide(20, 4));
console.log("Uppercase:", toUpperCase("hello world"));
console.log("With prefix:", addPrefix("test"));

// Function Overloading - การโอเวอร์โหลดฟังก์ชัน
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `String: ${value}`;
  } else if (typeof value === "number") {
    return `Number: ${value.toFixed(2)}`;
  } else {
    return `Boolean: ${value ? "จริง" : "เท็จ"}`;
  }
}

console.log("Format examples:");
console.log(format("สวัสดี"));
console.log(format(42.567));
console.log(format(true));

// Higher-Order Functions - ฟังก์ชันระดับสูง
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

function applyOperation(numbers: number[], operation: (n: number) => number): number[] {
  return numbers.map(operation);
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 4:", triple(4));

const numbers = [1, 2, 3, 4, 5];
console.log("Original:", numbers);
console.log("Doubled:", applyOperation(numbers, double));
console.log("Tripled:", applyOperation(numbers, triple));

// Generic Functions - ฟังก์ชันแบบทั่วไป
function identity<T>(arg: T): T {
  return arg;
}

function getFirst<T>(array: T[]): T | undefined {
  return array[0];
}

function swap<T, U>(pair: [T, U]): [U, T] {
  return [pair[1], pair[0]];
}

console.log("Identity string:", identity("hello"));
console.log("Identity number:", identity(42));
console.log("First of numbers:", getFirst([1, 2, 3]));
console.log("First of strings:", getFirst(["a", "b", "c"]));
console.log("Swap pair:", swap(["hello", 123]));

// Async Functions - ฟังก์ชันแบบอะซิงโครนัส
async function fetchUserData(userId: number): Promise<object> {
  // จำลองการเรียก API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: `ผู้ใช้ ${userId}`,
        email: `user${userId}@example.com`
      });
    }, 1000);
  });
}

async function demonstrateAsync(): Promise<void> {
  try {
    console.log("กำลังโหลดข้อมูลผู้ใช้...");
    const userData = await fetchUserData(1);
    console.log("ข้อมูลผู้ใช้:", userData);
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
  }
}

// เรียกใช้ฟังก์ชัน async
demonstrateAsync();

export { 
  greet, add, introduce, createUser, sum,
  MathOperation, StringProcessor,
  format, createMultiplier, identity,
  fetchUserData
};
