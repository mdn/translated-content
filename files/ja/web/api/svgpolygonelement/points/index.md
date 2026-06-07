---
title: "SVGPolygonElement: points プロパティ"
short-title: points
slug: Web/API/SVGPolygonElement/points
l10n:
  sourceCommit: 9f9f880fa78383de963ae215204531c96715c0ea
---

{{APIRef("SVG")}}

**`points`** は {{domxref("SVGPolygonElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("points")}} 属性のベース値（つまり静的な値）を反映しています。 {{DOMxRef("SVGPointList")}} オブジェクトを介して行われた変更は {{SVGAttr("points")}} 属性に反映され、その逆も同様です。

## 値

{{DOMxRef("SVGPointList")}} オブジェクトです。

## 例

### `points` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polygon id="myPolygon" points="100,10 150,50 100,90 50,50" fill="blue" />
</svg>
```

```js
const polygonElement = document.getElementById("myPolygon");

// points プロパティへのアクセス
console.dir(polygonElement.points); // 出力: SVGPointList オブジェクトで、 (100,10), (150,50), (100,90), (50,50) の点を持つ
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
