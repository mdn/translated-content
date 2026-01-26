---
title: marker-mid
slug: Web/CSS/Reference/Properties/marker-mid
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`marker-mid`** 用于指定绘制在元素路径中间顶点上的标记，也就是位于起始顶点和结束顶点之间的每个顶点。该标记必须使用 SVG 的 {{SVGElement('marker')}} 元素进行定义，并且只能通过 {{cssxref("url_value", "&lt;url&gt;")}} 类型的值进行引用。此 CSS 属性的取值会覆盖 SVG 中 `marker-mid` 属性的任何值。

每个标记的指向方向被定义为：前一个路径片段结束方向与后一个路径片段开始方向之间的中间方向。可以理解为由这两段路径方向所定义的向量的叉积。

> [!NOTE]
> `marker-mid` 属性仅对可以使用 SVG 标记的元素生效。可使用的元素列表请参见 {{SVGAttr("marker-mid")}}。

## 语法

```css
marker-mid: none;
marker-mid: url("markers.svg#arrow");

/* 全局值 */
marker-mid: inherit;
marker-mid: initial;
marker-mid: revert;
marker-mid: revert-layer;
marker-mid: unset;
```

### 值

- `none`
  - : 这表示不会在元素路径的每个中间顶点绘制标记。

- `<marker-ref>`
  - : 一个由 SVG {{SVGElement('marker')}} 元素指向的 {{cssxref("url_value", "&lt;url&gt;")}} 定义的标记，用于绘制在元素路径的每个中间顶点上。如果该 URL 引用无效，则不会在路径的中间顶点绘制任何标记。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      markerWidth="10"
      markerHeight="10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>
  <polyline
    id="test"
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20 130,10 150,10 170,20 170,100 120,100" />
</svg>
```

```css
polyline#test {
  marker-mid: url("#triangle");
}
```

{{EmbedLiveSample("示例", "200", "200")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("marker-start")}}
- {{cssxref("marker-end")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-mid")}} 属性
