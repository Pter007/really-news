let currentArticleId = "";
// สร้างหรือดึง ID ลับประจำเครื่อง (ถ้าไม่มีให้สร้างใหม่)
let myDeviceId = localStorage.getItem('really_news_user_id');
if (!myDeviceId) {
    myDeviceId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('really_news_user_id', myDeviceId);
}

// กำหนดรหัสผ่านแอดมิน (คุณปีเตอร์เปลี่ยนเองได้เลย)
const ADMIN_PASSWORD = "iluv_rustappen_4ever";const BANNED_WORDS = ["หี", "ควย", "แตด", "ภูมิพล" , "เหี้ย" , "แม่มึงตาย" , "พ่อมึงตาย" , "กาก" , "ไร้สาระ" , "ปัญญาอ่อน" , "ปัญญานิ่ม" , "ปัญ" , "ปัญยาอ่อน" , "hee" , "hum"]; 

// ==========================================
// ส่วนที่ 2: ระบบจัดการการกดย้อนกลับ (History)
// ==========================================
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');
    const id = urlParams.get('id');

    if (cat && id && newsLibrary[cat]) {
        openPage(cat, cat.toUpperCase(), true); 
        showFullArticle(cat, id, true);
    } else {
        history.replaceState({ page: 'home' }, 'Home');
    }
};

