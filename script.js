/* ============================================================
   여기 있는 값들만 바꾸면 페이지 전체가 업데이트됩니다.
   ============================================================ */

const babyData = {
  name: "최윤슬",                    // 아기 이름
  birthDate: "2026-04-02",          // 태어난 날짜 (YYYY-MM-DD)
  birthTime: "오전 9시 21분",         // 태어난 시간
  weight: "2.98kg",                  // 몸무게
  height: "51cm",                   // 키
  bloodType: "AB형",                 // 혈액형 (없으면 "" 로 비워두세요)
  parents: "아빠 최종윤 · 엄마 강영은",    // 부모님 성함 (없으면 "" 로 비워두세요)
  photoEmoji: "🍼",                  // 프로필 자리에 보일 이모지 (실제 사진으로 바꿀 수 있어요)
};

/* 성장 기록: 사진이 준비되면 emoji 자리에 실제 이미지를 넣어보세요.
   예) thumb: '<img src="images/1개월.jpg" alt="1개월">' */
const growthLog = [
  { label: "태어난 날", date: "2026.04.02", emoji: "👶", bg: "linear-gradient(160deg,#ffd6e8,#ffe9f3)" },
  { label: "첫 한달",   date: "2026.05.02", emoji: "🍼", bg: "linear-gradient(160deg,#cdf5e4,#e6fff5)" },
  { label: "50일",      date: "2026.05.21", emoji: "50", bg: "linear-gradient(160deg,#cdf5e4,#e6fff5)" },
  { label: "2개월",     date: "2026.06.01", emoji: "🧸", bg: "linear-gradient(160deg,#e3d4ff,#f2e9ff)" },
  { label: "3개월",     date: "2026.07.01", emoji: "🌙", bg: "linear-gradient(160deg,#ffe3c2,#fff3e0)" },
  { label: "백일",      date: "2026.07.10", emoji: "🎉", bg: "linear-gradient(160deg,#ffd6e8,#ffe9f3)" },
  { label: "첫 뒤집기",     date: "2027.02.01", emoji: "🌸", bg: "linear-gradient(160deg,#cdf5e4,#e6fff5)" },
  { label: "6개월",     date: "2027.02.01", emoji: "🌸", bg: "linear-gradient(160deg,#cdf5e4,#e6fff5)" },
];

/* ============================================================
   아래는 렌더링 로직입니다. 보통 수정할 필요 없어요.
   ============================================================ */

function formatBirthDateKorean(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

function calcDday(isoDate) {
  const birth = new Date(isoDate + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.round((today - birth) / 86400000);
  if (diffDays < 0) return `D-${Math.abs(diffDays)}`;
  return `D+${diffDays}`;
}

function renderHero() {
  document.getElementById("babyName").textContent = babyData.name;
  document.getElementById("footerName").textContent = babyData.name;
  document.title = `${babyData.name}의 특별한 순간들`;
  document.getElementById("heroSub").textContent =
    `${formatBirthDateKorean(babyData.birthDate)}, 우리 곁으로 온 날`;
  document.getElementById("ddayBadge").textContent = calcDday(babyData.birthDate);
  document.getElementById("profilePhoto").textContent = babyData.photoEmoji;
}

function renderProfile() {
  const rows = [
    ["태어난 날", formatBirthDateKorean(babyData.birthDate)],
    ["태어난 시간", babyData.birthTime],
    ["몸무게", babyData.weight],
    ["키", babyData.height],
    ["혈액형", babyData.bloodType],
    ["가족", babyData.parents],
  ].filter(([, value]) => value);

  const grid = document.getElementById("profileGrid");
  grid.innerHTML = rows
    .map(
      ([label, value]) => `
      <div>
        <dt>${label}</dt>
        <dd>${value}</dd>
      </div>`
    )
    .join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = growthLog
    .map(
      (item) => `
      <div class="gallery-item">
        <div class="gallery-thumb" style="background:${item.bg}">${item.emoji}</div>
        <div class="gallery-label">${item.label}</div>
        <div class="gallery-date">${item.date}</div>
      </div>`
    )
    .join("");
}

renderHero();
renderProfile();
renderGallery();
