---
title: "Document: vlinkColor プロパティ"
short-title: vlinkColor
slug: Web/API/Document/vlinkColor
l10n:
  sourceCommit: 157a449e2e8bf009fd316480c0d535d4a21527b0
---

{{APIRef("DOM")}} {{Deprecated_Header}}

**`Document.vlinkColor`** プロパティは、文書内のユーザーが訪問済みのリンクの色を取得または設定します。

## 値

文字列で、色を表す単語 (`red` など) または 16 進値 (`#ff0000` など) です。

## メモ

- Mozilla Firefox ではこのプロパティの初期値は紫 (16 進で `#551a8b`) です。
- `Document.vlinkColor` は [DOM Level 2 HTML では非推奨です](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)。
- 推奨される代替方法は、 HTML の {{HtmlElement("a")}} 要素において CSS で {{Cssxref(":visited")}} 擬似クラスの色を設定または取得する方法です (例えば `a:visited {color:red;}`)。
- 他の代替方法に `document.body.vLink` がありますが、これは [HTML 4.01 で非推奨](https://www.w3.org/TR/html401/struct/global.html#adef-vlink)となり、 CSS で代替されました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
