---
title: Node：nodeName 属性
slug: Web/API/Node/nodeName
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`nodeName`** 只读属性以字符串形式返回当前节点的名称。

## 值

一个字符串。不同类型节点的取值如下：

- {{domxref("Attr")}}
  - : {{domxref("Attr.name")}} 的值，即该属性的*限定名*。
- {{domxref("CDATASection")}}
  - : 字符串 `"#cdata-section"`。
- {{domxref("Comment")}}
  - : 字符串 `"#comment"`。
- {{domxref("Document")}}
  - : 字符串 `"#document"`。
- {{domxref("DocumentFragment")}}
  - : 字符串 `"#document-fragment"`。
- {{domxref("DocumentType")}}
  - : {{domxref("DocumentType.name")}} 的值。
- {{domxref("Element")}}
  - : {{domxref("Element.tagName")}} 的值，即 HTML 元素的*大写*标签名，或 XML 元素（如 SVG 或 MathML 元素）的*小写*标签名。
- {{domxref("ProcessingInstruction")}}
  - : {{domxref("ProcessingInstruction.target")}} 的值。
- {{domxref("Text")}}
  - : 字符串 `"#text"`。

## 示例

本示例会显示若干节点的节点名称。

```html
这是一些 HTML：
<div id="d1">你好，世界</div>
<!-- 注释示例 -->
文本 <span>文本</span> 文本<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">尚未计算。</output>
```

以及以下脚本：

```js
let node = document.querySelector("body").firstChild;
let result = "节点名称如下：\n";
while (node) {
  result += `${node.nodeName}\n`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerText = result;
```

{{ EmbedLiveSample("示例", "100%", "450")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Element.tagName")}}
- {{domxref("Attr.name")}}
- {{domxref("DocumentType.name")}}
- {{domxref("ProcessingInstruction.target")}}
