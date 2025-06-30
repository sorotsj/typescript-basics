// 9. Scope Variables - การใช้งาน var, let, const
console.log("=== Scope Variables (var, let, const) ===");

// 1. var - Function Scope หรือ Global Scope
function demonstrateVar(): void {
  console.log("\n--- การใช้งาน var ---");
  
  // var มี function scope
  if (true) {
    var varInBlock = "ฉันอยู่ใน block แต่เป็น function scope";
    console.log("ใน if block:", varInBlock);
  }
  
  console.log("นอก if block (ยังเข้าถึงได้):", varInBlock);
  
  // var hoisting - ตัวแปรถูกยกขึ้นไปด้านบน
  // @ts-ignore - เพื่อแสดงพฤติกรรม var hoisting
  console.log("ก่อนประกาศ hoistedVar:", typeof hoistedVar); // undefined
  var hoistedVar = "ฉันถูก hoist แล้ว";
  console.log("หลังประกาศ hoistedVar:", hoistedVar);
  
  // var สามารถประกาศซ้ำได้
  var duplicateVar = "ค่าแรก";
  console.log("duplicateVar ครั้งแรก:", duplicateVar);
  
  var duplicateVar = "ค่าที่สอง";
  console.log("duplicateVar ครั้งสอง:", duplicateVar);
}

// 2. let - Block Scope
function demonstrateLet(): void {
  console.log("\n--- การใช้งาน let ---");
  
  let outerLet = "ฉันอยู่นอก block";
  
  if (true) {
    let innerLet = "ฉันอยู่ใน block (block scope)";
    let outerLet = "ฉันเป็น let ใหม่ใน block นี้"; // shadowing
    
    console.log("ใน if block - innerLet:", innerLet);
    console.log("ใน if block - outerLet (shadowed):", outerLet);
  }
  
  console.log("นอก if block - outerLet:", outerLet);
  // console.log("นอก if block - innerLet:", innerLet); // Error! ไม่สามารถเข้าถึงได้
  
  // let ไม่สามารถประกาศซ้ำในขอบเขตเดียวกันได้
  // let outerLet = "ประกาศซ้ำ"; // Error! Cannot redeclare block-scoped variable
  
  // let และ Temporal Dead Zone
  console.log("ก่อน let declaration...");
  // console.log(temporalDeadZoneVar); // Error! Cannot access before initialization
  let temporalDeadZoneVar = "ฉันไม่สามารถใช้ก่อนประกาศได้";
  console.log("หลัง let declaration:", temporalDeadZoneVar);
}

// 3. const - Block Scope และไม่สามารถเปลี่ยนแปลงได้
function demonstrateConst(): void {
  console.log("\n--- การใช้งาน const ---");
  
  const constantValue = "ฉันไม่สามารถเปลี่ยนแปลงได้";
  console.log("const value:", constantValue);
  
  // constantValue = "พยายามเปลี่ยน"; // Error! Assignment to constant variable
  
  // const ต้องกำหนดค่าตั้งแต่ประกาศ
  // const uninitialized; // Error! Missing initializer in const declaration
  
  // const กับ object - สามารถเปลี่ยนค่าใน object ได้
  const person = {
    name: "สมชาย",
    age: 25,
    hobbies: ["อ่านหนังสือ", "ฟังเพลง"]
  };
  
  console.log("ก่อนเปลี่ยน person:", person);
  
  // สามารถเปลี่ยนค่าใน object ได้
  person.name = "สมหญิง";
  person.age = 30;
  person.hobbies.push("เล่นกีตาร์");
  
  console.log("หลังเปลี่ยน person:", person);
  
  // แต่ไม่สามารถ reassign object ทั้งหมดได้
  // person = { name: "คนใหม่", age: 20, hobbies: [] }; // Error!
  
  // const กับ array
  const fruits = ["แอปเปิล", "กล้วย"];
  console.log("array ก่อนเปลี่ยน:", fruits);
  
  fruits.push("ส้ม");
  fruits[0] = "มะม่วง";
  
  console.log("array หลังเปลี่ยน:", fruits);
  
  // fruits = ["ผลไม้ใหม่"]; // Error! ไม่สามารถ reassign ได้
}

