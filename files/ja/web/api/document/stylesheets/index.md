---
title: "Document: styleSheets プロパティ"
short-title: styleSheets
slug: Web/API/Document/styleSheets
l10n:
  sourceCommit: b8af61d883d15a2d7e964ca96e00cafbd94f6e6a
---

{{APIRef("CSSOM")}}

**`styleSheets`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、 {{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。これは、この文書に明示的にリンク埋め込まれたスタイルシートを表します。

## 値

返されるリストは次の順になります。

- {{HTTPHeader("Link")}} ヘッダーから受け取ったスタイルシートが先に、ヘッダーの順序で並べられます。
- DOM から受け取ったスタイルシートが後に、[ツリー順](https://dom.spec.whatwg.org/#concept-tree-order)に並べられます。

## 例

```js
function getStyleSheet(unique_title) {
  for (const sheet of document.styleSheets) {
    if (sheet.title === unique_title) {
      return sheet;
    }
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
