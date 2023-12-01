---
title: "::slotted()"
slug: Web/CSS/::slotted
---

{{ CSSRef }}

[CSS](/ru/docs/Web/CSS) [псевдо-элемент](/ru/docs/Web/CSS/Pseudo-elements) **`::slotted()`** представляет собой любой элемент, помещённый в слот внутри HTML-шаблона (дополнительная информация в [Using templates and slots](/ru/docs/Web/Web_Components/Using_templates_and_slots)).

Это работает только при использовании внутри CSS, помещённого в [shadow DOM](/ru/docs/Web/Web_Components/Using_shadow_DOM). Обратите также внимание, что этот селектор не будет выбирать текстовый узел, помещённый в слот; он нацелен только на фактические элементы.

```css
/* Выбирает любой элемент, помещённый в слот */
::slotted(*) {
  font-weight: bold;
}

/* Выбирает только <span>, помещённый в слот */
::slotted(span) {
  font-weight: bold;
}
```

## Синтаксис

{{csssyntax}}

## Примеры

Следующие фрагменты взяты из нашей демо [slotted-pseudo-element](https://github.com/mdn/web-components-examples/tree/master/slotted-pseudo-element) ([see it live also](https://mdn.github.io/web-components-examples/slotted-pseudo-element/)).

В этом демо мы использовали простой шаблон с тремя слотами:

```html
<template id="person-template">
  <div>
    <h2>Personal ID Card</h2>
    <slot name="person-name">NAME MISSING</slot>
    <ul>
      <li><slot name="person-age">AGE MISSING</slot></li>
      <li><slot name="person-occupation">OCCUPATION MISSING</slot></li>
    </ul>
  </div>
</template>
```

Пользовательский элемент — `<person-details>` — определяется следующим образом:

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
        "::slotted(*) { color: gray; font-family: sans-serif; } ";

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
  },
);
```

Вы увидите, что при заполнении элемента `style` содержимым мы выбираем все slotted-элементы (`::slotted(*)`) и задаём им другой цвет и шрифт. Это позволяет им лучше выделяться рядом с теми слотами, которые ещё не были успешно заполнены.

Элемент выглядит следующим образом при вставке на страницу:

```html
<person-details>
  <p slot="person-name">Dr. Shazaam</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Web components](/ru/docs/Web/Web_Components)
