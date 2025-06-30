// Types and Interfaces Examples

// 1. Interface vs Type
console.log("=== Interface vs Type ===");

// Interface - can be extended and merged
interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
  fuelType: 'gasoline' | 'diesel' | 'electric' | 'hybrid';
}

// Type alias - more flexible for unions, intersections
type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

// 2. Literal Types
type Theme = 'light' | 'dark' | 'auto';
type Size = 'small' | 'medium' | 'large';

interface ButtonProps {
  text: string;
  theme: Theme;
  size: Size;
  onClick: () => void;
}

function createButton(props: ButtonProps): string {
  return `Button: ${props.text} (${props.size}, ${props.theme})`;
}

const myButton = createButton({
  text: "Click Me",
  theme: "dark",
  size: "medium",
  onClick: () => console.log("Button clicked!")
});

console.log(myButton);

// 3. Index Signatures
interface StringDictionary {
  [key: string]: string;
}

interface NumberDictionary {
  [key: string]: number;
}

const translations: StringDictionary = {
  hello: "สวัสดี",
  goodbye: "ลาก่อน",
  thank_you: "ขอบคุณ"
};

const scores: NumberDictionary = {
  math: 95,
  science: 88,
  english: 92
};

console.log("Translations:", translations);
console.log("Scores:", scores);

// 4. Function Types
type Calculator = (a: number, b: number) => number;

const add: Calculator = (a, b) => a + b;
const multiply: Calculator = (a, b) => a * b;

interface MathOperations {
  add: Calculator;
  subtract: Calculator;
  multiply: Calculator;
  divide: Calculator;
}

const mathOps: MathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

console.log("Math operations:");
console.log("5 + 3 =", mathOps.add(5, 3));
console.log("5 * 3 =", mathOps.multiply(5, 3));

// 5. Generic Interfaces
interface Repository<T> {
  findById(id: number): Promise<T | null>;
  save(entity: T): Promise<T>;
  delete(id: number): Promise<boolean>;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

class ProductRepository implements Repository<Product> {
  private products: Product[] = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics" },
    { id: 2, name: "Book", price: 19.99, category: "Education" }
  ];

  async findById(id: number): Promise<Product | null> {
    const product = this.products.find(p => p.id === id);
    return product || null;
  }

  async save(product: Product): Promise<Product> {
    this.products.push(product);
    return product;
  }

  async delete(id: number): Promise<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index > -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}

// Example usage
async function demonstrateRepository(): Promise<void> {
  const repo = new ProductRepository();
  
  const product = await repo.findById(1);
  console.log("Found product:", product);

  const newProduct: Product = {
    id: 3,
    name: "Smartphone",
    price: 699,
    category: "Electronics"
  };
  
  await repo.save(newProduct);
  console.log("Saved new product:", newProduct);
}

demonstrateRepository();

export { Vehicle, Car, Point2D, Point3D, ButtonProps, Repository, Product };
