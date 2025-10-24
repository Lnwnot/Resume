# Resume Builder - Professional Portfolio

โปรเจค Resume Builder ที่สร้างด้วย React.js สำหรับแสดง resume แบบ professional และสวยงาม พร้อมระบบ Tab และ Portfolio Gallery

## ✨ ฟีเจอร์

- 🎨 **Design สวยงาม**: UI/UX ที่ทันสมัยและเป็นมืออาชีพ
- 📱 **Responsive Design**: รองรับทุกขนาดหน้าจอ
- 🎭 **Animations**: เอฟเฟกต์การเคลื่อนไหวที่นุ่มนวล
- 📑 **Tab Navigation**: ระบบแท็บสำหรับสลับระหว่างหน้า
- 🖼️ **Portfolio Gallery**: แสดงผลงาน PNG พร้อม modal view
- 🔍 **Category Filter**: กรองผลงานตามหมวดหมู่
- 👤 **ข้อมูลส่วนตัว**: แสดงข้อมูลติดต่อและสรุปประวัติ
- 💼 **ประสบการณ์การทำงาน**: Timeline แบบสวยงาม
- 🎓 **ข้อมูลการศึกษา**: Card layout ที่ดูเป็นระเบียบ
- 🛠️ **ทักษะ**: Grid layout พร้อมไอคอนสำหรับแต่ละทักษะ
- 🚫 **Read-only**: ไม่สามารถแก้ไขได้ เหมาะสำหรับการแสดงผล

## 🎨 การออกแบบ

- **Color Scheme**: Gradient สีน้ำเงิน-ม่วงที่ดูเป็นมืออาชีพ
- **Typography**: ใช้ฟอนต์ Inter ที่อ่านง่าย
- **Layout**: Card-based design พร้อม shadow effects
- **Tab System**: Navigation แบบสวยงามพร้อมไอคอน
- **Portfolio Gallery**: Grid layout พร้อม hover effects และ modal
- **Animations**: 
  - Slide up animation เมื่อโหลดหน้า
  - Hover effects บน cards
  - Timeline animations
  - Bounce effects สำหรับ skills
  - Modal animations

## 🚀 การติดตั้งและรันโปรเจค

1. ติดตั้ง dependencies:
```bash
npm install
```

2. รันโปรเจค:
```bash
npm start
```

3. เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

## 📁 โครงสร้างโปรเจค

```
src/
├── components/
│   ├── Header.js          # ส่วนหัว resume พร้อม avatar
│   ├── PersonalInfo.js   # ข้อมูลส่วนตัวและติดต่อ
│   ├── Experience.js     # Timeline ประสบการณ์การทำงาน
│   ├── Education.js      # Card layout ข้อมูลการศึกษา
│   ├── Skills.js         # Grid layout ทักษะพร้อมไอคอน
│   └── Portfolio.js      # Portfolio gallery พร้อม modal
├── App.js               # Component หลักพร้อม tab system
├── index.js             # Entry point
└── index.css            # Modern CSS with animations
```

## 🎯 ข้อมูลตัวอย่าง

โปรเจคนี้มาพร้อมกับข้อมูลตัวอย่างของ:
- **อัคราธร อัครวาณิช** - นักศึกษาวิศวกรรมคอมพิวเตอร์
- ประสบการณ์การฝึกงานที่ Tokio Marine
- การศึกษาที่มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
- ทักษะ 10 ด้าน พร้อมไอคอนเฉพาะ
- **ผลงาน**: Transcript ใบแสดงผลการเรียน

## 🖼️ Portfolio Features

- **Single Item**: แสดงใบ Transcript เดียว
- **Modal View**: คลิกเพื่อดูรายละเอียดผลงานแบบเต็มหน้าจอ
- **Responsive**: ปรับตัวได้ทุกขนาดหน้าจอ
- **Image Path**: `/image/transcript.jpg`

## 🛠️ เทคโนโลยีที่ใช้

- **React 18** - Frontend framework
- **CSS3** - Modern styling with animations
- **HTML5** - Semantic markup
- **CSS Grid & Flexbox** - Responsive layouts
- **CSS Animations** - Smooth transitions
- **Modal System** - Custom modal implementation

## 📱 Responsive Design

- **Desktop**: Layout แบบเต็มรูปแบบพร้อม tab navigation
- **Tablet**: ปรับ layout ให้เหมาะสม
- **Mobile**: Stack layout, ซ่อน tab labels, ปรับขนาดฟอนต์

## 🎨 การปรับแต่ง

คุณสามารถปรับแต่งได้ในไฟล์ `src/index.css`:

- **สีหลัก**: `#667eea` และ `#764ba2`
- **สีพื้นหลัง**: Gradient background
- **Animations**: ปรับความเร็วและเอฟเฟกต์
- **Typography**: เปลี่ยนฟอนต์และขนาด
- **Portfolio**: ปรับ grid layout และ modal styles

## 📄 การใช้งาน

โปรเจคนี้เหมาะสำหรับ:
- แสดง resume แบบ online
- Portfolio website
- CV presentation
- การนำเสนอข้อมูลส่วนตัวแบบ professional
- แสดงผลงานและโปรเจคต่างๆ

## 🔧 การเพิ่มรูปภาพ Transcript

เพื่อเพิ่มรูปภาพ Transcript จริง:

1. วางไฟล์ `transcript.jpg` ในโฟลเดอร์ `public/image/`
2. แก้ไขไฟล์ `src/components/Portfolio.js` เปลี่ยน image path จาก placeholder เป็น `/image/transcript.jpg`
3. รูปภาพจะแสดงอัตโนมัติใน Portfolio
4. คลิกเพื่อดูขนาดเต็มใน Modal

**หมายเหตุ**: ตอนนี้ใช้ placeholder image สำหรับแสดงตัวอย่าง
