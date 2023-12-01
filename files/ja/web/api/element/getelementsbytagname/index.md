---
title: "Element: getElementsByTagName() メソッド"
short-title: getElementsByTagName()
slug: Web/API/Element/getElementsByTagName
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{ APIRef("DOM") }}

**`Element.getElementsByTagName()`** メソッドは、生きた {{domxref("HTMLCollection")}} で指定された[タグ名](/ja/docs/Web/API/Element/tagName)を持つ要素を返します。

この要素のすべての子孫が検索されますが、要素そのものは検索されません。返されるリストは*生きており*、 DOM ツリーとともに自動的に更新されます。したがって、同じ要素と引数で `Element.getElementsByTagName()` を繰り返し呼び出す必要はなく、呼び出しの間に DOM が変化しても大丈夫です。

HTML 文書内の HTML 要素に対して呼び出された場合、 `getElementsByTagName` は引数を小文字に変換してから検索を行います。これは、HTML 文書内のキャメルケースの SVG 要素（例えば [`<linearGradient>`](/ja/docs/Web/SVG/Element/linearGradient)）と照合しようとする場合には望ましくありません。代わりに、 {{ domxref("Element.getElementsByTagNameNS()") }} を使ってください。この場合、タグ名の大文字と小文字は区別されます。

`Element.getElementsByTagName` は {{domxref("Document.getElementsByTagName()")}} に似ていますが、指定した要素の子孫の要素のみを検索する点が異なります。

## 構文

```js-nolint
getElementsByTagName(tagName)
```

### 引数

- `tagName` は検索する修飾名です。特別な文字列 `"*"` はすべての要素を表します。XHTML との互換性のため、小文字を使用してください。

### 返値

_生きた_ {{domxref("HTMLCollection")}} で、タグ名が一致する要素が出現順で入ります。要素が見つからなかった場合は `HTMLCollection` は空になります。

## 例

```js
// テーブル内のセルの数だけ反復処理します
const table = document.getElementById("forecast-table");
const cells = table.getElementsByTagName("td");

for (const cell of cells) {
  const status = cell.getAttribute("data-status");
  if (status === "open") {
    // データを取得
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
