---
title: CustomElementRegistry
slug: Web/API/CustomElementRegistry
---

{{DefaultAPISidebar("Web Components")}}

**`CustomElementRegistry`**接口提供注册自定义元素和查询已注册元素的方法。要获取它的实例，请使用 {{domxref("window.customElements")}}属性。

## 方法

- {{domxref("CustomElementRegistry.define()")}}
  - : 定义一个新的[自定义元素](/zh-CN/docs/Web/API/Web_components/Custom_Elements)。
- {{domxref("CustomElementRegistry.get()")}}
  - : 返回指定自定义元素的构造函数，如果未定义自定义元素，则返回`undefined`。
- {{domxref("CustomElementRegistry.upgrade()")}}
  - : Upgrades a custom element directly, even before it is connected to its shadow root.
- {{domxref("CustomElementRegistry.whenDefined()")}}
  - : 返回当使用给定名称定义自定义元素时将会执行的 {{jsxref("Promise", "promise")}}。（如果已经定义了这样一个自定义元素，那么立即执行返回的 promise。）

## 示例

以下代码来自我们的 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) 示例（[查看实时运行版本](https://mdn.github.io/web-components-examples/word-count-web-component/)）。请注意我们如何使用 {{domxref("CustomElementRegistry.define()")}} 方法在创建其类后定义自定义元素。

```js
// Create a class for the element
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Always call super first in constructor
    super();

    // count words in element's parent element
    var wcParent = this.parentNode;

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // Create a shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Create text node and add word count to it
    var text = document.createElement("span");
    text.textContent = count;

    // Append it to the shadow root
    shadow.appendChild(text);

    // Update count when element content changes
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
