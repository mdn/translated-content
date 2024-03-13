---
title: Event.composed
slug: Web/API/Event/composed
---

{{APIRef("Shadow DOM")}}

{{domxref("Event")}} 接口的只读属性 **`composed`** 返回一个 {{jsxref("Boolean")}} 值，用来指示该事件是否可以从 Shadow DOM 传递到一般的 DOM。

> **备注：** 此属性以前命名为`scoped`。

## 语法

```js
var composed = Event.composed;
```

### 值

如果返回的 {{jsxref("Boolean")}} 值为 `true`，表明当事件到达 shadow DOM 的根节点（也就是 shadow DOM 中事件开始传播的第一个节点）时，事件可以从 shadow DOM 传递到一般 DOM。当然，事件要具有可传播性，即该事件的 {{domxref("Event.bubbles", "bubbles")}} 属性必须为 `true`。你也可以通过调用 {{domxref("Event.composedPath", "composedPath()")}} 来查看事件从 shadow DOM 传播到普通 DOM 的路径。

如果属性值为 `false`，那么事件将不会跨越 shadow DOM 的边界传播。

## 例子

在我们的组合组合路径示例（实时查看）中，我们定义了两个不重要的自定义元素 `<open-shadow>` 和 `<closed-shadow>`，它们都将获取其 `text` 属性的内容并将它们作为元素的文本内容插入到元素的 shadow DOM 中。两者之间的唯一区别是它们的阴影根附加了它们的模式分别设置为 open 和 closed。

第一个定义如下所示：

```js
customElements.define(
  "open-shadow",
  class extends HTMLElement {
    constructor() {
      super();

      let pElem = document.createElement("p");
      pElem.textContent = this.getAttribute("text");

      let shadowRoot = this.attachShadow({ mode: "open" }).appendChild(pElem);
    }
  },
);
```

我们将他们插入我们的页面当中：

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

然后在 `html` 标签上监听 click 事件：

```js
document.querySelector("html").addEventListener("click", function (e) {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

当我们点击 `<open-shadow>` 和 `<closed-shadow>` 元素时候我们会注意到：

1. `composed` 属性返回 `true` 因为`click` 事件总是能总是能够跨越`Shadow DOM`的边界传播。
2. 你应该会注意到，两个元素返回`composedPath`的值不同。

`<open-shadow>` 元素的组合路径是：

```
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

而 `<closed-shadow>` 元素的组合路径是：

```
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

第二种情况下，监听器只会捕获到 `<closed-shadow>` 元素本身，而不会去继续捕捉该元素中的节点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
