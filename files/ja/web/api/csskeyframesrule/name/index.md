---
title: "CSSKeyframesRule: name プロパティ"
short-title: name
slug: Web/API/CSSKeyframesRule/name
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

**`name`** は {{domxref("CSSKeyframeRule")}} インターフェイスのプロパティで、 {{cssxref("animation-name")}} プロパティで使用されるアニメーションの名前を取得したり設定したりします。

### 値

文字列です。

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
