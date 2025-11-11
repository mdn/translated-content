---
title: CSSRule
slug: Web/API/CSSRule
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSSOM")}}

**`CSSRule`** インターフェイスは、1 つの CSS ルールを表します。 `CSSRule` からプロパティを継承しているルールを表す型がいくつかあります。

- {{DOMXRef("CSSGroupingRule")}}
- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSFontPaletteValuesRule")}}
- {{DOMXRef("CSSLayerBlockRule")}}
- {{DOMXRef("CSSLayerStatementRule")}}
- {{DOMXRef("CSSPropertyRule")}}
- {{DOMXRef("CSSNestedDeclarations")}}

## インスタンスプロパティ

`CSSRule` インターフェイスは、すべてのルールに共通のプロパティを規定します。特定の種類のルールに特有のプロパティは、各種類のルールのために、さらに特化したインターフェイス内で規定されています。

- {{domxref("CSSRule.cssText")}}
  - : このルールのテキスト表現を表します。たとえば `"h1,h2 { font-size: 16pt }"` や `"@import 'url'"` です。ルールの一部（つまり、この例の "font-size" の値）にアクセスまたは変更するには、ルールの種類に特化したインターフェイスのプロパティを使用してください（上記参照）。
- {{domxref("CSSRule.parentRule")}} {{ReadOnlyInline}}
  - : このルールを含むルールを返します。このルールが包含されていなければ `null` を返します。つまり、このルールが {{cssxref("@media")}} ブロック内部のスタイルルールの場合、親ルールは {{domxref("CSSMediaRule")}} になります。
- {{domxref("CSSRule.parentStyleSheet")}} {{ReadOnlyInline}}
  - : このルールを含むスタイルシートの {{domxref("CSSStyleSheet")}} オブジェクトを返します。
- {{domxref("CSSRule.type")}} {{ReadOnlyInline}}{{deprecated_inline}}
  - : どの種類のルールを表すかを決定するための、型定数の一つを返します。

## 例

`CSSRule` への参照は、 {{domxref("CSSStyleSheet")}} の `cssRules` リストを参照することで取得できます。

```js
let myRules = document.styleSheets[0].cssRules; // CSSRuleList を返す
console.log(myRules);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [動的なスタイル情報の使用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
