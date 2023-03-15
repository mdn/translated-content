---
title: 空元素
slug: Glossary/Void_element
---
一个**空元素**（empty element）可能是 HTML、SVG，或者 MathML 里的一个不能存在子节点（例如内嵌的元素或者元素内的文本）的{{Glossary("element", "元素")}}。

[HTML](https://www.w3.org/html/wg/drafts/html/CR/)，[SVG](https://www.w3.org/TR/SVG2/) 和 [MathML](https://www.w3.org/Math/draft-spec/) 的规范都详细定义了每个元素能包含的具体内容（define very precisely what each element can contain）。许多组合是没有任何语义含义的，比如一个 {{HTMLElement("audio")}} 元素嵌套在一个 {{HTMLElement("hr")}} 元素里。

在 HTML 中，通常在一个空元素上使用一个闭标签是无效的。例如， `<input type="text"></input>` 的闭标签是无效的 HTML。

在 HTML 中有以下这些空元素：

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}（HTML 5.2 草案已移除该元素）
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

> **备注：** 在极少数情况下，空元素被错误地称为“无效元素”(void elements)。
