// 6. Generics - จีเนริก
console.log("=== Generics ===");

// Basic Generic Function - ฟังก์ชันจีเนริกพื้นฐาน
function identity<T>(arg: T): T {
  return arg;
}

function getFirst<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[0] : undefined;
}

function getLast<T>(array: T[]): T | undefined {
  return array.length > 0 ? array[array.length - 1] : undefined;
}

console.log("Generic function examples:");
console.log("Identity string:", identity("สวัสดี"));
console.log("Identity number:", identity(42));
console.log("Identity boolean:", identity(true));

const numbers = [1, 2, 3, 4, 5];
const fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

console.log("First number:", getFirst(numbers));
console.log("First fruit:", getFirst(fruits));
console.log("Last number:", getLast(numbers));
console.log("Last fruit:", getLast(fruits));

// Generic Interface - อินเตอร์เฟสจีเนริก
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

interface Pair<T, U> {
  first: T;
  second: U;
}

class SimpleContainer<T> implements Container<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const stringContainer = new SimpleContainer<string>("Hello");
const numberContainer = new SimpleContainer<number>(42);

console.log("Container examples:");
console.log("String container:", stringContainer.getValue());
console.log("Number container:", numberContainer.getValue());

const namePair: Pair<string, string> = {
  first: "สมชาย",
  second: "ใจดี"
};

const coordinatePair: Pair<number, number> = {
  first: 10,
  second: 20
};

console.log("Pair examples:");
console.log("Name pair:", namePair);
console.log("Coordinate pair:", coordinatePair);

// Generic Class - คลาสจีเนริก
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  toArray(): T[] {
    return [...this.items];
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

const stringStack = new Stack<string>();
stringStack.push("first");
stringStack.push("second");
stringStack.push("third");

console.log("Stack examples:");
console.log("Number stack:", numberStack.toArray());
console.log("Pop from number stack:", numberStack.pop());
console.log("String stack:", stringStack.toArray());
console.log("Peek string stack:", stringStack.peek());

// Generic Constraints - ข้อจำกัดจีเนริก
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(`ความยาว: ${arg.length}`);
  return arg;
}

// ใช้ได้กับ string และ array เพราะมี length property
logLength("Hello TypeScript");
logLength([1, 2, 3, 4, 5]);
logLength(["a", "b", "c"]);

// Generic with keyof - ใช้กับ key ของ object
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = {
  name: "สมศรี",
  age: 25,
  email: "somsri@example.com"
};

console.log("Object property access:");
console.log("Name:", getProperty(person, "name"));
console.log("Age:", getProperty(person, "age"));
console.log("Email:", getProperty(person, "email"));

// Multiple Generic Parameters - หลายพารามิเตอร์จีเนริก
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

console.log("Multiple generics:");
console.log("Swap:", swap(["hello", 42]));
console.log("Swap:", swap([true, "world"]));

const merged = merge(
  { name: "สมชาย", age: 30 },
  { email: "somchai@example.com", city: "กรุงเทพฯ" }
);
console.log("Merged object:", merged);

// Generic Type Aliases - นามแฝงประเภทจีเนริก
type Result<T, E = Error> = {
  success: true;
  data: T;
} | {
  success: false;
  error: E;
};

type ApiResponse<T> = Promise<Result<T>>;

function createSuccessResult<T>(data: T): Result<T> {
  return { success: true, data };
}

function createErrorResult<T, E = Error>(error: E): Result<T, E> {
  return { success: false, error };
}

async function fetchUser(id: number): ApiResponse<{ name: string; email: string }> {
  // จำลองการเรียก API
  if (id === 1) {
    return createSuccessResult({ name: "สมชาย", email: "somchai@example.com" });
  } else {
    return createErrorResult(new Error("ไม่พบผู้ใช้"));
  }
}

// ตัวอย่างการใช้งาน
async function demonstrateApiCall(): Promise<void> {
  const result1 = await fetchUser(1);
  if (result1.success) {
    console.log("ผู้ใช้ที่พบ:", result1.data);
  } else {
    console.log("เกิดข้อผิดพลาด:", result1.error.message);
  }

  const result2 = await fetchUser(999);
  if (result2.success) {
    console.log("ผู้ใช้ที่พบ:", result2.data);
  } else {
    console.log("เกิดข้อผิดพลาด:", result2.error.message);
  }
}

demonstrateApiCall();

// Generic Utility Functions - ฟังก์ชันอรรถประโยชน์จีเนริก
function filter<T>(array: T[], predicate: (item: T) => boolean): T[] {
  return array.filter(predicate);
}

function map<T, U>(array: T[], transform: (item: T) => U): U[] {
  return array.map(transform);
}

function reduce<T, U>(array: T[], reducer: (acc: U, current: T) => U, initialValue: U): U {
  return array.reduce(reducer, initialValue);
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Generic utility functions:");
console.log("Even numbers:", filter(numberArray, n => n % 2 === 0));
console.log("Squared numbers:", map(numberArray, n => n * n));
console.log("Sum:", reduce(numberArray, (sum, n) => sum + n, 0));

const words = ["สวัสดี", "TypeScript", "Generics"];
console.log("Word lengths:", map(words, word => word.length));
console.log("Long words:", filter(words, word => word.length > 5));

export {
  identity, getFirst, getLast,
  Container, Pair, SimpleContainer,
  Stack, swap, merge,
  Result, createSuccessResult, createErrorResult,
  fetchUser, filter, map, reduce
};
