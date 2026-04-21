---
title: "SVGPolylineElement: points プロパティ"
short-title: points
slug: Web/API/SVGPolylineElement/points
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

**`points`** は {{domxref("SVGPolylineElement")}} インターフェイスの読み取り専用プロパティで、この要素の {{SVGAttr("points")}} 属性のベース値（つまり静的な値）を反映しています。 {{DOMxRef("SVGPointList")}} オブジェクトを介して行われた変更は {{SVGAttr("points")}} 属性に反映され、その逆も同様です。

## 値

{{DOMxRef("SVGPointList")}} オブジェクトです。

## 例

### `points` プロパティへのアクセス

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <polyline
    id="myPolyline"
    points="100,10 150,50 100,90 50,50"
    fill="none"
    stroke="blue"
    stroke-width="4" />
</svg>
```

```js
const polylineElement = document.getElementById("myPolyline");

// points プロパティへのアクセス
console.dir(polylineElement.points); // 出力: SVGPointList オブジェクトで、 (100,10), (150,50), (100,90), (50,50)
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
