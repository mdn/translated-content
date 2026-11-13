---
title: "SVGAnimatedRect: animVal プロパティ"
short-title: animVal
slug: Web/API/SVGAnimatedRect/animVal
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("SVG")}}

**`animVal`** は {{domxref("SVGAnimatedRect")}} インターフェイスの読み取り専用プロパティで、 SVG 要素の `viewBox` 属性の現在のアニメーション値を、読み取り専用の {{domxref("DOMRectReadOnly")}} オブジェクトとして表します。アニメーション中の `x`、`y`、`width`、`height` の値など、長方形の動的な状態にアクセスする機能を提供します。

アニメーションが適用されていない場合、 `animVal` プロパティは SVG 要素の {{SVGAttr("viewBox")}} 属性値を反映し、 {{domxref("SVGAnimatedRect.baseVal")}} と等しくなります。

## 値

{{domxref("DOMRectReadOnly")}} オブジェクトで、 `viewBox` 属性のアニメーション中の値を表します。

## 例

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("mySvg");
const animatedRect = svgElement.viewBox.animVal;

// アニメーション中の値をログ出力（アニメーションが適用されていると想定）
console.log(animatedRect.x);
console.log(animatedRect.y);
console.log(animatedRect.width);
console.log(animatedRect.height);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("viewBox")}}
- {{domxref("DOMRectReadOnly")}}
