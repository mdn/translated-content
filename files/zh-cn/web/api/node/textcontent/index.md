---
title: Node.textContent
slug: Web/API/Node/textContent
---

{{APIRef("DOM")}}

{{domxref ("Node")}} 接口的 **`textContent`** 属性表示一个节点及其后代的文本内容。

> **备注：** `textContent` 和 {{domxref("HTMLElement.innerText")}} 容易混淆，但这两个属性在[重要方面有不同之处](/zh-CN/docs/Web/API/Node/textContent#与_innerText_的区别) 。

## 语法

```
let text = someNode.textContent;
someOtherNode.textContent = string;
```

### 返回值

一个字符串或 `null`.

## 描述

`textContent` 的值取决于具体情况：

- 如果节点是一个 {{domxref("document")}}，或者一个 [DOCTYPE](/zh-CN/docs/Glossary/Doctype) ，则 `textContent` 返回 `null`。

  > **备注：** 如果你要获取整个文档的文本以及 [CDATA data](/zh-CN/docs/Web/API/CDATASection) ，可以使用 `document.documentElement.textContent`。

- 如果节点是个 [CDATA section](/zh-CN/docs/Web/API/CDATASection)、注释、[processing instruction](/zh-CN/docs/Web/API/ProcessingInstruction) 或者 [text node](/zh-CN/docs/Web/API/Document/createTextNode)，`textContent` 返回节点内部的文本内容，例如 {{domxref("Node.nodeValue")}}。
- 对于其他节点类型，`textContent` 将所有子节点的 `textContent` 合并后返回，除了注释和 processing instructions。（如果该节点没有子节点的话，返回一个空字符串。）

在节点上设置 `textContent` 属性的话，会删除它的所有子节点，并替换为一个具有给定值的文本节点。

### 与 **innerText** 的区别

不要对 `Node.textContent` 和 {{domxref("HTMLElement.innerText")}} 之间的差异感到困惑。虽然名字看起来很相似，但有重要的不同之处：

- `textContent` 会获取*所有*元素的内容，包括 {{HTMLElement("script")}} 和 {{HTMLElement("style")}} 元素，然而 `innerText` 只展示给人看的元素。
- `textContent` 会返回节点中的每一个元素。相反，`innerText` 受 CSS 样式的影响，并且不会返回隐藏元素的文本，

  - 此外，由于 `innerText` 受 CSS 样式的影响，它会触发回流（ [reflow](/zh-CN/docs/Glossary/Reflow) ）去确保是最新的计算样式。（回流在计算上可能会非常昂贵，因此应尽可能避免。）

- 与 `textContent` 不同的是，在 Internet Explorer (小于和等于 11 的版本) 中对 `innerText` 进行修改，不仅会移除当前元素的子节点，而且还会*永久性地破坏*所有后代文本节点。在之后不可能再次将节点再次插入到任何其他元素或同一元素中。

### 与 **innerHTML** 的区别

正如其名称，{{domxref("Element.innerHTML")}} 返回 HTML。通常，为了在元素中检索或写入文本，人们使用 `innerHTML`。但是，`textContent` 通常具有更好的性能，因为文本不会被解析为 HTML。

此外，使用 `textContent` 可以防止 [XSS 攻击](/zh-CN/docs/Glossary/Cross-site_scripting)。

## 示例

给出这个 HTML 片段：

```html
<div id="divA">This is <span>some</span> text!</div>
```

你可以使用 `textContent` 去获取该元素的文本内容：

```js
let text = document.getElementById("divA").textContent;
// The text variable is now: 'This is some text!'
```

或者设置元素的文字内容：

```js
document.getElementById("divA").textContent = "This text is different!";
// The HTML for divA is now:
// <div id="divA">This text is different!</div>
```

## IE8 的替代方法

```js
// Source: Eli Grey @ https://eligrey.com/blog/post/textcontent-in-ie8
if (
  Object.defineProperty &&
  Object.getOwnPropertyDescriptor &&
  Object.getOwnPropertyDescriptor(Element.prototype, "textContent") &&
  !Object.getOwnPropertyDescriptor(Element.prototype, "textContent").get
) {
  (function () {
    var innerText = Object.getOwnPropertyDescriptor(
      Element.prototype,
      "innerText",
    );
    Object.defineProperty(
      Element.prototype,
      "textContent",
      // Passing innerText or innerText.get directly does not work,
      // wrapper function is required.
      {
        get: function () {
          return innerText.get.call(this);
        },
        set: function (s) {
          return innerText.set.call(this, s);
        },
      },
    );
  })();
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLElement.innerText")}}
- {{domxref("Element.innerHTML")}}
- [More on differences between `innerText` and `textContent`](http://perfectionkills.com/the-poor-misunderstood-innerText/) (blog post)