window.onpopstate = function(event) {
    if (event.state) {
        if (event.state.page === 'home') {
            document.getElementById('sub-page').classList.remove('active');
            document.getElementById('home-page').classList.add('active');
        } else if (event.state.page === 'category') {
            openPage(event.state.id, event.state.title, true);
        } else if (event.state.page === 'article') {
            showFullArticle(event.state.catId, event.state.newsId, true);
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
   {
      id: 'wec-2026-drivers-teams',
      title: "Drivers & Teams WEC 2026: เจาะลึกขุมพลัง LMH ทั้ง 9 ค่าย",
      date: "20 April 2026",
      summary: "สรุปข้อมูลตัวรถและรายชื่อนักแข่งรุ่น Hypercar แบบจัดเต็ม 9 ค่าย 17 คัน ใครขับทีมไหน รถแรงแค่ไหน",
      img: "https://i.postimg.cc/m20Z3pbG/2026-ferrari-fia-wec-hypercar-desk.jpg", // เปลี่ยนลิงก์รูปได้ตามต้องการ
      fullContent: `
        <p class="news-lead">เข้าสู่ยุคทองของ Endurance มาดูรายละเอียดรถแข่ง (Machine Specs) และไลน์อัปนักแข่งของรุ่น LMH ประจำฤดูกาล 2026</p>
<div class="team-box" style="border-top: 5px solid #ef3340;">
    <h2 class="team-title" style="color: #ef3340;">🏎️ Ferrari AF Corse & AF Corse (3 Cars)</h2>
    <p><strong>Machine: Ferrari 499P (LMH)</strong> | Engine: V6 3.0L Twin-Turbo</p>
    <div class="driver-list">
      <p><span class="car-no">No.50 :</span> Antonnio Fuoco / Miguel Molina / Nicklas Nielsen</p>
      <p><span class="car-no">No.51 :</span> Antonio Giovinazzi / Alessandro Pier Guidi / James Calado</p>
      <p style="color: #ffff00;"><span class="car-no" style="color: #ffff00;">No.83 :</span> Phil Hanson / Robert Kubica / Yifei Ye
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #ffffff;">
    <h2 class="team-title" style="color: #fff;">⚪ Toyota Racing (2 Cars)</h2>
    <p><strong>Machine: Toyota TR010 Hybrid (LMH)</strong> | Engine: V6 3.5L Twin-Turbo</p>
    <div class="driver-list">
      <p><span class="car-no">No.7 :</span> Mike Conway / Kamui Kobayashi / Nyck de Vries</p>
      <p><span class="car-no">No.8 :</span> Brendon Hartley / Sébastien Buemi / Ryo Hirakawa</p>
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #0066b2;">
    <h2 class="team-title" style="color: #0066b2;">🔵 BMW M Team WRT (2 Cars)</h2>
    <p><strong>Machine: BMW M Hybrid V8 (LMDh)</strong> | Engine: V8 4.0L Twin-Turbo</p>
    <div class="driver-list">
      <p><span class="car-no">No.15 :</span> Raffaele Marciello / Dries Vanthoor / Kevin Magmussen</p>
      <p><span class="car-no">No.20 :</span> Robin Frijns / René Rast / Sheldon van der Linde</p>
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #9e9e9e;">
    <h2 class="team-title" style="color: #fff;">🌑 Peugeot TotalEnergies (2 Cars)</h2>
    <p><strong>Machine: Peugeot 9X8 2026 (LMH)</strong> | Engine: V6 2.6L Twin-Turbo</p>
    <div class="driver-list">
      <p><span class="car-no">No.93 :</span> Nick Cassidy / Paul di Resta / Stoffel Vandoorne</p>
      <p><span class="car-no">No.94 :</span> Théo Pourchaire / Loïc Duval / Malthe Jakobsen</p>
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #808080;">
    <h2 class="team-title" style="color: #808080;">🩶 Hertz Team Jota (2 Cars)</h2>
    <p><strong>Machine: Cadillac V-Series.R (LMDh)</strong> | Engine: V8 5.5L NA</p>
    <p style="font-size: 0.8rem; color: #888;">*ทีม Jota เปลี่ยนมาใช้ตัวรถจาก Cadillac แทน Porsche ในฤดูกาลนี้</p>
    <div class="driver-list">
      <p><span class="car-no">No.12 :</span> Will Stevens / Alex Lynn / Norman Nato</p>
      <p><span class="car-no">No.38 :</span> Jack Aitken / Sébastien Bourdais - Earl Bamber</p>
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #005094;">
    <h2 class="team-title" style="color: #005094;">🧥 Alpine Endurance Team (2 Cars)</h2>
    <p><strong>Machine: Alpine A424 (LMDh)</strong> | Engine: V6 3.4L Twin-Turbo</p>
    <div class="driver-list">
      <p><span class="car-no">No.35 :</span> António Félix da Costa / Ferdinand Habsburg / Charles Milesi</p>
      <p><span class="car-no">No.36 :</span> Jules Gounon / Frédéric Makowiecki / Victor Msrtins</p>
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #ff4500;">
    <h2 class="team-title" style="color: #ff4500;">🔥 Genesis Magma Racing (2 Cars)</h2>
    <p><strong>Machine: Genesis GMR-001 (LMH)</strong> | Engine: V8 3.2L Twin-Turbo</p>
    <div class="driver-list">
      <p><span class="car-no">No.17 :</span> Pipo Derani / Mathys Jaubert / André Lotterer</p>
      <p><span class="car-no">No.19 :</span> Paul-Loup Chatin / Mathieu Jamient / Daniel Juncadella</p>
    </div>
  </div>

  <div class="team-box" style="border-top: 5px solid #00665e;">
    <h2 class="team-title" style="color: #00665e;">🌲 Aston Martin THOR Team (2 Cars)</h2>
    <p><strong>Machine: Ason MArtin Valkyrie LMH</strong> | Engine: V12 6.5L NA</p>
    <div class="driver-list">
      <p><span class="car-no">No.007 :</span> Tom Gamble / Ross Gunn / Harry Tincknell</p>
      <p><span class="car-no">No.009 : </span> Roman De Angelis / Alex Riberas / Marco Serense</p>
    </div>
  </div>

        <p style="text-align: center; color: #888; font-size: 0.8rem;">อัปเดตข้อมูลล่าสุดเพื่อการรับชม WEC 2026 อย่างเต็มอรรถรส</p>
      `
    },
    {
  id: 'toyota-imola-50th-win-2026',
  title: "โตโยต้าฉลองนัดที่ 100! ผงาดคว้าชัย 6 Hours of Imola สู่แชมป์ครั้งที่ 50 ในประวัติศาสตร์ WEC",
  date: "21 April 2026",
  summary: "โตโยต้าประเดิมชัยชนะสนามแรกของฤดูกาล 2026 ด้วยรถแข่งรุ่นใหม่ TR010 ฉลองการลงแข่งนัดที่ 100 และชัยชนะครั้งที่ 50 อย่างยิ่งใหญ่ ท่ามกลางดงแฟนคลับเฟอร์รารีในอิตาลี",
  img: "https://i.postimg.cc/15YQgp6r/dppiproduction-00004387-0632-69e50ab292ada665758787-jpg.webp", // [จุดใส่ภาพที่ 1: ภาพรถ Toyota TR010 หรือภาพบรรยากาศโพเดียม]
  fullContent: `
    <p class="news-lead">การประกาศศักดาครั้งยิ่งใหญ่ของยักษ์ใหญ่จากญี่ปุ่นในนัดที่ 100 ของทีม พร้อมพา TR010 รุ่นปรับปรุงใหม่คว้าชัยเหนือ Ferrari ในบ้านเกิดได้สำเร็จ</p>

    <div class="quote-card" style="border-left-color: #ef3340; background: rgba(239, 51, 64, 0.1);">
      <strong>🏆 MILESTONE:</strong> ชัยชนะครั้งนี้ถือเป็นครั้งที่ 50 ในรายการ WEC ของ Toyota และเป็นการเปิดตัวชื่อรุ่น <strong>TR010</strong> อย่างเป็นทางการหลังถอดชื่อ Gazoo Racing ออก
    </div>

    <h3>🏁 สรุปผลการแข่งขันรุ่น Hypercar (Top 3)</h3>
    <div style="overflow-x: auto;">
      <table class="spec-table" style="background: #222; border-radius: 8px;">
        <tr style="background: #333; color: #e67e22;">
          <th style="padding: 10px;">อันดับ</th>
          <th style="padding: 10px;">รถหมายเลข / ทีม</th>
          <th style="padding: 10px;">นักขับ</th>
        </tr>
        <tr>
          <td style="text-align: center; font-weight: bold;">🥇 1</td>
          <td>No.8 Toyota TR010</td>
          <td>Buemi / Hartley / Hirakawa</td>
        </tr>
        <tr>
          <td style="text-align: center; font-weight: bold;">🥈 2</td>
          <td>No.51 Ferrari 499P</td>
          <td>Giovinazzi / Calado / Pier Guidi</td>
        </tr>
        <tr>
          <td style="text-align: center; font-weight: bold;">🥉 3</td>
          <td>No.7 Toyota TR010</td>
          <td>de Vries / Conway / Kobayashi</td>
        </tr>
      </table>
    </div>

    <h3>⚡ กลยุทธ์ที่เหนือชั้น: ชนะกันในพิตเลน</h3>
    <p>จุดเปลี่ยนสำคัญเกิดขึ้นในช่วงปลายชั่วโมงที่สอง เมื่อโตโยต้าตัดสินใจเสี่ยง <strong>"ไม่เปลี่ยนยาง"</strong> ในการเข้าพิต ทำให้รถหมายเลข 8 ก้าวขึ้นเป็นผู้นำ และอาศัยจังหวะ <strong>Virtual Safety Car</strong> จากอุบัติเหตุของ Peugeot หมายเลข 93 ในการรักษาระยะห่าง</p>
    
    <p>แม้ Ferrari จะพยายามทำ Undercut แต่ประสิทธิภาพการทำงานของพิตโตโยต้าในวันนี้ไร้ที่ติ บูเอมีสามารถนำรถเข้าเส้นชัยทิ้งห่างจิโอวินาซซีถึง 13.352 วินาที ท่ามกลางสายตาแฟนมอเตอร์สปอร์ตนับแสนคนในสนามอิโมลา</p>

    <div style="margin: 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid #444;">
      <img src="https://i.postimg.cc/rsmHcPfh/8-toyota-gazoo-racing-toyota-t-4.webp" style="width: 100%; display: block;">
      <p style="font-size: 0.8rem; color: #888; padding: 10px; margin: 0; background: #111;">ภาพประกอบ: หลังจบการแข่งขัน</p>
    </div>

    <h3>📊 อัปเดตรุ่นอื่นๆ และน้องใหม่</h3>
    <ul>
      <li><strong>LMGT3:</strong> BMW M4 GT3 หมายเลข 69 จากทีม WRT คว้าชัยชนะหลัง McLaren หมายเลข 10 ประสบปัญหาไดชาร์จในช่วง 30 นาทีสุดท้าย</li>
      <li><strong>Genesis:</strong> เปิดตัวครั้งแรกอย่างเป็นทางการ รถ GMR-001 หมายเลข 15 จบในอันดับที่ 15 ถือเป็นการเริ่มต้นเก็บข้อมูลที่สำคัญ</li>
      <li><strong>Alpine:</strong> รถหมายเลข 35 ทำผลงานยอดเยี่ยมจบอันดับที่ 4 หลังไล่บี้กับ BMW อย่างหนักในช่วงท้าย</li>
    </ul>

    <div class="quote-card">
      "มันคือการเริ่มต้นฤดูกาลที่ยอดเยี่ยมที่สุดสำหรับพวกเรา... เราทำงานร่วมกันเป็นทีม และรถหมายเลข 7 ก็ช่วยบังเฟอร์รารีให้เราในจังหวะสำคัญ" — <strong>Brendon Hartley</strong> ให้สัมภาษณ์หลังจบการแข่งขัน
    </div>
<div style="margin: 30px 0; text-align: center;">
          <a href="https://youtu.be/Lg2k1A8LJTE?si=InYNZMygr0GzfCiN" target="_blank" class="video-container">
            <div class="thumbnail-wrapper">
              <img src="https://img.youtube.com/vi/Lg2k1A8LJTE/maxresdefault.jpg" alt="WEC Highlights" class="main-thumb">
              <div class="play-overlay">
                <svg viewBox="0 0 24 24" fill="white" class="play-icon">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </a>
          <p style="color: #555; font-size: 0.75rem; margin-top: 8px; letter-spacing: 1px;">WATCH EXTENDED HIGHLIGHTS</p>
        </div>

        <style>
          .video-container {
            display: inline-block;
            width: 100%;
            max-width: 600px;
            text-decoration: none;
            overflow: hidden;
            border-radius: 8px; /* ปรับให้โค้งมนนิดหน่อย */
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            border: 1px solid #333;
          }
          
          .thumbnail-wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .main-thumb {
            width: 100%;
            display: block;
            transition: all 0.5s ease;
            filter: brightness(0.9);
          }
          
          .play-overlay {
            position: absolute;
            width: 70px;
            height: 70px;
            background: rgba(0, 212, 255, 0.85);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            z-index: 2;
          }
          
          .play-icon {
            width: 35px;
            height: 35px;
            margin-left: 5px; /* ชดเชยให้ดูตรงกลางเป๊ะ */
          }
          
          /* Hover Effect: เมื่อเอาเมาส์จ่อรูปจะสว่างขึ้นและซูมนิดๆ */
          .video-container:hover .main-thumb {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
          
          .video-container:hover .play-overlay {
            transform: scale(1.1);
            background: #00d4ff;
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.6);
          }
        </style>

    <p style="text-align: center; color: #888; font-size: 0.8rem; margin-top: 30px;">รายงานโดย: Pter | ข้อมูลอ้างอิง: WEC Official Broadcast</p>
  `
},
      {
      id: 'fia-reg-refinement-2026',
      title: "FIA ประกาศปรับปรุงระเบียบข้อบังคับ F1 2026 มุ่งเน้นการขับขี่แบบ Flat-out และความปลอดภัยที่เพิ่มขึ้น",
      date: "21 April 2026",
      summary: "FIA ร่วมกับทีมแข่งและผู้ผลิตเครื่องยนต์ บรรลุข้อตกลงปรับปรุงกฎทางเทคนิคปี 2026 เพิ่มกำลังไฟฟ้าเป็น 350kW เพื่อลดภาระการบริหารพลังงานของนักแข่ง เริ่มใช้จริงที่ไมอามี่",
      img: "https://i.postimg.cc/CLxMtMSM/a46af751-5a31-2e58-e991-3b3fb2c69c28.jpg", // สามารถเปลี่ยนรูปภาพตามต้องการ
      fullContent: `
        <style>
          .fia-official-update { font-family: 'Inter', sans-serif; line-height: 1.7; color: #e0e0e0; }
          .badge-fia { display: inline-block; background: #00418c; color: white; padding: 4px 12px; border-radius: 4px; font-size: 0.7rem; font-weight: bold; margin-bottom: 15px; letter-spacing: 1px; }
          .reg-section { background: #1a1a1a; border-left: 4px solid #00418c; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
          .reg-section h3 { color: #00d4ff; margin-top: 0; font-size: 1.2rem; display: flex; align-items: center; gap: 10px; }
          .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 15px 0; }
          .tech-card { background: #222; padding: 15px; border-radius: 8px; border: 1px solid #333; text-align: center; }
          .tech-card .label { display: block; font-size: 0.75rem; color: #888; text-transform: uppercase; margin-bottom: 5px; }
          .tech-card .value { display: block; font-size: 1.3rem; font-weight: bold; color: #fff; }
          .change-up { color: #2ecc71; font-size: 0.8rem; }
          .change-down { color: #e74c3c; font-size: 0.8rem; }
          .wet-notif { background: linear-gradient(90deg, #1a3a5c, #111); padding: 15px; border-radius: 8px; border: 1px solid #2980b9; margin-top: 20px; }
          .highlight-text { color: #00d4ff; font-weight: bold; }
        </style>

        <div class="fia-official-update">
          <div class="badge-fia">FIA OFFICIAL STATEMENT</div>
          <p class="news-lead">สหพันธ์ยานยนต์นานาชาติ (FIA) ประกาศปรับปรุงระเบียบข้อบังคับทางเทคนิคและเชิงกีฬาสำหรับการแข่งขัน Formula 1 ฤดูกาล 2026 โดยความเห็นชอบร่วมกันของทีมแข่ง ผู้ผลิตหน่วยขับเคลื่อน และ FOM เพื่อยกระดับสมรรถนะการขับขี่และการชาร์จพลังงาน</p>

          <p>ข้อสรุปจากการประชุมออนไลน์ครั้งล่าสุด ได้นำข้อมูลจากการแข่งขัน 3 สนามแรกมาวิเคราะห์เพื่อปรับแต่งสมดุลของรถแข่งยุคใหม่ โดยมีรายละเอียดการเปลี่ยนแปลงสำคัญที่จะเริ่มใช้ ณ รายการ <span class="highlight-text">Miami Grand Prix</span> ดังนี้:</p>

          <div class="reg-section">
            <h3>⏱️ รอบคัดเลือก: การรีดสมรรถนะสูงสุด</h3>
            <p>ปรับเกณฑ์การบริหารจัดการพลังงานเพื่อสนับสนุนการขับขี่แบบ Flat-out (เหยียบเต็มกำลัง) และลดภาระงานของนักแข่ง:</p>
            <div class="tech-grid">
              <div class="tech-card">
                <span class="label">Max Recharge</span>
                <span class="value">7 MJ</span>
                <span class="change-down">▼ จาก 8 MJ</span>
              </div>
              <div class="tech-card">
                <span class="label">Peak Superclip Power</span>
                <span class="value">350 kW</span>
                <span class="change-up">▲ จาก 250 kW</span>
              </div>
            </div>
            <p style="font-size: 0.9rem; color: #bbb;">*ผลลัพธ์: ลดระยะเวลาการชาร์จไฟ (Harvesting) และลดช่วงเวลา Superclip ลงเหลือเพียง 2-4 วินาทีต่อรอบ เพื่อให้เครื่องยนต์แสดงพลังได้ต่อเนื่องขึ้น</p>
          </div>

          <div class="reg-section" style="border-left-color: #e74c3c;">
            <h3>🏎️ การแข่งขัน: เสถียรภาพและโอกาสในการแซง</h3>
            <ul>
              <li><span class="highlight-text">Race Boost:</span> จำกัดกำลังเสริม (Boost) ไว้ที่ <span class="highlight-text">+150 kW</span> เพื่อป้องกันความแตกต่างของความเร็วที่มากเกินไปจนเกิดอันตราย</li>
              <li><span class="highlight-text">MGU-K Deployment:</span> จ่ายไฟเต็มกำลัง 350 kW เฉพาะในโซนเร่งความเร็วหลัก และจำกัดที่ 250 kW ในส่วนอื่นของสนาม</li>
            </ul>
          </div>

          <div class="reg-section" style="border-left-color: #f1c40f;">
            <h3>🛡️ ความปลอดภัยและสภาพทางเปียก</h3>
            <p>พัฒนาระบบ <span class="highlight-text">Low Power Start Detection</span> ตรวจจับอัตราเร่งที่ผิดปกติช่วงออกตัว หากรถคันใดมีกำลังต่ำ ระบบจะสั่งจ่ายไฟ MGU-K อัตโนมัติเพื่อป้องกันการถูกชนท้าย พร้อมสัญญาณไฟเตือนรอบคัน</p>
            
            <div class="wet-notif">
              <strong>🌧️ สภาวะฝนตก:</strong> เพิ่มอุณหภูมิผ้าห่มยาง (Tyre Blanket) สำหรับยาง Intermediate เพื่อการยึดเกาะที่ดีขึ้นทันทีที่ออกจากพิต และปรับลดแรงบิด (Torque) จากระบบ ERS เพื่อการควบคุมรถที่แม่นยำขึ้น
          </div>

          <div class="quote-card">
            "การปรับเปลี่ยนครั้งนี้คือผลลัพธ์ของการทำงานร่วมกันระหว่างฝ่ายเทคนิคและเสียงสะท้อนจากนักแข่ง เพื่อรักษาจิตวิญญาณของการแข่งขัน Formula 1 ให้มั่นคงในยุคเครื่องยนต์ไฮบริด 2026"
          </div>

          <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">แปลและเรียบเรียงโดย: Pter | แหล่งข้อมูลอ้างอิง: FIA WMSC</p>
          </div>
        </div>
      `
    },
    {
      id: 'miami-gp-fp1-extension-2026',
      title: "ประกาศเรื่องการขยายเวลาช่วง Free Practice ครั้งที่ 1 ในรายการ Miami Grand Prix",
      date: "23 April 2026",
      summary: "FIA มติเห็นชอบขยายเวลา FP1 เป็น 90 นาที เพื่อรองรับกฎเทคนิคใหม่และรูปแบบ Sprint Weekend ที่มีเวลาซ้อมจำกัด",
      img: "https://i.postimg.cc/bYbcw8Wp/miami-breaking-16x9-f126.png", // อย่าลืมเช็คชื่อไฟล์หรือลิงก์รูปภาพนะครับ
fullContent: `
        <p class="news-lead">ภายหลังจากการปรึกษาหารือร่วมกับผู้มีส่วนได้ส่วนเสียทุกภาคส่วน ได้มีมติเห็นชอบให้ขยายระยะเวลาของช่วง Free Practice 1 ในรายการ Miami Grand Prix ออกเป็น 90 นาที</p>
        
        <div style="margin: 20px 0; border-radius: 8px; overflow: hidden; border: 1px solid #333;">
            <img src="https://i.postimg.cc/7Z5NqPts/f1-start-times-16x9-1.jpg" style="width: 100%; display: block;" alt="Miami GP Schedule Update">
            <p style="font-size: 0.75rem; color: #666; padding: 10px; margin: 0; background: #111; text-align: center;">ตารางเวลาเริ่มต้นการแข่งขันรายการ Miami Grand Prix 2026</p>
        </div>

<div style="background: #1a1a1a; border-left: 4px solid #e67e22; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
            <h3 style="color: #e67e22; margin-top: 0;">⏱️ ตารางเวลาใหม่ (Local Time)</h3>
            <ul style="list-style: none; padding-left: 0; color: #eee;">
                <li><strong>FP1 :</strong> 12:00 น. ถึง 13:30 น. (ตามเวลาท้องถิ่น) </li>
                <li><strong>กิจกรรมอื่นๆ บนสนาม :</strong> ปรับให้เร็วขึ้น 30 นาที (ก่อนช่วง FP1)</li>
            </ul>
        </div>

        <p>การตัดสินใจดังกล่าวมีขึ้นเพื่อรองรับปัจจัยสำคัญหลายประการ ได้แก่:</p>
        <ul>
            <li>ช่วงระยะเวลาเว้นว่างจากการแข่งขันสนามล่าสุด</li>
            <li>การปรับปรุงกฎระเบียบและข้อกำหนดทางเทคนิคปี 2026 ที่เพิ่งประกาศไป</li>
            <li>การแข่งขันรายการ Miami Grand Prix ดำเนินการภายใต้รูปแบบ <strong>Sprint</strong> ซึ่งทำให้มีเวลาซ้อมจำกัดกว่าปกติ</li>
        </ul>

        <p>การขยายเวลาครั้งนี้จะช่วยให้นักขับและทีมช่างมีเวลาในการปรับจูนเครื่องยนต์ไฮบริดรุ่นใหม่ให้เข้ากับสภาพแทร็กที่ไมอามี่ได้ดียิ่งขึ้น ก่อนที่จะเข้าสู่ช่วงการแข่งขันจริงในวันถัดไป</p>

        <div class="quote-card">
          "เวลาเพิ่มขึ้นอีก 30 นาที อาจดูเหมือนน้อย แต่สำหรับ Sprint Weekend มันคือโอกาสทองในการหาจุดลงตัวของระบบ Active Aerodynamics"
        </div>

        <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">เรียบเรียงโดย: Pter | ข้อมูลอ้างอิง: FIA Motorsport Council</p>
      `
    },
{
      id: 'wrc-islas-canarias-2026-day2',
      title: "โอจิเยร์ นำโซลเบิร์ก 3.8 วินาที เข้าสู่รอบสุดท้ายของแรลลี่ อิสลัส กานาเรียส",
      date: "26 April 2026",
      summary: "ศึกทางเรียบสุดหิน! Sébastien Ogier เจอกดดันหนักหลัง Oliver Solberg ไล่จี้เหลือไม่ถึง 4 วินาที ก่อนดวล 4 Stages สุดท้ายวันอาทิตย์นี้",
      img: "https://i.postimg.cc/D0mtFk9B/si202604250735.jpg", 
      fullContent: `
        <p class="news-lead">เซบาสเตียน โอจิเยร์ (Sébastien Ogier) เตรียมรั้งตำแหน่งผู้นำด้วยระยะห่างเพียง 3.8 วินาที เหนือโอลิเวอร์ โซลเบิร์ก (Oliver Solberg) ในการแข่งขันวันสุดท้ายของรายการ Rally Islas Canarias ภายหลังจากจบการแข่งขันวันเสาร์อันดุเดือด</p>
        
        <div class="reg-section" style="border-left-color: #f1c40f;">
            <h3>📊 สรุปอันดับผู้นำ (Overall Standings)</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0; background: #222; color: #ddd;">
                <tr style="background: #333; color: #fff;">
                    <th style="padding: 10px; border: 1px solid #444; text-align: left;">อันดับ</th>
                    <th style="padding: 10px; border: 1px solid #444; text-align: left;">นักขับ / รถ</th>
                    <th style="padding: 10px; border: 1px solid #444; text-align: right;">Gap</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #444;">🥇 1.</td>
                    <td style="padding: 10px; border: 1px solid #444;">S. Ogier (Toyota GR Yaris)</td>
                    <td style="padding: 10px; border: 1px solid #444; text-align: right;">-</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #444;">🥈 2.</td>
                    <td style="padding: 10px; border: 1px solid #444;">O. Solberg (Skoda Fabia RS)</td>
                    <td style="padding: 10px; border: 1px solid #444; text-align: right;">+3.8s</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #444;">🥉 3.</td>
                    <td style="padding: 10px; border: 1px solid #444;">E. Evans (Toyota GR Yaris)</td>
                    <td style="padding: 10px; border: 1px solid #444; text-align: right;">+21.9s</td>
                </tr>
            </table>
            <p style="font-size: 0.85rem; color: #888;">*อันดับ 4-5: Sami Pajari และ Takamoto Katsuta</p>
        </div>

        <p>โอจิเยร์เริ่มออกสตาร์ทวันเสาร์ด้วยความได้เปรียบ 8.9 วินาที อย่างไรก็ตาม โซลเบิร์กสามารถทำเวลาไล่จี้ลดช่องว่างลงได้อย่างต่อเนื่องตลอด 6 สเตจ โดยเฉพาะการคว้าชัยในสเตจ <strong>Moya - Gáldar</strong> ได้ทั้งสองรอบ ส่งผลให้การชิงแชมป์ยังคงสูสีอย่างมากก่อนเข้าสู่ 4 สเตจสุดท้ายในวันอาทิตย์</p>

        <h3>🌧️ สภาวะการแข่งขันที่ท้าทาย</h3>
        <p>ช่วงเช้าสภาพอากาศที่มีฝนตกและถนนที่เปียกชื้นทำให้การแข่งขันเป็นไปอย่างยากลำบาก โดยเฉพาะระดับการยึดเกาะ (Grip levels) ที่เปลี่ยนแปลงอย่างรวดเร็ว โซลเบิร์กโต้กลับในการวิ่งรอบแรกของ Moya - Gáldar โดยทำเวลาเฉือนโอจิเยร์ไปเพียง 0.1 วินาที แม้ว่าจะมีการเฉี่ยวชนเล็กน้อยกับที่กั้นทาง (Armco) ก็ตาม</p>

<div class="quote-card" style="border-left-color: #e67e22;">
            "ถ้าคุณไม่ชอบการต่อสู้ที่สูสีแบบนี้ ก็ไม่รู้จะมาแข่งทำไม สู้เรานอนอยู่บ้านดีกว่า" 
            <br>— <strong>Sébastien Ogier</strong> กล่าวอย่างอารมณ์ดีหลังจบวัน
        </div>

        <h3>📝 สรุปเหตุการณ์สำคัญ</h3>
        <ul>
            <li><strong>M-Sport Ford :</strong> Jon Armstrong หลุดโค้งจนรถเสียหาย แต่ได้ผู้ชมช่วยดันกลับเข้าเส้นทาง</li>
            <li><strong>WRC2 :</strong> Yohan Rossel (Lancia) ยังคุมเกมนำอยู่ 27.5 วินาที</li>
            <li><strong>อันดับ 6-8 :</strong> Adrien Fourmaux นำหน้า Dani Sordo และ Thierry Neuville</li>
        </ul>

        <div style="margin: 30px 0; padding: 20px; background: #1a1a1a; border: 1px solid #333; border-radius: 12px; text-align: center;">
            <p style="color: #fff; font-weight: bold; margin-bottom: 15px;">📺 ติดตามไฮไลท์ย้อนหลังและไลฟ์สด</p>
            <a href="https://youtube.com/@wrc?si=u1fSri1wrFSKwlbl" target="_blank" 
               style="display: inline-flex; align-items: center; gap: 10px; background: #ff0000; color: white; padding: 12px 25px; border-radius: 30px; text-decoration: none; font-weight: bold; transition: 0.3s;">
               WATCH ON WRC YOUTUBE
            </a>
        </div>

        <div style="background: rgba(230, 126, 34, 0.1); border: 1px dashed #e67e22; padding: 20px; border-radius: 8px; margin-top: 30px;">

            <p style="font-style: italic; color: #eee; margin-bottom: 0;">
                "ถือว่า Ogier เจอเด็กนรกอย่าง Solberg ไล่จี้ได้เสียวไส้สุดๆ ยิ่งสไตล์ Ogier ชอบความท้าทายแบบนี้ ยิ่งทำให้น่าติดตามว่าพรุ่งนี้แกจะงัดไม้ตายอะไรมาปิดเกมอีก"
            </p>
        </div>

        <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">เรียบเรียงโดย: Pter | แหล่งข้อมูล: WRC Official</p>
      `
    },
  ],
  'politics': [
    {
      id: 'us-iran-diplomatic-clash-2026',
      title: "ทรัมป์ยกเลิกคณะผู้แทนเยือนปากีสถาน ขณะผู้นำอิหร่านลั่นไม่ร่วม 'การเจรจาเชิงบังคับ'",
      date: "26 April 2026",
      summary: "โดนัลด์ ทรัมป์ ยกเลิกแผนส่งคณะผู้แทนสหรัฐฯ เยือนปากีสถานกะทันหัน ด้านประธานาธิบดีอิหร่าน มาซูด เปเซชเคียน ยืนกรานปฏิเสธการเจรจาภายใต้แรงกดดันทางการทหาร",
      img: "https://i.postimg.cc/FRm21C6V/hq720-(3).jpg", 
      fullContent: `
        <p class="news-lead">การเจรจาสันติภาพระหว่างสหรัฐอเมริกาและอิหร่านเผชิญกับความไม่แน่นอนอีกครั้ง เมื่อประธานาธิบดี โดนัลด์ ทรัมป์ ประกาศยกเลิกแผนการส่งคณะผู้แทนสหรัฐฯ เยือนปากีสถาน โดยระบุว่าจะปรับเปลี่ยนรูปแบบเป็นการหารือผ่านทางโทรศัพท์แทน</p>
        
        <p>การตัดสินใจดังกล่าวเกิดขึ้นภายหลังจากที่อิหร่านปฏิเสธการพบปะหารือโดยตรงกับผู้แทนเจรจาของสหรัฐฯ โดยทรัมป์กล่าวอ้างว่าเขาเพิ่งได้รับข้อเสนอใหม่จากเตหะราน ซึ่งระบุว่า "เสนอให้หลายอย่าง แต่ยังไม่เพียงพอ" ทว่ามิได้ให้รายละเอียดเชิงลึกเพิ่มเติม</p>

        <div style="background: #1a1a1a; padding: 20px; border-left: 4px solid #c0392b; margin: 25px 0;">
            <h3 style="color: #e74c3c; margin-top: 0; font-size: 1.1rem;">📌 ประเด็นข่าวที่กำลังติดตาม</h3>
            <ul style="color: #ddd; padding-left: 20px;">
                <li style="margin-bottom: 10px;"><strong>ความพยายามด้านสันติภาพที่หยุดชะงัก:</strong> ทรัมป์กล่าวโทษว่าเป็นเพราะ "การต่อสู้แย่งชิงอำนาจภายใน" ของเตหะราน ขณะที่รัฐมนตรีว่าการกระทรวงการต่างประเทศของอิหร่านตั้งข้อสงสัยถึง "ความจริงจังต่อแนวทางการทูต" ของวอชิงตัน</li>
                <li style="margin-bottom: 10px;"><strong>สถานการณ์ในเลบานอน:</strong> อิสราเอลเปิดฉากการโจมตีที่รุนแรงขึ้นในพื้นที่ทางตอนใต้ของเลบานอน แม้เพิ่งมีการขยายเวลาข้อตกลงหยุดยิง ขณะที่กลุ่มฮิซบอลเลาะห์ได้ทำการยิงจรวดตอบโต้</li>
            </ul>
        </div>

        <h3>อารมณ์ความรู้สึกจากฝั่งเตหะราน</h3>
        <p>ประธานาธิบดี มาซูด เปเซชเคียน ของอิหร่าน แถลงผ่านสถานีโทรทัศน์และวิทยุแห่งชาติของอิหร่าน (IRIB) ว่า รัฐบาลเตหะรานจะไม่เข้าสู่ <strong>"การเจรจาเชิงบังคับ"</strong> กับสหรัฐอเมริกา ในขณะที่ยังคงเผชิญกับแรงกดดันและภัยคุกคาม</p>

        <p>ในการสนทนาทางโทรศัพท์กับนายกรัฐมนตรี เชห์บาซ ชารีฟ ของปากีสถาน ประธานาธิบดีเปเซชเคียนระบุว่า การกระทำของสหรัฐฯ กำลังบ่อนทำลายความไว้วางใจ เขาเน้นย้ำว่าความคืบหน้าจะเกิดขึ้นได้ก็ต่อเมื่อวอชิงตันยุติ "การกระทำอันเป็นปรปักษ์และแรงกดดันทางปฏิบัติการ" โดยเฉพาะการรื้อถอนอุปสรรคทางปฏิบัติการและการปิดล้อมเรือที่เดินทางเข้า-ออกจากท่าเรือของอิหร่าน</p>

        <p>ด้านนายกรัฐมนตรีชารีฟได้ให้ความมั่นใจว่า รัฐบาลอิสลามาบัดจะยังคงดำเนินความพยายามอย่างจริงใจและสุจริตต่อไป เพื่อส่งเสริมสันติภาพและความมั่นคงในภูมิภาค</p>

        <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">รายงานโดย: Jonny Hallam และ Mounira Elsamra | แปลและเรียบเรียง: Pter</p>
      `
    },
    {
      id: 'iran-fm-pakistan-oman-2026',
      title: "สื่อรัฐรายงาน รมว.ต่างประเทศอิหร่านเตรียมเดินทางกลับปากีสถาน หวังเดินหน้าเจรจาระดับภูมิภาค",
      date: "26 April 2026",
      summary: "อับบาส อารักชี รมว.ต่างประเทศอิหร่าน เตรียมเดินทางกลับปากีสถานหลังเสร็จสิ้นภารกิจที่โอมาน ท่ามกลางความพยายามไกล่เกลี่ยยุติสงคราม",
      img: "https://i.postimg.cc/NGR53K8s/gettyimages-2272365298.webp", 
      fullContent: `
        <p class="news-lead">สำนักข่าวสาธารณรัฐอิสลามสื่อของรัฐบาลอิหร่าน รายงานว่า นายอับบาส อารักชี รัฐมนตรีว่าการกระทรวงการต่างประเทศของอิหร่าน มีกำหนดการเดินทางกลับไปยังกรุงอิสลามาบัด ประเทศปากีสถาน ภายหลังการเดินทางเยือนโอมานในช่วงสุดสัปดาห์</p>

        <p>ความเคลื่อนไหวทางประวัติศาสตร์การทูตครั้งนี้เกิดขึ้นภายหลังจากที่คณะผู้แทนของอิหร่านได้เดินทางออกจากอิสลามาบัดเมื่อวันเสาร์ที่ผ่านมา มุ่งหน้าสู่กรุงมัสกัต ประเทศโอมาน เพื่อดำเนินการเจรจาระดับภูมิภาคต่อไป</p>

        <p>ก่อนหน้านี้ นายอารักชีได้กล่าวเน้นย้ำว่า การเดินทางเยือนกรุงอิสลามาบัดในรอบแรกนั้น <strong>"ประสบผลสำเร็จ"</strong> แม้ว่าในทางปฏิบัติแล้ว เขาจะไม่ได้มีการพบปะกับผู้แทนเจรจาของฝ่ายสหรัฐอเมริกาก็ตาม</p>

        <p>ทั้งนี้ เป็นที่คาดการณ์ในแวดวงการทูตว่า สตีฟ วิตคอฟฟ์ ทูตพิเศษของสหรัฐฯ และ จาเร็ด คุชเนอร์ บุตรเขยของประธานาธิบดี โดนัลด์ ทรัมป์ จะเดินทางเยือนอิสลามาบัดในวันเสาร์เพื่อเข้าร่วมการเจรจา ทว่าประธานาธิบดีทรัมป์ได้ตัดสินใจยกเลิกการเดินทางของคณะผู้แทนในนาทีสุดท้าย</p>

        <p>รายงานจาก IRNA ระบุเพิ่มเติมว่า คณะผู้แทนระดับสูงที่ติดตามนายอารักชีไปยังปากีสถานในตอนแรก ได้เดินทางกลับถึงกรุงเตหะรานแล้วในระหว่างที่รัฐมนตรีต่างประเทศพำนักอยู่ในโอมาน และคาดว่าคณะผู้แทนชุดดังกล่าวจะเดินทางสมทบกลับไปยังอิสลามาบัดอีกครั้งในคืนวันอาทิตย์นี้</p>

        <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">แปลและเรียบเรียง: Pter | แหล่งข้อมูล: IRNA</p>
      `
    },
    {
      id: 'us-iran-economic-blockade-2026',
      title: "บทวิเคราะห์: อิหร่านและสหรัฐฯ เผชิญภาวะชะงักงันทางเศรษฐกิจ ท่ามกลางการปิดล้อมทางทะเลที่เข้มงวด",
      date: "26 April 2026",
      summary: "การปิดล้อมช่องแคบฮอร์มุซและท่าเรืออิหร่านของสหรัฐฯ บีบเศรษฐกิจเตหะรานอย่างหนัก ส่งผลกระทบต่อราคาน้ำมันและห่วงโซ่อุปทานโลก ขณะที่ผู้นำสูงสุดอิหร่านเรียกร้องให้ประชาชนอดทน",
      img: "https://i.postimg.cc/3RcCzd24/02-002-002-9621605.webp", 
      fullContent: `
        <p class="news-lead">การปิดล้อมทางทะเลของสหรัฐอเมริกาต่อสาธารณรัฐอิสลามอิหร่านกำลังสร้างความบีบคั้นต่อระเบียงเศรษฐกิจหลักของประเทศอย่างหนัก ส่งผลให้รัฐบาลเตหะรานต้องเผชิญกับวิกฤตพื้นที่กักเก็บน้ำมันที่ใกล้ถึงขีดจำกัด ประชาชนต้องรับมือกับราคาอาหารที่พุ่งสูงขึ้น และอัตราการว่างงานที่พุ่งทะยาน</p>

        <h3>'ห้ามเข้า ห้ามออก' นโยบายปิดล้อมเด็ดขาดของสหรัฐฯ</h3>
        <p>จากเดิมที่เป้าหมายของสหรัฐฯ คือการเปิดช่องแคบฮอร์มุซอันเป็นจุดยุทธศาสตร์สำคัญ แต่เมื่อการเจรจาล้มเหลว ประธานาธิบดีโดนัลด์ ทรัมป์ ได้เปลี่ยนยุทธวิธี นายพีท เฮกเซธ รัฐมนตรีว่าการกระทรวงกลาโหมสหรัฐฯ เรียกปฏิบัติการนี้ว่า การปิดล้อมทางทะเลต่ออิหร่าน <strong>"อย่างเด็ดขาด (Iron-clad)"</strong> ตั้งแต่อ่าวโอมานไปจนถึงมหาสมุทรเปิด</p>

        <div class="quote-card" style="border-left-color: #3498db; background: rgba(52, 152, 219, 0.1);">
            "สำหรับการปกครองในเตหะราน การปิดล้อมกำลังทวีความเข้มงวดขึ้นทุกชั่วโมง เราเป็นผู้ควบคุมสถานการณ์ ห้ามสิ่งใดเข้า และห้ามสิ่งใดออก การปิดล้อมจะดำเนินต่อไปนานเท่าที่จำเป็น"
            <br>— <strong>Pete Hegseth</strong> รัฐมนตรีว่าการกระทรวงกลาโหมสหรัฐฯ
        </div>

        <p>ความเคลื่อนไหวนี้เป็นการตอบโต้เตหะรานที่ปิดกั้นช่องแคบฮอร์มุซและเรียกเก็บค่าผ่านทางอย่างไม่เป็นทางการต่อเรือสินค้า ซึ่งช่องแคบแห่งนี้รองรับปริมาณการส่งออกน้ำมันและก๊าซกว่าหนึ่งในห้าของโลก</p>

        <h3>ผลกระทบทางเศรษฐกิจและยุทธศาสตร์น้ำมัน</h3>
        <p>ผลลัพธ์หลักของการปิดล้อมคือการทำให้อิหร่านไม่สามารถระบายน้ำมันดิบหลายล้านบาร์เรลที่ผลิตได้ในแต่ละวัน เอสฟานดิยาร์ บัตมังเคลิจ์ (Esfandyar Batmanghelidj) ประธานเจ้าหน้าที่บริหารของศูนย์วิจัย Bourse & Bazaar Foundation ประเมินว่า หากสหรัฐฯ ไม่พร้อมที่จะบังคับใช้การปิดล้อมนี้นานหลายเดือน ก็จะเป็นเรื่องยากที่จะกวาดล้างเศรษฐกิจอิหร่านได้อย่างเบ็ดเสร็จ เนื่องจากอิหร่านมีความคุ้นชินกับการรับมือมาตรการคว่ำบาตรมานาน</p>
        
        <p>ข้อมูลจากบริษัทวิเคราะห์ข้อมูลการขนส่ง Kpler ระบุว่า อิหร่านยังมีพื้นที่กักเก็บน้ำมันบนชายฝั่งเหลือเกือบ 30 ล้านบาร์เรล นอกจากนี้ บริษัทยังพบว่าอิหร่านอาจนำเรือบรรทุกน้ำมันขนาดใหญ่ที่ปลดระวางแล้วมาทำหน้าที่เป็นคลังกักเก็บแบบลอยตัวเพื่อยืดระยะเวลาออกไป</p>

        <h3>ผลกระทบระดับโลก และเสียงเรียกร้องจากผู้นำสูงสุด</h3>
        <p>สงครามนี้ไม่เพียงคุกคามอุปทานน้ำมัน แต่ยังรวมถึงอะลูมิเนียม พลาสติก และยางของโลก ภูมิภาคตะวันออกกลางจัดส่งพอลิโพรพิลีน (Polypropylene) 25% และพอลิเอทิลีน (Polyethylene) 20% ของโลก รวมถึงปริมาณกำมะถันและปุ๋ยมหาศาล</p>

        <p>ภายในอิหร่าน สื่อที่มีความเชื่อมโยงกับรัฐบาลรายงานว่ามีผู้สูญเสียงานไปแล้วกว่าหนึ่งล้านตำแหน่ง แม้รัฐบาลจะยืนกรานว่าห่วงโซ่อุปทานอาหารยังทำงานได้ แต่ราคาสินค้าพื้นฐานในเตหะรานได้พุ่งสูงขึ้น 3-4 เท่า</p>

        <div class="quote-card" style="border-left-color: #2ecc71; background: rgba(46, 204, 113, 0.1);">
            "ขอให้ประชาชนมีความเห็นอกเห็นใจซึ่งกันและกัน เพื่อให้แรงกดดันที่เกิดจากภาวะขาดแคลน – ซึ่งเป็นผลกระทบตามธรรมชาติของทุกสงคราม – ได้รับการบรรเทาลง"
            <br>— <strong>Ayatollah Mojtaba Khamenei</strong> ผู้นำสูงสุดของอิหร่าน
        </div>

        <p>เตหะรานอาจกำลังเดิมพันว่า ด้วยกระแสต่อต้านสงครามในสหรัฐฯ และการเลือกตั้งกลางเทอมที่กำลังจะมาถึง ประธานาธิบดีทรัมป์อาจไม่สามารถทนต่อแรงกดดันทางการเมืองในประเทศได้นานนัก และอาจเป็นฝ่ายที่ต้องยอมถอยก่อนในที่สุด</p>

        <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">แปลและวิเคราะห์เนื้อหาโดย: Pter</p>
      `
    },
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
      img: "https://i.postimg.cc/9F8VLGRC/comet-c-2025-r3-panstarrs-v0-fcgl736cb6ug1.jpg",
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
function openPage(categoryId, categoryTitle, isBack = false) 
{
  currentArticleId = categoryId;
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('sub-page').classList.add('active');
    document.getElementById('sub-page-title').innerText = categoryTitle;
 
  
   setCurrentDate();

    if (!isBack) {
        history.pushState({ page: 'category', id: categoryId, title: categoryTitle }, categoryTitle);
    }

    const newsImg = document.getElementById('news-img');
    const banners = {
        'motorsport': "https://i.postimg.cc/T39BLcLG/89268cfb220c0078f7671ec8abd5faf5.jpg",
        'space': "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
        'politics': "https://i.postimg.cc/Y04BHLbC/hq720-(2).jpg",
        'economy': "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000",
    'education': "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1000" // เพิ่มบรรทัดนี้
    };
    newsImg.src = banners[categoryId] || banners['motorsport'];

const newsList = newsLibrary[categoryId] || [];
    const contentArea = document.getElementById('dynamic-content');
    
    let html = `<p class="news-lead">รวบรวมเหตุการณ์และบทวิเคราะห์ล่าสุดเกี่ยวกับ <span>${categoryTitle}</span></p>`;
    
    if (newsList.length > 0) {
        // ใช้ reverse() เพื่อเอาข่าวท้ายสุด (ใหม่สุด) มาไว้ข้างบน
        const reversedNews = [...newsList].reverse(); 
        
reversedNews.forEach(news => {
    html += `
        <div class="news-feed-item" onclick="showFullArticle('${categoryId}', '${news.id}')" 
             style="display: flex; gap: 15px; margin-bottom: 20px; cursor: pointer; align-items: flex-start;">
            
            <img src="${news.img}" alt="news" 
                 style="width: 150px; height: 100px; object-fit: cover; border-radius: 8px; flex-shrink: 0;">
            
            <div class="news-feed-info">
                <h4 style="margin: 0 0 5px 0;">${news.title}</h4>
                <p style="font-size: 0.9rem; color: #bbb; margin-bottom: 5px;">${news.summary}</p>
                <span class="date" style="font-size: 0.8rem; color: #666;">${news.date}</span>
            </div>
        </div>
    `;
});
    } else {
        html += `<p style="text-align:center; color:#888;">ขออภัย ไม่พบข้อมูลข่าวในขณะนี้</p>`;
    }
  
    contentArea.innerHTML = html; // ต้องมั่นใจว่าบรรทัดนี้อยู่หลัง loop จบแล้ว
currentArticleId = categoryId; // สั่งให้ระบบจำ ID หมวดหมู่ (เช่น 'motorsport')
    loadComments(categoryId);      // สั่งดึงคอมเมนต์เฉพาะหมวดหมู่นี้มาแสดง
}
// --- ส่วนที่ 4: ระบบเปิดข่าวฉบับเต็ม ---
function showFullArticle(catId, newsId, isBack = false) {
    currentArticleId = newsId;
    const news = newsLibrary[catId].find(n => n.id === newsId);
    const contentArea = document.getElementById('dynamic-content');
  
  document.getElementById('article-date').innerText = news.date;
    
if (!isBack) {
        const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?cat=${catId}&id=${newsId}`;
        history.pushState({ page: 'article', catId, newsId }, news.title, newUrl);
    }

    document.getElementById('news-img').src = news.img;
    contentArea.innerHTML = `
        <div class="full-article">
            <div class="article-meta">${news.date} | โดย Pter</div>
            <div class="article-body">${news.fullContent}</div>
            <button class="back-to-list" onclick="goBack()">⬅ กลับไปหน้ารวมข่าว</button>
        </div>`;
    window.scrollTo(0, 0);
   loadComments(newsId); 
}

// --- ส่วนที่ 5: ปุ่มกดย้อนกลับ ---
function goBack() {
    // ล้างค่าใน URL กลับเป็นหน้าปกติ
    const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
    history.pushState({ page: 'home' }, 'Home', cleanUrl);
    
    document.getElementById('sub-page').classList.remove('active');
    document.getElementById('home-page').classList.add('active');
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

// ฟังก์ชันสำหรับดึงวันที่ปัจจุบันและแสดงผลในรูปแบบภาษาอังกฤษ
function setCurrentDate() {
    const today = new Date();
    
    // ตั้งค่ารูปแบบการแสดงผล (เช่น 19 April 2026)
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);

    // เลือก Element ที่ต้องการเปลี่ยนวันที่ (ระบุ ID ให้ตรงกับใน HTML)
    const dateElement = document.getElementById('article-date');
    if (dateElement) {
        dateElement.innerText = formattedDate;
    }
}

// เรียกใช้งานฟังก์ชัน
setCurrentDate();
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDQ20ldwuupZxl5ycgkT6pBpxRU10vbCJI",
        authDomain: "really-news.firebaseapp.com",
        databaseURL: "https://really-news-default-rtdb.asia-southeast1.firebasedatabase.app/",
        projectId: "really-news",
        storageBucket: "really-news.firebasestorage.app",
        messagingSenderId: "566871949404",
        appId: "1:566871949404:web:a30b12be03cfea5adde699",
        measurementId: "G-PPK41XT079"
    };
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// ตัวแปรควบคุมการตอบกลับ
let currentReplyKey = null; 
let currentQuotedText = ""; 


// ==========================================
// 2. ฟังก์ชันตรวจสอบสิทธิ์ (แอดมิน / เจ้าของคอมเมนต์)
// ==========================================
function hasPermission(ownerId) {
    // 1. ถ้าเป็นเจ้าของเครื่องที่คอมเมนต์เอง
    if (ownerId === myDeviceId) return true;

    // 2. ถ้าไม่ใช่เจ้าของ ลองถามรหัสแอดมิน
    const pass = prompt("คุณไม่ใช่เจ้าของข้อความนี้ กรุณากรอกรหัสผ่านแอดมิน:");
    if (pass === ADMIN_PASSWORD) return true;

    alert("คุณไม่มีสิทธิ์จัดการข้อความนี้");
    return false;
}


// ==========================================
// 3. ฟังก์ชันระบบคอมเมนต์ (เตรียมตอบกลับ & ส่งข้อมูล)
// ==========================================
function prepareReply(name, parentKey, text) {
    currentReplyKey = parentKey; // ID ของเม้นหลัก 
    // ตัดข้อความอ้างอิงให้สั้นลง
    currentQuotedText = text.length > 40 ? text.substring(0, 40) + "..." : text;
    
    const textInput = document.getElementById('comment-text');
    textInput.placeholder = `ตอบกลับคุณ ${name}: "${currentQuotedText}"`;
    textInput.focus();
    textInput.scrollIntoView({ behavior: 'smooth' });
}

function submitComment() {
    const nameInput = document.getElementById('comment-name');
    const textInput = document.getElementById('comment-text');
    
    const nameValue = nameInput.value.trim();
    const textValue = textInput.value.trim();

    // 1. เช็คว่ากรอกข้อมูลครบไหม
    if (!nameValue || !textValue) {
        alert("กรุณากรอกชื่อและข้อความให้ครบครับ");
        return;
    }

    // 2. เช็คคำไม่เหมาะสมใน "ชื่อ" หรือ "ข้อความ"
    if (containsBadWord(nameValue) || containsBadWord(textValue)) {
        alert("🚨 พบข้อความที่ไม่เหมาะสม! กรุณาตรวจสอบและใช้คำสุภาพในการแสดงความคิดเห็นที่สาธารณะครับ");
        return; // หยุดการทำงาน ไม่ส่งข้อมูลไป Firebase
    }

    const category = (typeof currentArticleId !== 'undefined' && currentArticleId) ? currentArticleId : 'general';

    // 3. ถ้าผ่านทุกด่าน ก็ส่งข้อมูลได้เลย
    const commentData = {
        name: nameValue,
        text: textValue,
        date: new Date().toLocaleString('th-TH'),
        timestamp: Date.now(),
        parentKey: currentReplyKey,
        quotedText: currentQuotedText,
        ownerId: myDeviceId
    };

    database.ref('comments/' + category).push(commentData).then(() => {
        textInput.value = "";
        textInput.placeholder = "พิมพ์ข้อความของคุณที่นี่...";
        currentReplyKey = null;
        currentQuotedText = "";
        alert("ส่งความคิดเห็นเรียบร้อยแล้ว!");
    });
}

// ==========================================
// 4. ฟังก์ชันจัดการข้อมูล (ลบ & แก้ไข)
// ==========================================
function deleteComment(key, category, ownerId) {
    if (hasPermission(ownerId)) {
        if (confirm("คุณแน่ใจใช่ไหมว่าจะลบข้อความนี้?")) {
            database.ref('comments/' + category + '/' + key).remove();
        }
    }
}

function editComment(key, category, ownerId) {
    if (hasPermission(ownerId)) {
        const textElement = document.getElementById('text-' + key);
        const oldText = textElement.innerText;
        const newText = prompt("แก้ไขข้อความของคุณ:", oldText);
        if (newText && newText !== oldText) {
            database.ref('comments/' + category + '/' + key).update({
                text: newText,
                date: new Date().toLocaleString('th-TH') + " (แก้ไขแล้ว)"
            });
        }
    }
}


// ==========================================
// 5. ฟังก์ชันดึงข้อมูลและแสดงผลหน้าเว็บ
// ==========================================
function loadComments(articleId) {
    const list = document.getElementById('comments-display'); 
    const targetId = articleId || 'general';
    
    database.ref('comments/' + targetId).on('value', (snapshot) => {
        const data = snapshot.val();
        list.innerHTML = ""; 

        if (data) {
            const allComments = Object.entries(data).map(([key, val]) => ({ key, ...val }));
            
            // แยกเม้นหลัก (ไม่มี parentKey) เรียง ใหม่ -> เก่า
            const mainComments = allComments.filter(c => !c.parentKey).reverse();

            mainComments.forEach(main => {
                // หาเม้นตอบย่อยที่เกาะกับเม้นหลักนี้ เรียง เก่า -> ใหม่
                const replies = allComments
                    .filter(c => c.parentKey === main.key)
                    .sort((a, b) => a.timestamp - b.timestamp);

                let replyHtml = "";
                replies.forEach(reply => {
                    // ส่วนแสดงผลเม้นย่อย สังเกตว่าผมใส่ reply.ownerId เข้าไปในปุ่มกดให้แล้ว
                    replyHtml += `
                        <div class="reply-card" style="margin-left: 40px; background:#222; padding:12px; border-radius:8px; margin-top:10px; border-left:3px solid #555;">
                            <div style="background:#333; padding:5px 10px; border-radius:4px; font-size:0.75rem; color:#888; margin-bottom:8px; border-left:2px solid #e67e22;">
                                <i style="display:block;">อ้างอิง: "${reply.quotedText}"</i>
                            </div>
                            
                            <strong style="color:#ddd; font-size:0.9rem;">${reply.name}</strong>
                            <p id="text-${reply.key}" style="color:#bbb; margin:5px 0; font-size:0.85rem;">${reply.text}</p>
                            
                            <div style="font-size:0.7rem;">
                                <a href="javascript:void(0)" onclick="prepareReply('${reply.name}', '${main.key}', '${reply.text}')" style="color:#3498db; margin-right:10px;">ตอบกลับ</a>
                                <a href="javascript:void(0)" onclick="editComment('${reply.key}', '${targetId}', '${reply.ownerId}')" style="color:#f1c40f; margin-right:10px;">แก้ไข</a>
                                <a href="javascript:void(0)" onclick="deleteComment('${reply.key}', '${targetId}', '${reply.ownerId}')" style="color:#e74c3c;">ลบ</a>
                            </div>
                        </div>`;
                });

                // ส่วนแสดงผลเม้นหลัก สังเกตว่าผมใส่ main.ownerId เข้าไปในปุ่มกดให้แล้ว
                const mainCard = `
                    <div class="comment-group" style="margin-bottom: 30px;">
                        <div class="comment-card" style="background:#1a1a1a; padding:15px; border-radius:8px; border-left:4px solid #e67e22;">
                            <strong style="color:#e67e22;">${main.name}</strong>
                            <p id="text-${main.key}" style="color:#ddd; margin:10px 0;">${main.text}</p>
                            <div class="comment-actions" style="font-size:0.8rem;">
                                <a href="javascript:void(0)" onclick="prepareReply('${main.name}', '${main.key}', '${main.text}')" style="color:#3498db; margin-right:10px;">ตอบกลับ</a>
                                <a href="javascript:void(0)" onclick="editComment('${main.key}', '${targetId}', '${main.ownerId}')" style="color:#f1c40f; margin-right:10px;">แก้ไข</a>
                                <a href="javascript:void(0)" onclick="deleteComment('${main.key}', '${targetId}', '${main.ownerId}')" style="color:#e74c3c;">ลบ</a>
                            </div>
                        </div>
                        <div class="replies-container">${replyHtml}</div>
                    </div>
                `;
                list.innerHTML += mainCard;
            });
        } else {
            list.innerHTML = `<p style="color: #666; text-align: center;">ยังไม่มีความคิดเห็น...</p>`;
        }
    });
}

// ฟังก์ชันสำหรับเช็คว่ามีคำต้องห้ามไหม (คืนค่า true/false)
function containsBadWord(text) {
    // ใช้ .some() เพื่อเช็คว่ามีคำใดคำหนึ่งใน BANNED_WORDS อยู่ใน text ไหม
    return BANNED_WORDS.some(word => {
        const regex = new RegExp(word, 'gi');
        return regex.test(text);
    });
}

// เริ่มต้นโหลดคอมเมนต์
loadComments('general');
