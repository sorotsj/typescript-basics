# TypeScript Basics Tu## 🚀 Installation และ usage

### 1. #### Production build (compile แล้วรัน)
```powershell
# Build TypeScript เป็น JavaScript
npm run build

# รัน compiled JavaScript
npm start
```dependencies
```powershell
npm install
```

### 2. วิธีการ run program

#### Development mode (ใช้ ts-node)
```powershell
# รัน main file
npm run devยนรู้ TypeScript fundamentals พร้อม comprehensive examples

## 📋 Learning content

### พื้นฐาน (Basic Concepts)
- ✅ **Basic Types**: string, number, boolean, array, tuple, any, unknown
- ✅ **Objects & Interfaces**: การสร้างและใช้งาน interface, inheritance
- ✅ **Functions**: function declaration, arrow functions, optional parameters, generics
- ✅ **Classes**: การสร้าง class, inheritance, access modifiers, abstract classes
- ✅ **Enums & Union Types**: การใช้งาน enum และ union types
- ✅ **Generics**: การสร้าง reusable components

### ขั้นสูง (Advanced Concepts)
- ✅ **Advanced Types**: Utility Types, Conditional Types, Mapped Types
- ✅ **Async/Await**: การจัดการ asynchronous operations, Promises
- ✅ **Scope Variables**: var, let, const และการจัดการ scope
- ✅ **Error Handling**: try-catch, finally, custom errors
- ✅ **Type Guards**: การป้องกันและตรวจสอบ type
- ✅ **Modules**: import/export system

## 🚀 การติดตั้งและใช้งาน

### 1. ติดตั้ง Dependencies
```powershell
pnpm install
```

### 2. วิธีการรันโปรแกรม

#### รันแบบ Development (ใช้ ts-node)
```powershell
# รันไฟล์หลัก
pnpm run dev

#### รัน file เฉพาะ
```powershell
# รัน file ที่ต้องการ
ppnpm ts-node src/01-basic-types.ts       # Basic data types
ppnpm ts-node src/02-objects-interfaces.ts # Objects และ interfaces
ppnpm ts-node src/03-functions.ts          # Functions
ppnpm ts-node src/04-classes.ts            # Classes
ppnpm ts-node src/05-enums-unions.ts       # Enums และ union types
ppnpm ts-node src/06-generics.ts           # Generics
ppnpm ts-node src/07-advanced-types.ts     # Advanced types
ppnpm ts-node src/08-async-await.ts        # Async/Await
ppnpm ts-node src/09-scope-variables.ts    # Scope variables
```
```

#### รันแบบ Production (compile แล้วรัน)
```powershell
# Build TypeScript เป็น JavaScript
pnpm run build

# รัน compiled JavaScript
pnpm start
```

#### Watch Mode (auto-compile เมื่อมี changes)
```powershell
pnpm run watch
```

### 3. Project structure
```
TypescriptBasics/
├── src/                           # TypeScript source code
│   ├── index.ts                  # Main file - เรียกใช้ทุก examples
│   ├── 01-basic-types.ts         # Basic data types
│   ├── 02-objects-interfaces.ts  # Objects และ interfaces
│   ├── 03-functions.ts           # Functions
│   ├── 04-classes.ts             # Classes
│   ├── 05-enums-unions.ts        # Enums and unions
│   ├── 06-generics.ts            # Generics
│   ├── 07-advanced-types.ts      # Advanced types
│   ├── 08-async-await.ts         # Async/Await
│   └── 09-scope-variables.ts     # Scope variables (var, let, const)
├── dist/                         # Compiled JavaScript (สร้างหลัง build)
├── package.json                  # Package dependencies
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Documentation
```

## 📚 Chapter details

### Chapter 1: Basic Types (01-basic-types.ts)
- String, Number, Boolean
- Array และ Tuple
- Any, Void
- Unknown และ Type Assertions
- Null และ Undefined

### Chapter 2: Objects and Interfaces (02-objects-interfaces.ts)
- Interface creation
- Optional และ Readonly properties
- Interface inheritance
- Index signatures

### Chapter 3: Functions (03-functions.ts)
- Function declaration และ arrow functions
- Optional และ default parameters
- Rest parameters
- Generic functions
- Function overloading

### Chapter 4: Classes (04-classes.ts)
- Basic class structure
- Access modifiers (public, private, protected)
- Inheritance และ abstract classes
- Static members
- Generic classes

### Chapter 5: Enums and Union Types (05-enums-unions.ts)
- Numeric และ string enums
- Union types และ literal types
- Discriminated unions
- Type guards
- Intersection types

### Chapter 6: Generics (06-generics.ts)
- Generic functions และ classes
- Generic constraints
- Multiple generic parameters
- Generic utility functions

### Chapter 7: Advanced Types (07-advanced-types.ts)
- Utility types (Partial, Pick, Omit, Record)
- Conditional types
- Mapped types
- Template literal types
- Recursive types

### Chapter 8: Async/Await (08-async-await.ts)
- Promises และ async/await
- Error handling
- Promise.all, Promise.race, Promise.allSettled
- Timeout และ retry patterns

### Chapter 9: Scope Variables (09-scope-variables.ts)
- var: Function scope และ hoisting behavior
- let: Block scope และ Temporal Dead Zone
- const: Immutable reference และ mutability
- Scope chain ใน loops และ closures
- Best practices และ common pitfalls

## 📚 Code examples

### Basic Example
```typescript
// Types
let message: string = "Hello TypeScript!";
let age: number = 25;
let isActive: boolean = true;

// Interface
interface Person {
  name: string;
  age: number;
  email?: string; // Optional
}

// Function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Class
class Animal {
  constructor(private name: string) {}
  
  speak(): string {
    return `${this.name} makes a sound.`;
  }
}
```

### Advanced Example
```typescript
// Generic functions
function identity<T>(arg: T): T {
  return arg;
}

// Utility types
type PartialUser = Partial<User>;
type UserContact = Pick<User, 'name' | 'email'>;

// Async/Await patterns
async function fetchData(): Promise<User> {
  // API call simulation
  return { id: 1, name: "John", email: "john@example.com" };
}

// Scope variables
const config = { timeout: 5000 }; // const reference
let counter = 0;                   // mutable variable
// avoid var in modern code
```

## 🛠️ Available scripts

| Command | Description |
|---------|----------|
| `pnpm run dev` | รัน TypeScript files โดยตรง (development mode) |
| `pnpm run build` | Compile TypeScript เป็น JavaScript |
| `pnpm start` | รัน compiled JavaScript files |
| `pnpm run watch` | Watch mode - auto-compile เมื่อมี file changes |

## 📖 Documentation

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play) - ทดลองเขียน TypeScript online

## 💡 Tips for beginners

1. **เริ่มต้นด้วย type annotations**: ช่วยให้เข้าใจ TypeScript type system
2. **ใช้ interfaces สำหรับ object contracts**: เพิ่ม code maintainability
3. **เปิด strict mode ใน tsconfig**: จับ type errors ได้เร็วขึ้น
4. **ใช้ VS Code หรือ IDE ที่ support TypeScript**: IntelliSense ช่วยได้มาก
5. **อ่าน compiler error messages**: TypeScript errors ให้ข้อมูลที่ useful

## 🎯 Next steps

หลังจากเรียนรู้ fundamentals แล้ว แนะนำให้ศึกษาต่อ:
- **React with TypeScript** - Frontend development
- **Node.js with TypeScript** - Backend development  
- **Express.js with TypeScript** - Web API development
- **Testing with Jest and TypeScript** - Unit testing