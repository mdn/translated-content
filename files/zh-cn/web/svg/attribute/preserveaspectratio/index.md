---
title: preserveAspectRatio
slug: Web/SVG/Attribute/preserveAspectRatio
---

{{SVGRef}}

有时候，通常我们使用 {{ SVGAttr("viewBox") }} 属性时，希望图形拉伸占据整个视口。在其他情况下，为了保持图形的长宽比，必须使用统一的缩放比例。

`preserveAspectRatio` 属性表示是否强制进行统一缩放。

对于支持该属性的所有元素（如上所示），除了 {{ SVGElement("image") }} 元素之外，preserveAspectRatio 只适用于在同一元素上为 {{ SVGAttr("viewBox") }} 提供的值。对于这些元素，如果没有提供属性 {{ SVGAttr("viewBox") }}，则忽略了 preserveAspectRatio。

对于 {{ SVGElement("image") }} 元素，preserveAspectRatio 指示引用的图像应该如何与参考矩形进行匹配，以及是否应该相对于当前用户坐标系保留参考图像的长宽比

## 上下文用法

| Categories | None                      |
| ---------- | ------------------------- |
| Value      | \<align> [\<meetOrSlice>] |
| Animatable | Yes                       |

- \<align>

  - : `<align>` 属性值表示是否强制统一缩放，当 SVG 的 viewbox 属性与视图属性宽高比不一致时使用。`<align>` 属性的值一定是下列的值之一：

    - **none** 不会进行强制统一缩放，如果需要，会缩放指定元素的图形内容，使元素的边界完全匹配视图矩形。（注意：如果 `<align>` 的值是 `none` ，则 `<meetOrSlice>` 属性的值将会被忽略。）
    - **xMinYMin** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。
    - **xMidYMin** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。
    - **xMaxYMin** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值 + 元素的宽度与视图的 X 的最大值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值与视图的 Y 的最小值对齐。
    - **xMinYMid** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。
    - **xMidYMid** (默认值) - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。
    - **xMaxYMid** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值 + 元素的宽度与视图的 X 的最大值对齐。将 SVG 元素的 viewbox 属性的 Y 的中点值与视图的 Y 的中点值对齐。
    - **xMinYMax** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值与视图的 X 的最小值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值 + 元素的高度与视图的 Y 的最大值对齐。
    - **xMidYMax** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的中点值与视图的 X 的中点值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值 + 元素的高度与视图的 Y 的最大值对齐。
    - **xMaxYMax** - 强制统一缩放。将 SVG 元素的 viewbox 属性的 X 的最小值 + 元素的宽度与视图的 X 的最大值对齐。将 SVG 元素的 viewbox 属性的 Y 的最小值 + 元素的高度与视图的 Y 的最大值对齐。

- \<meetOrSlice>

  - : `<meetOrSlice>` 是可选的，如果提供的话，与 `<align>` 间隔一个或多个的空格，参数所选值必须是以下值之一：

    - **meet** (默认值) - 图形将缩放到：

      - 宽高比将会被保留
      - 整个 SVG 的 viewbox 在视图范围内是可见的
      - 尽可能的放大 SVG 的 viewbox，同时仍然满足其他的条件。

      在这种情况下，如果图形的宽高比和视图窗口不匹配，则某些视图将会超出 viewbox 范围（即 SVG 的 viewbox 视图将会比可视窗口小）。

    - **slice** - 图形将缩放到：

      - 宽高比将会被保留
      - 整个视图窗口将覆盖 viewbox
      - SVG 的 viewbox 属性将会被尽可能的缩小，但是仍然符合其他标准。

      在这种情况下，如果 SVG 的 viewbox 宽高比与可视区域不匹配，则 viewbox 的某些区域将会延伸到视图窗口外部（即 SVG 的 viewbox 将会比可视窗口大）。

## 实例

## 元素

以下元素可使用 `preserveAspectRatio` 属性

- {{ SVGElement("svg") }}
- {{ SVGElement("symbol") }}
- {{ SVGElement("image") }}
- {{ SVGElement("feImage") }}
- {{ SVGElement("marker") }}
- {{ SVGElement("pattern") }}
- {{ SVGElement("view") }}

## 规范

{{Specifications}}
