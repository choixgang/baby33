/* 이 파일은 렌더링 로직만 담당합니다. 내용 수정은 data.js에서 해주세요. */

function renderInvite() {
  document.title = `${partyData.babyName}의 첫 생일 초대장`;
  document.getElementById("inviteName").textContent = `${partyData.babyName}의 첫 생일`;
  document.getElementById("footerName").textContent = partyData.babyName;
  document.getElementById("inviteSub").textContent =
    `${formatDateKorean(partyData.partyDate)}, ${partyData.partyTime}`;
  document.getElementById("partyDdayBadge").textContent = calcPartyDday(partyData.partyDate);
  document.getElementById("inviteMessage").textContent = partyData.message;
  document.getElementById("detailDateTime").textContent =
    `${formatDateKorean(partyData.partyDate)} · ${partyData.partyTime}`;
  document.getElementById("detailVenue").textContent = partyData.venueName;
  document.getElementById("detailAddress").textContent = partyData.venueAddress;
  document.getElementById("mapLink").href = partyData.mapUrl;
}

function renderPhotos() {
  const featured = document.getElementById("photoFeatured");
  const strip = document.getElementById("photoStrip");

  function showPhoto(index) {
    const p = photos[index];
    featured.style.setProperty("--photo-bg", p.bg);
    featured.innerHTML = p.thumb ? p.thumb : p.emoji;
    strip.querySelectorAll(".photo-thumb").forEach((el, i) => {
      el.classList.toggle("active", i === index);
    });
  }

  strip.innerHTML = photos
    .map(
      (p, i) => `
      <button type="button" class="photo-thumb" style="--photo-bg:${p.bg}" data-index="${i}" aria-label="${i + 1}번째 사진 크게 보기">
        ${p.thumb ? p.thumb : p.emoji}
      </button>`
    )
    .join("");

  strip.querySelectorAll(".photo-thumb").forEach((el) => {
    el.addEventListener("click", () => showPhoto(Number(el.dataset.index)));
  });

  showPhoto(0);
}

renderInvite();
renderPhotos();
