---
title: Void element （空要素）
slug: Glossary/Void_element
original_slug: Glossary/Empty_element
l10n:
  sourceCommit: bb5e443fad3be7d126732a85155d5776ad977cad
---

**空要素 (void element)** とは HTML における{{Glossary("element", "要素")}}のうち、子ノード（すなわち子要素およびテキストノード）を**持つことができない**ものを指します。空要素には開始タグしかありません。空要素では終了タグを指定することができません。

また HTML においては、空要素に終了タグを置くことはできません。例えば、 `<input type="text"></input>` は不正な HTML です。一方、 SVG や MathML の要素で子ノードを保有することができないものは、開始タグ内で XML 自己完結型タグ構文を置く代わりに終了タグを使用することができます。

[HTML](https://html.spec.whatwg.org/multipage/)、[SVG](https://www.w3.org/TR/SVG2/)、[MathML](https://www.w3.org/TR/MathML3/) の各仕様書は、それぞれの要素が何を含むことができるかを詳細に定義しています。従って、一部のタグの組み合わせは意味が失われます。

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
- {{HTMLElement("keygen")}}(HTML 5.2 の草案で削除されました)
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("param")}}
- {{HTMLElement("source")}}
- {{HTMLElement("track")}}
- {{HTMLElement("wbr")}}

## 自己完結型タグの奇妙なケース

_自己完結型タグ(`<tag />`)は HTML には存在しません。_\
しかし、子ノードを保有できない SVG と MathML 要素の開始タグは、自己完結型であることをマークすることが許されています。このような場合、要素の開始タグが自己完結型とマークされていれば、その要素は終了タグを持つべきではありません。

HTML 要素の開始タグに末尾の `/` （スラッシュ）文字が表示されている場合、 HTML パーサーはそのスラッシュ文字を無視します。しかし、コードフォーマッターの中には、 XHTML と互換性を持たせて読み取り可能なものにするために、空の要素の開始タグに末尾のスラッシュ文字を追加するものがあります。例えば、あるコードフォーマッターは `<input type="text">` を `<input type="text" />` に変換します。

> **メモ:** 開始タグの末尾にある `/` (スラッシュ) 文字の前に、引用されていない属性値が直接ある場合（間に空白がない場合）、スラッシュはパーサーによって破棄されるのではなく、属性値の一部となります。例えば、`<img src=http://www.example.com/logo.svg/>` というマークアップは `src` 属性の値が `http://www.example.com/logo.svg/` であることを意味します - これは URL が間違っていることを意味します。
