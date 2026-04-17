// 1. คลังข่าวสาร แบ่งตามหมวดหมู่ (ใส่เนื้อหาข่าวเต็มของคุณที่นี่)
const newsLibrary = {
  'motorsport': [
    {
      id: 'max-future-2026',
      title: "เส้นทางอนาคตของ Max Verstappen หลังจบฤดูกาล 2026",
      date: "29 March 2026",
      summary: "บทสัมภาษณ์เจาะลึกอนาคตของแชมป์โลก 3 สมัย หลังจบสนาม Suzuka...",
      img: "https://i.postimg.cc/q7hQJM4V/13f374412c1038638de2be1510082ecf.jpg",
      fullContent: `
        <p class="news-lead">ภายหลังการแข่งขันที่สนามซูซูกะ ประเทศญี่ปุ่นได้เสร็จสิ้นไปเป็นที่เรียบร้อย และมีการพักฤดูกาลยาวนานถึง 5 สัปดาห์ด้วยกัน เหตุจากความขัดแย้งทางการเมืองระหว่างประเทศในตะวันออกกลางจึงต้องยกเลิกสนามบาห์เรนและซาอุดีอาระเบียไปอย่างน่าเสียดาย</p>
        <p>อย่างที่ทราบกันดีว่าฤดูกาล 2026 นี้ ทางสหพันธ์ยานยนต์ได้มีการปรับเปลี่ยนกฎกติกาใหม่ทำให้อัตราการดึงพลังงานของตัวรถแบ่งเป็นครึ่งต่อครึ่งคือระบบไฟฟ้าและเครื่องยนต์สันดาป นั่นทำให้ตลอดการแข่งขันจริงนักแข่งต้องทำการบริหารแบตเตอรี่ในแต่ละโค้งอย่างถี่ถ้วน และเนื่องด้วยเครื่องยนต์ไฮบริดในฤดูกาลใหม่นี้จะกินพลังงานไฟฟ้าเพิ่มขึ้นเป็นเท่าตัว จึงทำให้แบตเตอรี่หมดลงอย่างรวดเร็วในทางตรง ทางสหพันธ์ยานยนต์จึงได้นำระบบ Active Aerodynamics มาปรับใช้แทนที่ระบบเดิมอย่าง DRS เพื่อไม่ให้รถต้องใช้พลังงานจากไฟฟ้าหรือเชื้อเพลิงยั่งยืนมากเกินไป</p>
        <p>บทสัมภาษณ์แม็ก เวอร์สแตพเพนได้ให้ข้อมูลกับสำนักข่าว BBC Sports ว่าเขากำลังพิจารณาอำลาวงการหลังจบฤดูกาลนี้ เหตุเนื่องมาจากข้อกำหนดใหม่มีลดทอนสเน่ห์และจิตวิญญาณดั้งเดิมของกีฬาลง เขาไม่พอใจที่ต้องผ่อนคันเร่งเพื่อชาร์จแบตเตอรี่ใหม่มันเหมือกับต้องมานั่งคำนวณพลังงานไฟฟ้าในขณะที่มือทั้งสองข้างกำลังประคองพวงมาลัยอยู่แทนที่จะสามารถเหยียบคันเร่งได้เต็มที่</p>
        <p>ลือว่าแม็กซ์ เวอร์สแตพเพนอาจเปลี่ยนไปขับให้กับทีมเมอร์เซเดสแทนหลังเครื่องยนต์เกิดขัดข้องในช่วงการแข่งขันจริงในสนามเซี่ยงไฮ้ ประเทศจีนที่ผ่านมา นั่นทำให้แม็กซ์ไม่สามารถจบการแข่งขันได้</p>
        <p>นี่ก็เป็นอีกครั้งที่แม็กซ์ออกมาแสดงความไม่พอใจในตัวเครื่องยนต์ของฤดูกาลนี้ กดดันให้ทางสหพันธ์ยานยนต์เร่งแก้กฎก่อนถึงสนามไมอามี่ ประเทศสหรัฐฯ ซึ่งได้ออกมาแจ้งเป็นที่เรียบร้อยแล้วว่าจะไม่มีการเปลี่ยนเครื่องยนต์อย่างแน่นอนแต่จะมีการปรับเปลี่ยนในเรื่องของข้อกำหนดในภายหลังอีกที</p>
        <div class="quote-card">"บางทีผมควรมีความสุขที่ได้ใช้ชีวิตอยู่กับครอบครัวและเพื่อนฝูงมากกว่ากีฬาที่ไม่มีความสนุกของมันอีกแล้ว"</div>
      `
    },
    {
      id: 'f1-miami-update',
      title: "เตรียมความพร้อมก่อนสนาม Miami GP",
      date: "17 April 2026",
      summary: "สรุปการปรับเปลี่ยนกฎ Active Aero ล่าสุดก่อนเริ่มซ้อมที่สหรัฐฯ",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
      fullContent: `<p>เนื้อหาข่าวฉบับเต็มของสนามไมอามี่...</p>`
    }
  ],
  'politics': [
    {
      id: 'world-politics-update',
      title: "เกาะติดสถานการณ์ตะวันออกกลาง",
      date: "17 April 2026",
      summary: "สรุปผลกระทบจากการยกเลิกสนามบาห์เรนและซาอุฯ",
      img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1000",
      fullContent: `<p>เนื้อหาข่าวการเมืองฉบับเต็ม...</p>`
    }
  ],
  'economy': [{
  id: 'thai-oil-prices-17apr26',
  title: "อัปเดตราคาน้ำมันวันนี้ ทุกปั๊มทั่วไทย",
  date: "17 April 2026",
  summary: "เช็กราคาน้ำมันล่าสุดจาก PTT, บางจาก, เชลล์ และค่ายอื่นๆ ทั่วประเทศ...",
  img: "https://i.postimg.cc/kMfLPYn2/img-c988f5dc.jpg", // รูปปั๊มน้ำมันเท่ๆ
  fullContent: `
    <p class="news-lead">รายงานสถานะราคาน้ำมันขายปลีกในเขตกรุงเทพฯ และปริมณฑล ประจำวันที่ 17 เมษายน 2569</p>
    
    <h3>⛽ ปั๊ม PTT & บางจาก (ราคามาตรฐาน)</h3>
    <p>ราคาน้ำมันส่วนใหญ่ยังคงทรงตัว โดยมีรายละเอียดดังนี้:</p>
    <div class="quote-card">
      <strong>แก๊สโซฮอล์ 95:</strong> 42.45 บาท/ลิตร<br>
      <strong>แก๊สโซฮอล์ 91:</strong> 42.08 บาท/ลิตร<br>
      <strong>ดีเซล:</strong> 42.90 บาท/ลิตร
    </div>

    <h3>📊 ตารางเปรียบเทียบราคาแยกตามแบรนด์</h3>
    <p>ข้อมูลราคาน้ำมันจากค่ายต่างๆ (หน่วย: บาท/ลิตร)</p>
    
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: #ddd;">
        <tr style="background: #e74c3c; color: white;">
          <th style="padding: 10px; border: 1px solid #444;">ประเภทน้ำมัน</th>
          <th style="padding: 10px; border: 1px solid #444;">PTT/BCP</th>
          <th style="padding: 10px; border: 1px solid #444;">Shell</th>
          <th style="padding: 10px; border: 1px solid #444;">Caltex</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #444;">แก๊สโซฮอล์ 95</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">42.45</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">42.95</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">42.45</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #444;">แก๊สโซฮอล์ 91</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">42.08</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">42.33</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">42.08</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #444;">ดีเซล พรีเมียม</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">64.80</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">67.84</td>
          <td style="padding: 10px; border: 1px solid #444; text-align: center;">65.30</td>
        </tr>
      </table>
    </div>

    <p style="margin-top: 20px;">*หมายเหตุ: ราคาดังกล่าวเป็นราคาขายปลีกในกรุงเทพมหานครและปริมณฑลเท่านั้น อาจมีความแตกต่างกันในแต่ละพื้นที่</p>
    
    <div class="quote-card" style="border-left-color: #3498db;">
      <strong>มุมมองนักวิเคราะห์:</strong> ราคาน้ำมันที่ยังทรงตัวในระดับสูง ส่งผลโดยตรงต่อค่าขนส่งในสัปดาห์นี้ ควรวางแผนการเดินทางและเติมน้ำมันให้พร้อมครับ
    </div>
  `
}],
  'space': []
};