// 4. การเปรียบเทียบ Scope ในลูป
function demonstrateLoopScope(): void {
  console.log("\n--- Scope ในลูป ---");
  
  console.log("ปัญหาของ var ในลูป:");
  var varFunctions: (() => void)[] = [];
  
  for (var i = 0; i < 3; i++) {
    varFunctions.push(() => {
      console.log("var i ในฟังก์ชัน:", i); // จะแสดง 3 ทั้งหมด
    });
  }
  
  console.log("var i หลังลูป:", i); // 3
  varFunctions.forEach(fn => fn());
  
  console.log("\nแก้ปัญหาด้วย let:");
  const letFunctions: (() => void)[] = [];
  
  for (let j = 0; j < 3; j++) {
    letFunctions.push(() => {
      console.log("let j ในฟังก์ชัน:", j); // จะแสดง 0, 1, 2
    });
  }
  
  // console.log("let j หลังลูป:", j); // Error! j is not defined
  letFunctions.forEach(fn => fn());
  
  console.log("\nการใช้ setTimeout กับ var vs let:");
  
  // ปัญหากับ var
  console.log("setTimeout กับ var:");
  for (var x = 0; x < 3; x++) {
    setTimeout(() => {
      console.log("var x ใน setTimeout:", x); // จะแสดง 3 ทั้งหมด
    }, 100 + x * 50);
  }
  
  // แก้ปัญหาด้วย let
  setTimeout(() => {
    console.log("setTimeout กับ let:");
    for (let y = 0; y < 3; y++) {
      setTimeout(() => {
        console.log("let y ใน setTimeout:", y); // จะแสดง 0, 1, 2
      }, 50 + y * 50);
    }
  }, 500);
}

// 5. Temporal Dead Zone แบบละเอียด
function demonstrateTemporalDeadZone(): void {
  console.log("\n--- Temporal Dead Zone (TDZ) ---");
  
  console.log("เริ่มฟังก์ชัน");
  
  // TDZ สำหรับ let และ const
  try {
    // console.log(letVariable); // ReferenceError: Cannot access before initialization
    console.log("ไม่สามารถเข้าถึง let ก่อนประกาศได้");
  } catch (error) {
    console.log("TDZ Error:", error instanceof Error ? error.message : String(error));
  }
  
  // var hoisting vs let/const TDZ
  // @ts-ignore - เพื่อแสดงพฤติกรรม var hoisting
  console.log("var ก่อนประกาศ:", typeof varVariable); // undefined
  // console.log("let ก่อนประกาศ:", typeof letVariable); // ReferenceError
  
  var varVariable = "var ถูก hoist";
  let letVariable = "let ไม่ถูก hoist";
  const constVariable = "const ไม่ถูก hoist";
  
  console.log("หลังประกาศ - var:", varVariable);
  console.log("หลังประกาศ - let:", letVariable);
  console.log("หลังประกาศ - const:", constVariable);
}

// 6. Scope ใน Nested Functions
function demonstrateNestedScope(): void {
  console.log("\n--- Nested Scope ---");
  
  const outerVariable = "ฉันอยู่ใน outer function";
  let outerLet = "outer let";
  var outerVar = "outer var";
  
  function innerFunction(): void {
    const innerVariable = "ฉันอยู่ใน inner function";
    let innerLet = "inner let";
    
    console.log("ใน inner function:");
    // @ts-ignore - เพื่อแสดง shadowing behavior
    console.log("  เข้าถึง outer const:", outerVariable);
    console.log("  เข้าถึง outer let:", outerLet);
    console.log("  เข้าถึง outer var:", outerVar);
    console.log("  inner variable:", innerVariable);
    
    // Shadowing
    const outerVariable = "shadowed outer variable";
    console.log("  shadowed variable:", outerVariable);
    
    function deeplyNestedFunction(): void {
      console.log("  ใน deeply nested function:");
      console.log("    เข้าถึง inner let:", innerLet);
      console.log("    เข้าถึง shadowed outer:", outerVariable);
    }
    
    deeplyNestedFunction();
  }
  
  innerFunction();
  
  // console.log("เข้าถึง inner variable:", innerVariable); // Error!
}

// 7. Scope ใน Different Contexts
class ScopeInClass {
  private classProperty = "class property";
  
  constructor() {
    console.log("\n--- Scope ใน Class ---");
  }
  
  demonstrateClassScope(): void {
    const methodVariable = "method variable";
    
    if (true) {
      const blockVariable = "block variable";
      let blockLet = "block let";
      
      console.log("ใน class method block:");
      console.log("  class property:", this.classProperty);
      console.log("  method variable:", methodVariable);
      console.log("  block variable:", blockVariable);
      console.log("  block let:", blockLet);
    }
    
    // console.log("block variable outside:", blockVariable); // Error!
    console.log("method variable outside block:", methodVariable);
  }
  
  arrowFunctionScope = (): void => {
    console.log("ใน arrow function:");
    console.log("  this.classProperty:", this.classProperty);
    
    const arrowVar = "arrow function variable";
    
    if (true) {
      const arrowBlock = "arrow block";
      console.log("  arrow block variable:", arrowBlock);
    }
    
    console.log("  arrow function variable:", arrowVar);
  }
}

