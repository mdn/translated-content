---
title: marker-end
slug: Web/CSS/Reference/Properties/marker-end
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`marker-end`** 用于指定绘制在元素路径最后一个顶点（即结束顶点）上的标记。该标记必须通过 SVG {{SVGElement('marker')}} 元素定义，并且只能使用 {{cssxref("url_value", "&lt;url&gt;")}} 值来引用。CSS 属性的取值会覆盖 SVG 中 `marker-end` 属性的任何值。

对于许多支持标记的形状来说，第一个和最后一个顶点是同一个点，例如 {{SVGElement('rect')}} 的左上角。在这种形状中，如果同时定义了起始标记和结束标记，那么在该点会绘制两个标记，尽管它们的朝向可能并不相同。

> [!NOTE]
> `marker-end` 属性仅对能够使用 SVG 标记的元素生效。相关元素列表请参阅 {{SVGAttr("marker-end")}}。

## 语法

```css
marker-end: none;
marker-end: url("markers.svg#arrow");

/* 全局值 */
marker-end: inherit;
marker-end: initial;
marker-end: revert;
marker-end: revert-layer;
marker-end: unset;
```

### 值

- `none`
  - : 表示不会在元素路径的最后一个顶点绘制任何标记。

- `<marker-ref>`
  - : {{cssxref("url_value", "&lt;url&gt;")}}，它引用由 SVG {{SVGElement('marker')}} 元素定义的标记，用于绘制在元素路径的最后一个顶点。如果 URL 引用无效，则不会在路径的最后一个顶点绘制任何标记。

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
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
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
    points="20,100 40,60 70,80 100,20" />
</svg>
```

```css
polyline#test {
  marker-end: url("#triangle");
}
```

{{EmbedLiveSample("示例", "200", "200")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("marker-start")}}
- {{cssxref("marker-mid")}}
- {{cssxref("marker")}}
- SVG {{SVGAttr("marker-end")}} 属性
