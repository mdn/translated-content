---
title: transform
slug: Web/CSS/transform
---

{{CSSRef}}

CSS **`transform`** 属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改 CSS 视觉格式化模型的坐标空间来实现的。{{EmbedInteractiveExample("pages/css/transform.html")}}

> **警告：** 只能转换由盒模型定位的元素。根据经验，如果元素具有`display: block`，则由盒模型定位元素。

## 语法

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: translate(12px, 50%);
transform: translateX(2em);
transform: translateY(3in);
transform: scale(2, 0.5);
transform: scaleX(2);
transform: scaleY(0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
transform: matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
transform: translate3d(12px, 50%, 3em);
transform: translateZ(2px);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleZ(0.3);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: perspective(17px);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);

/* Global values */
transform: inherit;
transform: initial;
transform: unset;
```

`transform`属性可以指定为关键字值 [`none`](/zh-CN/docs/Web/CSS/transform#none) 或一个或多个 [`<transform-function>`](/zh-CN/docs/Web/CSS/transform#%3Ctransform-function%3E) 值。

### 值

- {{cssxref("&lt;transform-function&gt;")}}
  - : 要应用的一个或多个 CSS 变换函数。变换函数按从左到右的顺序相乘，这意味着复合变换按从右到左的顺序有效地应用。
- `none`
  - : 不应用任何变换。

### 语法格式

{{csssyntax}}

## 示例

### HTML

```html
<div>Transformed element</div>
```

### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

### 结果

{{EmbedLiveSample("示例", "400", "160")}}

有关更多示例，请参阅[使用 CSS 变换](/zh-CN/docs/Web/CSS/CSS_transitions)和{{cssxref("&lt;transform-function&gt;")}}。

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using CSS transforms](/zh-CN/docs/CSS/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} data type
- A cross-browser 2D [transform plugin for jQuery](https://louisremi.github.io/jquery.transform.js/)
