---
title: Document：createElement() 方法
short-title: createElement()
slug: Web/API/Document/createElement
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("DOM")}}

{{domxref("Document")}} 接口的 **`createElement()`** 方法用于创建一个具有指定 `localName` 的 {{domxref("HTMLElement")}}。

如果 `localName` 无法被识别，该方法将创建一个 {{domxref("HTMLUnknownElement")}}。

## 语法

```js-nolint
createElement(localName)
createElement(localName, options)
```

### 参数

- `localName`
  - : 一个指定要创建的元素类型的字符串。不要使用限定名称（如“html:a”）调用此方法。在 HTML 文档上调用时，`createElement()` 会在创建元素之前将 `localName` 转换为小写。在 Firefox、Opera 和 Chrome 中，`createElement(null)` 的效果与 `createElement("null")` 相同。
- `options` {{Optional_Inline}}
  - : 一个包含以下可选属性的对象（注意，`is` 和 `customElementRegistry` 只能设置其中一个）：
    - `is` {{Optional_Inline}}
      - : 一个定义先前使用 {{domxref("CustomElementRegistry/define", "customElements.define()")}} 定义的自定义元素的标签名的字符串。新元素将被赋予 `is` 属性，其值为自定义元素的标签名。详见 [Web component 示例](#web_component_示例)。
    - `customElementRegistry` {{Optional_Inline}}
      - : 一个 {{domxref("CustomElementRegistry")}}，用于设置自定义元素的[域限自定义元素注册表](/zh-CN/docs/Web/API/Web_components/Using_custom_elements#域限自定义元素注册表)。

### 返回值

新的 {{domxref("Element")}}。

> [!NOTE]
> 如果文档是 {{domxref("HTMLDocument", "HTMLDocument", "", "1")}}，则返回新的 {{domxref("HTMLElement", "HTMLElement", "", "1")}}，这是最常见的情况。否则返回新的 {{domxref("Element","Element","","1")}}。

### 异常

- `InvalidCharacterError` {{domxref("DOMException")}}
  - : 如果 [`localName`](#localname) 值不是有效的元素名称，则抛出此异常。如果字符串长度至少为 1 且满足以下条件，则为有效的元素名称：
    - 以字母字符开头，且不包含 ASCII 空白字符、`NULL`、`/` 或 `>`（分别为 U+0000、U+002F 或 U+003E）。
    - 以 `:`（U+003A）、`_`（U+005F）或 U+0080 到 U+10FFFF 范围内的任何字符开头，*并且*其余码位仅包含这些相同的字符以及 ASCII 字母数字字符、`-`（U+002D）和 `.`（U+002E）。

    > [!NOTE]
    > 早期版本的规定更为严格，要求 `localName` 必须是有效的 [XML 名称](https://www.w3.org/TR/xml/#dt-name)。

- `NotSupportedError` {{domxref("DOMException")}}
  - : 如果同时指定了 [`is`](#is) 和 [`customElementRegistry`](#customelementregistry) 选项，则抛出此异常。

## 示例

### 基础示例

创建一个新的 `<div>` 并将其插入到 ID 为 `div1` 的元素之前。

#### HTML

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>操作元素</title>
  </head>
  <body>
    <div id="div1">上面的文本是动态创建的。</div>
  </body>
</html>
```

#### JavaScript

```js
function addElement() {
  // 创建一个新的 div 元素
  const newDiv = document.createElement("div");
  // 给它一些内容
  const newContent = document.createTextNode("你好！欢迎使用！");
  // 将文本节点添加到新创建的 div 元素中
  newDiv.appendChild(newContent);

  // 将新元素及其文本添加到 DOM 中
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

addElement();
```

{{EmbedLiveSample("基础示例", 500, 50)}}

### Web component 示例

以下示例片段取自我们的 [expanding-list-web-component](https://github.com/mdn/web-components-examples/tree/main/expanding-list-web-component) 示例（[实时查看](https://mdn.github.io/web-components-examples/expanding-list-web-component/)）。在这个案例中，我们的自定义元素继承了以 {{htmlelement("ul")}} 元素为代表的 {{domxref("HTMLUListElement")}}。

```js
// 为新元素创建一个类
class ExpandingList extends HTMLUListElement {
  constructor() {
    // 构造函数中始终首先调用 super
    super();

    // 构造函数定义省略
    // …
  }
}

// 定义新元素
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

如果我们想以函数的方式创建此元素的实例，则可以使用以下方式调用：

```js
const expandingList = document.createElement("ul", { is: "expanding-list" });
```

新元素将被赋予 [`is`](/zh-CN/docs/Web/HTML/Reference/Global_attributes/is) 属性，其值为自定义元素的标签名称。

> [!NOTE]
> 为了向后兼容，某些浏览器允许在此处传递字符串而不是对象，其中字符串的值是自定义元素的标签名。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}}——在创建元素时明确指定元素的命名空间 URI。
