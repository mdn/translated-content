---
title: stroke-opacity
slug: Web/SVG/Attribute/stroke-opacity
---

{{SVGRef}}

`stroke-opacity` 属性指定了当前对象的轮廓的不透明度。它的默认值是 **1**。

作为一个外观属性，它可以直接用作 CSS 样式表内部的属性。

## 用法

| 类别   | 外观属性                    |
| ------ | --------------------------- |
| 值     | \<opacity-value> \| inherit |
| 可变性 | Yes                         |

- \<opacity-value>
  - : 在当前对象的轮廓上用该涂色操作的不透明度。任何超出 0.0 到 1.0 范围的值都会被压回这个范围（0.0 表示完全透明，1.0 表示完全不透明）。

## 示例

### SVG

```html
<svg width="120px" height="120px" viewBox="0 0 120 120">
  <rect x="10" y="10" width="100" height="100" />
</svg>
```

### CSS

```css
rect {
  fill: #b4da55;
  stroke: #000;
  stroke-width: 10px;
  stroke-opacity: 0.3;
}
```

### 结果

{{EmbedLiveSample("示例",150,150)}}

## 元素

下列元素可以使用`stroke-opacity`属性：

- [形状元素](/zh-CN/SVG/Element#Shape) »
- [文本内容元素](/zh-CN/SVG/Element#TextContent) »

## 规范

{{Specifications}}

## 参见

- {{ SVGAttr("fill-opacity") }}
- {{ SVGAttr("opacity") }}
