// เริ่มเขียนโค้ดตรงนี้
// ให้สร้าง Function printPattern
// Function นี้จะรับตัวเลขเข้ามา 1 ตัว แล้วแสดงผลลัพธ์ตามตัวเลขที่ได้รับมา เช่น ถ้าตัวเลขที่รับมาคือ 5 จะได้ผลลัพธ์ดังนี้
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function printPattern(num) {
  let finalPattern = "";
  for (let i = 1; i <= num; i++) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern = rowPattern + j + "\t";
    }
    finalPattern = finalPattern + rowPattern + "\n";
  }
  return finalPattern;
}

// num = 2
// loop i1, j1 rowPattern =

console.log(printPattern(5));
