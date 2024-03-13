---
title: "Element: getElementsByTagNameNS() メソッド"
short-title: getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Element.getElementsByTagNameNS()`** メソッドは、指定された名前空間に属する、指定されたタグ名を持つ要素の {{domxref("HTMLCollection")}} をライブで返します。これは {{Domxref("Document.getElementsByTagNameNS")}} に似ていますが、検索対象が指定された要素の子孫に限定される点が異なります。

## 構文

```js-nolint
getElementsByTagNameNS(namespaceURI, localName)
```

### 引数

- `namespaceURI` は検索する要素の名前空間 URI です（{{domxref("Element.namespaceURI")}} および {{domxref("Attr.namespaceURI")}} を参照してください）。例えば、XHTML 要素を検索する場合は、XHTML の名前空間 URI である `http://www.w3.org/1999/xhtml` を使用してください。
- `localName` は検索する要素のローカル名、またはすべての要素に一致する特殊な値 `"*"` です（{{domxref("Element.localName")}} および {{domxref("Attr.localName")}} を参照）。

### 返値

生きた {{domxref("HTMLCollection")}} で、ツリー内で見つかった要素を出現順に保持します。

## 例

```js
// XHTML 文書の table の多くのセルの配列をチェック。
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagNameNS(
  "http://www.w3.org/1999/xhtml",
  "td",
);

for (const cell of cells) {
  const axis = cell.getAttribute("axis");
  if (axis === "year") {
    // データを取得
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
