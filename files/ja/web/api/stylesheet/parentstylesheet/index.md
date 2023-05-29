---
title: StyleSheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("CSSOM")}}

**`parentStyleSheet`** は {{domxref("StyleSheet")}} インターフェイスのプロパティで、指定されたスタイルシートをインクルードしている場合、そのスタイルシートを返します。

## 値

{{domxref("StyleSheet")}} オブジェクトです。

## 例

```js
// 最上位のスタイルシートを探す
const sheet = stylesheet.parentStyleSheet ?? stylesheet;
```

## メモ

対象スタイルシートが最上位のスタイルシートの場合、または対象スタイルシートがインクルードに対応していない場合、返値は `null` となります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
