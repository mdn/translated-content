---
title: ::slotted()
slug: Web/CSS/Reference/Selectors/::slotted
l10n:
  sourceCommit: cebbd9095ac12557c55157355181672027fffc14
---

**`:slotted()`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Reference/Selectors/Pseudo-elements)用于选定那些被放在 HTML 模板中的元素（更多请查看[使用模板和插槽](/zh-CN/docs/Web/API/Web_components/Using_templates_and_slots)）。

这个伪元素选择器仅仅适用于[影子 DOM（shadow DOM）](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)。请注意它只会选择实际的元素节点，而不包括文本节点。

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
/* 选择插槽内容任意元素 */
::slotted(*) {
  font-weight: bold;
}

/* 选择插槽内的任意 <span> 元素 */
::slotted(span) {
  font-weight: bold;
}
```

## 语法

```css-nolint
::slotted(<compound-selector>) {
  /* ... */
}
```

## 示例

### 高亮插槽元素

在下面的例子中，我们使用一个带有 3 个插槽的模板：

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

我们定义 `<person-details>` 自定义元素，在这个示例中，我们使用 Javascript 添加样式，尽管我们将它们添加到 {{HTMLElement("template")}} 中的 {{HTMLElement("style")}} 块可达到同样的效果。

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

当填充 `style` 元素生效时，你会看到我们选择了所有插槽元素（`::slotted(*)`），并给它们不同的字体和颜色。这将它们与尚未填充的插槽区分开来。我们对所有插槽 {{HTMLElement("span")}}（`::slotted(span)`）设置样式，从而区分 `<span>`元素 和 {{HTMLElement("p")}} 元素。

标记三个自定义元素，其中包含一个具有无效槽名的自定义元素，该自定义元素与 `<template>` 不同：

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

#### 结果

{{EmbedLiveSample('高亮插槽元素', 500, 500)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":host")}}
- {{cssxref(":host_function", ":host()")}}
- {{cssxref(":host-context", ":host-context()")}}
- [CSS 域](/zh-CN/docs/Web/CSS/Guides/Scoping)模块
- HTML [`slot`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/slot) 属性
- HTML {{HTMLElement("slot")}} 元素
- HTML {{HTMLElement("template")}} 元素
- [Web 组件](/zh-CN/docs/Web/API/Web_components)
