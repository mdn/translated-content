---
title: clip
slug: Web/SVG/Attribute/clip
---

{{SVGRef}}{{deprecated_header}}

**`clip`** 属性是定义元素可见区域的属性。

`clip` 属性的参数值与 {{ cssxref("clip","CSS clip property") }} 的参数值定义相同。指示当前用户坐标的无单位的值，可以用在 `<shape>` 的坐标值上。`auto` 值定义了一个剪切路径，其边界沿着由给定元素创建的视口的边界。

As a presentation attribute, it can be applied to any element but it has effect only on the following six elements: {{ SVGElement("svg") }}, {{ SVGElement("symbol") }}, {{ SVGElement("image") }}, {{ SVGElement("foreignObject") }}, {{ SVGElement("pattern") }}, {{ SVGElement("marker") }}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Auto clipping -->
  <svg x="0" width="10" height="10" clip="auto">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>

  <!-- Rect(top, right, bottom, left) clipping -->
  <svg x="10" width="10" height="10" clip="rect(1, 9, 8, 2)">
    <circle cx="5" cy="5" r="4" stroke="green" />
  </svg>
</svg>
```

{{EmbedLiveSample('示例', '100%', 150)}}

## 用法

**Warning:** This property is deprecated. Use {{cssxref("clip-path")}} instead.

| 可用值     | **auto** \| \<shape> \| inherit |
| ---------- | ------------------------------- |
| 默认值     | Yes                             |
| Animatable | Yes                             |

The value `auto` defines a clipping path along the bounds of the viewport created by the given element.

The value `rect()` defines a clipping rectangle following the following syntax: `rect(<top>, <right>, <bottom>, <left>)`. The `<top>` and `<bottom>` values specify offsets from the _top border edge_ of the element viewport, while `<right>` and `<left>` specify offsets from the _left border edge_ of the element viewport.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
