---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
---

{{APIRef("CustomElementRegistry")}}

{{domxref("CustomElementRegistry")}}接口的 **`define()`** 方法定义了一个自定义元素。

你可以创建两种类型的自定义元素：

- **自主定制元素**：独立元素; 它们不会从内置 HTML 元素继承。
- **自定义内置元素**：这些元素继承自 - 并扩展 - 内置 HTML 元素

## 语法

```
customElements.define(name, constructor, options);
```

### 参数

- name
  - : 自定义元素名。
- constructor
  - : 自定义元素构造器。
- options {{optional_inline}}

  - : 控制元素如何定义。目前有一个选项支持：

    - `extends`. 指定继承的已创建的元素。被用于创建自定义元素。

### 返回值

空

## 示例

### 自主定制元素

以下代码取自我们的 [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/main/popup-info-box-web-component) 示例（[查看实时运行版本](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)）。

```js
// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Create spans
    var wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);
    var info = document.createElement("span");
    info.setAttribute("class", "info");

    // Take attribute content and put it inside the info span
    var text = this.getAttribute("text");
    info.textContent = text;

    // Insert icon
    var imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }
    var img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    var style = document.createElement("style");

    style.textContent =
      ".wrapper {" +
      "position: relative;" +
      "}" +
      ".info {" +
      "font-size: 0.8rem;" +
      "width: 200px;" +
      "display: inline-block;" +
      "border: 1px solid black;" +
      "padding: 10px;" +
      "background: white;" +
      "border-radius: 10px;" +
      "opacity: 0;" +
      "transition: 0.6s all;" +
      "position: absolute;" +
      "bottom: 20px;" +
      "left: 10px;" +
      "z-index: 3;" +
      "}" +
      "img {" +
      "width: 1.2rem" +
      "}" +
      ".icon:hover + .info, .icon:focus + .info {" +
      "opacity: 1;" +
      "}";

    // attach the created elements to the shadow dom

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  text="Your card validation code (CVC) is an extra
                                    security feature — it is the last 3 or 4
                                    numbers on the back of your card."></popup-info>
```

> **备注：** 自主自定义元素的构造函数必须扩展{{domxref("HTMLElement")}}。

### 自定义内置元素

以下代码取自我们的 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/main/word-count-web-component) 实例（[查看实例效果](https://mdn.github.io/web-components-examples/word-count-web-component/)）。

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

```html
<p is="word-count"></p>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
