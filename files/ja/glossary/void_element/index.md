---
title: Void element (空要素)
slug: Glossary/Void_element
l10n:
  sourceCommit: bd1e27169f37922f382d98c98bf4ab68bff08edd
---

**空要素 (void element)** とは HTML における{{Glossary("element", "要素")}}のうち、子ノード（すなわち子要素およびテキストノード）を**持つことができない**ものを指します。空要素には開始タグしかありません。空要素では終了タグを指定することができません。

また HTML においては、空要素に終了タグを置くことはできません。例えば、 `<input type="text"></input>` は不正な HTML です。一方、 SVG や MathML の要素で子ノードを保有することができないものは、開始タグ内で XML 自己完結型タグ構文を置く代わりに終了タグを使用することができます。

[HTML](https://html.spec.whatwg.org/multipage/)、[SVG](https://w3c.github.io/svgwg/svg2-draft/)、[MathML](https://w3c.github.io/mathml/spec.html) の各仕様書は、それぞれの要素が何を含むことができるかを詳細に定義しています。従って、一部のタグの組み合わせは意味が失われます。

空要素が何らかの子を持つようにマークアップする方法はありませんが、 JavaScript でプログラム的に子ノードを DOM 内の要素に追加することができます。しかし、それは良い方法とは言えません。なぜなら、その結果は信頼できるものではないからです。

HTML には以下の空要素が存在します。

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

## 自己完結型タグ

_自己完結型タグ (`<tag />`)は HTML には存在しません。_

HTML 要素の開始タグの末尾に `/`（スラッシュ）が存在する場合、HTML パーサーはそのスラッシュを無視します。これは、{{HTMLElement('script')}} や {{HTMLElement('ul')}} など、終了タグが要求される要素については特に覚えておく必要があります。このような場合、開始タグの末尾にスラッシュを追加しても、要素は閉じられません。その代わりに、末尾のスラッシュは無視され、明示的な開始タグが見つかるか、パーサーが HTML の構造や解釈ルールに基づいて暗黙的に要素を終了させるまで、その要素は開かれた状態として扱われます。例えば、`<div/>Some text` の場合、ブラウザーはこれを `<div>Some text</div>` と解釈し、スラッシュを無視して、div 要素がその後続くテキストを囲んでいるものとみなします。

しかし、コードフォーマッターの中には、 XHTML と互換性を持たせたり、読み取りやすくしたりするために、空の要素の開始タグに末尾のスラッシュ文字を追加するものがあります。例えば、 コードフォーマッターによっては、`<input type="text">` を `<input type="text" />` に変換するものがあります。

{{Glossary("XML")}}、{{Glossary("XHTML")}}、{{Glossary("SVG")}} の空要素では自己完結型タグが必要です（例: `<circle cx="50" cy="50" r="50" />`）。

子ノードを保有できない SVG と MathML 要素の開始タグは、自己完結型であることをマークすることが許されています。このような場合、要素の開始タグが自己完結型とマークされていれば、その要素は終了タグを持つべきではありません。

> [!NOTE]
> 開始タグの末尾にある `/`（スラッシュ）文字の前に、引用されていない属性値が直接ある場合（間に空白がない場合）、スラッシュはパーサーによって破棄されるのではなく、属性値の一部となります。例えば、`<img src=http://www.example.com/logo.svg/>` というマークアップは `src` 属性の値が `http://www.example.com/logo.svg/` であることを意味します - これは URL が間違っていることを意味します。

## 関連情報

- {{glossary("Replaced elements", "置換要素")}}
