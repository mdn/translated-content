---
title: "SVGSVGElement: viewBox プロパティ"
short-title: viewBox
slug: Web/API/SVGSVGElement/viewBox
l10n:
  sourceCommit: df67868c2a0967711ca25b38f060c63e08d353f0
---

{{APIRef("SVG")}}

**`viewBox`** は {{domxref("SVGSVGElement")}} インターフェイスの読み取り専用プロパティで、{{SVGElement("svg")}} 要素の {{SVGAttr("viewBox")}} 属性を {{domxref("SVGAnimatedRect")}} として反映します。

このプロパティは、`<svg>` 要素の `viewBox` 属性を説明します。この属性は、`<svg>` 要素の x 座標、y 座標、幅、高さを定義するために使用する。{{domxref("SVGAnimatedRect.baseVal")}} プロパティと {{domxref("SVGAnimatedRect.animVal")}} プロパティは、どちらも {{domxref("SVGRect")}} オブジェクトです。`viewBox` が定義されていません場合は `null` です。これらのオブジェクトの要素は、{{domxref("SVGSVGElement.x")}}、{{domxref("SVGSVGElement.y")}}、{{domxref("SVGSVGElement.width")}}、{{domxref("SVGSVGElement.height")}} プロパティとは異なる場合があります。これは、{{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}}、{{SVGAttr("height")}} 属性が `viewBox` 属性よりも優先されるためです。

内包されていない SVG 要素の場合、 CSS の {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, {{cssxref("height")}} の各プロパティは要素のあらゆる属性よりも優先されますので、 `viewBox` によって定義された値は要素の外見に反映されない場合があります。

## 値

{{domxref("SVGAnimatedRect")}} です。

## 例

以下の SVG 開始タグがあったとします。

```html
<svg viewBox="-12 -18 200 300" x="5" y="5" height="400" width="600"></svg>
```

`viewBox` の値を受け取っていますが、 {{domxref("SVGSVGElement.x", "x")}}, {{domxref("SVGSVGElement.y", "y")}}, {{domxref("SVGSVGElement.width", "width")}}, {{domxref("SVGSVGElement.height", "height")}} の各プロパティとは異なっています。

```js
const svg = document.querySelector("svg");
const vBox = svg.viewBox;

// SVGSVGElement viewBox プロパティ
console.dir(vBox); // SVGAnimatedRect { baseVal: SVGRect, animVal: SVGRect }
console.log(vBox.baseVal.x); // -12
console.log(vBox.baseVal.y); // -18
console.log(vBox.baseVal.width); // 200
console.log(vBox.baseVal.height); // 300

// その他の SVGSVGElement プロパティ
console.log(svg.x); // 5
console.log(svg.y); // 5
console.log(svg.width); // 400
console.log(svg.height); // 600
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SVGAnimatedRect.baseVal")}}
- {{domxref("SVGAnimatedRect.animVal")}}
- {{SVGAttr("preserveAspectRatio")}}
