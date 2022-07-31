---
title: CSSKeyframesRule.cssRules
slug: Web/API/CSSKeyframesRule/cssRules
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS アニメーション
  - プロパティ
  - リファレンス
browser-compat: api.CSSKeyframesRule.cssRules
translation_of: Web/API/CSSKeyframesRule/cssRules
---
{{APIRef("CSSOM") }}

**`cssRules`** は {{domxref("CSSKeyframeRule")}} インターフェイスの読み取り専用プロパティで、 {{domxref("CSSRuleList")}} で keyframes {{cssxref("at-rule", "アットルール")}}のルールを返します。

## 構文

```js
var cssRules = CSSKeyframesRule.cssRules;
```

### 値

{{domxref('CSSRuleList')}} です。

## 例

この CSS には keyframes アットルールがあります。これは `document.styleSheets[0].cssRules` で返される最初の {{domxref("CSSRule")}} になります。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返します。 `cssRules` プロパティは 2 つのルールを含む {{domxref("CSSRuleList")}} を返します。

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // CSSKeyframesRule
console.log(keyframes.cssRules); // 2 つのルールを含む CSSRuleList オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
