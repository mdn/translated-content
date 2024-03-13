---
title: getBBox
slug: Web/API/SVGGraphicsElement/getBBox
---

**`SVGGraphicsElement.getBBox()`**允许我们确定对象适合的最小矩形的坐标。返回的坐标是相对于当前 svg 空间的，即在将所有几何属性应用于目标元素中包含的所有元素之后。

Note: `getBBox` must return the actual bounding box at the time the method was called, even in case the element has not yet been rendered. It also neglects any transformation applied on the element or its parents.

> **备注：** `getBBox` returns different values than getBoundingClientRect, as the latter returns value relative to the viewport

## Syntax

```
let bboxRect = object.getBBox();
```

### Return value

The returned value is a [SVGRect](/zh-CN/docs/Web/API/SVGRect) object, which defines the bounding box. This value is irrespective of any transformation attribute applied to it or the parent elements.

## Example

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

## Specifications

{{Specifications}}

## See also

- [getBBox in SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox)
