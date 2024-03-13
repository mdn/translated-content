---
title: "CSSKeyframesRule: appendRule() メソッド"
slug: Web/API/CSSKeyframesRule/appendRule
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSSOM") }}

**`appendRule()`** は {{domxref("CSSKeyframeRule")}} インターフェイスのメソッドで、 {{domxref("CSSKeyFrameRule")}} をルールの末尾に追加します。

## 構文

```js-nolint
appendRule(rule)
```

### 引数

- `rule`
  - : keyframe ルールの入った文字列です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

この CSS には keyframes アットルールがあります。これは `document.styleSheets[0].cssRules` で返される最初の {{domxref("CSSRule")}} になります。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返します。その `cssRules` プロパティは 1 つのルールの入った {{domxref("CSSRuleList")}} を返します。

`appendRule` でもう 1 つのルールを追加すると、 `cssRules` プロパティは 2 つのルールが入った {{domxref("CSSRuleList")}} を返します。

```css
@keyframes slidein {
  from {
    transform: translateX(0%);
  }
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // a CSSKeyframesRule
keyframes.appendRule("to {transform: translateX(100%);}");
console.log(keyframes.cssRules); // 2 つのルールが入った CSSRuleList オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
