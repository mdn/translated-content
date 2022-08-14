---
title: CSSRule
slug: Web/API/CSSRule
tags:
  - API
  - CSSOM
  - インターフェイス
  - リファレンス
browser-compat: api.CSSRule
translation_of: Web/API/CSSRule
---
{{APIRef("CSSOM")}}

**`CSSRule`** インターフェイスは、1 つの CSS ルールを表します。 `CSSRule` からプロパティを継承しているルールを表す型がいくつかあります。

- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSDocumentRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSViewportRule")}}

## すべての CSSRule インスタンスに共通のプロパティ

`CSSRule` インターフェイスは、すべてのルールに共通のプロパティを規定します。特定の種類のルールに特有のプロパティは、各種類のルールのために、さらに特化したインターフェース内で規定されています。

- {{domxref("CSSRule.cssText")}}
  - : このルールのテキスト表現を表します。たとえば "`h1,h2 { font-size: 16pt }`" や "`@import 'url'`" です。ルールの一部（つまり、この例の "font-size" の値）にアクセスまたは変更するには、[ルールの種類に特化したインターフェイス](#型定数)のプロパティを使用してください。
- {{domxref("CSSRule.parentRule")}} {{readonlyinline}}
  - : このルールを含むルールを返します。このルールが包含されていなければ `null` を返します。つまり、このルールが {{cssxref("@media")}} ブロック内部のスタイルルールの場合、親ルールは {{domxref("CSSMediaRule")}} になります。
- {{domxref("CSSRule.parentStyleSheet")}} {{readonlyinline}}
  - : このルールを含むスタイルシートの {{domxref("CSSStyleSheet")}} オブジェクトを返します。
- {{domxref("CSSRule.type")}} {{readonlyinline}}{{deprecated_inline}}
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
