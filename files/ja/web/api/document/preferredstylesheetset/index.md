---
title: Document.preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - DOM
  - Document
  - プロパティ
  - リファレンス
  - Stylesheets
  - 非推奨
browser-compat: api.Document.preferredStyleSheetSet
translation_of: Web/API/Document/preferredStyleSheetSet
---
{{APIRef("DOM")}}{{deprecated_header}}

**`preferredStyleSheetSet`** プロパティは、ページ作者によって設定された推奨スタイルシートセットを返します。

## 値

作者の推奨するスタイルシートセットを示します。これはスタイルシート宣言の順序と HTTP の `Default-Style` ヘッダーから特定されます。

作者によって定義された推奨スタイルシートセットがない場合は、空文字列 (`""`) が返されます。

## 例

```js
if (document.preferredStyleSheetSet) {
  console.log("推奨スタイルシート: " + document.preferredStyleSheetSet);
} else {
  console.log("推奨スタイルシートがありません。");
}
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
