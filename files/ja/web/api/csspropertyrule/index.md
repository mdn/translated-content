---
title: CSSPropertyRule
slug: Web/API/CSSPropertyRule
l10n:
  sourceCommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{APIRef("CSS Properties and Values API")}}

**`CSSPropertyRule`** は {{domxref('CSS_Properties_and_Values_API','CSS プロパティと値 API','',' ')}} のインターフェイスで、 CSS の {{cssxref("@property")}} ルールを表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSPropertyRule.inherits")}} {{ReadOnlyInline}}
  - : カスタムプロパティの継承フラグを返します。
- {{domxref("CSSPropertyRule.initialvalue")}} {{ReadOnlyInline}}
  - : カスタムプロパティの初期値を返します。
- {{domxref("CSSPropertyRule.name")}} {{ReadOnlyInline}}
  - : カスタムプロパティの名前を返します。
- {{domxref("CSSPropertyRule.syntax")}} {{ReadOnlyInline}}
  - : カスタムプロパティのリテラル構文を返します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

## 例

このスタイルシートには単一の {{cssxref("@property")}} ルールがあります。返される最初の {{domxref("CSSRule")}} は、 CSS で定義された通りのプロパティと値を持つ `CSSPropertyRule` となります。

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); //a CSSPropertyRule
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
