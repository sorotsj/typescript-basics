// Advanced TypeScript Concepts

// 1. Utility Types
console.log("=== Utility Types ===");

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;

// Pick - selects specific properties
type UserContact = Pick<User, 'name' | 'email'>;

// Omit - excludes specific properties
type UserWithoutId = Omit<User, 'id'>;

// Record - creates an object type with specific keys and values
type UserRoles = Record<string, string[]>;

const userRoles: UserRoles = {
  admin: ['read', 'write', 'delete'],
  user: ['read'],
  guest: ['read']
};

console.log("User roles:", userRoles);

// 2. Conditional Types
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// 3. Mapped Types
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type ReadOnlyUser = ReadOnly<User>;

// 4. Async/Await
console.log("\n=== Async/Await ===");

async function fetchUserData(userId: number): Promise<User> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "John Doe",
        email: "john@example.com",
        age: 30
      });
    }, 1000);
  });
}

async function demonstrateAsync(): Promise<void> {
  try {
    console.log("Fetching user data...");
    const user = await fetchUserData(1);
    console.log("User data:", user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// 5. Modules and Imports/Exports
export { User, fetchUserData };
export default demonstrateAsync;

// Run the async demo
demonstrateAsync();
