---
title: "SVGPolygonElement: animatedPoints プロパティ"
short-title: animatedPoints
slug: Web/API/SVGPolygonElement/animatedPoints
l10n:
  sourceCommit: 9f9f880fa78383de963ae215204531c96715c0ea
---

{{APIRef("SVG")}}

**`animatedPoints`** は {{domxref("SVGPolygonElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("points")}} 属性のアニメーションする値を反映します。 {{SVGAttr("points")}} 属性がアニメーションしない場合、このプロパティは `points` プロパティと同じ値を持ちます。

## 値

{{DOMxRef("SVGPointList")}} オブジェクトです。

## 例

### `animatedPoints` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polygon id="myPolygon" points="100,10 150,50 100,90 50,50" fill="blue">
    <animate
      attributeName="points"
      values="100,10 150,50 100,90 50,50; 150,10 200,50 150,90 100,50"
      dur="2s"
      repeatCount="indefinite" />
  </polygon>
</svg>
```

```js
const polygonElement = document.getElementById("myPolygon");

// animatedPoints プロパティへのアクセス
console.dir(polygonElement.animatedPoints); // 出力: SVGPointList オブジェクト
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
