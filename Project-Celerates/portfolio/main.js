// 1. Data Experience dengan Copywriting Profesional
const experiences = [
  {
    title: "Front-End Developer Student",
    place: "Infinite Learning Indonesia",
    date: "Feb 2024 - Jun 2024",
    // Ganti dengan URL gambar Anda sendiri
    bgImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx_t9TF1VAsj_t6AGUrZ9tVqQVWD0-haO9Bw&s",
    desc: "Berkolaborasi dalam tim Agile untuk merancang dan membangun platform web menggunakan ekosistem React.js.",
  },
  {
    title: "S1 Teknologi Informasi",
    place: "Universitas Bina Sarana Informatika",
    date: "2021 - 2025",
    // Ganti dengan URL gambar Anda sendiri
    bgImage:
      "https://news.bsi.ac.id/wp-content/uploads/2025/08/bsi_ckrg-Universitas-BSI-CIKARANG.png",
    desc: "Membangun fondasi teknis yang kuat dalam logika pemrograman, struktur data, dan manajemen basis data. IPK 3.46.",
  },
];

// 2. Data Skills dengan Visual Icon (Emoji/Placeholder)
const skills = [
  { name: "HTML5 & CSS3", level: "Advanced", icon: "🎨" },
  { name: "JavaScript", level: "Intermediate", icon: "⚡" },
  { name: "Tailwind CSS", level: "Beginner", icon: "🌊" },
  { name: "React JS", level: "Intermediate", icon: "⚛️" },
  { name: "Git & GitHub", level: "Advanced", icon: "🛠️" },
  { name: "MySQL", level: "Intermediate", icon: "📱" },
  { name: "Responsive Design", level: "Beginner", icon: "📱" },
];

// --- LOGIKA RENDER (UI/UX Optimized) ---
// Render Experience Container
const expContainer = document.getElementById("experienceContainer");
if (expContainer) {
  expContainer.innerHTML = experiences
    .map(
      (exp) => `
    <div class="card-exp" style="background-image: url('${exp.bgImage}')">
      <div class="content">
        <span class="badge" style="background: var(--primary); color: white; margin-bottom: 1rem; border:none;">${exp.date}</span>
        <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; letter-spacing: -0.5px; color: white;">${exp.title}</h3>
        <p style="color: var(--primary-light); font-weight: 700; font-size: 0.9rem; margin-bottom: 0.5rem;">${exp.place}</p>
        <p style="color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.6;">${exp.desc}</p>
      </div>
    </div>
  `,
    )
    .join("");

  // Render Skills Grid
  const skillGrid = document.getElementById("skillGrid");
  if (skillGrid) {
    skillGrid.innerHTML = skills
      .map(
        (skill) => `
      <div class="skill-card">
        <div class="skill-icon">${skill.icon}</div>
        <div>
          <h4 style="font-size: 1.1rem; font-weight: 800;">${skill.name}</h4>
          <p style="color: #2563eb; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${skill.level}</p>
        </div>
      </div>
    `,
      )
      .join("");
  }
}

// Jalankan fungsi render saat DOM siap
document.addEventListener("DOMContentLoaded", renderPortfolio);

// --- SIMPLE SCROLL REVEAL ANIMATION ---
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

window.addEventListener("load", () => {
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.8s cubic-bezier(0.2, 0, 0, 1)";
    observer.observe(section);
  });
});
