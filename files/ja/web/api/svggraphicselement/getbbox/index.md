---
title: getBBox()
slug: Web/API/SVGGraphicsElement/getBBox
---

{{APIRef}}

**`SVGGraphicsElement.getBBox()`** で、オブジェクトが収まる最小の矩形の座標を特定することができます。返される座標は、現在の SVG 空間、すなわち対象の要素に含まれる位置に関する属性すべてを適用した後の空間に従います。

メモ: `getBBox` は要素がまだレンダリングされていない場合でも、メソッドが呼び出されたときに実際の境界ボックスを返します。また、要素またはその親に適用される変換は無視します。

> **メモ:** `getBBox` は {{domxref("Element.getBoundingClientRect()", "getBoundingClientRect()")}} とは異なる値を返します。後者はビューポートからの相対値を返します。

## 構文

```
let bboxRect = object.getBBox();
```

### 返値

返値は {{domxref("SVGRect")}} オブジェクトで、境界ボックスを定義します。この値はその要素や親要素に適用された変形属性を無視したものです。

## 例

### HTML

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <g id="group_text_1">
    <text x="5" y="16" transform="scale(2, 2)">Hello World!</text>
    <text x="8" y="32" transform="translate(0 20) scale(1.25 1)">
      Hello World Again!
    </text>
  </g>
  <!-- Shows BBox in green -->
  <rect id="rect_1" stroke="#00ff00" stroke-width="3" fill="none"></rect>
  <!-- Shows BoundingClientRect in red -->
  <rect id="rect_2" stroke="#ff0000" stroke-width="3" fill="none"></rect>
</svg>
```

### JavaScript

```js
var rectBBox = document.querySelector("#rect_1");
var rectBoundingClientRect = document.querySelector("#rect_2");
var groupElement = document.querySelector("#group_text_1");

var bboxGroup = groupElement.getBBox();
rectBBox.setAttribute("x", bboxGroup.x);
rectBBox.setAttribute("y", bboxGroup.y);
rectBBox.setAttribute("width", bboxGroup.width);
rectBBox.setAttribute("height", bboxGroup.height);

var boundingClientRectGroup = groupElement.getBoundingClientRect();
rectBoundingClientRect.setAttribute("x", boundingClientRectGroup.x);
rectBoundingClientRect.setAttribute("y", boundingClientRectGroup.y);
rectBoundingClientRect.setAttribute("width", boundingClientRectGroup.width);
rectBoundingClientRect.setAttribute("height", boundingClientRectGroup.height);
```

## 仕様書

{{Specifications}}

## 関連情報

- [getBBox in SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
