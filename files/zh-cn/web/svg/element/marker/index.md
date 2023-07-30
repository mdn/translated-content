---
title: <marker>
slug: Web/SVG/Element/marker
---

{{SVGRef}}

**`<marker>`** 元素定义了在给定 {{SVGElement("path")}}、{{SVGElement("line")}}、{{SVGElement("polyline")}} 或 {{SVGElement("polygon")}} 元素上绘制箭头或者多边标记所使用的图形。

可以使用 {{SVGAttr("marker-start")}}、{{SVGAttr("marker-mid")}} 和 {{SVGAttr("marker-end")}} 属性将标记附着到形状上。

## 示例

### 绘制箭头

以下示例展示如何在直线或者曲线路径上绘制箭头。对于曲线路径，每个点都用 {{SVGAttr("marker-mid")}} 标记绘制一个箭头。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 用作箭头的 marker -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>

  <!-- 带标记的线 -->
  <line
    x1="10"
    y1="10"
    x2="90"
    y2="90"
    stroke="black"
    marker-end="url(#arrow)" />

  <!-- 带标记的曲线-->
  <path
    d="M 110 10
       C 120 20, 130 20, 140 10
       C 150 0, 160 0, 170 10
       C 180 20, 190 20, 200 10"
    stroke="black"
    fill="none"
    marker-start="url(#arrow)"
    marker-mid="url(#arrow)"
    marker-end="url(#arrow)" />
</svg>
```

{{EmbedLiveSample('绘制箭头', 200, 200)}}

### 绘制多边标记

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- 箭头 marker 定义 -->
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- 点 marker 定义 -->
    <marker
      id="dot"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      markerWidth="5"
      markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- 在两个方向上都带有箭头的坐标轴 -->
  <polyline
    points="10,10 10,90 90,90"
    fill="none"
    stroke="black"
    marker-start="url(#arrow)"
    marker-end="url(#arrow)" />

  <!-- 多边标记数据线 -->
  <polyline
    points="15,80 29,50 43,60 57,30 71,40 85,15"
    fill="none"
    stroke="grey"
    marker-start="url(#dot)"
    marker-mid="url(#dot)"
    marker-end="url(#dot)" />
</svg>
```

{{EmbedLiveSample('Drawing_polymarkers', 200, 200)}}

### 使用 context fill 和 stroke

以下示例展示了如何使用 `context-fill` 和 `context-stroke` 值可以让一个 marker 使用与其附加到的形状相同的填充和描边。

```html
<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
  <marker
    id="circle"
    markerWidth="6"
    markerHeight="6"
    refX="3"
    refY="3"
    markerUnits="strokeWidth">
    <circle cx="3" cy="3" r="2" stroke="context-stroke" fill="context-fill" />
  </marker>

  <style>
    path {
      marker: url(#circle);
    }
  </style>

  <path d="M 10,10 30,10 h 10" stroke="black" />
  <path d="M 10,20 30,20 h 10" stroke="blue" fill="red" />
  <path d="M 10,30 30,30 h 10" stroke="red" fill="none" />
  <path d="M 10,40 30,40 h 10" stroke="gray" fill="blue" stroke-width="1.5" />
</svg>
```

```css hidden
html,
body,
svg {
  height: 100%;
}
```

{{EmbedLiveSample('使用 context_fill_and_stroke', 200, 200)}}

## 属性

