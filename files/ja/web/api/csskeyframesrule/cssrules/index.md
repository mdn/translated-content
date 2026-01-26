---
title: "CSSKeyframesRule: cssRules プロパティ"
short-title: cssRules
slug: Web/API/CSSKeyframesRule/cssRules
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

**`cssRules`** は {{domxref("CSSKeyframeRule")}} インターフェイスの読み取り専用プロパティで、 {{domxref("CSSRuleList")}} で keyframes [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)のルールを返します。

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
