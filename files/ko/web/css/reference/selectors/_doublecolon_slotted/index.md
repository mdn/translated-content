---
title: ::slotted()
slug: Web/CSS/Reference/Selectors/::slotted
original_slug: Web/CSS/::slotted
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

**`::slotted()`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 HTML 템플릿 내부 슬롯에 위치할 수 있는 모든 요소를 나타냅니다. (더 많은 정보는 [템플릿과 슬롯](/ko/docs/Web/API/Web_components/Using_templates_and_slots) 문서를 참고하세요.).

이는 [shadow DOM](/ko/docs/Web/API/Web_components/Using_shadow_DOM) 내에 배치된 CSS 내에서만 동작합니다. 이 선택자는 슬롯에 배치된 텍스트 노트를 선택하지 않고, 실제 요소만을 대상으로 한다는 점을 참고하세요.

{{InteractiveExample("CSS Demo: ::slotted()", "tabbed-shorter")}}

```css interactive-example
/* This CSS is being applied inside the shadow DOM. */

::slotted(.content) {
  background-color: aqua;
}

h2 ::slotted(span) {
  background: silver;
}
```

```html interactive-example
<template id="card-template">
  <div>
    <h2><slot name="caption">title goes here</slot></h2>
    <slot name="content">content goes here</slot>
  </div>
</template>

<my-card>
  <span slot="caption">Error</span>
  <p class="content" slot="content">Build failed!</p>
</my-card>
```

```js interactive-example
customElements.define(
  "my-card",
  class extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById("card-template");
      const shadow = this.attachShadow({ mode: "open" });
      shadow.appendChild(template.content.cloneNode(true));

      const elementStyle = document.createElement("style");
      elementStyle.textContent = `
        div {
          width: 200px;
          border: 2px dotted red;
          border-radius: 4px;
        }`;
      shadow.appendChild(elementStyle);

      const cssTab = document.querySelector("#css-output");
      const editorStyle = document.createElement("style");
      editorStyle.textContent = cssTab.textContent;
      shadow.appendChild(editorStyle);
      cssTab.addEventListener("change", () => {
        editorStyle.textContent = cssTab.textContent;
      });
    }
  },
);
```

```css
/* 슬롯 내에 위치한 모든 요소를 선택합니다. */
::slotted(*) {
  font-weight: bold;
}

/* 슬롯 내에 위치한 모든 <span> 을 선택합니다.*/
::slotted(span) {
  font-weight: bold;
}
```

## 구문

```css-nolint
::slotted(<compound-selector>) {
  /* ... */
}
```

## 예제

### 슬롯 요소 하이라이트 하기

이 예제에서는 세 개의 슬롯이 있는 템플릿을 사용합니다.

```html
<template id="person-template">
  <div>
    <h2>개인 ID 카드</h2>
    <slot name="person-name">이름 미기재</slot>
    <ul>
      <li><slot name="person-age">나이 미기재</slot></li>
      <li><slot name="person-occupation">직업 미기재</slot></li>
    </ul>
  </div>
</template>
```

사용자 정의 요소로 `<person-details>` 를 정의합니다. 이 경우에는, JavaScript를 이용하여 스타일을 추가하지만, 같은 효과를 위해 {{HTMLElement("template", "템플릿")}} 내의 {{HTMLElement("style", "스타일")}} 블록 안에 스타일을 추가할 수도 있습니다.

```js
customElements.define(
  "person-details",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("person-template");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });

      let style = document.createElement("style");
      style.textContent =
        "div { padding: 10px; border: 1px solid gray; width: 200px; margin: 10px; }" +
        "h2 { margin: 0 0 10px; }" +
        "ul { margin: 0; }" +
        "p { margin: 10px 0; }" +
        "::slotted(*) { color: gray; font-family: sans-serif; } " +
        "::slotted(span) {text-decoration: underline;} ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

`style` 요소를 콘텐츠로 채울 때는 모든 슬롯된 요소들을 선택하고 (`::slotted(*)`) 이들에게 다른 글꼴과 색상을 적용할 수 있습니다. 이 차이는 색상이 채워지지 않은 슬롯들과 구분됩니다. 여기서는 {{HTMLElement("span")}}들 (`::slotted(span)`)을 스타일링하여 `<span>`들을 {{HTMLElement("p")}}들과 구별했습니다.

여기서 사용된 마크업은 `<template>` 과 다른 소스 순서에서 잘못된 슬롯 이름을 가진 사용자 정의 요소를 포함한 세 개의 사용자 정의 요소를 포함하고 있습니다.

```html
<person-details>
  <p slot="person-name">Wonder Woman</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>

<person-details>
  <p slot="person-name">Malala Yousafzai</p>
  <span slot="person-age">17</span>
  <span slot="person-occupation">Activist</span>
</person-details>

<person-details>
  <span slot="person-age">44</span>
  <span slot="not-a-slot-name">Time traveller</span>
  <p slot="person-name">Dr. Who</p>
</person-details>
```

#### 결과

{{EmbedLiveSample('Highlighting_slotted_elements', 500, 500)}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- [CSS scoping](/ko/docs/Web/CSS/CSS_scoping) 모듈
- HTML [`slot`](/ko/docs/Web/HTML/Reference/Global_attributes/slot) 특성
- HTML {{HTMLElement("slot")}} 요소
- HTML {{HTMLElement("template")}} 요소
- [Web 컴포넌트](/ko/docs/Web/API/Web_components)
