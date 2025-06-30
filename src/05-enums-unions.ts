// 5. Enums and Union Types - อีนัมและยูเนียนไทป์
console.log("=== Enums and Union Types ===");

// Numeric Enums - อีนัมตัวเลข
enum Status {
  Pending,    // 0
  Approved,   // 1
  Rejected,   // 2
  Cancelled   // 3
}

enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

console.log("Status enum:");
console.log("Pending:", Status.Pending);
console.log("Approved:", Status.Approved);
console.log("High priority:", Priority.High);

// String Enums - อีนัมข้อความ
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
  Yellow = "yellow"
}

enum Direction {
  Up = "UP",
  Down = "DOWN", 
  Left = "LEFT",
  Right = "RIGHT"
}

console.log("Color enum:");
console.log("Red color:", Color.Red);
console.log("Direction:", Direction.Up);

// Heterogeneous Enums - อีนัมผสม (ไม่แนะนำ)
enum Mixed {
  No = 0,
  Yes = "YES"
}

// การใช้งาน Enums
function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "กำลังรอการอนุมัติ";
    case Status.Approved:
      return "อนุมัติแล้ว";
    case Status.Rejected:
      return "ปฏิเสธ";
    case Status.Cancelled:
      return "ยกเลิกแล้ว";
    default:
      return "สถานะไม่ทราบ";
  }
}

function getPriorityLevel(priority: Priority): string {
  if (priority >= Priority.Critical) {
    return "🔴 วิกฤต";
  } else if (priority >= Priority.High) {
    return "🟠 สูง";
  } else if (priority >= Priority.Medium) {
    return "🟡 ปานกลาง";
  } else {
    return "🟢 ต่ำ";
  }
}

console.log("Status messages:");
console.log(getStatusMessage(Status.Pending));
console.log(getStatusMessage(Status.Approved));

console.log("Priority levels:");
console.log(getPriorityLevel(Priority.Low));
console.log(getPriorityLevel(Priority.Critical));

// Union Types - ยูเนียนไทป์
type StringOrNumber = string | number;
type Theme = "light" | "dark" | "auto";
type Size = "small" | "medium" | "large";

function processValue(value: StringOrNumber): string {
  if (typeof value === "string") {
    return `ข้อความ: ${value.toUpperCase()}`;
  } else {
    return `ตัวเลข: ${value * 2}`;
  }
}

function getThemeClass(theme: Theme): string {
  switch (theme) {
    case "light":
      return "theme-light";
    case "dark":
      return "theme-dark";
    case "auto":
      return "theme-auto";
  }
}

function getSizePixels(size: Size): number {
  switch (size) {
    case "small":
      return 12;
    case "medium":
      return 16;
    case "large":
      return 20;
  }
}

console.log("Union type examples:");
console.log(processValue("hello"));
console.log(processValue(42));
console.log(getThemeClass("dark"));
console.log(getSizePixels("large"), "pixels");

// Discriminated Unions - ยูเนียนแบบมีตัวแยกแยะ
interface LoadingState {
  status: "loading";
}

interface SuccessState {
  status: "success";
  data: any;
}

interface ErrorState {
  status: "error";
  error: string;
}

type AsyncState = LoadingState | SuccessState | ErrorState;

function handleAsyncState(state: AsyncState): string {
  switch (state.status) {
    case "loading":
      return "กำลังโหลด...";
    case "success":
      return `สำเร็จ: ${JSON.stringify(state.data)}`;
    case "error":
      return `ข้อผิดพลาด: ${state.error}`;
  }
}

console.log("Async state examples:");
console.log(handleAsyncState({ status: "loading" }));
console.log(handleAsyncState({ status: "success", data: { name: "สมชาย" } }));
console.log(handleAsyncState({ status: "error", error: "ไม่พบข้อมูล" }));

// Type Guards - การป้องกันประเภท
function isString(value: StringOrNumber): value is string {
  return typeof value === "string";
}

function isNumber(value: StringOrNumber): value is number {
  return typeof value === "number";
}

function processWithTypeGuard(value: StringOrNumber): string {
  if (isString(value)) {
    // TypeScript รู้ว่า value เป็น string ที่นี่
    return `ข้อความความยาว: ${value.length}`;
  }
  
  if (isNumber(value)) {
    // TypeScript รู้ว่า value เป็น number ที่นี่
    return `ตัวเลขกำลังสอง: ${value ** 2}`;
  }
  
  return "ประเภทไม่ทราบ";
}

console.log("Type guard examples:");
console.log(processWithTypeGuard("TypeScript"));
console.log(processWithTypeGuard(5));

// Intersection Types - การตัดประเภท
interface PersonInfo {
  name: string;
  age: number;
}

interface ContactInfo {
  email: string;
  phone: string;
}

type PersonWithContact = PersonInfo & ContactInfo;

const personWithContact: PersonWithContact = {
  name: "สมศักดิ์",
  age: 30,
  email: "somsak@example.com",
  phone: "081-234-5678"
};

console.log("Intersection type:");
console.log(personWithContact);

// Const Assertions - การยืนยันค่าคงที่
const directions = ["north", "south", "east", "west"] as const;
type DirectionType = typeof directions[number]; // "north" | "south" | "east" | "west"

const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retryCount: 3
} as const;

console.log("Const assertions:");
console.log("Directions:", directions);
console.log("Config:", config);

export { 
  Status, Priority, Color, Direction,
  StringOrNumber, Theme, Size,
  AsyncState, PersonWithContact,
  getStatusMessage, processValue, handleAsyncState
};
