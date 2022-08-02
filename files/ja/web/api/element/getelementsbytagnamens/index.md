---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
tags:
  - API
  - DOM
  - Element
  - メソッド
  - リファレンス
browser-compat: api.Element.getElementsByTagNameNS
translation_of: Web/API/Element/getElementsByTagNameNS
---
{{APIRef("DOM")}}

**`Element.getElementsByTagNameNS()`** メソッドは、指定された名前空間に属する、指定されたタグ名を持つ要素の {{domxref("HTMLCollection")}} をライブで返します。これは {{Domxref("Document.getElementsByTagNameNS")}} に似ていますが、検索対象が指定された要素の子孫に限定される点が異なります。

## 構文

```js
elements = element.getElementsByTagNameNS(namespaceURI, localName)
```

- `elements` は生きた {{domxref("HTMLCollection")}} で、ツリー内で見つかった要素を出現順に保持します。
- `element` は検索を開始する要素です。なお、この要素の子孫は含まれますが、このノード自体は含まれません。
- `namespaceURI` は検索する要素の名前空間 URI です（{{domxref("Element.namespaceURI")}} および {{domxref("Attr.namespaceURI")}} を参照してください）。例えば、 XHTML 要素を検索する場合は、 XHTML の名前空間 URI である `http://www.w3.org/1999/xhtml` を使用してください。
- `localName` は検索する要素のローカル名、またはすべての要素に一致する特殊な値 `"*"` です（{{domxref("Element.localName")}} および {{domxref("Attr.localName")}} を参照）。

## 例

```js
// XHTML 文書の table の多くのセルの配列をチェック。
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "td");

for (var i = 0; i < cells.length; i++) {
    var axis = cells[i].getAttribute("axis");
    if (axis == "year") {
        // データを取得
    }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
