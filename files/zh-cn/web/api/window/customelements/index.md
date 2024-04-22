---
title: Window.customElements
slug: Web/API/Window/customElements
---

{{APIRef}}

**`customElements`** 是 {{domxref("Window")}} 对象上的一个只读属性，接口返回一个 {{domxref("CustomElementRegistry")}} 对象的引用，可用于注册新的 [custom element](/zh-CN/docs/Web/API/Web_components/Using_custom_elements)，或者获取之前定义过的自定义元素的信息。

## 例子

这个属性最常用的例子是用来获取使用{{domxref("CustomElementRegistry.define()")}}方法定义和注册的自定义元素，例如：

```js
let customElementRegistry = window.customElements;
customElementRegistry.define("my-custom-element", MyCustomElement);
```

However, it is usually shortened to something like the following:

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

参阅我们的 [web-components-examples](https://github.com/mdn/web-components-examples/) 获取更多有用的例子。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
