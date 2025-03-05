---
title: transform-style
slug: Web/CSS/transform-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`transform-style`** 设置元素的子元素是位于 3D 空间中还是平面中。

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

如果选择平面，元素的子元素将不会有 3D 的遮挡关系。

由于这个属性不会被继承，因此必须为元素的所有非叶子子元素设置它。

## 语法

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: unset;
```

### 值

- `flat`
  - : 设置元素的子元素位于该元素的平面中。
- `preserve-3d`
  - : 指示元素的子元素应位于 3D 空间中。

### 正式语法

{{csssyntax}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS transforms](/zh-CN/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
