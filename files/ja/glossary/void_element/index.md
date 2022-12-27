---
title: Empty element (空要素)
slug: Glossary/Void_element
original_slug: Glossary/Empty_element
---
**空要素** とは HTML、SVG、MathML における {{Glossary("element", "要素")}} のうち、子ノード (子要素およびテキストノード) を**持つことができない**ものを指します。

[HTML](https://html.spec.whatwg.org/multipage/)、[SVG](https://www.w3.org/TR/SVG2/)、[MathML](https://www.w3.org/TR/MathML3/) 仕様は、それぞれの要素が何を含むことができるかを詳細に定義しています。でないと、例えば {{HTMLElement("hr")}} 要素を親に持つ {{HTMLElement("audio")}} 要素、といった無意味な組み合わせが多数存在してしまいます。

また HTML においては、空要素に対する閉じタグの使用は多くの場合禁じられています。例えば、 `<input type="text"></input>` は不正な HTML です。

HTML には以下の空要素が存在します。

- {{HTMLElement("area")}}
- {{HTMLElement("base")}}
- {{HTMLElement("br")}}
- {{HTMLElement("col")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}(HTML 5.2 の草案で削除されました)
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}
