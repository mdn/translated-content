---
title: Document.createElement()
slug: Web/API/Document/createElement
---

{{APIRef("DOM")}}

在 [HTML](/zh-CN/docs/Web/HTML) 文档中，**`Document.createElement()`** 方法用于创建一个由标签名称 _tagName_ 指定的 HTML 元素。如果用户代理无法识别 _tagName_，则会生成一个未知 HTML 元素 {{domxref("HTMLUnknownElement")}}。

## 语法

```
var element = document.createElement(tagName[, options]);
```

### 参数

- _tagName_
  - : 指定要创建元素类型的字符串，创建元素时的 {{domxref("Node.nodeName", "nodeName")}} 使用 `tagName` 的值为初始化，该方法不允许使用限定名称 (如："html:a")，在 HTML 文档上调用 `createElement()` 方法创建元素之前会将`tagName` 转化成小写，在 Firefox、Opera 和 Chrome 内核中，`createElement(null)` 等同于 `createElement("null")`
- _options_{{optional_inline}}
  - : 一个可选的参数 `ElementCreationOptions` 是包含一个属性名为 `is` 的对象，该对象的值是用 `customElements.define()` 方法定义过的一个自定义元素的标签名。为了向前兼容较老版本的 [Custom Elements specification](https://www.w3.org/TR/custom-elements/), 有一些浏览器会允许你传一个值为自定义元素的标签名的字符串作为该参数的值。可以参考本页下方的 [Web component 示例](#web_component_示例) Google 的 [Extending native HTML elements](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) 文档仔细了解如何使用该参数。

### 返回值

新建的元素（{{domxref("Element")}}）。

## 示例

### 基础示例

#### HTML

创建一个新的 `<div>` 并且插入到 ID 为“`div1`”的元素前。

```html
<!doctype html>
<html>
  <head>
    <title>||Working with elements||</title>
  </head>
  <body>
    <div id="div1">The text above has been created dynamically.</div>
  </body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement() {
  // 创建一个新的 div 元素
  let newDiv = document.createElement("div");
  // 给它一些内容
  let newContent = document.createTextNode("Hi there and greetings!");
  // 添加文本节点 到这个新的 div 元素
  newDiv.appendChild(newContent);

  // 将这个新的元素和它的文本添加到 DOM 中
  let currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

{{EmbedLiveSample("基础示例", 500, 50)}}

### Web component 示例

以下示例片段取自我们的 expanding-list-web-component 示例 (实时查看)。在这个案例中，我们的自定义元素继承了以 {{htmlelement("ul")}} 元素为代表的 {{domxref("HTMLUListElement")}}.

```js
// 为新元素创建一个类
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    ...
  }
}

// 定义新元素
customElements.define('expanding-list', ExpandingList, { extends: "ul" });
```

如果我们想以函数的方式创建此元素的实例，则可以使用以下方式调用：

```js
let expandingList = document.createElement("ul", { is: "expanding-list" });
```

新元素将被赋予`is`属性，其值为自定义元素的标签名称。

> **备注：** 为了兼容之前版本的 [Custom Elements specification](https://www.w3.org/TR/custom-elements/) 规范，某些浏览器将允许您在此处传递字符串而不是对象，其中字符串的值是自定义元素的标记名。

## 注意

- 在一个 [XUL](/zh-CN/docs/Mozilla/Tech/XUL) 文档中，该方法创建指定的 XUL 元素。在其他文档中，它创建一个命名空间 URI 为 null 的元素，这时，新元素会继承文档的命名空间。
- 若要显式指定元素的命名空间 URI，请使用 [`document.createElementNS()`](/zh-CN/docs/Web/API/Document/createElementNS)。
- 当在一个被标记为 HTML 文档的文档对象上执行时，createElement() 优先将参数转换为小写。
- 当创建一个带限制条件的元素时，请使用{{ domxref("document.createElementNS()") }}。
- Gecko 2.0 之前，quirks 模式下 tagName 可以包含尖括号 (<和>)；从 Gecko2.0 开始，该方法在 quirks 模式和标准模式下表现一致。
- 从 Gecko 19.0 开始， `createElement(null)` 和 `createElement("null")` 相同。Opera 也会将 null 字符串化，但是 Chrome 和 IE 都会抛出错误。
- 从 Gecko 22.0 开始，当参数为"bgsounds", "multicol", 或"image"时， `createElement()` 不再使用 {{domxref("HTMLSpanElement")}} 接口，参数为 "bgsound" 和 "multicol" 时，使用 `HTMLUnknownElement`，为“image”时使用{{domxref("HTMLElement")}} `HTMLElement`。
- `createElement` 的 Gecko 实现不遵循 XUL 和 XHTML 的 DOM 说明文档：创建元素的 `localName` 和 `namespaceURI` 不会被设置为 `null`。更多细节详见 [Firefox bug 280692](https://bugzil.la/280692)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — 在创建元素时，明确指定元素的命名空间 URI。
