---
title: Document.selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
---

{{APIRef("DOM")}}{{deprecated_header}}

**`selectedStyleSheetSet`** プロパティは、現在使用中のスタイルシートセットの名前を示します。

## 値

現在使用中のスタイルシートセットの名前を示します。このプロパティを使用して、現在のスタイルシートセットを設定することもできます。

このプロパティに値を設定することは、 {{domxref("document.enableStyleSheetsForSet()")}} を `currentStyleSheetSet` の値で呼び出し、 `lastStyleSheetSet` の値をその値に設定することに等価です。

> **メモ:** この属性の値は生きています。スタイルシートの `disabled` 属性を変更すると、この属性の値に影響します。

## 例

```js
console.log("Current style sheet set: " + document.selectedStyleSheetSet);

document.selectedStyleSheetSet = "Some other style sheet";
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
