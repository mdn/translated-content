---
title: CSSKeyframesRule.name
slug: Web/API/CSSKeyframesRule/name
tags:
  - API
  - CSSOM
  - CSSKeyframesRule
  - CSS アニメーション
  - プロパティ
  - リファレンス
browser-compat: api.CSSKeyframesRule.name
translation_of: Web/API/CSSKeyframesRule/name
---
{{APIRef("CSSOM") }}

**`name`** は {{domxref("CSSKeyframeRule")}} インターフェイスのプロパティで、 {{cssxref("animation-name")}} プロパティで使用されるアニメーションの名前を取得したり設定したりします。

## 構文

```js
var name = CSSKeyframesRule.name;
CSSKeyframesRule.name = name;
```

### 値

{{domxref('CSSOMString')}} です。

## 例

この CSS には keyframes アットルールがあります。これは `document.styleSheets[0].cssRules` で返される最初の {{domxref("CSSRule")}} になります。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返し、 `name` は "slidein" に設定されます。

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
console.log(keyframes.name); // "slidein"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
