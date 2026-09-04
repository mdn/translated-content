---
title: CSSKeyframeRule
slug: Web/API/CSSKeyframeRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

**`CSSKeyframeRule`** インターフェイスは、指定されたキーフレームのスタイルセットを表すオブジェクトを提供します。 {{cssxref("@keyframes")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)の 1 つのキーフレームに対応しています。

{{InheritanceDiagram}}

## インスタンスプロパティ

_祖先である {{domxref("CSSRule")}} からプロパティを継承しています。_

- {{domxref("CSSKeyframeRule.keyText")}}
  - : `'10%'` や `'75%'` のように、キーフレームのキーを表します。`from` キーワードは `'0%'` に対応付けられ、`to` キーワードは `'100%'` に対応づけられます。
- {{domxref("CSSKeyframeRule.style")}} {{ReadOnlyInline}}
  - : キーフレームに関連した CSS スタイルの {{domxref("CSSStyleDeclaration")}} を返します。

## インスタンスメソッド

_固有のメソッドはありません。祖先である {{domxref("CSSRule")}} からメソッドを継承しています。_

## 例

この CSS には、 keyframes アットルールが含まれています。これは最初の {{domxref("CSSRule")}} となり、 `document.styleSheets[0].cssRules` で返されます。
`myRules[0]` は {{domxref("CSSKeyframesRule")}} オブジェクトを返し、その中に各キーフレームのための個別の `CSSKeyFrameRule` オブジェクトが格納されます。

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
let myRules = document.styleSheets[0].cssRules;
let keyframes = myRules[0]; // CSSKeyframesRule
console.log(keyframes[0]); // 個別のキーフレームを表す CSSKeyframeRule
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@keyframes")}}
- {{domxref("CSSKeyFramesRule")}}
