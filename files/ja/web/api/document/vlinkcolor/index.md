---
title: Document.vlinkColor
slug: Web/API/Document/vlinkColor
---

{{APIRef("DOM")}} {{ Deprecated_header() }}

**`Document.vlinkColor`** プロパティは、文書内のユーザーが訪問済みのリンクの色を取得または設定します。

## 構文

```
color = document.vlinkColor
document.vlinkColor = color
```

### 引数

- `color` は、色を表す単語 (`red` など) または 16 進値 (`#ff0000` など) の文字列です。

## メモ

- Mozilla Firefox ではこのプロパティの初期値は紫 (16 進で `#551a8b`) です。

- `Document.vlinkColor` は [DOM Level 2 HTML では非推奨です](http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-26809268)。
- 推奨される代替方法は、 HTML の {{HtmlElement("a")}} 要素において CSS で {{ Cssxref(":visited") }} 擬似クラスの色を設定または取得する方法です (例えば `a:visited {color:red;}`)。
- 他の代替方法に `document.body.vLink` がありますが、これは [HTML 4.01 で非推奨](http://www.w3.org/TR/html401/struct/global.html#adef-vlink)となり、 CSS で代替されました。

## ブラウザーの互換性

{{Compat}}
