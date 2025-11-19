---
title: ::highlight()
slug: Web/CSS/Reference/Selectors/::highlight
original_slug: Web/CSS/::highlight
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

**`::highlight()`** CSS [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 스타일에 사용자 정의 하이라이트를 적용합니다.

사용자 정의 하이라이트는 {{domxref("Range")}} 객체의 집합이며 웹 페이지에 {{domxref("HighlightRegistry")}}를 사용하여 웹 페이지에 등록됩니다.

## 허용되는 속성

몇 개의 특정한 CSS 속성만이 `::highlight()` 와 함께 사용될 수 있습니다.

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("text-decoration")}} 와 이에 연관된 속성들
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("-webkit-text-stroke-color")}}, {{CSSxRef("-webkit-text-fill-color")}} 와 {{CSSxRef("-webkit-text-stroke-width")}}

부분적으로 {{CSSxRef("background-image")}}는 무시됩니다.

## 구문

```css-nolint
::highlight(custom-highlight-name)
```

## 예제

### 문자열에 하이라이트 적용하기

#### HTML

```html
<p id="rainbow-text">사용자 정의 하이라이트 API 무지개</p>
```

#### CSS

```css
#rainbow-text {
  font-family: monospace;
  font-size: 1.5rem;
}

::highlight(rainbow-color-1) {
  color: #ad26ad;
  text-decoration: underline;
}
::highlight(rainbow-color-2) {
  color: #5d0a99;
  text-decoration: underline;
}
::highlight(rainbow-color-3) {
  color: #0000ff;
  text-decoration: underline;
}
::highlight(rainbow-color-4) {
  color: #07c607;
  text-decoration: underline;
}
::highlight(rainbow-color-5) {
  color: #b3b308;
  text-decoration: underline;
}
::highlight(rainbow-color-6) {
  color: #ffa500;
  text-decoration: underline;
}
::highlight(rainbow-color-7) {
  color: #ff0000;
  text-decoration: underline;
}
```

#### JavaScript

```js
const textNode = document.getElementById("rainbow-text").firstChild;

if (!CSS.highlights) {
  textNode.textContent =
    "이 브라우저에서는 CSS 사용자 정의 하이라이트 API가 지원되지 않습니다.";
}

// 무지개에 있는 각각의 색상을 생성하고 하이라이트를 등록합니다.
const highlights = [];
for (let i = 0; i < 7; i++) {
  // 해당 색상에 대해 새로운 하이라이트를 생성합니다.
  const colorHighlight = new Highlight();
  highlights.push(colorHighlight);

  // 사용자 정의 이름으로 이 하이라이트를 등록합니다.
  CSS.highlights.set(`rainbow-color-${i + 1}`, colorHighlight);
}

// 텍스트를 문자 단위로 반복합니다.
for (let i = 0; i < textNode.textContent.length; i++) {
  // 해당 문자에 대한 범위를 생성합니다.
  const range = new Range();
  range.setStart(textNode, i);
  range.setEnd(textNode, i + 1);

  // 범위를 다음 사용 가능한 하이라이트에 추가하고,
  // 7번째에 도달하면 다시 첫번째로 돌아갑니다.
  highlights[i % 7].add(range);
}
```

#### 결과

{{ EmbedLiveSample("Highlighting characters") }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
