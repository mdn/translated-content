---
title: "::-webkit-scrollbar"
slug: Web/CSS/::-webkit-scrollbar
---

{{CSSRef}}{{Non-standard_Header}}

CSS 의사 요소 `::-webkit-scrollbar` 는 요소에 `overflow:scroll;`이 설정되어 있을 때 해당 요소의 스크롤바 스타일에 영향을 끼칩니다.

> **참고:** `overflow:scroll;`이 설정되지 않으면, 스크롤바가 표시되지 않습니다.

> **참고:** `::-webkit-scrollbar`는 [Blink](https://www.chromium.org/blink/) 및 [WebKit](https://webkit.org) 기반의 브라우저에서만 사용 가능합니다. (예: Chrome, Edge, Opera, Safari, iOS의 모든 브라우저 [등등](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based)). 스크롤바를 스타일링하는 표준화된 방법은 {{cssxref("scrollbar-color")}}와 {{cssxref("scrollbar-width")}}로 이용 가능합니다.

## CSS 스크롤바 선택자

WebKit 브라우저의 스크롤바의 다양한 부분을 커스터마이징하기 위해 다음과 같은 의사 요소를 사용할 수 있습니다:

- `::-webkit-scrollbar` — 스크롤바 전체.
- `::-webkit-scrollbar-button` — 스크롤바의 버튼 (한 번 누를 때마다 위아래로 한 줄씩 오르내리는 위아래 화살표).
- `::-webkit-scrollbar-thumb` — 드래그할 수 있는 스크롤 손잡이.
- `::-webkit-scrollbar-track` — 흰색 막대 위에 회색 바가 존재할 경우의 스크롤바의 트랙(진행 표시줄).
- `::-webkit-scrollbar-track-piece` — 손잡이에 의해 덮이지 않은 트랙(진행 표시줄)의 부분.
- `::-webkit-scrollbar-corner` — 수평 스크롤바와 수직 스크롤바가 교차하는 곳의 하단 모서리. 주로 브라우저 창의 우측 하단 모서리에 위치한다.
- `::-webkit-resizer` — 몇몇 요소들의 하단 모서리에 나타나는, 드래그 할 수 있는 사이즈 변경 손잡이.

## 예제

### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* "대부분 커스터마이징된" 스크롤바
 * (width/height가 지정되지 않으면 보이지 않음 */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* 또는 트랙에 추가한다 */
}

/* 썸(thumb) 추가 */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}
```

### HTML

```html
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at nulla
  elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
  dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
  velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit posuere
  est. Nulla libero sapien, egestas ac felis porta, cursus ultricies quam.
  Vestibulum tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet faucibus.
  Curabitur nibh justo, faucibus sed velit cursus, mattis cursus dolor.
  Pellentesque id pretium est. Quisque convallis nisi a diam malesuada mollis.
  Aliquam at enim ligula.
</div>

<div class="invisible-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
</div>

<div class="mostly-customized-scrollbar">
  Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
  And pretty tall<br />
  thing with weird scrollbars.<br />
  Who thought scrollbars could be made weeeeird?
</div>
```

### 결과

{{EmbedLiveSample("Examples")}}

## 명세

표준의 일부가 아닙니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [스크롤바 스타일링](https://webkit.org/blog/363/styling-scrollbars/)에 관한 WebKit 블로그
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
