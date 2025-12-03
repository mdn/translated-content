---
title: CSSSupportsRule
slug: Web/API/CSSSupportsRule
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM")}}

**`CSSSupportsRule`** インターフェイスは、1 個の CSS {{cssxref("@supports")}} [アット規則](/ja/docs/Web/CSS/Guides/Syntax/At-rules) を表すオブジェクトを表します。

{{InheritanceDiagram}}

## プロパティ

_祖先である {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, {{domxref("CSSRule")}} からプロパティを継承しています。_

## メソッド

_祖先である {{domxref("CSSConditionRule")}}, {{domxref("CSSGroupingRule")}}, {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

この CSS には CSS 機能クエリーとして {{cssxref("@supports")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を使用しており、その中にスタイルルールを 1 つ含んでいます。これは `document.styleSheets[0].cssRules` が最初に返す CSSRule になります。
したがって、 `myRules[0]` は {{domxref("CSSSupportsRule")}} オブジェクトを返します。

```css
@supports (display: grid) {
  body {
    color: blue;
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
console.log(myRules[0]); // CSSSupportsRule は機能クエリーを表す。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@supports")}}