// 2. ฟังก์ชันเปิด "หน้าพาดหัวข่าวทั้งหมด" และเปลี่ยนรูป Banner
function openPage(categoryId, categoryTitle) {
  // สลับหน้าจอ
  document.getElementById('home-page').classList.remove('active');
  document.getElementById('sub-page').classList.add('active');
  
  // เปลี่ยนชื่อหัวข้อ
  document.getElementById('sub-page-title').innerText = categoryTitle;

  // --- เปลี่ยนรูป Banner ตามหมวดหมู่ ---
  const newsImg = document.getElementById('news-img');
  if (categoryId === 'motorsport') {
    newsImg.src = "https://i.postimg.cc/T39BLcLG/89268cfb220c0078f7671ec8abd5faf5.jpg"; 
  } else if (categoryId === 'space') {
    newsImg.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000"; 
  } else if (categoryId === 'politics') {
    newsImg.src = "https://i.postimg.cc/Y04BHLbC/hq720-(2).jpg"; 
  } else if (categoryId === 'economy') {
    newsImg.src = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000"; 
  }

// ดึงรายการข่าวมาแสดง
const newsList = newsLibrary[categoryId] || [];
const contentArea = document.getElementById('dynamic-content');

let html = '';
if (newsList.length > 0) {
  // --- แก้ไขบรรทัดนี้: เพิ่ม [...newsList].reverse().forEach ---
  [...newsList].reverse().forEach(news => {
    html += `
      <div class="news-feed-item" onclick="showFullArticle('${categoryId}', '${news.id}')">
        <div class="feed-img">
          <img src="${news.img}" alt="news">
        </div>
        <div class="feed-info">
          <span class="feed-date">${news.date}</span>
          <h3>${news.title}</h3>
          <p>${news.summary}</p>
          <span class="read-more-btn">กดเพื่ออ่านต่อ...</span>
        </div>
      </div>
    `;
  });
} else {
  html = '<p style="text-align:center; padding:20px; color:#666;">ยังไม่มีข่าวอัปเดตในหมวดนี้</p>';
}
  
  contentArea.innerHTML = html;
  window.scrollTo(0, 0);
}

