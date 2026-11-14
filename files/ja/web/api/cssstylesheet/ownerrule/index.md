---
title: "CSSStyleSheet: ownerRule プロパティ"
short-title: ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
l10n:
  sourceCommit: bc464c855fc2a3d967f1684b72e78b39c6d1ab50
---

{{APIRef("CSSOM")}}

{{domxref("CSSStyleSheet")}} の **`ownerRule`** は読み取り専用プロパティで、{{domxref("CSSImportRule")}} を返します。これは、スタイルシートを文書にインポートする {{cssxref("@import")}} アットルールに対応します。スタイルシートが `@import` を使用して文書にインポートされていない場合、返される値は `null` です。

## 値

{{domxref("CSSImportRule")}} です。これは、スタイルシートを文書にインポートする {{cssxref("@import")}} アットルールに対応します。スタイルシートが `@import` を使用して文書にインポートされていない場合、返される値は `null` です。

## 例

このスニペットは、`@import` アットルールを使用して文書にインポートされていないルールを探すものです。

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (!rule.ownerRule) {
    /* ルールはインポートされていない */
  }
}
```

このスニペットは、`@import` に関連するスタイルシートへの参照を取得し、それを何らかの方法で処理します。

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  if (rule.ownerRule) {
    checkStylesheet(rule.ownerRule.styleSheet);
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [動的スタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
