// 7. Advanced Types - ประเภทขั้นสูง
console.log("=== Advanced Types ===");

// Utility Types - ประเภทอรรถประโยชน์
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isActive: boolean;
}

// Partial<T> - ทำให้ทุก property เป็น optional
type PartialUser = Partial<User>;
const updateUser: PartialUser = {
  name: "สมชาย",
  email: "somchai@example.com"
  // ไม่ต้องใส่ทุก property
};

// Required<T> - ทำให้ทุก property เป็น required
interface OptionalUser {
  id?: number;
  name?: string;
  email?: string;
}

type RequiredUser = Required<OptionalUser>;
const completeUser: RequiredUser = {
  id: 1,
  name: "สมหญิง", 
  email: "somying@example.com"
  // ต้องใส่ทุก property
};

// Pick<T, K> - เลือกเฉพาะ property ที่ต้องการ
type UserContact = Pick<User, 'name' | 'email'>;
const contact: UserContact = {
  name: "สมศักดิ์",
  email: "somsak@example.com"
};

// Omit<T, K> - ยกเว้น property ที่ไม่ต้องการ
type UserWithoutId = Omit<User, 'id'>;
const newUser: UserWithoutId = {
  name: "สมใจ",
  email: "somjai@example.com",
  age: 25,
  isActive: true
};

// Record<K, T> - สร้าง object type ด้วย keys และ value types ที่กำหนด
type UserRoles = Record<string, string[]>;
const roles: UserRoles = {
  admin: ["read", "write", "delete"],
  user: ["read"],
  guest: ["read"]
};

type StatusRecord = Record<'pending' | 'approved' | 'rejected', string>;
const statusMessages: StatusRecord = {
  pending: "รอการอนุมัติ",
  approved: "อนุมัติแล้ว",
  rejected: "ปฏิเสธ"
};

console.log("Utility Types:");
console.log("Partial user:", updateUser);
console.log("Contact:", contact);
console.log("User roles:", roles);
console.log("Status messages:", statusMessages);

// Conditional Types - ประเภทที่มีเงื่อนไข
type IsString<T> = T extends string ? true : false;
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsString<string>;   // true
type Test2 = IsString<number>;   // false
type Test3 = IsArray<string[]>;  // true
type Test4 = IsArray<string>;    // false

// NonNullable<T> - ยกเว้น null และ undefined
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>; // string

// Extract<T, U> และ Exclude<T, U>
type Colors = "red" | "green" | "blue" | "yellow";
type PrimaryColors = Extract<Colors, "red" | "green" | "blue">; // "red" | "green" | "blue"
type NonPrimaryColors = Exclude<Colors, "red" | "green" | "blue">; // "yellow"

console.log("Conditional types examples completed");

// Mapped Types - ประเภทที่แมป
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type ReadonlyUser = ReadOnly<User>;
type OptionalUserProps = Optional<User>;
type NullableUser = Nullable<User>;

// ตัวอย่างการใช้งาน
const readonlyUser: ReadonlyUser = {
  id: 1,
  name: "สมพงษ์",
  email: "sompong@example.com",
  age: 30,
  isActive: true
};
// readonlyUser.name = "ใหม่"; // Error: Cannot assign to 'name' because it is a read-only property

const optionalUser: OptionalUserProps = {
  name: "สมหมาย"
  // property อื่นๆ เป็น optional
};

console.log("Mapped types:");
console.log("Readonly user:", readonlyUser);
console.log("Optional user:", optionalUser);

// Template Literal Types - ประเภท template literal
type Greeting = `hello-${string}`;
type EventName<T extends string> = `on${Capitalize<T>}`;
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type APIEndpoint = `/${string}`;

type ClickEvent = EventName<"click">; // "onClick"
type MouseEvent = EventName<"mouseOver">; // "onMouseOver"

const greeting1: Greeting = "hello-world";
const greeting2: Greeting = "hello-TypeScript";

console.log("Template literal types:");
console.log("Greetings:", greeting1, greeting2);

// Index Access Types - การเข้าถึง type ผ่าน index
type UserName = User['name'];     // string
type UserAge = User['age'];       // number
type UserKeys = keyof User;       // "id" | "name" | "email" | "age" | "isActive"

function getUserProperty<K extends keyof User>(user: User, key: K): User[K] {
  return user[key];
}

const sampleUser: User = {
  id: 1,
  name: "สมศรี",
  email: "somsri@example.com",
  age: 28,
  isActive: true
};

console.log("Index access types:");
console.log("User name:", getUserProperty(sampleUser, "name"));
console.log("User age:", getUserProperty(sampleUser, "age"));

// Recursive Types - ประเภทแบบเรียกซ้ำ
interface TreeNode {
  value: string;
  children?: TreeNode[];
}

const tree: TreeNode = {
  value: "root",
  children: [
    {
      value: "child1",
      children: [
        { value: "grandchild1" },
        { value: "grandchild2" }
      ]
    },
    {
      value: "child2"
    }
  ]
};

function printTree(node: TreeNode, indent: string = ""): void {
  console.log(indent + node.value);
  if (node.children) {
    node.children.forEach(child => printTree(child, indent + "  "));
  }
}

console.log("Recursive tree structure:");
printTree(tree);

// Function Overloads - การโอเวอร์โหลดฟังก์ชัน
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: boolean, b: boolean): boolean;
function combine(a: any, b: any): any {
  return a + b;
}

console.log("Function overloads:");
console.log("String combine:", combine("Hello ", "World"));
console.log("Number combine:", combine(5, 3));
console.log("Boolean combine:", combine(true, false));

// Discriminated Unions with Type Guards
interface Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
    case "circle":
      return Math.PI * shape.radius * shape.radius;
  }
}

const square: Square = { kind: "square", size: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };
const circle: Circle = { kind: "circle", radius: 3 };

console.log("Shape areas:");
console.log("Square area:", getArea(square));
console.log("Rectangle area:", getArea(rectangle));
console.log("Circle area:", getArea(circle).toFixed(2));

export {
  PartialUser, UserContact, UserWithoutId, UserRoles,
  ReadOnly, Optional, Nullable,
  TreeNode, Shape, Square, Rectangle, Circle,
  combine, getArea, printTree
};
