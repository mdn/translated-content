---
title: 空元素
slug: Glossary/Void_element
---

{{GlossarySidebar}}

**空元素**（empty element）是 HTML 中**不能**存在子节点（例如内嵌的元素或者文本节点）的{{Glossary("element", "元素")}}。空元素只有开始标签且不能指定结束标签。

在 HTML 中，空元素不能有结束标签。例如，`<input type="text"></input>` 是无效的 HTML。相反，不能有任何子节点的 SVG 或 MathML 元素可以使用结束标签来代替 XML 开始标签中的自闭合标签语法。

[HTML](https://html.spec.whatwg.org/multipage/)、[SVG](https://www.w3.org/TR/SVG2/) 和 [MathML](https://www.w3.org/TR/MathML3/) 的规范都详细定义了每个元素能包含的具体内容。所以一些标签的组合是没有任何语义的。

尽管无法使用具有子元素的空元素标记，但可以使用 JavaScript 在这些元素的 DOM 中添加子节点。但这并不是一个被推荐的做法，因为其结果不可靠。

在 HTML 中有以下空元素：

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}} {{deprecated_inline}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

## 自闭合标签

_HTML 中不存在自闭合标签（`<tag />`）。_

如果一个 HTML 元素的开始标签中存在尾随的 `/`（斜杠）字符，HTML 解析器会忽略该斜杠字符。请记住一些元素（例如 {{HTMLElement('script')}} 或 {{HTMLElement('ul')}}）的确需要结束标签。在这种情况下，在开始标签中添加尾随斜杠不会闭合元素。

但是，某些代码格式化工具会在空元素的开始标签中添加尾随斜杠字符，以使其兼容 XHTML 并更易读。例如，某些代码格式化工具会将 `<input type="text">` 转换为 `<input type="text" />`。

[XML](/zh-CN/docs/Glossary/XML)、[XHTML](/zh-CN/docs/Glossary/XHTML) 和 [SVG](/zh-CN/docs/Glossary/SVG) 的空元素则必须使用自闭合标签（例如 `<circle cx="50" cy="50" r="50" />`）。

在 SVG 和 MathML 中，有任何子节点的元素不允许使用自闭合标签。在这种情况下，如果元素的开始标签被标记为自闭合，则该元素不能有结束标签。

> **备注：** 如果开始标签中的尾随 `/`（斜杠）字符直接位于未使用引号包裹的属性值之后（两者之间没有空格），则该斜杠字符将成为属性值的一部分，而不是被解析器丢弃。例如，标记 `<img src=http://www.example.com/logo.svg/>` 会导致 `src` 属性的值为 `http://www.example.com/logo.svg/`——这会导致 URL 错误。

## 参见

- [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)
