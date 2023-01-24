---
title: CSSKeyframeRule.keyText
slug: Web/API/CSSKeyframeRule/keyText
l10n:
  sourceCommit: bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{APIRef("CSSOM") }}

**`keyText`** は {{domxref("CSSKeyframeRule")}} インターフェイスのプロパティで、キーフレーム セレクターをパーセント値のカンマ区切りリストで表します。from と to キーワードは、それぞれ 0% と 100% に割り当てられます。

## 値

文字列です。

### 例外

- {{jsxref("SyntaxError")}}
  - : `keyText` が無効なキーフレームセレクターに更新された場合に発生します。

## 例

この CSS には keyframes アットルールが記載されています。これは最初の {{domxref("CSSRule")}} であり、 `document.styleSheets[0].cssRules` で返されます。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返し、その中に各キーフレームに対応する個々の {{domxref("CSSKeyFrame")}} オブジェクトが格納されます。

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
let keyframes = myRules[0]; // a CSSKeyframesRule
console.log(keyframes[0].keyText); // a string containing 0%
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
