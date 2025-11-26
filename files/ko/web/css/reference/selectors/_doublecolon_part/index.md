---
title: ::part()
slug: Web/CSS/Reference/Selectors/::part
original_slug: Web/CSS/::part
l10n:
  sourceCommit: 5863b9e6635b304b96ef5f70937329e854957f73
---

**`::part`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements) 는 [shadow tree](/ko/docs/Web/API/Web_components/Using_shadow_DOM) 내에서 일치하는 [`part`](/ko/docs/Web/HTML/Reference/Global_attributes#part) 특성을 가진 모든 요소를 나타냅니다.

```css
custom-element::part(foo) {
  /* `foo` part 에 적용할 스타일 */
}
```

## 구문

```css
::part(<ident>+) {
  /* ... */
}
```

## 예제

### HTML

```html
<template id="tabbed-custom-element">
  <style>
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 1rem;
    }
    :host {
      display: flex;
    }
  </style>
  <div part="tab active">Tab 1</div>
  <div part="tab">Tab 2</div>
  <div part="tab">Tab 3</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: #0c0dcc;
  border-bottom: transparent solid 2px;
}

tabbed-custom-element::part(tab):hover {
  background-color: #0c0d19;
  color: #ffffff;
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
  color: #ffffff;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgb(10 132 255 / 30%);
}

tabbed-custom-element::part(active) {
  color: #0060df;
  border-color: #0a84ff !important;
}
```

### JavaScript

```js
let template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" }).append(template.content);
    }
  },
);
```

### 결과

{{EmbedLiveSample('Examples')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`part`](/ko/docs/Web/HTML/Reference/Global_attributes#part) 특성
- {{CSSxRef(":state",":state()")}} 의사 클래스 함수
- [`exportparts`](/ko/docs/Web/HTML/Reference/Global_attributes#exportparts) 특성
- [CSS shadow parts](/ko/docs/Web/CSS/CSS_shadow_parts) 모듈
