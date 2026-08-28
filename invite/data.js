/* ============================================================
   여기 있는 값들만 바꾸면 두 초대장 디자인(기본/편집장풍) 모두에
   똑같이 반영됩니다.
   ============================================================ */

const partyData = {
  babyName: "윤슬이",
  babyName2: "최윤슬",
  partyDate: "2027-03-27",   // 돌잔치 날짜 (YYYY-MM-DD)
  partyTime: "오전 11시",      // 돌잔치 시간
  venueName: "더파티하우스 디테라스",
  venueAddress: "경기도 성남시 분당구 삼평동 691 1층",
  mapUrl: "https://naver.me/FuNibOfl",
  message:
    "세상에 온 지 벌써 1년,\n윤슬이의 첫 생일잔치에 소중한 분들을 초대합니다.\n\n귀한 걸음 해주시어 자리를 빛내주시면\n더없이 감사하겠습니다.",
  parents: "최종윤 · 강영은의 딸",   // 편집장풍 버전에서 사용
};

/* 사진 6장 자리입니다. 사진이 준비되면 emoji 줄을 지우고
   thumb: '<img src="images/파일명.jpg" alt="윤슬">' 을 추가해주세요.
   예)
   { thumb: '<img src="images/photo1.jpg" alt="윤슬">', bg: "" } */
const photos = [
  { thumb: '<img src="images/photo1-bottle.svg" alt="윤슬">', bg: "linear-gradient(160deg,#ffd6e8,#ffe9f3)" },
  { thumb: '<img src="images/photo2-bear.svg" alt="윤슬">', bg: "linear-gradient(160deg,#cdf5e4,#e6fff5)" },
  { thumb: '<img src="images/photo3-moon.svg" alt="윤슬">', bg: "linear-gradient(160deg,#e3d4ff,#f2e9ff)" },
  { thumb: '<img src="images/photo4-blossom.svg" alt="윤슬">', bg: "linear-gradient(160deg,#ffe3c2,#fff3e0)" },
  { thumb: '<img src="images/photo5-balloon.svg" alt="윤슬">', bg: "linear-gradient(160deg,#ffd6e8,#ffe9f3)" },
  { thumb: '<img src="images/photo6-cake.svg" alt="윤슬">', bg: "linear-gradient(160deg,#cdf5e4,#e6fff5)" },
];

function formatDateKorean(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${days[d.getDay()]}요일`;
}

function calcPartyDday(isoDate) {
  const party = new Date(isoDate + "T00:00:00");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.round((party - today) / 86400000);
  if (diffDays > 0) return `D-${diffDays}`;
  if (diffDays === 0) return "D-DAY";
  return `D+${Math.abs(diffDays)}`;
}
