---
title: 스크롤 동작
slug: Web/CSS/scroll-behavior
l10n:
  sourceCommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{CSSRef}}

**`scroll-behavior`** [CSS](/ko/docs/Web/CSS) 속성은 문서 탐색 또는 CSSOM 스크롤 API에 의하여 스크롤이 트리거될 때 스크롤을 포함하는 박스의 동작을 설정합니다.

{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}

사용자에 의해 실행되는 스크롤 등 이 속성에 영향을 받지 않는 다른 스크롤의 종류가 있을 수 있습니다. 이 속성이 root 요소에 지정된다면, 이 속성은 뷰포트 전체에 적용됩니다. `body` 요소에 특정된 이 속성은 뷰포트로 전파되지 않을 수 있습니다.

사용자 에이전트는 이 속성을 생략할 수 있습니다.

## 구문

```css
/* 키워드 값 */
scroll-behavior: auto;
scroll-behavior: smooth;

/* 전역 값 */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: revert-layer;
scroll-behavior: unset;
```

`scroll-behavior` 속성은 아래의 목록에서 하나의 키워드 값을 선택해 지정할 수 있습니다.

### 값

- `auto`
  - : 스크롤 박스가 즉시 스크롤 됩니다.
- `smooth`
  - : 스크롤 박스 내에서 사용자 에이전트가 정의한 완화 함수를 사용하여 부드러운 효과로 스크롤을 실행시킵니다. 사용자 에이전트는 가능한 플랫폼 관례를 준수해야 합니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 부드러운 스크롤 동작 지정

#### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<div class="scroll-container">
  <div class="scroll-page" id="page-1">1</div>
  <div class="scroll-page" id="page-2">2</div>
  <div class="scroll-page" id="page-3">3</div>
</div>
```

#### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav,
.scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

#### 결과

{{ EmbedLiveSample("Setting_smooth_scroll_behavior", "100%", 250) }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
