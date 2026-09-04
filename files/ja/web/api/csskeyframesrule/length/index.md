---
title: "CSSKeyframesRule: length プロパティ"
short-title: length
slug: Web/API/CSSKeyframesRule/length
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{APIRef("CSSOM") }}

**`length`** は {{domxref("CSSKeyframesRule")}} インターフェイスの読み取り専用プロパティで、リスト内の {{domxref("CSSKeyframeRule")}} オブジェクトの数を返します。そのため、それぞれのキーフレームルールを `CSSKeyframeRule` オブジェクト上でインデックスによりアクセスすることができます。

## 値

非負の整数です。これは {{domxref("CSSKeyframesRule.cssRules", "cssRules")}} プロパティの `length` と同じ値になります。

## 例

この CSS には keyframes アットルールが含まれています。これは最初の {{domxref("CSSRule")}} が `document.styleSheets[0].cssRules` で返されます。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返します。 `cssRules` プロパティは 2 つのルールを含む {{domxref("CSSRuleList")}} を返します。

```css
@keyframes slide-in {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const keyframes = myRules[0]; // CSSKeyframesRule
console.log(keyframes.length); // 2
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
