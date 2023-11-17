---
title: ":defined"
slug: Web/CSS/:defined
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:defined`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 정의된 요소를 선택합니다. 정의된 요소란 브라우저에 내장된 표준 요소와, 성공적으로 정의({{domxref("CustomElementRegistry.define()")}} 메서드 등)한 사용자 지정 요소를 의미합니다.

```css
/* Selects any defined element */
:defined {
  font-style: italic;
}

/* Selects any instance of a specific custom element */
simple-custom:defined {
  display: block;
}
```

## 구문

{{csssyntax}}

## 예제

### 정의되기 전까지 요소 숨기기

다음 코드는 저희의 [defined-pseudo-class](https://github.com/mdn/web-components-examples/tree/master/defined-pseudo-class) 데모에서 발췌한 것입니다. ([동작 모습 보기](https://mdn.github.io/web-components-examples/defined-pseudo-class/))

이 데모에서는 아주 간단한 사용자 지정 요소를 정의합니다.

```js
customElements.define(
  "simple-custom",
  class extends HTMLElement {
    constructor() {
      super();

      let divElem = document.createElement("div");
      divElem.textContent = this.getAttribute("text");

      let shadowRoot = this.attachShadow({ mode: "open" }).appendChild(divElem);
    }
  },
);
```

그 후, 위의 요소를 표준 `<p>`와 함께 문서에 넣습니다.

```html
<simple-custom text="Custom element example text"></simple-custom>

<p>Standard paragraph example text</p>
```

CSS에는 다음의 스타일을 작성합니다.

```css
// Give the two elements distinctive backgrounds
p {
  background: yellow;
}

simple-custom {
  background: cyan;
}

// Both the custom and the built-in element are given italic text
:defined {
  font-style: italic;
}
```

그리고 아래의 두 규칙을 통해, 정의되지 않은 사용자 지정 요소는 숨기고, 정의가 성공적으로 된 경우에는 블록 레벨 요소로 표시합니다.

```css
simple-custom:not(:defined) {
  display: none;
}

simple-custom:defined {
  display: block;
}
```

위의 데모는 페이지에 불러올 때 꽤 시간이 걸릴 수 있는 복잡한 사용자 지정 요소 스타일링에 유용하게 쓸 수 있습니다. 로딩이 아직 진행 중일 때, 스타일을 입히지 않은는 못생긴 요소가 페이지에 노출되는 것을 막을 수 있으니까요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [웹 컴포넌트](/ko/docs/Web/Web_Components)