// 3. ฟังก์ชันเปิด "เนื้อหาข่าวฉบับเต็ม"
function showFullArticle(catId, newsId) {
  const news = newsLibrary[catId].find(n => n.id === newsId);
  const contentArea = document.getElementById('dynamic-content');
  
  // --- เพิ่มบรรทัดนี้เพื่อลบข้อความ "รายงานความคืบหน้า..." ออก ---
  const leadText = document.querySelector('.news-lead');
  if (leadText) {
    leadText.style.display = 'none'; // สั่งให้ซ่อนข้อความนี้ไปเลย
  }
  
  document.getElementById('news-img').src = news.img;
  
  contentArea.innerHTML = `
    <div class="full-article">
      <div class="article-meta">${news.date} | โดย Pter</div>
      <div class="article-body">${news.fullContent}</div>
      <button class="back-to-list" onclick="openPage('${catId}', '${document.getElementById('sub-page-title').innerText}')">⬅ กลับไปหน้ารวมข่าว</button>
    </div>
  `;
  window.scrollTo(0, 0);
}

// 4. ฟังก์ชันกลับหน้าหลัก
function goBack() {
  document.getElementById('sub-page').classList.remove('active');
  document.getElementById('home-page').classList.add('active');
}

// 5. ระบบนาฬิกา
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();
    const clockElement = document.getElementById('digital-clock');
    if(clockElement) {
        clockElement.innerText = `${time} | ${date}`;
    }
}
setInterval(updateClock, 1000);
updateClock();
