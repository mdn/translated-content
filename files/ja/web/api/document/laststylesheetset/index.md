---
title: Document.lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - DOM
  - Document
  - プロパティ
  - リファレンス
  - スタイルシート
  - lastStyleSheetSet
  - 非推奨
browser-compat: api.Document.lastStyleSheetSet
translation_of: Web/API/Document/lastStyleSheetSet
---
{{APIRef("DOM")}}{{deprecated_header}}

**`Document.lastStyleSheetSet`** プロパティは、最後に有効化されたスタイルシートセットを返します。このプロパティの値は {{domxref("document.selectedStyleSheetSet")}} プロパティが変化するたびに変化します。

## 値

最も新しく設定されたスタイルシートセットを示します。現在のスタイルシートセットが {{domxref("document.selectedStyleSheetSet")}} を設定することで変更されたものでない場合、返値は `null` になります。

> **Note:** この値は {{domxref("document.enableStyleSheetsForSet()")}} が呼び出された時に変化しません。

## 例

```js
let lastSheetSet = document.lastStyleSheetSet;

if (!lastSheetSet) {
  lastSheetSet = 'Style sheet not yet changed';
}
else {
  console.log('The last style sheet set is: ' + lastSheetSet);
}
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
