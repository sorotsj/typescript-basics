// 4. Classes - คลาส
console.log("=== Classes ===");

// Basic Class - คลาสพื้นฐาน
class Person {
  // Properties - คุณสมบัติ
  public name: string;
  private age: number;
  protected email: string;
  readonly id: number;

  // Constructor - ตัวสร้าง
  constructor(id: number, name: string, age: number, email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Methods - เมธอด
  public introduce(): string {
    return `สวัสดี ฉันชื่อ ${this.name}`;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(newAge: number): void {
    if (newAge > 0) {
      this.age = newAge;
    }
  }

  protected getEmail(): string {
    return this.email;
  }
}

const person1 = new Person(1, "สมชาย", 25, "somchai@example.com");
console.log(person1.introduce());
console.log("อายุ:", person1.getAge());
console.log("ID:", person1.id);

// Inheritance - การสืบทอด
class Employee extends Person {
  private department: string;
  private salary: number;

  constructor(id: number, name: string, age: number, email: string, department: string, salary: number) {
    super(id, name, age, email); // เรียก constructor ของ parent class
    this.department = department;
    this.salary = salary;
  }

  // Override method - เขียนทับเมธอด
  public introduce(): string {
    return `${super.introduce()} ฉันทำงานที่แผนก ${this.department}`;
  }

  public getDepartment(): string {
    return this.department;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getWorkEmail(): string {
    return this.getEmail(); // สามารถเรียกใช้ protected method ได้
  }
}

const employee1 = new Employee(2, "สมหญิง", 30, "somying@company.com", "IT", 50000);
console.log(employee1.introduce());
console.log("แผนก:", employee1.getDepartment());
console.log("เงินเดือน:", employee1.getSalary());

// Abstract Class - คลาสนามธรรม
abstract class Animal {
  protected name: string;
  protected species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  public getSpecies(): string {
    return this.species;
  }

  // Abstract method - เมธอดนามธรรม (ต้องถูก implement ในคลาสลูก)
  abstract makeSound(): string;
  abstract move(): string;
}

class Dog extends Animal {
  private breed: string;

  constructor(name: string, breed: string) {
    super(name, "สุนัข");
    this.breed = breed;
  }

  public makeSound(): string {
    return `${this.name} เห่า: โฮ่ง โฮ่ง!`;
  }

  public move(): string {
    return `${this.name} วิ่งไปมา`;
  }

  public getBreed(): string {
    return this.breed;
  }
}

class Cat extends Animal {
  private color: string;

  constructor(name: string, color: string) {
    super(name, "แมว");
    this.color = color;
  }

  public makeSound(): string {
    return `${this.name} ร้อง: เหมียว`;
  }

  public move(): string {
    return `${this.name} เดินเบาๆ`;
  }

  public getColor(): string {
    return this.color;
  }
}

const myDog = new Dog("บัดดี้", "โกลเด้น รีทรีฟเวอร์");
const myCat = new Cat("มิ้ว", "ขาว");

console.log(myDog.makeSound());
console.log(myDog.move());
console.log("สายพันธุ์:", myDog.getBreed());

console.log(myCat.makeSound());
console.log(myCat.move());
console.log("สี:", myCat.getColor());

// Static Members - สมาชิกแบบสแตติก
class MathUtility {
  public static readonly PI = 3.14159;
  private static instanceCount = 0;

  public static add(a: number, b: number): number {
    return a + b;
  }

  public static multiply(a: number, b: number): number {
    return a * b;
  }

  public static getCircleArea(radius: number): number {
    return this.PI * radius * radius;
  }

  public static getInstanceCount(): number {
    return this.instanceCount;
  }

  constructor() {
    MathUtility.instanceCount++;
  }
}

console.log("Math operations:");
console.log("5 + 3 =", MathUtility.add(5, 3));
console.log("4 * 6 =", MathUtility.multiply(4, 6));
console.log("พื้นที่วงกลม (r=5):", MathUtility.getCircleArea(5));
console.log("PI =", MathUtility.PI);

// Generic Class - คลาสแบบทั่วไป
class Box<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  public add(item: T): void {
    this.contents.push(item);
  }

  public remove(): T | undefined {
    return this.contents.pop();
  }

  public getAll(): T[] {
    return [...this.contents];
  }

  public getCount(): number {
    return this.contents.length;
  }

  public isEmpty(): boolean {
    return this.contents.length === 0;
  }
}

const numberBox = new Box<number>();
numberBox.add(1);
numberBox.add(2);
numberBox.add(3);

const stringBox = new Box<string>();
stringBox.add("สวัสดี");
stringBox.add("TypeScript");

console.log("Number box:", numberBox.getAll());
console.log("String box:", stringBox.getAll());
console.log("จำนวนใน number box:", numberBox.getCount());
console.log("จำนวนใน string box:", stringBox.getCount());

// Interface Implementation - การใช้งาน Interface
interface Flyable {
  fly(): string;
  getAltitude(): number;
}

interface Swimmable {
  swim(): string;
  getDivingDepth(): number;
}

class Bird implements Flyable {
  protected name: string;
  private altitude: number;

  constructor(name: string) {
    this.name = name;
    this.altitude = 0;
  }

  public fly(): string {
    this.altitude = 100;
    return `${this.name} บินขึ้นไปในอากาศ`;
  }

  public getAltitude(): number {
    return this.altitude;
  }
}

class Duck extends Bird implements Flyable, Swimmable {
  private divingDepth: number;

  constructor(name: string) {
    super(name);
    this.divingDepth = 0;
  }

  public swim(): string {
    this.divingDepth = 2;
    return `${this.name} ว่ายน้ำในบ่อ`;
  }

  public getDivingDepth(): number {
    return this.divingDepth;
  }
}

const eagle = new Bird("นกอินทรี");
const duck = new Duck("เป็ดเหลือง");

console.log(eagle.fly());
console.log("ความสูง:", eagle.getAltitude(), "เมตร");

console.log(duck.fly());
console.log(duck.swim());
console.log("ความลึก:", duck.getDivingDepth(), "เมตร");

export { Person, Employee, Animal, Dog, Cat, MathUtility, Box, Bird, Duck };
