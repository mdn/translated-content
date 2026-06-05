---
title: "SVGPolylineElement: animatedPoints プロパティ"
short-title: animatedPoints
slug: Web/API/SVGPolylineElement/animatedPoints
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`animatedPoints`** は {{domxref("SVGPolylineElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("points")}} 属性のアニメーションする値を反映します。 {{SVGAttr("points")}} 属性がアニメーションしない場合、このプロパティは `points` プロパティと同じ値を持ちます。

## 値

{{DOMxRef("SVGPointList")}} オブジェクトです。

## 例

### `animatedPoints` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polyline
    id="myPolyline"
    points="100,10 150,50 100,90 50,50"
    fill="none"
    stroke="blue"
    stroke-width="4">
    <animate
      attributeName="points"
      values="100,10 150,50 100,90 50,50; 150,10 200,50 150,90 100,50"
      dur="2s"
      repeatCount="indefinite" />
  </polyline>
</svg>
```

```js
const polylineElement = document.getElementById("myPolyline");

// animatedPoints プロパティへのアクセス
console.dir(polylineElement.animatedPoints); // 出力: SVGPointList オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
