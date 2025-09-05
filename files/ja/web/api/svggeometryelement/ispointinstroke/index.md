---
title: "SVGGeometryElement: isPointInStroke() メソッド"
short-title: isPointInStroke()
slug: Web/API/SVGGeometryElement/isPointInStroke
l10n:
  sourceCommit: 1e801c9388a8e7ae368f6c3759aabf23eabbb1d7
---

{{APIRef("SVG")}}

**`isPointInStroke()`** は {{domxref("SVGGeometryElement")}} インターフェイスのメソッドで、{{domxref(「SVGGeometryElement」)}} インターフェイスの **`isPointInStroke()`** メソッドは、指定された点が要素のストローク図形内にあるかどうかを判断します。 `point` 引数は、要素のローカル座標系における点として解釈されます。

## 構文

```js-nolint
isPointInStroke(point)
```

### 引数

- `point`
  - : 要素のローカル座標系で解釈される点を表すオブジェクト。これは、[`DOMPoint.fromPoint()`](/ja/docs/Web/API/DOMPoint/fromPoint_static) と同じアルゴリズムを使用して、 {{domxref("DOMPoint")}} オブジェクトに変換されます。

### 返値

指定された点がストローク領域内にあるかどうかを示す論理値。

## 例

### SVG

```html
<svg
  viewBox="0 0 100 100"
  width="150"
  height="150"
  xmlns="http://www.w3.org/2000/svg">
  <circle
    id="circle"
    cx="50"
    cy="50"
    r="45"
    fill="rgb(0 0 0 / 25%)"
    stroke="rgb(0 0 0 / 50%)"
    stroke-width="10" />
</svg>
```

### JavaScript

```js
const svg = document.getElementsByTagName("svg")[0];
const circle = document.getElementById("circle");
const points = [
  [10, 10],
  [40, 30],
  [70, 40],
  [15, 75],
  [83, 83],
];

for (const point of points) {
  let isPointInStroke;

  try {
    const pointObj = { x: point[0], y: point[1] };
    isPointInStroke = circle.isPointInStroke(pointObj);
  } catch {
    // 引数として DOMPoint に対応していないブラウザーの代替処理
    const pointObj = svg.createSVGPoint();
    pointObj.x = point[0];
    pointObj.y = point[1];
    isPointInStroke = circle.isPointInStroke(pointObj);
  }

  console.log(`Point at ${point[0]},${point[1]}: ${isPointInStroke}`);

  const pointEl = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  pointEl.cx.baseVal.value = point[0];
  pointEl.cy.baseVal.value = point[1];
  pointEl.r.baseVal.value = 5;
  const pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
  if (isPointInStroke) {
    pointEl.setAttribute("fill", "rgb(0 170 0 / 50%)");
    pointEl.setAttribute("stroke", "rgb(0 170 0)");
    pathEl.setAttribute("stroke", "rgb(0 170 0)");
    pathEl.setAttribute("d", `M ${point[0] - 5} ${point[1]} h 10 m -5 -5 v 10`);
  } else {
    pointEl.setAttribute("fill", "rgb(170 0 0 / 50%)");
    pointEl.setAttribute("stroke", "rgb(170 0 0)");
    pathEl.setAttribute("stroke", "rgb(170 0 0)");
    pathEl.setAttribute("d", `M ${point[0] - 5} ${point[1]} h 10`);
  }
  svg.append(pointEl, pathEl);
}
```

### 結果

{{EmbedLiveSample("Examples", "150", "150")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
