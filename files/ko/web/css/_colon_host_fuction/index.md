---
title: ":host()"
slug: Web/CSS/:host_function
---

{{CSSRef}}

**`:host()`** [CSS](/ko/docs/Web/CSS) [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes) 함수는 내부에서 사용되는 CSS가 포함된 [shadow DOM](/ko/docs/Web/API/Web_comComponents/Using_shadow_DOM)의 섀도우 호스트(따라서 섀도우 DOM 내부에서 사용자 정의 요소를 선택할 수 있음) — 그러나 함수의 매개변수로 제공된 선택기는 섀도우 호스트와 일치합니다. **`:host()`**는 Shadow DOM 외부에서 사용될 때 아무런 효과가 없습니다.

가장 확실한 용도는 특정 사용자 정의 요소 인스턴스에만 클래스 이름을 지정한 다음 관련 클래스 선택기를 함수 인수로 포함하는 것입니다. 특정 상위 항목 내에 있는 사용자 정의 요소의 인스턴스만 선택하기 위해 하위 항목 선택기 표현식과 함께 이를 사용할 수 없습니다. 그게 그 일이야 {{CSSxRef(":host-context", ":host-context()")}}.

> **참고:** {{CSSxRef(":is", ":is()")}} 및 {{CSSxRef(":not", ":not()")와 같은 다른 기능적 의사 클래스는 }} 선택기 목록을 매개변수로 받아들이고 `:host()`는 단일 복합 선택기를 매개변수로 사용합니다. 또한 `:is()` 및 `:not()`는 인수의 특이성만 고려하는 반면, `:host()`의 특이성은 모두 의사 클래스 **and**의 특이성입니다. 그 주장의 특수성.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-host_function.html", "tabbed-shorter")}}

```css
/* Selects a shadow root host, only if it is
   matched by the selector argument */
:host(.special-custom-element) {
  font-weight: bold;
}
```

## 문법

```css-nolint
:host(<compound-selector>) {
  /* ... */
}
```

## 예시

### 선택적으로 섀도우 호스트 스타일 지정

The following snippets are taken from our [host-selectors example](https://github.com/mdn/web-components-examples/tree/main/host-selectors) ([see it live also](https://mdn.github.io/web-components-examples/host-selectors/)).

In this example we have a simple custom element — `<context-span>` — that you can wrap around text:

```html
<h1>
  Host selectors <a href="#"><context-span>example</context-span></a>
</h1>
```

Inside the element's constructor, we create `style` and `span` elements, fill the `span` with the content of the custom element, and fill the `style` element with some CSS rules:

```js
const style = document.createElement("style");
const span = document.createElement("span");
span.textContent = this.textContent;

const shadowRoot = this.attachShadow({ mode: "open" });
shadowRoot.appendChild(style);
shadowRoot.appendChild(span);

style.textContent =
  "span:hover { text-decoration: underline; }" +
  ":host-context(h1) { font-style: italic; }" +
  ':host-context(h1):after { content: " - no links in headers!" }' +
  ":host-context(article, aside) { color: gray; }" +
  ":host(.footer) { color : red; }" +
  ":host { background: rgb(0 0 0 / 10%); padding: 2px 5px; }";
```

The `:host(.footer) { color : red; }` rule styles all instances of the `<context-span>` element (the shadow host in this instance) in the document that have the `footer` class set on them — we've used it to give instances of the element inside the {{htmlelement("footer")}} a special color.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 더 보기

- [Web components](/ko/docs/Web/API/Web_components)
- {{CSSxRef(":host")}}
