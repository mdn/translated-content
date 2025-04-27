---
title: "SVGAnimatedRect: baseVal プロパティ"
short-title: baseVal
slug: Web/API/SVGAnimatedRect/baseVal
l10n:
  sourceCommit: c6f8bee9aeb156e7d2a415007f7353487b0ccef4
---

{{APIRef("SVG")}}

**`baseVal`** は {{domxref("SVGAnimatedRect")}} インターフェイスの読み取り専用プロパティで、 SVG 要素の `viewBox` 属性の現在のアニメーション前の値を表します。

このプロパティは、SVG 要素の {{SVGAttr("viewBox")}} 属性値を読み取り専用の {{domxref("DOMRect")}} オブジェクトとして反映します。 `viewBox` 属性によって定義された静的な長方形にアクセスすることができ、`x`、`y`、`width`、`height` の値が記載されています。

## 値

{{domxref("DOMRect")}} オブジェクトで、 `viewBox` 属性の現在のアニメーション前の値を表します。

## 例

```html
<svg viewBox="0 0 200 100" id="mySvg">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("mySvg");
const animatedRect = svgElement.viewBox.baseVal;

// アニメーション前の基底値にアクセス
console.log(animatedRect.x); // 0
console.log(animatedRect.y); // 0
console.log(animatedRect.width); // 200
console.log(animatedRect.height); // 100
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("viewBox")}}
- {{domxref("DOMRect")}}
