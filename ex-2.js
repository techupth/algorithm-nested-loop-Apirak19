// เริ่มเขียนโค้ดตรงนี้
// ให้สร้าง Function printStar Function นี้จะรับตัวเลขเข้ามา 1 ตัว
// แล้วแสดงผลลัพธ์ตามตัวเลขที่ได้รับมา
// เช่น ถ้าตัวเลขที่รับมาคือ 5 จะได้ผลลัพธ์ดังนี้
// *
// * *
// * * *
// * * * *
// * * * * *
function printStar(num) {
  let finalPattern = "";
  for (let i = 0; i < num; i++) {
    let rowPattern = "";
    for (let j = 0; j <= i; j++) {
      rowPattern = rowPattern + "\t" + "*";
    }
    finalPattern = finalPattern + rowPattern + "\n";
  }
  return finalPattern;
}

console.log(printStar(5));
