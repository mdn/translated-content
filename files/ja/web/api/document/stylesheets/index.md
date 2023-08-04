---
title: "Document: styleSheets プロパティ"
slug: Web/API/Document/styleSheets
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("CSSOM")}}

**`styleSheets`** は {{domxref("Document")}} インターフェイスの読み取り専用プロパティで、 {{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。これは、この文書に明示的にリンク埋め込まれたスタイルシートを表します。

## 値

返されるリストは次の順になります。

- {{htmlelement("link")}} ヘッダーから受け取ったスタイルシートが先に、ヘッダーの順序で並べられます。
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
