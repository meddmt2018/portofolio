const isEditMode =
  window.location.pathname.endsWith('/edit') ||
  window.location.search.includes('edit') ||
  window.location.hash === '#edit';

const defaultData = {
  profile: {
    name: "Farrell Ahmed Dimitrie Dhiaul Aulia",
    greeting: "Hello, I'm",
    title: "Bachelor of Information Technology Education Student", 
    bio: "IT Education student by day, code tinkerer by night — still figuring things out, one project at a time.",
    aboutText1: "Saya mahasiswa S1 Pendidikan Teknologi Informasi Universitas Negeri Surabaya dengan IPK 3.70. Latar belakang saya dari pesantren mengajarkan satu hal yang tidak diajarkan di kelas mana pun: konsistensi di tengah keterbatasan.",
    aboutText2: "Dari sana, saya membawa kebiasaan belajar mandiri ke dunia teknologi. Sekarang saya fokus mengembangkan kemampuan di bidang web development, pemrograman mobile, dan grafika komputer, menyatukan logika teknis dengan cara berpikir yang terstruktur.",
    aboutText3: "Saya percaya bahwa teknologi paling bermakna ketika ia mudah dipahami dan menyentuh orang lain. Itulah yang mendorong saya untuk terus belajar, bukan sekadar bisa, tapi benar-benar paham.",
    prodi: "Pendidikan Teknologi Informasi",
    univ: "Universitas Negeri Surabaya",
    angkatan: "2024",
    semester: "4",
    gpa: "3.70",
    totalCerts: "3",
    status: "Aktif Kuliah",
    email: "med.dmt2018@gmail.com",
    photo: "img/foto.jpg"
  },
  education: [
    { id: 1, year: "2024 — Sekarang", title: "S1 Pendidikan Teknologi Informasi", institution: "Universitas Negeri Surabaya", desc: "Fokus pada rekayasa perangkat lunak. IPK: 3.70 / 4.00" },
    { id: 2, year: "2019 — 2024", title: "SMA", institution: "MA Tahfizhul Qura'an Isy Karima", desc: "Jurusan IPA. Aktif dalam kegiatan akademik di lingkungan pesantren." }
  ],
  skills: [
    { id: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML", level: 3, category: "Frontend" },
    { id: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS", level: 3, category: "Frontend" },
    { id: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript", level: 1, category: "Frontend" },
    { id: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", level: 1, category: "Programming" },
    { id: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java", level: 2, category: "Programming" },
    { id: 6, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", name: "MySQL", level: 1, category: "Backend" },
    { id: 7, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", level: 1, category: "Tools" },
    { id: 8, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", name: "GitHub", level: 2, category: "Tools" },
    { id: 9, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma", level: 2, category: "Design" },
    { id: 10, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", name: "Android Studio", level: 2, category: "Tools" },
    { id: 11, icon: "excel", name: "Excel", level: 2, category: "Tools" },
    { id: 12, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++", level: 1, category: "Programming" },
  ],
  certificates: [
    {
      id: 1,
      name: "HTML Dasar",
      issuer: "Skilvul",
      date: "February 2026",
      highlighted: true,
      category: "teknologi",
      file: "docs/sertifikat_html_dasar.pdf",
      fileType: "pdf",
      fileName: "sertifikat_html_dasar.pdf"
    },
    {
      id: 2,
      name: "CSS Dasar",
      issuer: "Skilvul",
      date: "March 2026",
      highlighted: true,
      category: "teknologi",
      file: "docs/sertifikat_css_dasar.pdf",
      fileType: "pdf",
      fileName: "sertifikat_css_dasar.pdf"
    },
    {
      id: 3,
      name: "Microsoft Excel",
      issuer: "Kemendikti Saintek",
      date: "June 2025",
      highlighted: true,
      category: "teknologi",
      file: "docs/sertifikat_excel.pdf",
      fileType: "pdf",
      fileName: "sertifikat_excel.pdf"
    },
    {
      id: 4,
      name: "Pelatihan Entrepreneurship",
      issuer: "MA Isy Karima",
      date: "February 2025",
      highlighted: false,
      category: "bisnis",
      file: "docs/SERTIFIKAT_PELATIHAN_ENTREPRENEURSHIP_22_FEBRUARI_2025.pdf",
      fileType: "pdf",
      fileName: "SERTIFIKAT_PELATIHAN_ENTREPRENEURSHIP_22_FEBRUARI_2025.pdf"
    },
    {
      id: 5,
      name: "Future Entrepreneur Summit 2025",
      issuer: "GoWorld Asia",
      date: "2025",
      highlighted: false,
      category: "bisnis",
      file: "docs/SERTIFIKAT_PESERTA_ACARA_FUTURE_ENTREPRENEUR_SUMMIT_2025.pdf",
      fileType: "pdf",
      fileName: "SERTIFIKAT_PESERTA_ACARA_FUTURE_ENTREPRENEUR_SUMMIT_2025.pdf"
    },
    {
      id: 6,
      name: "Futurepreneur Selection Program",
      issuer: "GoWorld Asia",
      date: "2025",
      highlighted: false,
      category: "bisnis",
      file: "docs/SERTIFIKAT_PESERTA_FEST_GOWORLD_ASIA_FUTUREPRENEUR_SELECTION_PROGRAM_2025.pdf",
      fileType: "pdf",
      fileName: "SERTIFIKAT_PESERTA_FEST_GOWORLD_ASIA_FUTUREPRENEUR_SELECTION_PROGRAM_2025.pdf"
    },
    {
      id: 7,
      name: "Kompetisi Ide Bisnis Tingkat Nasional",
      issuer: "Panitia KIB Nasional",
      date: "2025",
      highlighted: false,
      category: "bisnis",
      file: "docs/SERTIFIKAT_PESERTA_KEGIATAN_KOMPETISI_IDE_BISNIS_TINGKAT_NASIONAL.pdf",
      fileType: "pdf",
      fileName: "SERTIFIKAT_PESERTA_KEGIATAN_KOMPETISI_IDE_BISNIS_TINGKAT_NASIONAL.pdf"
    },
    {
      id: 8,
      name: "Sekolah Pasar Modal",
      issuer: "Bursa Efek Indonesia",
      date: "2025",
      highlighted: false,
      category: "bisnis",
      file: "docs/Sertifikat_Sekolah_Pasar_Modal_Farrell_Ahmed.pdf",
      fileType: "pdf",
      fileName: "Sertifikat_Sekolah_Pasar_Modal_Farrell_Ahmed.pdf"
    },
    {
      id: 9,
      name: "Training Public Speaking",
      issuer: "MA Isy Karima",
      date: "February 2025",
      highlighted: false,
      category: "pengembangan-diri",
      file: "docs/SERTIFIKAT_PESERTA_TRAINING_PUBLIC_SPEAKING_22_FEBRUARI_2025.pdf",
      fileType: "pdf",
      fileName: "SERTIFIKAT_PESERTA_TRAINING_PUBLIC_SPEAKING_22_FEBRUARI_2025.pdf"
    },
    {
      id: 10,
      name: "Webinar Skill Development Program",
      issuer: "Panitia SDP",
      date: "November 2024",
      highlighted: false,
      category: "pengembangan-diri",
      file: "docs/SERTIFIKAT_PESERTA_WEBINAR_SKILL-DEVELOPMENT-PROGRAM_23_NOVEMBER_2024.pdf",
      fileType: "pdf",
      fileName: "SERTIFIKAT_PESERTA_WEBINAR_SKILL-DEVELOPMENT-PROGRAM_23_NOVEMBER_2024.pdf"
    },
  ],
    
  projects: [
    { 
      id: 1, 
      emoji: "🌐", 
      title: "Website Portofolio Pribadi", 
      desc: "Website portofolio dengan tema luar angkasa yang elegan, dibangun tanpa framework berat.", 
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Alpine.js", "Web"], 
      cover: "img/covers/portofolio.png",
      linkDemo: "https://ahmed-dimitrie.netlify.app", 
      linkCode: "https://github.com/meddmt2018/portofolio" },
    { 
      id: 2, 
      emoji: "💰", 
      title: "Duitku — Android Finance App (Remake)", 
      desc: "Remake & modifikasi dari aplikasi Android open-source untuk manajemen keuangan pribadi. Ditingkatkan dengan penyesuaian UI dan fitur tambahan.", 
      tags: ["Java", "Android", "Mobile App", "Mobile"],
      cover: "img/covers/duitku.png",
      linkCode: "https://github.com/meddmt2018/Duitku"},
    {
      id: 3, 
      emoji: "🏫", 
      title: "SIMKAS — Sistem Manajemen Keuangan Sekolah", 
      desc: "Aplikasi desktop berbasis VB.NET untuk manajemen keuangan sekolah, dilengkapi fitur AI Support berbasis NLP untuk input transaksi menggunakan bahasa alami.", 
      tags: ["VB.NET", "SQLite", "Windows Forms", "AI/NLP", "OOP", "Desktop"],
      cover: "img/covers/simkas.png",
      linkDemo: "", 
      linkCode: "https://github.com/meddmt2018/SIMKAS" },
    {
      id: 4,
      emoji: "🏛️",
      title: "Object 3D Gedung FMIPA UNESA",
      desc: "Visualisasi 3D Gedung Fakultas MIPA Universitas Negeri Surabaya Ketintang menggunakan C++ dan GLUT OpenGL. Menampilkan model arsitektur gedung secara interaktif dengan rendering berbasis OpenGL.",
      tags: ["C++", "GLUT/OpenGL", "3D Graphics", "Desktop"],
      cover: "img/covers/fmipa.png",
      linkDemo: "",
      linkCode: "https://github.com/meddmt2018/Grafika-Komputer_UAS_FMIPA_PTI-2024C" },
  ],
  contacts: [
    { id: 1, icon: "📧", label: "Email", value: "med.dmt2018@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=med.dmt2018@gmail.com" },
    { id: 2, icon: "📷", label: "Instagram", value: "@med_dmt", href: "https://instagram.com/med_dmt" },
    { id: 3, icon: "🐙", label: "GitHub", value: "github.com/meddmt2018", href: "https://github.com/meddmt2018" }
  ]
};

let data = JSON.parse(JSON.stringify(defaultData));
let certsOpen = false;
let pendingFile = null;
let activeTab = 'projects'; // 'projects' | 'certs'

// ====== STORAGE ======
function loadData() {
  try {
    const s = localStorage.getItem('portfolio_v3');
    if (s) {
      const p = JSON.parse(s);
      data = { ...defaultData, ...p, profile: { ...defaultData.profile, ...p.profile } };
    }
  } catch(e) {}
}

function saveAllData() {
  localStorage.setItem('portfolio_v3', JSON.stringify(data));
  showToast('✦ Data tersimpan');
}

function showToast(msg, err = false) {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;bottom:76px;left:50%;transform:translateX(-50%);
    background:${err ? '#c05050' : 'var(--accent)'};color:${err ? '#fff' : 'var(--bg)'};
    padding:9px 22px;border-radius:30px;font-size:12px;font-family:'DM Mono',monospace;
    z-index:9999;white-space:nowrap;animation:fadeUp 0.25s ease;letter-spacing:0.05em;`;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

// ====== INIT ======
function init() {
  loadData();
  detectMode();
  initStars();
  initSlideUp();
  renderAll();
  initFloatingBadges();
  initNav();
  initPhotoUpload();
  initInlineEdit();
  if (typeof AOS !== 'undefined') AOS.init({ duration: 650, once: true, offset: 60, easing: 'ease-out-quad' });
}

function detectMode() {
  if (!isEditMode) return;
  document.body.classList.add('edit-mode');
  const eb = document.getElementById('editBanner');
  const et = document.getElementById('editToolbar');
  const nav = document.getElementById('nav');
  if (eb) eb.style.display = 'flex';
  if (et) et.style.display = 'flex';
  if (nav) nav.style.top = '40px';
  document.title = '[EDIT] Portfolio';
}

function renderAll() {
  renderProfile();
  renderEducation();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderContacts();
}

// ====== PROFILE ======
function renderProfile() {
  const p = data.profile;
  setText('navName', p.name);
  setText('heroGreeting', p.greeting);
  setText('heroName', p.name);
  setText('heroTitle', p.title);
  setText('heroBio', p.bio);
  setText('aboutText1', p.aboutText1);
  setText('aboutText2', p.aboutText2);
  setText('aboutText3', p.aboutText3);
  setText('infoProdi', p.prodi);
  setText('infoUniv', p.univ);
  setText('infoAngkatan', p.angkatan);
  setText('infoGpa2', p.gpa + ' / 4.00');
  setText('infoStatus', p.status);
  setText('statSemester', p.semester);
  setText('statGpa', p.gpa);
  setText('statCerts', p.totalCerts);
  setText('ctaEmail', p.email);
  setText('footerName', p.name);
  const el = document.getElementById('ctaEmailLink');
  if (el) el.href = `https://mail.google.com/mail/?view=cm&to=${p.email}`;
  if (p.photo) {
    const img = document.getElementById('heroPhoto');
    const ph = document.getElementById('heroPhotoPlaceholder');
    if (img) { img.src = p.photo; img.style.display = 'block'; }
    if (ph) ph.style.display = 'none';
    const imgM = document.getElementById('heroPhotoMobile');
    const phM = document.getElementById('heroPhotoPlaceholderMobile');
    if (imgM) { imgM.src = p.photo; imgM.style.display = 'block'; }
    if (phM) phM.style.display = 'none';
  }
}
function setText(id, v) { const el = document.getElementById(id); if (el) el.textContent = v || ''; }

// EDUCATION 
function renderEducation() {
  const c = document.getElementById('educationTimeline');
  if (!c) return;
  const logos = { 1: 'img/unesa.png', 2: 'img/matiq.png' };
  c.innerHTML = `<div class="edu-timeline">` + data.education.map((e, idx) => `
    <div class="edu-item">
      <div class="edu-line-col">
        <div class="edu-dot"></div>
        ${idx < data.education.length - 1 ? '<div class="edu-connector"></div>' : ''}
      </div>
      <div class="edu-card">
        <div class="edu-card-top">
          ${logos[e.id] ? `<img src="${logos[e.id]}" alt="logo" class="edu-logo">` : `<span class="edu-logo-placeholder">🏫</span>`}
          <div class="edu-card-info">
            <span class="edu-year">${e.year}</span>
            <h3 class="edu-title">${e.title}</h3>
            <p class="edu-institution">${e.institution}</p>
          </div>
        </div>
        ${e.desc ? `<p class="edu-desc">${e.desc}</p>` : ''}
        <div class="item-actions">
          <button class="action-btn" onclick="editEdu(${e.id})">✎ Edit</button>
          <button class="action-btn delete" onclick="delItem('education',${e.id})">✕ Hapus</button>
        </div>
      </div>
    </div>`).join('') + `</div>`;
}

function addEducation() {
  pendingFile = null;
  openModal('Tambah Pendidikan', eduForm({}), () => {
    data.education.unshift({ id: Date.now(), year: gv('fy'), title: gv('ft'), institution: gv('fi'), desc: gv('fd') });
    renderEducation(); saveAllData(); closeModal();
  });
}
function editEdu(id) {
  const e = data.education.find(x => x.id === id);
  openModal('Edit Pendidikan', eduForm(e || {}), () => {
    if (e) { e.year = gv('fy'); e.title = gv('ft'); e.institution = gv('fi'); e.desc = gv('fd'); }
    renderEducation(); saveAllData(); closeModal();
  });
}
function eduForm(e) {
  return `
    <div class="form-group"><label class="form-label">Periode</label><input class="form-input" id="fy" value="${e.year || ''}" placeholder="2022 — Sekarang"></div>
    <div class="form-group"><label class="form-label">Jenjang / Jurusan</label><input class="form-input" id="ft" value="${e.title || ''}" placeholder="S1 Teknik Informatika"></div>
    <div class="form-group"><label class="form-label">Nama Institusi</label><input class="form-input" id="fi" value="${e.institution || ''}" placeholder="Universitas ..."></div>
    <div class="form-group"><label class="form-label">Keterangan (opsional)</label><textarea class="form-textarea" id="fd" placeholder="Deskripsi singkat...">${e.desc || ''}</textarea></div>`;
}

// SKILLS 
const levelMap = { 1: 20, 2: 40, 3: 60, 4: 80, 5: 100 };
const levelLabel = { 1: 'Beginner', 2: 'Basic', 3: 'Intermediate', 4: 'Advanced', 5: 'Expert' };

function renderSkills() {
  const c = document.getElementById('skillsGrid');
  if (!c) return;
  c.innerHTML = data.skills.map((s, i) => {
    const excelSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#217346"/><rect x="26" y="6" width="16" height="36" rx="2" fill="#185C37"/><path d="M28 12h12v3H28zm0 7h12v3H28zm0 7h12v3H28zm0 7h12v3H28z" fill="white" opacity="0.8"/><path d="M6 10l20-4v36L6 38z" fill="#21A366"/><text x="10" y="30" font-family="Arial" font-weight="bold" font-size="16" fill="white">X</text></svg>`;
    const isUrl = s.icon && s.icon.startsWith('http');
    const isExcel = s.icon === 'excel';
    const iconHTML = isExcel
      ? `<span class="skill-bar-icon" style="display:flex;align-items:center;">${excelSVG}</span>`
      : isUrl
      ? `<img src="${s.icon}" alt="${s.name}" class="skill-bar-icon">`
      : `<span class="skill-bar-icon-emoji">${s.icon}</span>`;
    const pct = levelMap[s.level] || 60;
    const lbl = levelLabel[s.level] || '';
    return `
    <div class="skill-bar-card" data-aos="fade-up" data-aos-delay="${i * 40}">
      <div class="skill-bar-top">
        ${iconHTML}
        <div class="skill-bar-info">
          <span class="skill-bar-name">${s.name}</span>
          <span class="skill-bar-cat">${s.category}</span>
        </div>
        <span class="skill-bar-pct">${lbl}</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" style="--pct:${pct}%"></div>
      </div>
      <div class="item-actions">
        <button class="action-btn" onclick="editSkill(${s.id})">✎ Edit</button>
        <button class="action-btn delete" onclick="delItem('skills',${s.id})">✕ Hapus</button>
      </div>
    </div>`;
  }).join('');
  // Animate bars after render
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(el => el.classList.add('animated'));
  }, 100);
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function addSkill() {
  openModal('Tambah Skill', skillForm({}), () => {
    data.skills.push({ id: Date.now(), icon: gv('si') || '⚡', name: gv('sn'), level: parseInt(gv('sl')) || 3, category: gv('sc') });
    renderSkills(); saveAllData(); closeModal();
  });
}
function editSkill(id) {
  const s = data.skills.find(x => x.id === id);
  openModal('Edit Skill', skillForm(s || {}), () => {
    if (s) { s.icon = gv('si') || '⚡'; s.name = gv('sn'); s.level = parseInt(gv('sl')) || 3; s.category = gv('sc'); }
    renderSkills(); saveAllData(); closeModal();
  });
}
function skillForm(s) {
  return `
    <div class="form-group"><label class="form-label">Emoji</label><input class="form-input" id="si" value="${s.icon || ''}" placeholder="💻"></div>
    <div class="form-group"><label class="form-label">Nama Skill</label><input class="form-input" id="sn" value="${s.name || ''}" placeholder="Web Development"></div>
    <div class="form-group"><label class="form-label">Level (1 Pemula — 5 Ahli)</label>
      <select class="form-select" id="sl">${[1,2,3,4,5].map(n => `<option value="${n}" ${s.level === n ? 'selected' : ''}>${n} — ${['Pemula','Dasar','Menengah','Mahir','Ahli'][n-1]}</option>`).join('')}</select></div>
    <div class="form-group"><label class="form-label">Kategori</label><input class="form-input" id="sc" value="${s.category || ''}" placeholder="Frontend / Backend / Soft Skill"></div>`;
}

// ACHIEVEMENTS 
function renderAchievements() {
  const c = document.getElementById('achievementsList');
  if (!c) return;
  c.innerHTML = data.achievements.map((a, i) => `
    <div class="achievement-row" data-aos="fade-up" data-aos-delay="${i * 60}">
      <div class="ach-index">0${i + 1}</div>
      <div class="ach-content">
        <div class="ach-title">${a.title}</div>
        <div class="ach-org">${a.org}</div>
        <div class="item-actions">
          <button class="action-btn" onclick="editAch(${a.id})">✎ Edit</button>
          <button class="action-btn delete" onclick="delItem('achievements',${a.id})">✕ Hapus</button>
        </div>
      </div>
      <div class="ach-right">
        <div class="ach-year">${a.year}</div>
        <div class="ach-type">${a.type}</div>
      </div>
    </div>`).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function addAchievement() {
  openModal('Tambah Prestasi', achForm({}), () => {
    data.achievements.push({ id: Date.now(), title: gv('at'), org: gv('ao'), year: gv('ay'), type: gv('atp') });
    renderAchievements(); saveAllData(); closeModal();
  });
}
function editAch(id) {
  const a = data.achievements.find(x => x.id === id);
  openModal('Edit Prestasi', achForm(a || {}), () => {
    if (a) { a.title = gv('at'); a.org = gv('ao'); a.year = gv('ay'); a.type = gv('atp'); }
    renderAchievements(); saveAllData(); closeModal();
  });
}
function achForm(a) {
  return `
    <div class="form-group"><label class="form-label">Nama Prestasi</label><input class="form-input" id="at" value="${a.title || ''}" placeholder="Juara 1 Hackathon..."></div>
    <div class="form-group"><label class="form-label">Penyelenggara / Institusi</label><input class="form-input" id="ao" value="${a.org || ''}" placeholder="Nama Penyelenggara"></div>
    <div class="form-group"><label class="form-label">Tahun</label><input class="form-input" id="ay" value="${a.year || ''}" placeholder="2024"></div>
    <div class="form-group"><label class="form-label">Jenis</label><input class="form-input" id="atp" value="${a.type || ''}" placeholder="Kompetisi / Beasiswa / Workshop"></div>`;
}

// TAB SWITCHING 
function switchTab(tab) {
  activeTab = tab;
  document.getElementById('panelProjects').classList.toggle('hidden', tab !== 'projects');
  document.getElementById('panelCerts').classList.toggle('hidden', tab !== 'certs');
  document.getElementById('tabProjects').classList.toggle('active', tab === 'projects');
  document.getElementById('tabCerts').classList.toggle('active', tab === 'certs');
}

// PROJECTS
let activeFilter = 'all';

function renderProjects() {
  const c = document.getElementById('projectsGrid');
  if (!c) return;
  if (data.projects.length === 0) {
    c.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--text-dim);font-size:13px;font-family:'DM Mono',monospace;">
      Belum ada proyek. ${isEditMode ? 'Klik tombol + untuk menambahkan.' : ''}
    </div>`;
    return;
  }
  c.innerHTML = data.projects.map((p, i) => `
    <div class="project-card" data-aos="fade-up" data-aos-delay="${i * 70}" data-tags="${(p.tags || []).join(',').toLowerCase()}">
      ${p.cover
        ? `<div class="project-cover">
            <img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'project-emoji\\'>${p.emoji}</span>'">
            ${p.linkCode ? `<a href="${p.linkCode}" class="project-cover-badge" target="_blank" onclick="event.stopPropagation()"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> GitHub</a>` : ''}
           </div>`
        : `<span class="project-emoji">${p.emoji}</span>`}
      <div class="project-card-body">
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-tags">${(p.tags || []).map(t => `<span class="p-tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          ${p.linkDemo ? `<a href="${p.linkDemo}" class="project-link" target="_blank">Demo ↗</a>` : ''}
          ${p.linkCode && !p.cover ? `<a href="${p.linkCode}" class="project-link" target="_blank">Kode ↗</a>` : ''}
        </div>
        <div class="item-actions">
          <button class="action-btn" onclick="editProject(${p.id})">✎ Edit</button>
          <button class="action-btn delete" onclick="delItem('projects',${p.id})">✕ Hapus</button>
        </div>
      </div>
    </div>`).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
  applyFilter(activeFilter);
}

function applyFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn:not(.cert-filter-btn)').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  document.querySelectorAll('.project-card').forEach(card => {
    if (filter === 'all') { card.style.display = ''; return; }
    const tags = card.dataset.tags || '';
    card.style.display = tags.includes(filter.toLowerCase()) ? '' : 'none';
  });
}

function addProject() {
  openModal('Tambah Proyek', projForm({}), () => {
    data.projects.push({
      id: Date.now(),
      emoji: gv('pem') || '🚀',
      title: gv('ptitle'),
      desc: gv('pdesc'),
      tags: gv('ptags').split(',').map(t => t.trim()).filter(Boolean),
      linkDemo: gv('pdemo'),
      linkCode: gv('pcode')
    });
    renderProjects(); saveAllData(); closeModal();
  });
}
function editProject(id) {
  const p = data.projects.find(x => x.id === id);
  openModal('Edit Proyek', projForm(p || {}), () => {
    if (p) {
      p.emoji = gv('pem') || '🚀'; p.title = gv('ptitle'); p.desc = gv('pdesc');
      p.tags = gv('ptags').split(',').map(t => t.trim()).filter(Boolean);
      p.linkDemo = gv('pdemo'); p.linkCode = gv('pcode');
    }
    renderProjects(); saveAllData(); closeModal();
  });
}
function projForm(p) {
  return `
    <div class="form-group"><label class="form-label">Emoji</label><input class="form-input" id="pem" value="${p.emoji || ''}" placeholder="🚀"></div>
    <div class="form-group"><label class="form-label">Nama Proyek</label><input class="form-input" id="ptitle" value="${p.title || ''}" placeholder="Nama proyek..."></div>
    <div class="form-group"><label class="form-label">Deskripsi Singkat</label><textarea class="form-textarea" id="pdesc" placeholder="Apa yang dilakukan proyek ini...">${p.desc || ''}</textarea></div>
    <div class="form-group"><label class="form-label">Teknologi (pisahkan koma)</label><input class="form-input" id="ptags" value="${(p.tags || []).join(', ')}" placeholder="HTML, CSS, JavaScript"></div>
    <div class="form-group"><label class="form-label">Link Demo (opsional)</label><input class="form-input" id="pdemo" value="${p.linkDemo || ''}" placeholder="https://..."></div>
    <div class="form-group"><label class="form-label">Link Kode / GitHub (opsional)</label><input class="form-input" id="pcode" value="${p.linkCode || ''}" placeholder="https://github.com/..."></div>`;
}

// CERTIFICATES 
let activeCertFilter = 'all';

function renderCertificates() {
  const filtered = activeCertFilter === 'all'
    ? data.certificates
    : data.certificates.filter(c => c.category === activeCertFilter);

  const highlightEl = document.getElementById('certsHighlight');
  const allEl = document.getElementById('certsAllGrid');
  const toggleBtn = document.getElementById('toggleCertsBtn');
  const certsAllEl = document.getElementById('certsAll');

  // Mode "all": tampilkan 3 yang di-highlight di atas, sisanya di toggle bawah
  if (activeCertFilter === 'all') {

    const highlighted = filtered.filter(c => c.highlighted).slice(0, 3);
    const rest = filtered.filter(c => !highlighted.includes(c));

    if (highlightEl) highlightEl.innerHTML = highlighted.map(c => certCardHTML(c)).join('');
    if (allEl) allEl.innerHTML = rest.map(c => certCardHTML(c)).join('');
    if (toggleBtn) toggleBtn.style.display = rest.length > 0 ? 'inline-flex' : 'none';
  } else {
  
    if (highlightEl) highlightEl.innerHTML = filtered.length
      ? filtered.map(c => certCardHTML(c)).join('')
      : `<div style="grid-column:1/-1;text-align:center;padding:48px 0;color:var(--text-dim);font-size:13px;font-family:'DM Mono',monospace;">Tidak ada sertifikat di kategori ini.</div>`;
    if (allEl) allEl.innerHTML = '';
    if (toggleBtn) toggleBtn.style.display = 'none';
    if (certsAllEl) certsAllEl.classList.add('hidden');
  }

  // Update total
  data.profile.totalCerts = String(data.certificates.length);
  setText('statCerts', data.profile.totalCerts);

  // Update active state filter button
  document.querySelectorAll('.cert-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === activeCertFilter);
  });

  if (typeof AOS !== 'undefined') AOS.refresh();

  // Render PDF thumbnails setelah DOM diperbarui
  setTimeout(() => {
    filtered.forEach(c => {
      if (c.fileType === 'pdf' && c.file) renderPdfThumb(c.id, c.file);
    });
  }, 0);
}

function applyCertFilter(filter) {
  activeCertFilter = filter;
  // Reset toggle sertifikat supaya tidak tertinggal state lama
  certsOpen = false;
  const el = document.getElementById('certsAll');
  if (el) el.classList.add('hidden');
  const icon = document.getElementById('toggleCertsIcon');
  if (icon) icon.textContent = '↓';
  const txt = document.getElementById('toggleCertsText');
  if (txt) txt.textContent = 'Lihat Semua Sertifikat';
  renderCertificates();
}

function renderPdfThumb(certId, pdfUrl) {
  if (typeof pdfjsLib === 'undefined') return;
  const canvas = document.getElementById('pdf-thumb-' + certId);
  if (!canvas) return;

  pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
    return pdf.getPage(1);
  }).then(page => {
    const viewport = page.getViewport({ scale: 1 });
    // Sesuaikan scale agar memenuhi lebar canvas (lebar ~300px)
    const desiredWidth = canvas.parentElement ? canvas.parentElement.offsetWidth || 300 : 300;
    const scale = desiredWidth / viewport.width;
    const scaledViewport = page.getViewport({ scale });

    canvas.width = scaledViewport.width;
    canvas.height = scaledViewport.height;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.objectFit = 'cover';

    page.render({ canvasContext: canvas.getContext('2d'), viewport: scaledViewport });
  }).catch(() => {
    // Fallback: tampilkan placeholder jika gagal
    const ctx = canvas.getContext('2d');
    canvas.width = 300; canvas.height = 200;
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 300, 200);
    ctx.fillStyle = '#e8eaf0';
    ctx.font = '40px serif';
    ctx.textAlign = 'center';
    ctx.fillText('📄', 150, 110);
  });
}

function certCardHTML(cert) {
  const hasFile = !!cert.file;
  const isImg = cert.fileType === 'image';
  const isPdf = cert.fileType === 'pdf';

  let thumbHTML = '';
  if (hasFile && isImg) {
    thumbHTML = `<img src="${cert.file}" class="cert-thumb-img" alt="${cert.name}">
      <div class="cert-pdf-overlay"><span style="font-size:28px;color:#e8eaf0">🔍</span></div>`;
  } else if (hasFile && isPdf) {
    thumbHTML = `<canvas class="cert-thumb-canvas" id="pdf-thumb-${cert.id}" style="width:100%;height:100%;object-fit:cover;display:block;"></canvas>
    <div class="cert-pdf-overlay"><span class="cert-pdf-icon">🔍</span></div>`;
  } else {
    thumbHTML = `<div class="cert-thumb-placeholder">
      <span class="cert-thumb-icon">🏅</span>
      <span class="cert-thumb-type">Belum Ada File</span>
    </div>`;
  }

  return `
    <div class="cert-card" onclick="viewCert(${cert.id})" data-aos="fade-up">
      ${cert.highlighted ? '<div class="cert-highlight-badge">✦ Pilihan</div>' : ''}
      <div class="cert-card-thumb">${thumbHTML}</div>
      <div class="cert-card-body">
        <div class="cert-issuer">${cert.issuer}</div>
        <div class="cert-name">${cert.name}</div>
        <div class="cert-date">${cert.date}</div>
        <div class="item-actions">
          <button class="action-btn" onclick="event.stopPropagation();editCert(${cert.id})">✎ Edit</button>
          <button class="action-btn delete" onclick="event.stopPropagation();delItem('certificates',${cert.id})">✕ Hapus</button>
        </div>
      </div>
    </div>`;
}

function toggleAllCerts() {
  certsOpen = !certsOpen;
  const el = document.getElementById('certsAll');
  const txt = document.getElementById('toggleCertsText');
  const ico = document.getElementById('toggleCertsIcon');
  if (certsOpen) { el.classList.remove('hidden'); txt.textContent = 'Tutup'; ico.textContent = '↑'; }
  else { el.classList.add('hidden'); txt.textContent = 'Lihat Semua Sertifikat'; ico.textContent = '↓'; }
}

function viewCert(id) {
  const cert = data.certificates.find(x => x.id === id);
  if (!cert) return;
  const overlay = document.getElementById('certViewerOverlay');
  document.getElementById('certViewerTitle').textContent = cert.name;
  document.getElementById('certViewerMeta').textContent = `${cert.issuer} · ${cert.date}`;

  const dlBtn = document.getElementById('certDownloadBtn');
  if (cert.file) {
    dlBtn.href = cert.file;
    dlBtn.download = cert.fileName || cert.name;
    dlBtn.style.display = 'inline-flex';
  } else {
    dlBtn.style.display = 'none';
  }

  let content = '';
  if (cert.file && cert.fileType === 'image') {
    content = `<img src="${cert.file}" class="viewer-img" alt="${cert.name}">`;
  } else if (cert.file && cert.fileType === 'pdf') {
    content = `<iframe src="${cert.file}" class="viewer-pdf" title="${cert.name}"></iframe>`;
  } else {
    content = `<div style="text-align:center;padding:60px 0">
      <div style="font-size:56px;margin-bottom:16px">🏅</div>
      <p style="color:var(--text-sec);font-size:14px">Belum ada file sertifikat yang diunggah.</p>
      ${isEditMode ? `<button class="btn-primary" style="margin-top:20px" onclick="closeCertViewer();editCert(${cert.id})">↑ Upload Sekarang</button>` : ''}
    </div>`;
  }
  document.getElementById('certViewerContent').innerHTML = content;
  overlay.style.display = 'flex';
}

function closeCertViewer() {
  document.getElementById('certViewerOverlay').style.display = 'none';
}

function addCertificate() {
  pendingFile = null;
  openModal('Tambah Sertifikat', certForm({}), () => {
    const cert = {
      id: Date.now(),
      name: gv('cn'), issuer: gv('ci'), date: gv('cd'),
      highlighted: gc('ch'),
      file: pendingFile ? pendingFile.base64 : null,
      fileType: pendingFile ? pendingFile.type : null,
      fileName: pendingFile ? pendingFile.name : null
    };
    data.certificates.push(cert);
    renderCertificates(); saveAllData(); closeModal();
  });
  initUpload();
}
function editCert(id) {
  const cert = data.certificates.find(x => x.id === id);
  pendingFile = null;
  openModal('Edit Sertifikat', certForm(cert || {}), () => {
    if (cert) {
      cert.name = gv('cn'); cert.issuer = gv('ci'); cert.date = gv('cd'); cert.highlighted = gc('ch');
      if (pendingFile) {
        cert.file = pendingFile.base64; cert.fileType = pendingFile.type; cert.fileName = pendingFile.name;
      }
    }
    renderCertificates(); saveAllData(); closeModal();
  });
  initUpload();
}
function certForm(c) {
  return `
    <div class="form-group"><label class="form-label">Nama Sertifikat</label><input class="form-input" id="cn" value="${c.name || ''}" placeholder="Front-End Web Development..."></div>
    <div class="form-group"><label class="form-label">Penerbit / Issuer</label><input class="form-input" id="ci" value="${c.issuer || ''}" placeholder="Dicoding Indonesia, Coursera..."></div>
    <div class="form-group"><label class="form-label">Tanggal / Periode</label><input class="form-input" id="cd" value="${c.date || ''}" placeholder="Des 2023"></div>
    <div class="form-group">
      <div class="form-checkbox-group">
        <input type="checkbox" id="ch" ${c.highlighted ? 'checked' : ''}>
        <label for="ch">✦ Tampilkan di Highlight Utama (maks. 3)</label>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Upload File Sertifikat</label>
      <div class="upload-area" id="uploadArea">
        <input type="file" id="uploadInput" accept="image/*,.pdf" onchange="handleFileUpload(event)">
        <span class="upload-icon">📎</span>
        <div class="upload-text">Klik atau drag file ke sini</div>
        <div class="upload-hint">Gambar (JPG/PNG) atau PDF · Maks. 5MB</div>
      </div>
      ${c.file ? `<div class="upload-preview" id="uploadPreview">✓ File tersimpan: ${c.fileName || 'File'}
        <button onclick="removeCertFile(${c.id})" style="margin-left:auto;background:transparent;border:none;color:#d06060;cursor:pointer;font-size:11px">Hapus</button>
      </div>` : '<div id="uploadPreview"></div>'}
    </div>`;
}

function initUpload() {
  setTimeout(() => {
    const area = document.getElementById('uploadArea');
    if (!area) return;
    area.addEventListener('dragover', e => { e.preventDefault(); area.style.borderColor = 'rgba(111,174,232,0.6)'; });
    area.addEventListener('dragleave', () => { area.style.borderColor = ''; });
    area.addEventListener('drop', e => {
      e.preventDefault(); area.style.borderColor = '';
      const f = e.dataTransfer.files[0];
      if (f) processFile(f);
    });
  }, 80);
}

function handleFileUpload(e) {
  const f = e.target.files[0];
  if (f) processFile(f);
}

function processFile(file) {
  if (file.size > 5 * 1024 * 1024) { showToast('File terlalu besar! Maks. 5MB', true); return; }
  const isPdf = file.type === 'application/pdf';
  const isImg = file.type.startsWith('image/');
  if (!isPdf && !isImg) { showToast('Format tidak didukung', true); return; }

  const reader = new FileReader();
  reader.onload = e => {
    pendingFile = { base64: e.target.result, type: isPdf ? 'pdf' : 'image', name: file.name };
    const preview = document.getElementById('uploadPreview');
    if (preview) {
      preview.innerHTML = `<div class="upload-preview">
        ${isPdf ? '📄' : '🖼️'} <span>${file.name}</span>
        <span style="margin-left:8px;color:var(--text-dim);font-size:10px">${(file.size/1024).toFixed(0)} KB</span>
      </div>`;
    }
    showToast('File siap diupload!');
  };
  reader.readAsDataURL(file);
}

function removeCertFile(id) {
  const c = data.certificates.find(x => x.id === id);
  if (c) { c.file = null; c.fileType = null; c.fileName = null; }
  pendingFile = null;
  const p = document.getElementById('uploadPreview');
  if (p) p.innerHTML = '';
}

// ====== CONTACTS ======
function renderContacts() {
  const c = document.getElementById('contactLinks');
  if (!c) return;
  c.innerHTML = data.contacts.map((ct, i) => `
    <a href="${ct.href}" class="contact-item" data-aos="fade-right" data-aos-delay="${i * 60}" target="_blank">
      <span class="contact-icon">${ct.icon}</span>
      <div>
        <div class="contact-label">${ct.label}</div>
        <div class="contact-value">${ct.value}</div>
      </div>
      <div class="item-actions" onclick="event.preventDefault()" style="margin-left:auto">
        <button class="action-btn" onclick="editCt(${ct.id})">✎ Edit</button>
        <button class="action-btn delete" onclick="delItem('contacts',${ct.id})">✕ Hapus</button>
      </div>
    </a>`).join('');
  if (typeof AOS !== 'undefined') AOS.refresh();
}

function addContact() {
  openModal('Tambah Kontak', ctForm({}), () => {
    data.contacts.push({ id: Date.now(), icon: gv('kicon') || '🔗', label: gv('klabel'), value: gv('kval'), href: gv('khref') });
    renderContacts(); saveAllData(); closeModal();
  });
}
function editCt(id) {
  const ct = data.contacts.find(x => x.id === id);
  openModal('Edit Kontak', ctForm(ct || {}), () => {
    if (ct) { ct.icon = gv('kicon') || '🔗'; ct.label = gv('klabel'); ct.value = gv('kval'); ct.href = gv('khref'); }
    renderContacts(); saveAllData(); closeModal();
  });
}
function ctForm(c) {
  return `
    <div class="form-group"><label class="form-label">Emoji</label><input class="form-input" id="kicon" value="${c.icon || ''}" placeholder="📧"></div>
    <div class="form-group"><label class="form-label">Label</label><input class="form-input" id="klabel" value="${c.label || ''}" placeholder="Email / GitHub"></div>
    <div class="form-group"><label class="form-label">Tampilan</label><input class="form-input" id="kval" value="${c.value || ''}" placeholder="email@contoh.com"></div>
    <div class="form-group"><label class="form-label">Link (href)</label><input class="form-input" id="khref" value="${c.href || ''}" placeholder="mailto:email@contoh.com"></div>`;
}

// ====== DELETE ======
function delItem(type, id) {
  if (!confirm('Hapus item ini?')) return;
  data[type] = data[type].filter(x => x.id !== id);
  renderAll();
  saveAllData();
}

// ====== MODAL ======
function openModal(title, body, onSave) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('editModal').classList.add('active');
  pendingFile = null;
  window._save = onSave;
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('editModal').classList.remove('active');
  pendingFile = null;
  window._save = null;
}
function saveModal() { if (window._save) window._save(); }
function gv(id) { const el = document.getElementById(id); return el ? el.value.trim() : ''; }
function gc(id) { const el = document.getElementById(id); return el ? el.checked : false; }

// ====== INLINE EDIT ======
function initInlineEdit() {
  if (!isEditMode) return;
  document.querySelectorAll('[data-field]').forEach(el => {
    el.addEventListener('click', function() {
      const field = this.getAttribute('data-field');
      const current = data.profile[field] || this.textContent;
      const isMultiline = ['bio', 'aboutText1', 'aboutText2', 'aboutText3', 'title'].includes(field);
      openModal(`Edit: ${field}`, `
        <div class="form-group">
          <label class="form-label">${field}</label>
          ${isMultiline
            ? `<textarea class="form-textarea" id="iv" style="min-height:110px">${current}</textarea>`
            : `<input class="form-input" id="iv" value="${current}">`}
        </div>`, () => {
        const el2 = document.getElementById('iv');
        data.profile[field] = el2 ? el2.value : current;
        renderProfile(); saveAllData(); closeModal();
      });
    });
  });
}

// ====== PHOTO ======
function initPhotoUpload() {
  const input = document.getElementById('photoInput');
  if (!input) return;
  input.addEventListener('change', function() {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      data.profile.photo = e.target.result;
      const img = document.getElementById('heroPhoto');
      const ph = document.getElementById('heroPhotoPlaceholder');
      if (img) { img.src = e.target.result; img.style.display = 'block'; }
      if (ph) ph.style.display = 'none';
      const imgM = document.getElementById('heroPhotoMobile');
      const phM = document.getElementById('heroPhotoPlaceholderMobile');
      if (imgM) { imgM.src = e.target.result; imgM.style.display = 'block'; }
      if (phM) phM.style.display = 'none';
      saveAllData();
    };
    reader.readAsDataURL(file);
  });
}

// ====== NAV ======
function initNav() {
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 50);
  });
}

let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById('mobileMenu').classList.toggle('open', menuOpen);
}

// ====== STARS ======
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  let stars = [], shooters = [];

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  function makeStars() {
    stars = [];
    const n = Math.floor((canvas.width * canvas.height) / 4000);
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.1,
        o: Math.random() * 0.7 + 0.1,
        sp: Math.random() * 0.02 + 0.004,
        ph: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.06,
        vy: (Math.random() - 0.5) * 0.06
      });
    }
  }

  function spawnShooter() {
    shooters.push({
      x: Math.random() * canvas.width * 0.6 + canvas.width * 0.1,
      y: Math.random() * canvas.height * 0.3,
      len: Math.random() * 130 + 60,
      speed: Math.random() * 9 + 6,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.25,
      alpha: 0.9
    });
  }
  setInterval(spawnShooter, 3200);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Stars
    stars.forEach(s => {
      s.ph += s.sp;
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;
      if (s.y < 0) s.y = canvas.height;
      if (s.y > canvas.height) s.y = 0;
      const a = s.o * (0.35 + 0.65 * Math.sin(s.ph));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210,225,255,${a})`;
      ctx.fill();
    });

    // Shooting stars
    for (let i = shooters.length - 1; i >= 0; i--) {
      const ss = shooters[i];
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.alpha -= 0.016;
      if (ss.alpha <= 0) { shooters.splice(i, 1); continue; }
      const tx = ss.x - Math.cos(ss.angle) * ss.len;
      const ty = ss.y - Math.sin(ss.angle) * ss.len;
      const grad = ctx.createLinearGradient(tx, ty, ss.x, ss.y);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, `rgba(180,215,255,${ss.alpha})`);
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = grad; ctx.lineWidth = 1.5; ctx.stroke();
    }

    // Nebula blue — top right
    const g1 = ctx.createRadialGradient(canvas.width * 0.78, canvas.height * 0.18, 0, canvas.width * 0.78, canvas.height * 0.18, canvas.width * 0.42);
    g1.addColorStop(0, 'rgba(80,140,255,0.08)');
    g1.addColorStop(0.5, 'rgba(111,174,232,0.04)');
    g1.addColorStop(1, 'transparent');
    ctx.fillStyle = g1; ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Nebula purple — bottom left
    const g2 = ctx.createRadialGradient(canvas.width * 0.08, canvas.height * 0.8, 0, canvas.width * 0.08, canvas.height * 0.8, canvas.width * 0.32);
    g2.addColorStop(0, 'rgba(130,70,210,0.07)');
    g2.addColorStop(1, 'transparent');
    ctx.fillStyle = g2; ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Nebula warm gold — center
    const g3 = ctx.createRadialGradient(canvas.width * 0.45, canvas.height * 0.55, 0, canvas.width * 0.45, canvas.height * 0.55, canvas.width * 0.28);
    g3.addColorStop(0, 'rgba(184,152,90,0.03)');
    g3.addColorStop(1, 'transparent');
    ctx.fillStyle = g3; ctx.fillRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(draw);
  }

  resize(); makeStars(); draw();
  window.addEventListener('resize', () => { resize(); makeStars(); });
}

// ====== TYPING ANIMATION ======
function initSlideUp() {
  const el = document.getElementById('heroTyping');
  if (!el) return;
  const words = [
    ' IT education students 🎓',
    ' Junior Web Developer 💻',
    ' Problem Solver 🔍',
  ];
  let wi = 0, ci = 0, deleting = false;
  function tick() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.substring(0, ci + 1);
      ci++;
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
      setTimeout(tick, 80);
    } else {
      el.textContent = word.substring(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(tick, 300);
        return;
      }
      setTimeout(tick, 45);
    }
  }
  tick();
}

// ====== FLOATING BADGES ROTATION ======
function initFloatingBadges() {
  const badgeIds = ['floatBadge1','floatBadge2','floatBadge3','floatBadge4'];
  const mobileBadgeIds = ['mobileBadge1','mobileBadge2','mobileBadge3','mobileBadge4'];
  const skills = data.skills.map(s => s.name);
  if (!skills.length) return;

  let offset = 0;
  let turn = 0; // 0 = ganti badge 0&1, 1 = ganti badge 2&3

  function fadePair(ids, pairStart) {
    [ids[pairStart], ids[pairStart + 1]].forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.classList.add('badge-fade-out');
      setTimeout(() => {
        el.textContent = skills[(offset + i) % skills.length];
        el.classList.remove('badge-fade-out');
        el.classList.add('badge-fade-in');
        setTimeout(() => el.classList.remove('badge-fade-in'), 600);
      }, 400);
    });
  }

  // Init semua badge
  badgeIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = skills[i % skills.length];
  });
  mobileBadgeIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.textContent = skills[i % skills.length];
  });
  offset = 4 % skills.length;

  // Ganti 2 badge sekaligus, bergantian pasangan
  setInterval(() => {
    const pairStart = turn === 0 ? 0 : 2;
    fadePair(badgeIds, pairStart);
    fadePair(mobileBadgeIds, pairStart);
    offset = (offset + 2) % skills.length;
    turn = turn === 0 ? 1 : 0;
  }, 3000);
}

// ====== CONTACT FORM ======
function sendContactForm() {
  const name    = (document.getElementById('cfName')?.value || '').trim();
  const email   = (document.getElementById('cfEmail')?.value || '').trim();
  const subject = (document.getElementById('cfSubject')?.value || '').trim();
  const message = (document.getElementById('cfMessage')?.value || '').trim();
  const status  = document.getElementById('cfStatus');

  if (!name || !email || !message) {
    if (status) { status.style.color = '#c05050'; status.textContent = '⚠ Nama, email, dan pesan wajib diisi!'; }
    return;
  }
  const body = `Nama: ${name}\nEmail: ${email}\n\n${message}`;
  const url = `https://mail.google.com/mail/?view=cm&to=med.dmt2018@gmail.com&su=${encodeURIComponent(subject || 'Pesan dari Portofolio')}&body=${encodeURIComponent(body)}`;
  window.open(url, '_blank');
  if (status) { status.style.color = 'var(--accent)'; status.textContent = '✦ Gmail dibuka! Selesaikan pengiriman di sana.'; }
  ['cfName','cfEmail','cfSubject','cfMessage'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
}

// ====== START ======
document.addEventListener('DOMContentLoaded', init);