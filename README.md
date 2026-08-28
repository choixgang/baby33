# baby33

아기를 위한 페이지. GitHub Pages + 커스텀 도메인(`1631pm.com`)으로 배포됩니다.

## 내용 수정하기

`script.js` 맨 위 `babyData`와 `growthLog` 값만 바꾸면 페이지 전체(이름, D-day, 프로필, 성장 기록)에 반영됩니다.

사진을 추가하려면:
1. `images/` 폴더를 만들고 사진 파일을 넣습니다.
2. `growthLog`의 `emoji` 대신 `thumb: '<img src="images/파일명.jpg">'` 형태로 바꿔주세요.

## 로컬 미리보기

`index.html`을 브라우저로 그냥 열어도 되고, 다음처럼 로컬 서버로 띄워도 됩니다.

```
npx serve .
```

## 배포

`main` 브랜치에 push하면 GitHub Actions/Pages가 자동 배포합니다 (저장소 Settings → Pages에서 소스를 `main` 브랜치로 설정).
