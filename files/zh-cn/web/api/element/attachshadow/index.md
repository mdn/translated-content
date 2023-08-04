---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
---

{{APIRef('Shadow DOM')}}

**`Element.attachShadow()`** 方法给指定的元素挂载一个 Shadow DOM，并且返回对 [`ShadowRoot`](/zh-CN/docs/Web/API/ShadowRoot) 的引用。

## 可以被挂载的 shadow DOM 元素

要注意的是，不是每一种类型的元素都可以附加到 shadow root（影子根）下面。出于安全考虑，一些元素不能使用 shadow DOM（例如{{htmlelement("a")}}），以及许多其他的元素。下面是一个**可以**挂载 shadow root 的元素列表：

- 任何带有[有效的名称](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)且可独立存在的（autonomous）自定义元素
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("h1")}}
- {{htmlelement("h2")}}
- {{htmlelement("h3")}}
- {{htmlelement("h4")}}
- {{htmlelement("h5")}}
- {{htmlelement("h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

## 语法

```
var shadowroot = element.attachShadow(shadowRootInit);
```

### 参数

- `shadowRootInit`

  - : 一个 `ShadowRootInit` 字典，包括下列字段：

    - `mode 模式`

      - : 指定 Shadow DOM 树*封装模式*的字符串，可以是以下值：

        - `open` shadow root 元素可以从 js 外部访问根节点，例如使用 {{domxref("Element.shadowRoot")}}:

        ```
        element.shadowRoot; // 返回一个 ShadowRoot 对象
        ```

        - `closed` 拒绝从 js 外部访问关闭的 shadow root 节点

        ```
        element.shadowRoot; // 返回 null
        ```

    - `delegatesFocus 焦点委托`
      - : 一个布尔值，当设置为 `true` 时，指定减轻自定义元素的聚焦性能问题行为。
        当 shadow DOM 中不可聚焦的部分被点击时，让第一个可聚焦的部分成为焦点，并且 shadow host（影子主机）将提供所有可用的 `:focus` 样式。

### 返回值

返回一个 {{domxref("ShadowRoot")}} 对象或者 `null`。

### 异常

| 异常                             | 说明                                                                                                 |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `InvalidStateError 无效状态错误` | 您添加的元素已经是一个 shadow host（影子主机）.                                                      |
| `NotSupportedError 不被支持错误` | 您应该添加 HTML 元素的命名空间之外的 shadow root，或者这个元素不能有其他 shadow 挂载到它上面 (见上). |

## 示例

下面的例子取至 [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) 片段 ( [现场看看](https://mdn.github.io/web-components-examples/word-count-web-component/) ). 你可以看到使用 `attachShadow()` 在代码中间创建一个 shadow root，然后我们可以将自定义元素的内容挂载添加到它上面。

```js
// 为新元素创建一个类
class WordCount extends HTMLParagraphElement {
  constructor() {
    // 在构造器中先调用一下 super
    super();

    // 计数器指向元素的父级
    var wcParent = this.parentNode;

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.trim().split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // 创建一个 shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // 创建文本节点并向其添加计数器
    var text = document.createElement("span");
    text.textContent = count;

    // 将其添加到 shadow root 上
    shadow.appendChild(text);

    // 当元素内容发生变化时更新计数
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}

// 定义新元素
customElements.define("word-count", WordCount, { extends: "p" });
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
