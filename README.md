Last Structure Backend Project By NestJS
Clean Architecture NestJS

Module->Controller->Service->Usecases->Repository

- Config
เก็บ Env หรือ Config ที่อื่นๆ
- Constants
เก็บ Message และ Enum
- Database
เก็บจำพวก Entity ต่างๆ
- Guard
เก็บไฟล์ guard ที่เขียน logic เพื่อดักๆ ต่างๆ ตาม Requiment ยกตัวอย่างเช่นเช็ค token
- Interceptors
เก็บไฟล์จัดการข้อมูลก่อนส่ง response กลับไป
- Midleware
เก็บของที่ใช้ส่วนกลางยกตัวอย่างเช่นที่ใช้อยู่ตอนนี้จะเป็นข้อมูลจากที่แตกออกมาจาก token

- Modules
ใน Modules จะแยกออกเป็นแต่ละ feature ข้างในแต่ละ feature จะมี controller ใช้ในการจัดการการรับส่งคำขอ request ก่อนส่งต่อไปจัดการที่ Service ( ใน project ที่ทำจะทำการจัดการ logic ที่ usecases และจัดการจำพวก query ที่ repositories)

- Usecases 
บริหารจัดการ Logic ที่ usecases

- Repositories
บริหารจัดการเรื่องของการ Query ที่ repository