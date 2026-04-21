// --- ส่วนที่ 1: ระบบจัดการการกดย้อนกลับ ---
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cat = urlParams.get('cat');
    const id = urlParams.get('id');

    if (cat && id && newsLibrary[cat]) {
        // ส่งค่า true เข้าไปทั้งสองฟังก์ชันเพื่อไม่ให้มัน Push State ซ้ำตอนโหลดครั้งแรก
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
            // เพิ่มส่วนนี้เพื่อให้เวลาย้อนกลับแล้วข่าวแสดงผล
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
      img: "https://i.postimg.cc/T39BLcLG/89268cfb220c0078f7671ec8abd5faf5.jpg", // เปลี่ยนลิงก์รูปได้ตามต้องการ
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
          </div>

          <div class="quote-card">
            "การปรับเปลี่ยนครั้งนี้คือผลลัพธ์ของการทำงานร่วมกันระหว่างฝ่ายเทคนิคและเสียงสะท้อนจากนักแข่ง เพื่อรักษาจิตวิญญาณของการแข่งขัน Formula 1 ให้มั่นคงในยุคเครื่องยนต์ไฮบริด 2026"
          </div>

          <p style="text-align: center; color: #666; font-size: 0.8rem; margin-top: 40px;">แปลและเรียบเรียงโดย: Pter | แหล่งข้อมูลอ้างอิง: FIA WMSC</p>
          </div>
        </div>
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
  
   setCurrentDate();

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
