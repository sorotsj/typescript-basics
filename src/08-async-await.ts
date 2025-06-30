// 8. Async/Await and Promises - การใช้งานแบบอะซิงโครนัส
console.log("=== Async/Await and Promises ===");

// Basic Promise - พื้นฐาน
function createPromise(delay: number, value: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay > 0) {
        resolve(`สำเร็จ: ${value} หลังจาก ${delay}ms`);
      } else {
        reject(new Error("Delay ต้องมากกว่า 0"));
      }
    }, delay);
  });
}

// การใช้ Promise แบบ .then()
createPromise(1000, "ข้อมูลที่ 1")
  .then(result => {
    console.log("Promise result:", result);
    return createPromise(500, "ข้อมูลที่ 2");
  })
  .then(result => {
    console.log("Chained result:", result);
  })
  .catch(error => {
    console.error("Promise error:", error.message);
  });

// Async/Await Functions - ฟังก์ชันแบบ async/await
async function fetchUserData(userId: number): Promise<{id: number, name: string, email: string}> {
  // จำลองการเรียก API
  await delay(800);
  
  if (userId <= 0) {
    throw new Error("User ID ต้องมากกว่า 0");
  }
  
  return {
    id: userId,
    name: `ผู้ใช้ ${userId}`,
    email: `user${userId}@example.com`
  };
}

async function fetchUserPosts(userId: number): Promise<{id: number, title: string, content: string}[]> {
  await delay(600);
  
  return [
    { id: 1, title: "โพสต์แรก", content: "เนื้อหาของโพสต์แรก" },
    { id: 2, title: "โพสต์สอง", content: "เนื้อหาของโพสต์สอง" }
  ];
}

// Utility function สำหรับ delay
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// การใช้ async/await แบบต่อเนื่อง
async function getUserWithPosts(userId: number): Promise<void> {
  try {
    console.log(`กำลังโหลดข้อมูลผู้ใช้ ID: ${userId}...`);
    
    const user = await fetchUserData(userId);
    console.log("ข้อมูลผู้ใช้:", user);
    
    console.log("กำลังโหลดโพสต์...");
    const posts = await fetchUserPosts(userId);
    console.log("โพสต์ทั้งหมด:", posts);
    
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error instanceof Error ? error.message : String(error));
  }
}

// การรันหลาย Promise พร้อมกัน
async function fetchMultipleUsers(): Promise<void> {
  try {
    console.log("กำลังโหลดผู้ใช้หลายคน...");
    
    // Promise.all - รอให้ทุก Promise เสร็จ
    const users = await Promise.all([
      fetchUserData(1),
      fetchUserData(2),
      fetchUserData(3)
    ]);
    
    console.log("ผู้ใช้ทั้งหมด:", users);
    
  } catch (error) {
    console.error("เกิดข้อผิดพลาดในการโหลดผู้ใช้:", error instanceof Error ? error.message : String(error));
  }
}

// Promise.allSettled - รอให้ทุก Promise เสร็จ (ไม่หยุดถ้ามี error)
async function fetchAllUsersSettled(): Promise<void> {
  console.log("กำลังโหลดผู้ใช้ทั้งหมด (รวม error)...");
  
  const results = await Promise.allSettled([
    fetchUserData(1),
    fetchUserData(-1), // จะ error
    fetchUserData(2),
    fetchUserData(0)   // จะ error
  ]);
  
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`ผู้ใช้ ${index + 1}:`, result.value);
    } else {
      console.log(`ข้อผิดพลาดผู้ใช้ ${index + 1}:`, result.reason.message);
    }
  });
}

// Promise.race - ใช้ผลลัพธ์ของ Promise แรกที่เสร็จ
async function raceExample(): Promise<void> {
  console.log("การแข่งขัน Promise...");
  
  try {
    const winner = await Promise.race([
      createPromise(1000, "ช้า"),
      createPromise(500, "เร็ว"),
      createPromise(1500, "ช้ามาก")
    ]);
    
    console.log("ผู้ชนะ:", winner);
  } catch (error) {
    console.error("Race error:", error instanceof Error ? error.message : String(error));
  }
}

