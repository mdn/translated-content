---
title: 可替换元素
slug: Glossary/Replaced_elements
l10n:
  sourceCommit: e7d2e2780b992b4afa847e7d5a3b3e7b4a5805a1
---

在 Web 开发中，**可替换元素**（replaced element）是指其内容由外部资源或文档结构外部定义的内容替换的 HTML 元素，并且在 CSS 渲染模型中不被视为常规内容。它们是外部对象，其表现独立于 CSS 格式化模型。

以下元素通常为可替换元素：

- {{HTMLElement("img")}}
- {{HTMLElement("video")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fencedframe")}}

以下元素仅在特定情况下被视为可替换元素：

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("input")}}（仅 `image` 输入类型）

可替换元素通常具有{{glossary("intrinsic size", "固有尺寸")}}和{{glossary("aspect ratio", "固有比例")}}。例如，`<img>` 元素的内容通常由其 `src` 属性指定的图片替换。该图片具有以绝对单位指定的固有宽度和高度，从而决定其宽高比。

表单控件通常是非可替换的*控件*，但 `<input type="image">` 除外，它会被图片替换。通过 CSS 的 {{cssxref("content")}} 属性插入的对象属于*匿名可替换元素*。它们之所以“匿名”，是因为它们在 HTML 标记中并不存在。

## 参见

- {{glossary("void element", "空元素")}}
- {{glossary("Inline-level content", "行级内容")}}
- [CSS display 规范中的可替换元素](https://drafts.csswg.org/css-display/#replaced-element)
- [HTML 规范中的可替换元素](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
