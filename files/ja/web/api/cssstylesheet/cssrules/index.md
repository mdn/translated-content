---
title: "CSSStyleSheet: cssRules プロパティ"
slug: Web/API/CSSStyleSheet/cssRules
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSSOM")}}

**`cssRules`** は {{domxref("CSSStyleSheet")}} の読み取り専用プロパティで、スタイルシートを構成するすべての CSS ルールについて、リアルタイムで最新のリストを提供する生きた {{domxref("CSSRuleList")}} を返します。リストの各項目は、単一のルールを定義する {{domxref("CSSRule")}} です。

## 値

ライブで更新される {{domxref("CSSRuleList")}} で、スタイルシートを構成するすべての CSS ルールを含みます。ルールリストのそれぞれの項目は、スタイルシートを構成する単一のルールを記述する {{domxref("CSSRule")}} オブジェクトです。

## 例

スタイルシートの中のそれぞれのルールは、添字でアクセスすることができます。

```js
const ruleList = document.styleSheets[0].cssRules;

for (let i = 0; i < ruleList.length; i++) {
  processRule(ruleList[i]);
}
```

ルールは {{jsxref("Statements/for...of", "for...of")}} を使用してアクセスすることもできます。

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  processRule(rule);
}
```

しかし、 `CSSRule` は厳密には配列ではないので、 {{jsxref("Array.forEach", "forEach()")}} を使用することはできません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [動的なスタイル情報の使用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