// Generic Promise Functions
async function fetchData<T>(url: string, parser: (data: any) => T): Promise<T> {
  await delay(300);
  
  // จำลอง API response
  const mockData = {
    user: { id: 1, name: "สมชาย" },
    product: { id: 1, name: "โทรศัพท์", price: 15000 },
    order: { id: 1, total: 25000, items: 2 }
  };
  
  const response = mockData[url as keyof typeof mockData];
  if (!response) {
    throw new Error(`ไม่พบข้อมูลสำหรับ URL: ${url}`);
  }
  
  return parser(response);
}

interface Product {
  id: number;
  name: string;
  price: number;
}

async function fetchProduct(): Promise<Product> {
  return fetchData<Product>("product", (data) => ({
    id: data.id,
    name: data.name,
    price: data.price
  }));
}

// Error Handling แบบต่างๆ
async function advancedErrorHandling(): Promise<void> {
  // แบบที่ 1: try-catch แยกแต่ละขั้นตอน
  try {
    const user = await fetchUserData(1);
    console.log("โหลดผู้ใช้สำเร็จ:", user.name);
    
    try {
      const posts = await fetchUserPosts(1);
      console.log(`พบโพสต์ ${posts.length} รายการ`);
    } catch (postsError) {
      console.log("ไม่สามารถโหลดโพสต์ได้:", postsError instanceof Error ? postsError.message : String(postsError));
      // แต่ยังดำเนินการต่อได้
    }
    
  } catch (userError) {
    console.error("ไม่สามารถโหลดผู้ใช้ได้:", userError instanceof Error ? userError.message : String(userError));
    return; // หยุดการทำงาน
  }
  
  // แบบที่ 2: การใช้ finally
  try {
    console.log("เริ่มการประมวลผล...");
    await delay(500);
    console.log("ประมวลผลเสร็จ");
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error);
  } finally {
    console.log("ทำความสะอาดทรัพยากร");
  }
}

// Timeout และ Retry
async function fetchWithTimeout<T>(
  promise: Promise<T>, 
  timeoutMs: number
): Promise<T> {
  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error("Timeout")), timeoutMs);
  });
  
  return Promise.race([promise, timeoutPromise]);
}

async function retryOperation<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      console.log(`ความพยายามครั้งที่ ${attempt} ล้มเหลว:`, error instanceof Error ? error.message : String(error));
      
      if (attempt === maxRetries) {
        throw new Error(`ล้มเหลวหลังจากพยายาม ${maxRetries} ครั้ง`);
      }
      
      await delay(delayMs);
    }
  }
  
  throw new Error("ไม่ควรถึงจุดนี้");
}

// การสาธิต
async function demonstrateAsync(): Promise<void> {
  console.log("🔥 เริ่มการสาธิต Async/Await");
  
  // ตัวอย่างที่ 1
  await getUserWithPosts(1);
  console.log("---");
  
  // ตัวอย่างที่ 2
  await fetchMultipleUsers();
  console.log("---");
  
  // ตัวอย่างที่ 3
  await fetchAllUsersSettled();
  console.log("---");
  
  // ตัวอย่างที่ 4
  await raceExample();
  console.log("---");
  
  // ตัวอย่างที่ 5
  try {
    const product = await fetchProduct();
    console.log("สินค้า:", product);
  } catch (error) {
    console.error("ไม่สามารถโหลดสินค้าได้:", error instanceof Error ? error.message : String(error));
  }
  console.log("---");
  
  // ตัวอย่างที่ 6
  await advancedErrorHandling();
  console.log("---");
  
  // ตัวอย่างที่ 7: Timeout
  try {
    const result = await fetchWithTimeout(
      createPromise(2000, "ข้อมูลช้า"), 
      1000
    );
    console.log("ผลลัพธ์:", result);
  } catch (error) {
    console.log("Timeout หรือ error:", error instanceof Error ? error.message : String(error));
  }
  
  // ตัวอย่างที่ 8: Retry
  try {
    let attemptCount = 0;
    const result = await retryOperation(async () => {
      attemptCount++;
      if (attemptCount < 3) {
        throw new Error("จำลอง error");
      }
      return "สำเร็จในครั้งที่ 3";
    });
    console.log("Retry result:", result);
  } catch (error) {
    console.log("Retry failed:", error instanceof Error ? error.message : String(error));
  }
  
  console.log("🎉 สิ้นสุดการสาธิต Async/Await");
}

// เรียกใช้การสาธิต
demonstrateAsync();

export {
  createPromise, fetchUserData, fetchUserPosts,
  getUserWithPosts, fetchMultipleUsers,
  fetchData, fetchWithTimeout, retryOperation
};
