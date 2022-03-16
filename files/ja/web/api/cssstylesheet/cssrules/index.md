---
title: CSSStyleSheet.cssRules
slug: Web/API/CSSStyleSheet/cssRules
tags:
  - API
  - CSS
  - CSSOM
  - CSSOM API
  - CSSStyleSheet
  - レイアウト
  - オブジェクトモデル
  - プロパティ
  - 読み取り専用
  - リファレンス
  - スタイルシート
browser-compat: api.CSSStyleSheet.cssRules
translation_of: Web/API/CSSStyleSheet/cssRules
---
{{APIRef("CSSOM")}}

{{domxref("CSSStyleSheet")}} の
**`cssRules`** プロパティは読み取り専用で、スタイルシートを構成するすべての CSS ルールについて、リアルタイムで最新のリストを提供するライブ {{domxref("CSSRuleList")}} を返します。リストの各項目は、単一のルールを定義する {{domxref("CSSRule")}} です。

## 構文

```js
var rules = cssStyleSheet.cssRules;
```

### 値

ライブで更新される {{domxref("CSSRuleList")}} で、スタイルシートを構成する各 CSS ルールを含みます。ルールリストの各項目は、スタイルシートを構成する単一の規則を記述する {{domxref("CSSRule")}} オブジェクトです。

## 例

スタイルシートの中のそれぞれのルールは、インデックスでアクセスすることができます。

```js
let ruleList = document.styleSheets[0].cssRules;

for (let i=0; i < ruleList.length; i++) {
  processRule(ruleList[i]);
}
```

ルールは {{jsxref("Statements/for...of", "for...of")}} を使用してアクセスすることもできます。

```js
let ruleList = document.styleSheets[0].cssRules;

for (let rule of ruleList) {
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
