// --- ส่วนที่ 1: ระบบจัดการการกดย้อนกลับ ---
window.onload = () => {
    history.replaceState({ page: 'home' }, 'Home');
};

window.onpopstate = function(event) {
    if (event.state) {
        if (event.state.page === 'home') {
            document.getElementById('sub-page').classList.remove('active');
            document.getElementById('home-page').classList.add('active');
        } else if (event.state.page === 'category') {
            openPage(event.state.id, event.state.title, true);
        }
    }
};

// --- ส่วนที่ 2: คลังข่าวสาร ---
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
      id: 'nurburgring-qualifiers-2026',
      title: "ตารางแข่งขัน ADAC 24h Nürburgring Qualifiers ประจำสัปดาห์นี้",
      date: "18 April 2026",
      summary: "เกาะติดตารางแข่งรอบคัดเลือกที่สนาม Nürburgring พร้อมอัปเดตสถานการณ์ทีม Max หลังโดน DSQ เพราะเปลี่ยนยางเกินกฎ!",
      img: "https://i.postimg.cc/brRGjtBd/346214-w620-h500.jpg",
      fullContent: `
        <p class="news-lead">เข้าสู่สัปดาห์แห่งความมันส์ในสนามระดับตำนาน Nürburgring กับรายการ Qualifiers เพื่อเตรียมความพร้อมก่อนศึกใหญ่ในเดือนพฤษภาคม</p>
        
        <h3>🗓️ ตารางการแข่งขัน (อิงตามเวลาไทย)</h3>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; margin: 15px 0; color: #ddd; background: #222;">
            <tr style="background: #e67e22; color: white;">
              <th style="padding: 10px; border: 1px solid #444; text-align: left;">วัน / เวลา</th>
              <th style="padding: 10px; border: 1px solid #444; text-align: left;">รายการ</th>
            </tr>
            <tr>
              <td colspan="2" style="padding: 8px; background: #333; font-weight: bold; color: #e67e22;">วันเสาร์ที่ 18 เมษายน</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #444;">13:30 - 15:00 น.</td>
              <td style="padding: 10px; border: 1px solid #444;">Qualifying Race 1</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #444;">22:30 - 02:30 น.</td>
              <td style="padding: 10px; border: 1px solid #444;">Race 1</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 8px; background: #333; font-weight: bold; color: #e67e22;">วันอาทิตย์ที่ 19 เมษายน</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #444;">13:15 - 14:45 น.</td>
              <td style="padding: 10px; border: 1px solid #444;">Qualifying Race 2</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #444;">15:40 - 16:40 น.</td>
              <td style="padding: 10px; border: 1px solid #444;">Top Qualifying</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #444;">18:00 - 22:00 น.</td>
              <td style="padding: 10px; border: 1px solid #444;">Race 2</td>
            </tr>
          </table>
        </div>

        <h3>🟠 บทวิเคราะห์: บทเรียนราคาแพงจาก "ยางชุดที่ 7"</h3>
        <p>แม้ผลงานในสนามช่วงปลายเดือนมีนาคมที่ผ่านมาจะทำออกมาได้ดี แต่ทีมกลับต้องเผชิญกับฝันร้ายเมื่อถูกตัดสิน <strong>DSQ (Disqualified)</strong> เนื่องจากทำผิดกฎเรื่องการใช้ยาง</p>
        
        <div class="quote-card" style="border-left-color: #e67e22;">
          <strong>กฎเหล็ก:</strong> ในแต่ละรายการ ทีมสามารถเปลี่ยนยางได้ไม่เกิน 6 ชุด แต่ความผิดพลาดในการสื่อสารทำให้ทีมเผลอเปลี่ยนไปถึง 7 ชุด ส่งผลให้โดนปรับแพ้ทันที
        </div>

        <p>แม้จะโดนตัดสิทธิ์แม็กซ์และทีมยังพร้อมที่จะสู้ต่อโดยไม่หวั่นเกรงกับรถ <strong>Mercedes-AMG GT3 Evo </strong>ที่ทางเมอร์เซเดสยื่นข้อเสนอให้เจ้าตัวเองเลย</p>
      `
    },
    {
      id: 'max-penalty-nurburgring-2026',
      title: "Max Verstappen และทีมโดนปรับโทษในการแข่งขัน ADAC 24h Nürburgring Qualifiers",
      date: "18 April 2026",
      summary: "ทีม Verstappen Racing โดนปรับกริด 3 อันดับหลัง Lucas Auer คำนวนระยะห่างผิดพลาดจนเกิดอุบัติเหตุ ทำให้ Max ต้องเริ่มจากอันดับ 9 คืนนี้",
      img: "https://i.postimg.cc/DzTH71Gc/e4befb12c90e13bda4f6050c3f4523f6.jpg",
      fullContent: `
        <p>ทีม Verstappen Racing (รถ Mercedes-AMG GT3 หมายเลข 3) โดนปรับกริด 3 อันดับหลัง Lucas Auer พยายามจะแซงรถ Porsche Caymen หมายเลข 941 ทว่ากลับคำนวนระยะห่างผิดพลาดจึงส่งผลให้รถของอีกฝ่ายเกิดอุบัติเหตุหมุนเคว้งกลางแทร็ก แม้ว่าภายหลังลูคัสได้ทำการเข้าไปเคลียร์ใจกับนักขับดังกล่าวแล้วแต่ทว่าคณะกรรมการยังคงปรับโทษเช่นเดิม</p>
        <p>แม้ Max Verstappen จะสามารถทำเวลาได้และจบรอบควอลิฟายเป็นอันดับที่ 6 ได้ แต่กลับถูกปรับโทษจนต้องเริ่มออกสตาร์ทจากกริดที่ 9 ในคืนนี้ (22:00 - 02:00 น.)</p>
        <p>ลูกพี่เจอศึกหนักอีกแล้วด้อมส้มเอาใจช่วยให้ผ่านพ้นไปได้ด้วยดีเหมือนเดิม</p>
       <div style="margin-top: 30px; display: flex; flex-direction: column; gap: 12px;">
      <a href="https://www.youtube.com/live/ukz3kwwWcRc?si=EcgsMvHQkAOMFOcj" target="_blank" 
         style="display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; 
                background: linear-gradient(45deg, #ff0000, #cc0000); color: white; padding: 15px; 
                border-radius: 12px; font-weight: bold; border: 1px solid #ff4d4d; 
                box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3); transition: all 0.3s ease;">
         <span style="display: inline-block; width: 10px; height: 10px; background: white; border-radius: 50%; animation: pulse 1.5s infinite;"></span>
         LIVE MAIN BROADCAST
      </a>

      <a href="https://www.youtube.com/live/tZ6R-kruUYs?si=5HvIPUQ89KyjvwBk" target="_blank" 
         style="display: flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; 
                background: linear-gradient(45deg, #f39c12, #d35400); color: white; padding: 15px; 
                border-radius: 12px; font-weight: bold; border: 1px solid #ffbd58;
                box-shadow: 0 4px 15px rgba(230, 126, 34, 0.3); transition: all 0.3s ease;">
         <img src="https://i.postimg.cc/MVOrange" style="width: 20px; height: 20px; border-radius: 50%;" onerror="this.style.display='none'">
         TEAM VERSTAPPEN CAM
      </a>
    </div>

    <style>
      @keyframes pulse {
        0% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.2); }
        100% { opacity: 1; transform: scale(1); }
      }
    </style>
  `
},
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
  'economy': [
    {
      id: 'thai-oil-prices-17apr26',
      title: "อัปเดตราคาน้ำมันวันนี้ ทุกปั๊มทั่วไทย",
      date: "17 April 2026",
      summary: "เช็กราคาน้ำมันล่าสุดจาก PTT, บางจาก, เชลล์ และค่ายอื่นๆ ทั่วประเทศ...",
      img: "https://i.postimg.cc/kMfLPYn2/img-c988f5dc.jpg",
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
    }
  ],
  'space': [
    {
      id: 'comet-c2025-r3-last-visit',
      title: "การปรากฏตัวครั้งสุดท้าย: ดาวหาง C/2025 R3 เตรียมลาจากระบบสุริยะตลอดกาล",
      date: "17 April 2026",
      summary: "นักดาราศาสตร์ชี้ดาวหางคาบยาวเตรียมพ้นระบบสุริยะถาวร หลังรับแรงเหวี่ยงจากดาวพฤหัสบดี...",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000",
      fullContent: `
        <p class="news-lead">การอำลาครั้งสุดท้ายของวัตถุโบราณชิ้นนี้ ก่อนที่จะถูกดีดออกจากระบบสุริยะอย่างถาวรในวันที่ 27 เมษายนนี้</p>
        
        <h3>1. ปูมหลังและการโคจรข้ามกาลเวลา</h3>
        <p>ดาวหาง C/2025 R3 (Pan-STARRS) เป็นดาวหางคาบยาวที่มีต้นกำเนิดจาก <strong>เมฆออร์ต (Oort Cloud)</strong> มีคาบการโคจรถึง 170,000 ปี การกลับมาครั้งนี้จึงเปรียบเสมือนแคปซูลกาลเวลาจากยุคก่อตัวของระบบสุริยะเมื่อ 4.6 พันล้านปีก่อน</p>

        <h3>2. ปรากฏการณ์ 'การเหวี่ยงด้วยแรงโน้มถ่วง'</h3>
        <div class="quote-card">
          <strong>Slingshot Effect:</strong> การเดินทางผ่านดาวพฤหัสบดีส่งผลให้เกิด Gravitational Assist เพิ่มความเร็วของดาวหางจนทะลุความเร็วหลุดพ้น (Escape Velocity) เปลี่ยนวงโคจรเป็นเส้นโค้งไฮเพอร์โบลา และมุ่งหน้าสู่ห้วงอวกาศระหว่างดาวโดยไม่กลับมาอีก
        </div>

        <h3>3. องค์ประกอบทางเคมี</h3>
        <p>นิวเคลียสประกอบด้วยน้ำแข็ง (Water ice) คลุกเคล้ากับฝุ่นและก๊าซแช่แข็ง เช่น:</p>
        <ul>
          <li>คาร์บอนมอนอกไซด์ (CO) และ คาร์บอนไดออกไซด์ (CO2)</li>
          <li>มีเทน (CH4) และ แอมโมเนีย (NH3)</li>
        </ul>
        <p>การเรืองแสงสีเขียวที่ส่วนโคมาเกิดจากปฏิกิริยาของ <strong>โมเลกุลคาร์บอนคู่ (Diatomic carbon)</strong> ต่อรังสี UV</p>

        <h3>4. หางดาวหาง</h3>
        <p>ลมสุริยะ (Solar wind) จะทำให้เราสังเกตเห็นหาง 2 ประเภท:</p>
        <ul>
          <li><strong>หางฝุ่น (Dust tail):</strong> โค้งสยายตามทิศทางการเคลื่อนที่</li>
          <li><strong>หางไอออน (Ion tail):</strong> ก๊าซมีประจุไฟฟ้าที่ชี้ตรงข้ามกับดวงอาทิตย์เสมอ</li>
        </ul>
      `
    }
  ]
};

