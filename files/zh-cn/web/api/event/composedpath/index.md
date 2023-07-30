---
title: Event.composedPath()
slug: Web/API/Event/composedPath
---

{{APIRef("Shadow DOM")}}

**`composedPath()`** 是 {{domxref("Event")}} 接口的一个方法，当对象数组调用该侦听器时返回事件路径。如果影子根节点被创建并且{{domxref("ShadowRoot.mode")}}是关闭的，那么该路径不包括影子树中的节点。

## 语法

```plain
var composed = Event.composedPath();
```

### 参数

无。

### 返回值

一个 {{domxref("EventTarget")}}对象数组，表示将在其上调用事件侦听器的对象。

## 示例

在我们的 composed-composed-path 例子中，我们定义了两个自定义元素，`<open-shadow>` 和 `<closed-shadow>，`两 个全都调用了它们文本属性的内容然后作为`<p>` 元素的文本内容将它们插入到元素的影子 DOM 中。两者之间唯一的区别是它们影子的根结点是在它们的模式被分别设置成`open` 和 `closed` 的情况下连接的。

第一个定义就像这样，比如：

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

然后我们在我们的页面中插入其中一个元素：

```html
<open-shadow text="I have an open shadow root"></open-shadow>
<closed-shadow text="I have a closed shadow root"></closed-shadow>
```

然后在 `<html>` 元素中插入一个鼠标点击事件：

```js
document.querySelector("html").addEventListener("click", function (e) {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

当你先后点击 `<open-shadow>` 和 `<closed-shadow>` 这两个元素，你将会注意到两件事情。第一， `composed` 这个属性返回值为 `true` 因为 `click` 事件总能够在影子边界中传播。第二，你将注意到两个元素中`composedPath` 的值的不同。 `<open-shadow>` 元素的组成路径是这个：

```js
Array [ p, ShadowRoot, open-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

尽管 `<closed-shadow>` 元素的组成路径是像下面这样：

```js
Array [ closed-shadow, body, html, HTMLDocument https://mdn.github.io/web-components-examples/composed-composed-path/, Window ]
```

在第二个例子中，事件监听器仅能够传播到 `<closed-shadow>` 元素本身，但是不会到影子边界内的节点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
