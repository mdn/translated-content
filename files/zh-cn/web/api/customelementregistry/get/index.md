---
title: CustomElementRegistry.get()
slug: Web/API/CustomElementRegistry/get
---

{{APIRef("CustomElementRegistry")}}

{{domxref("CustomElementRegistry")}} 的 **`get()`** 方法返回以前定义自定义元素的构造函数。

## 语法

```plain
constructor = customElements.get(name);
```

### 参数

- name
  - : 你想要返回引用的构造函数的自定义元素的名字。

### 返回值

指定名字的自定义元素的构造函数，如果没有使用该名称的自定义元素定义，则为`undefined`。

## 例子

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true),
      );
    }
  },
);

// Return a reference to the my-paragraph constructor
let ctor = customElements.get("my-paragraph");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
