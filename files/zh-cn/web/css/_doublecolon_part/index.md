---
title: "::part()"
slug: Web/CSS/::part
---

{{CSSRef}}

**`::part`** [CSS](/zh-CN/docs/Web/CSS) [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)表示在[阴影树](/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM)中任何匹配 [`part`](/zh-CN/docs/Web/HTML/Global_attributes#part) 属性的元素。

```css
custom-element::part(foo) {
  /* 样式作用于 `foo` 部分 */
}
```

## 语法

{{CSSSyntax}}

## 示例

### HTML

```html
<template id="tabbed-custom-element">
  <style type="text/css">
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
  border-color: #0c0d33;
}

tabbed-custom-element::part(tab):hover:active {
  background-color: #0c0d33;
}

tabbed-custom-element::part(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset,
    0 0 0 1px #0a84ff,
    0 0 0 4px rgba(10, 132, 255, 0.3);
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
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content);
    }
  },
);
```

### 结果

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关阅读

- [`part`](/zh-CN/docs/Web/HTML/Global_attributes#part) 属性 - 用于定义可以被 `::part()` 选取的选择器
- [`exportparts`](/zh-CN/docs/Web/HTML/Global_attributes#exportparts) 属性 - 用于将阴影部分从嵌套的阴影树过渡到包含显影树的传递导出。
- [Explainer: CSS Shadow ::part and ::theme](https://github.com/fergald/docs/blob/master/explainers/css-shadow-parts-1.md)
