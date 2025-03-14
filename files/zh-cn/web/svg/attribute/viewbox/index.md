---
title: viewBox
slug: Web/SVG/Attribute/viewBox
---

{{SVGRef}}

viewBox 属性允许指定一个给定的一组图形伸展以适应特定的容器元素。

viewBox 属性的值是一个包含 4 个参数的列表 `min-x`, `min-y`, `width` and `height`，以空格或者逗号分隔开，在用户空间中指定一个矩形区域映射到给定的元素，查看属性{{ SVGAttr("preserveAspectRatio") }}。

不允许宽度和高度为负值，0 则禁用元素的呈现。

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
  vertical-align: top;
}
svg:not(:root) {
  display: inline-block;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!--
  with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
  -->
  <rect x="0" y="0" width="100%" height="100%" />

  <!--
  with a large viewBox the circle looks small
  as it is using user units for the r attribute:
  4 resolved against 100 as set in the viewBox
  -->
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  with relative unit such as percentage, the visual size
  of the square looks unchanged regardless of the viewBox
  -->
  <rect x="0" y="0" width="100%" height="100%" />

  <!--
  with a small viewBox the circle looks large
  as it is using user units for the r attribute:
  4 resolved against 10 as set in the viewBox
  -->
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>

<svg viewBox="-5 -5 10 10" xmlns="http://www.w3.org/2000/svg">
  <!--
  The point of coordinate 0,0 is now in the center of the viewport,
  and 100% is still resolve to a width or height of 10 user units so
  the rectangle looks shifted to the bottom/right corner of the viewport
  -->
  <rect x="0" y="0" width="100%" height="100%" />

  <!--
  With the point of coordinate 0,0 in the center of the viewport the
  value 50% is resolve to 5 which means the center of the circle is
  in the bottom/right corner of the viewport.
  -->
  <circle cx="50%" cy="50%" r="4" fill="white" />
</svg>
```

{{EmbedLiveSample("示例", '100%', 200)}}

这个属性会受到 {{ SVGAttr("preserveAspectRatio") }} 的影响。

> **备注：** `width` 或者 `height` 的值，小于或等于 0 的情况下，这个元素将不会被渲染出来。

有 {{SVGElement("marker")}}, {{SVGElement("pattern")}}, {{ SVGElement("svg") }}, {{ SVGElement("symbol") }}, 和 {{ SVGElement("view") }} 等五个 svg 元素可以有这个属性。

## Usage context

| Categories | None        |
| ---------- | ----------- |
| Value      | _See above_ |
| Animatable | Yes         |

## Elements

下面的元素可以使用 viewBox 属性

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("view") }}

## 规范

{{Specifications}}

## 参见

- [SVG Getting Started: Positions](/zh-CN/docs/SVG/Tutorial/Positions)
