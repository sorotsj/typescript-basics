// TypeScript Basics - Main Index File
// ไฟล์หลักสำหรับเรียกใช้ตัวอย่างทั้งหมด

console.log("🚀 ยินดีต้อนรับสู่ TypeScript Basics Tutorial!");
console.log("================================================");

// Import และเรียกใช้ตัวอย่างทั้งหมดตามลำดับ
async function runAllExamples() {
  try {
    console.log("\n📚 บทที่ 1: Basic Types");
    console.log("========================");
    await import('./01-basic-types');
    
    await delay(1000);
    
    console.log("\n🏗️ บทที่ 2: Objects and Interfaces");
    console.log("===================================");
    await import('./02-objects-interfaces');
    
    await delay(1000);
    
    console.log("\n⚡ บทที่ 3: Functions");
    console.log("=====================");
    await import('./03-functions');
    
    await delay(1000);
    
    console.log("\n🏛️ บทที่ 4: Classes");
    console.log("====================");
    await import('./04-classes');
    
    await delay(1000);
    
    console.log("\n🔀 บทที่ 5: Enums and Union Types");
    console.log("==================================");
    await import('./05-enums-unions');
    
    await delay(1000);
    
    console.log("\n🧬 บทที่ 6: Generics");
    console.log("=====================");
    await import('./06-generics');
    
    await delay(1000);
    
    console.log("\n🎯 บทที่ 7: Advanced Types");
    console.log("===========================");
    await import('./07-advanced-types');
    
    await delay(1000);
    
    console.log("\n⏰ บทที่ 8: Async/Await");
    console.log("=======================");
    await import('./08-async-await');
    
    console.log("\n🎉 เสร็จสิ้นการสาธิตทุกบท!");
    console.log("=========================");
    console.log("ขอบคุณที่เรียนรู้ TypeScript กับเรา");
    
  } catch (error) {
    console.error("❌ เกิดข้อผิดพลาดในการโหลดตัวอย่าง:", error);
  }
}

// Helper function
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// เริ่มการทำงาน
console.log("⭐ เริ่มโหลดตัวอย่างทั้งหมด...\n");
runAllExamples();

// Export เพื่อให้สามารถ import ได้
export { runAllExamples };
