---
title: Element.tagName
slug: Web/API/Element/tagName
tags:
  - API
  - DOM
  - DOM リファレンス
  - Element
  - Gecko
  - NeedsBrowserCompatibility
  - プロパティ
  - 読み取り専用
  - リファレンス
  - tagName
browser-compat: api.Element.tagName
translation_of: Web/API/Element/tagName
---
{{ApiRef("DOM")}}

**`tagName`** は {{domxref("Element")}} インターフェイスのプロパティで、呼び出された要素のタグ名を返します。

例えば、この要素が {{HTMLElement("img")}} であれば、 `tagName` プロパティは `"IMG"` となります（HTML 文書の場合。 XML/XHTML 文書では大文字小文字が違うかもしれません）。

## 構文

```js
elementName = Element.tagName;
```

### 値

この要素のタグ名を示す文字列です。文字列が大文字であるかどうかは、文書型によって変わります。

- HTML 文書を表す DOM ツリーでは、タグ名は常に大文字に正規化されます。例えば、 `tagName` が {{HTMLElement("div")}} 要素で呼び出された場合は、 `"DIV"` を返します。
- XML の DOM ツリー内にある要素のタグ名は、元の XML ファイルに書かれているのと大文字小文字が同じになります。 XML 文書に `"<SomeTag>"` タグがあった場合、 `tagName` プロパティの値は `"SomeTag"` になります。

{{domxref("Element")}} オブジェクトにおいては、 `tagName` の値は要素オブジェクトの継承元である {{domxref("Node")}} の {{domxref("Node.nodeName", "nodeName")}} プロパティの値と同じになります。

## 例

### HTML

```html
<span id="born">When I was born...</span>
```

### JavaScript

```js
var span = document.getElementById("born");
console.log(span.tagName);
```

XHTML (および他の XML 形式) では、元の大文字小文字が保持されるので、元のタグ名が小文字で生成されている場合は `"span"` が出力されます。
HTML では、元の文書を生成したときに大文字小文字のどちらが使われたかに関わらず、 `"SPAN"` と出力されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