// 8. Best Practices
function demonstrateBestPractices(): void {
  console.log("\n--- Best Practices ---");
  
  // ✅ ใช้ const เป็นค่าเริ่มต้น
  const API_URL = "https://api.example.com";
  const config = {
    timeout: 5000,
    retries: 3
  };
  
  // ✅ ใช้ let เมื่อต้องการเปลี่ยนค่า
  let currentUser = null;
  let isLoading = false;
  let attemptCount = 0;
  
  // ❌ หลีกเลี่ยงการใช้ var
  // var oldStyleVariable = "ไม่แนะนำ";
  
  console.log("Best practices:");
  console.log("  API_URL (const):", API_URL);
  console.log("  config (const object):", config);
  
  // การเปลี่ยนค่า let
  isLoading = true;
  attemptCount++;
  currentUser = { id: 1, name: "ผู้ใช้" };
  
  console.log("  isLoading (let):", isLoading);
  console.log("  attemptCount (let):", attemptCount);
  console.log("  currentUser (let):", currentUser);
  
  // การเปลี่ยนค่าใน const object
  config.timeout = 10000;
  console.log("  modified config:", config);
}

// 9. Common Pitfalls และ Solutions
function demonstrateCommonPitfalls(): void {
  console.log("\n--- Common Pitfalls ---");
  
  // Pitfall 1: var hoisting
  console.log("Pitfall 1 - var hoisting:");
  // @ts-ignore - เพื่อแสดงพฤติกรรม var hoisting
  console.log("  typeof hoistedVar:", typeof hoistedVar); // undefined
  var hoistedVar = "hoisted";
  
  // Pitfall 2: var in loops
  console.log("\nPitfall 2 - var ในลูป (setTimeout):");
  for (var loopVar = 0; loopVar < 2; loopVar++) {
    setTimeout(() => {
      console.log("  var ในลูป:", loopVar); // จะแสดง 2 ทั้งหมด
    }, 100);
  }
  
  // Solution: ใช้ let
  setTimeout(() => {
    console.log("\nSolution - ใช้ let:");
    for (let loopLet = 0; loopLet < 2; loopLet++) {
      setTimeout(() => {
        console.log("  let ในลูป:", loopLet); // จะแสดง 0, 1
      }, 50);
    }
  }, 200);
  
  // Pitfall 3: const กับ objects
  console.log("\nPitfall 3 - const กับ objects:");
  const user = { name: "สมชาย" };
  user.name = "สมหญิง"; // ✅ ทำได้
  console.log("  เปลี่ยนค่าใน const object:", user);
  // user = { name: "คนใหม่" }; // ❌ Error!
}

// 10. Performance Considerations
function demonstratePerformance(): void {
  console.log("\n--- Performance Considerations ---");
  
  // การใช้ const ช่วยให้ JavaScript engine optimise ได้ดีกว่า
  const LARGE_ARRAY = new Array(1000000).fill(0);
  console.log("สร้าง array ขนาดใหญ่ด้วย const");
  
  // การประกาศตัวแปรในลูป
  console.log("\nการประกาศตัวแปรในลูป:");
  
  const startTime = performance.now();
  
  // ✅ ประกาศนอกลูป
  const outsideLoop = "constant value";
  for (let i = 0; i < 100000; i++) {
    // ใช้ outsideLoop
  }
  
  const endTime = performance.now();
  console.log(`เวลาที่ใช้: ${endTime - startTime}ms`);
}

// การสาธิตทั้งหมด
function runAllDemonstrations(): void {
  console.log("🚀 เริ่มการสาธิต Scope Variables");
  
  demonstrateVar();
  demonstrateLet();
  demonstrateConst();
  demonstrateLoopScope();
  
  setTimeout(() => {
    demonstrateTemporalDeadZone();
    demonstrateNestedScope();
    
    const scopeDemo = new ScopeInClass();
    scopeDemo.demonstrateClassScope();
    scopeDemo.arrowFunctionScope();
    
    demonstrateBestPractices();
    demonstrateCommonPitfalls();
    
    setTimeout(() => {
      demonstratePerformance();
      console.log("\n🎉 สิ้นสุดการสาธิต Scope Variables");
    }, 1000);
  }, 1000);
}

// Summary
console.log(`
📋 สรุป Scope Variables:

1. var:
   - Function scope หรือ Global scope
   - Hoisting (ยกขึ้นไปด้านบน)
   - สามารถประกาศซ้ำได้
   - ไม่แนะนำให้ใช้ในโค้ดใหม่

2. let:
   - Block scope
   - Temporal Dead Zone
   - ไม่สามารถประกาศซ้ำได้
   - ใช้เมื่อต้องการเปลี่ยนค่า

3. const:
   - Block scope
   - Temporal Dead Zone
   - ไม่สามารถ reassign ได้
   - ต้องกำหนดค่าตั้งแต่ประกาศ
   - ใช้เป็นค่าเริ่มต้น (Best Practice)

🎯 Best Practice:
   - ใช้ const เป็นหลัก
   - ใช้ let เมื่อต้องเปลี่ยนค่า
   - หลีกเลี่ยง var
`);

// เรียกใช้การสาธิต
runAllDemonstrations();

// Export สำหรับการใช้งานในไฟล์อื่น
export {
  demonstrateVar,
  demonstrateLet,
  demonstrateConst,
  demonstrateLoopScope,
  demonstrateTemporalDeadZone,
  demonstrateNestedScope,
  ScopeInClass,
  demonstrateBestPractices
};