- {{SVGAttr("markerHeight")}}
  - : 该属性定义了 marker 视口的高度。_值的类型_：**[\<length>](/zh-CN/docs/Web/SVG/Content_type#长度)**；_默认值_：`3`；_动画性_：**有**
- {{SVGAttr("markerUnits")}}
  - : 该属性为 `markerWidth`、`markerHeight` 和 `<marker>` 的内容定义了坐标系。_值的类型_：`userSpaceOnUse`|`strokeWidth` ；_默认值_：`strokeWidth`；_动画性_：**有**
- {{SVGAttr("markerWidth")}}
  - : 该属性定义了 marker 视图的宽度。_值的类型_：**[\<length>](/zh-CN/docs/Web/SVG/Content_type#长度)** ；_默认值_：`3`；_动画性_：**有**
- {{SVGAttr("orient")}}
  - : 该属性定义了 marker 相对于它所附着到形状的方向。_值的类型_：`auto`|`auto-start-reverse`|**[\<angle>](/zh-CN/docs/Web/SVG/Content_type#角度)** ；_默认值_：`0`；_动画性_：**有**
- {{SVGAttr("preserveAspectRatio")}}
  - : 该属性定义了 svg 片段在嵌入具有不同宽高比例的容器中应该如何变形。_值的类型_：(`none`| `xMinYMin`| `xMidYMin`| `xMaxYMin`| `xMinYMid`| `xMidYMid`| `xMaxYMid`| `xMinYMax`| `xMidYMax`| `xMaxYMax`) (`meet`|`slice`)? ；_默认值_：`xMidYMid meet`；_动画性_：**有**
- {{SVGAttr("refX")}}
  - : 该属性定义了标记参考点的 x 的坐标。
    _值的类型_：`left`|`center`|`right`|**[\<coordinate>](/zh-CN/docs/Web/SVG/Content_type#坐标)** ；_默认值_：`0`；_动画性_：**有**
- {{SVGAttr("refY")}}
  - : 该属性定义了标记参考点的 y 的坐标。
    _值的类型_：`top`|`center`|`bottom`|**[\<coordinate>](/zh-CN/docs/Web/SVG/Content_type#坐标)** ；_默认值_：`0`；_动画性_：**有**
- {{SVGAttr("viewBox")}}
  - : 该属性定义了当前 SVG 片段的 SVG 视口边界。
    _值的类型_：**[\<list-of-numbers>](/zh-CN/docs/Web/SVG/Content_type#t值数列)** ；_默认值_：none；_动画性_：**有**

### 全局属性

- [核心属性](/zh-CN/docs/Web/SVG/Attribute/Core)
  - : 最重要的：{{SVGAttr('id')}}、{{SVGAttr('tabindex')}}
- [样式属性](/zh-CN/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}、{{SVGAttr('style')}}
- [条件处理属性](/zh-CN/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 最重要的：{{SVGAttr('requiredExtensions')}}、{{SVGAttr('systemLanguage')}}
- [表现属性](/zh-CN/docs/Web/SVG/Attribute/Presentation)
  - : 最重要的：{{SVGAttr('clip-path')}}、{{SVGAttr('clip-rule')}}、{{SVGAttr('color')}}、{{SVGAttr('color-interpolation')}}、{{SVGAttr('color-rendering')}}、{{SVGAttr('cursor')}}、{{SVGAttr('display')}}、{{SVGAttr('fill')}}、{{SVGAttr('fill-opacity')}}、{{SVGAttr('fill-rule')}}、{{SVGAttr('filter')}}、{{SVGAttr('mask')}}、{{SVGAttr('opacity')}}、{{SVGAttr('pointer-events')}}、{{SVGAttr('shape-rendering')}}、{{SVGAttr('stroke')}}、{{SVGAttr('stroke-dasharray')}}、{{SVGAttr('stroke-dashoffset')}}、{{SVGAttr('stroke-linecap')}}、{{SVGAttr('stroke-linejoin')}}、{{SVGAttr('stroke-miterlimit')}}、{{SVGAttr('stroke-opacity')}}、{{SVGAttr('stroke-width')}}、{{SVGAttr("transform")}}、{{SVGAttr('vector-effect')}}、{{SVGAttr('visibility')}}
- ARIA 属性
  - : `aria-activedescendant`、`aria-atomic`、`aria-autocomplete`、`aria-busy`、`aria-checked`、`aria-colcount`、`aria-colindex`、`aria-colspan`、`aria-controls`、`aria-current`、`aria-describedby`、`aria-details`、`aria-disabled`、`aria-dropeffect`、`aria-errormessage`、`aria-expanded`、`aria-flowto`、`aria-grabbed`、`aria-haspopup`、`aria-hidden`、`aria-invalid`、`aria-keyshortcuts`、`aria-label`、`aria-labelledby`、`aria-level`、`aria-live`、`aria-modal`、`aria-multiline`、`aria-multiselectable`、`aria-orientation`、`aria-owns`、`aria-placeholder`、`aria-posinset`、`aria-pressed`、`aria-readonly`、`aria-relevant`、`aria-required`、`aria-roledescription`、`aria-rowcount`、`aria-rowindex`、`aria-rowspan`、`aria-selected`、`aria-setsize`、`aria-sort`、`aria-valuemax`、`aria-valuemin`、`aria-valuenow`、`aria-valuetext`、`role`

## 使用说明

{{svginfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与 marker 相关的属性：{{SVGAttr("marker-start")}}、{{SVGAttr("marker-mid")}} 和 {{SVGAttr("marker-end")}}