// --- ส่วนที่ 3: ระบบเปิดหน้ารวมข่าว ---
function openPage(categoryId, categoryTitle, isBack = false) {
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('sub-page').classList.add('active');
    document.getElementById('sub-page-title').innerText = categoryTitle;

    if (!isBack) {
        history.pushState({ page: 'category', id: categoryId, title: categoryTitle }, categoryTitle);
    }

    const newsImg = document.getElementById('news-img');
    const banners = {
        'motorsport': "https://i.postimg.cc/T39BLcLG/89268cfb220c0078f7671ec8abd5faf5.jpg",
        'space': "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        'politics': "https://i.postimg.cc/Y04BHLbC/hq720-(2).jpg",
        'economy': "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000"
    };
    newsImg.src = banners[categoryId] || banners['motorsport'];

    const newsList = newsLibrary[categoryId] || [];
    const contentArea = document.getElementById('dynamic-content');
    
    let html = `<p class="news-lead">รวบรวมเหตุการณ์และบทวิเคราะห์ล่าสุดเกี่ยวกับ <span>${categoryTitle}</span></p>`;
    
    if (newsList.length > 0) {
        [...newsList].reverse().forEach(news => {
            html += `
                <div class="news-feed-item" onclick="showFullArticle('${categoryId}', '${news.id}')">
                    <div class="feed-img"><img src="${news.img}"></div>
                    <div class="feed-info">
                        <span class="feed-date">${news.date}</span>
                        <h3>${news.title}</h3>
                        <p>${news.summary}</p>
                        <span class="read-more-btn">กดเพื่ออ่านต่อ...</span>
                    </div>
                </div>`;
        });
    } else {
        html += '<p style="text-align:center; padding:20px; color:#666;">ยังไม่มีข่าวอัปเดตในหมวดนี้</p>';
    }
    contentArea.innerHTML = html;
    window.scrollTo(0, 0);
}
// --- ส่วนที่ 4: ระบบเปิดข่าวฉบับเต็ม ---
function showFullArticle(catId, newsId, isBack = false) {
    const news = newsLibrary[catId].find(n => n.id === newsId);
    const contentArea = document.getElementById('dynamic-content');
    
    if (!isBack) {
        history.pushState({ page: 'article', catId, newsId }, news.title);
    }

    document.getElementById('news-img').src = news.img;
    contentArea.innerHTML = `
        <div class="full-article">
            <div class="article-meta">${news.date} | โดย Pter</div>
            <div class="article-body">${news.fullContent}</div>
            <button class="back-to-list" onclick="goBack()">⬅ กลับไปหน้ารวมข่าว</button>
        </div>`;
    window.scrollTo(0, 0);
}

// --- ส่วนที่ 5: ปุ่มกดย้อนกลับ ---
function goBack() {
  history.back(); // สั่งให้เบราว์เซอร์ถอยหลัง 1 สเต็ป (เข้ากับระบบ History ของเราพอดี)
}

// --- ส่วนที่ 6: ระบบนาฬิกา ---
// --- ระบบนาฬิกา Digital Clock (Fixed) ---
function updateClock() {
    const now = new Date();
    
    // จัดรูปแบบเวลา (HH:MM:SS)
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = now.toLocaleTimeString('th-TH', timeOptions);
    
    // จัดรูปแบบวันที่ (DD/MM/YYYY)
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const dateString = now.toLocaleDateString('th-TH', dateOptions);
    
    const clockElement = document.getElementById('digital-clock');
    
    if (clockElement) {
        clockElement.innerText = `${timeString} | ${dateString}`;
    }
}

// สั่งให้รันทุกๆ 1 วินาที
setInterval(updateClock, 1000);

// เรียกใช้ทันทีที่โหลดหน้าเว็บเพื่อให้เวลาแสดงเลย ไม่ต้องรอ 1 วินาทีแรก
updateClock();
