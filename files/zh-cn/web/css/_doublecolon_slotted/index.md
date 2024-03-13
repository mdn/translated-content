---
title: "::slotted()"
slug: Web/CSS/::slotted
---

{{CSSRef}}

**`:slotted()`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)用于选定那些被放在 HTML 模板中的元素（更多请查看[使用模板和插槽](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)）。

这个伪类选择器仅仅适用于[影子节点树（Shadow Dom）](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)。并且只会选择实际的元素节点，而不包括文本节点。

```css
/* Selects any element placed inside a slot */
::slotted(*) {
  font-weight: bold;
}

/* Selects any <span> placed inside a slot */
::slotted(span) {
  font-weight: bold;
}
```

## 语法

{{csssyntax}}

## 样例

下面的小片段是关于 [插槽伪类元素](https://github.com/mdn/web-components-examples/tree/master/slotted-pseudo-element) 小 demo ([点击查看实例](https://mdn.github.io/web-components-examples/slotted-pseudo-element/)).

在这个小 demo 中，我们使用一个带有 3 个插槽的 HTML 模板：

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

自定义元素 `<person-details>` 的定义如下：

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

为了更好地区分**未被成功填充的插槽**和**成功填充的插槽**, 我们在 CSS 中选择了所有的插槽元素 (`::slotted(*)`), 并填充了不一样的颜色和字体。结果也是如此。

元素就像如下被填充了起来：

```html
<person-details>
  <p slot="person-name">Dr. Shazaam</p>
  <span slot="person-age">Immortal</span>
  <span slot="person-occupation">Superhero</span>
</person-details>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Web components](/zh-CN/docs/Web/API/Web_components)
