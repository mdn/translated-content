---
title: Window.customElements
slug: Web/API/Window/customElements
---

{{APIRef}}

{{domxref("Window")}} 인터페이스의 **`customElements`** 읽기 전용 속성은 새로운 사용자 지정 요소를 등록하거나, 이전에 등록한 요소의 정보를 받아올 수 있는 {{domxref("CustomElementRegistry")}} 객체의 참조를 반환합니다.

## 예제

`customElements`를 사용하는 가장 흔한 예시는 새로운 요소를 정의하고 등록하기 위해 {{domxref("CustomElementRegistry.define()")}} 메서드에 적용하는 경우입니다.

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

그러나, 보통은 다음 코드처럼 줄여서 사용하곤 합니다.

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

[web-components-examples](https://github.com/mdn/web-components-examples/) 저장소에서 더 많은 사용 예제를 찾아보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
