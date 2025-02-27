---
title: scale
slug: Web/CSS/scale
---

{{CSSRef}}

CSS 属性 **`scale`** 允许你可以分别且独立地指定 CSS 属性 {{CSSxRef("transform")}} 缩放的比例。这更好地映射到典型的 UI（用户界面）用法中，并免去了在指定变换值时必须记住变换函数的精确顺序的麻烦。

## 语法

```css
/* 关键值 */
scale: none;

/* 单个值 */
/* 设定比 1 大的数值使该元素变大 */
scale: 2;
/* 设定比 1 小的数值使该元素缩小 */
scale: 0.5;

/* 两个值 */
scale: 2 0.5;

/* 三个值 */
scale: 2 0.5 2;
```

### 取值

- 单一数值
  - : 单一的数值即指定了一个缩放系数，同时作用于 X 轴和 Y 轴让该元素进行缩放，相当于指定了单个值的 scale()(2D 缩放) 函数。
- 两个长度/百分比值
  - : 两个数值即分别指定了 2D 比例的 X 轴和 Y 轴的缩放系数，相当于指定了两个值的 scale()（2D 缩放）函数。
- 三个长度/百分比值
  - : 三个数值即分别指定了 3D 比例的 X 轴、Y 轴和 Z 轴的缩放系数。相当于一个 scale3d() 函数。
- `none`
  - : 指定不进行缩放。

### 形式语法

{{CSSSyntax}}

## 示例

### HTML

```html
<div>
  <p class="scale">Scaling</p>
</div>
```

### CSS

```css
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

div {
  width: 150px;
  margin: 0 auto;
}

p {
  padding: 10px 5px;
  border: 3px solid black;
  border-radius: 20px;
  width: 150px;
  font-size: 1.2rem;
  text-align: center;
}

.scale {
  transition: scale 1s;
}

div:hover .scale {
  scale: 2 0.7;
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

{{CSSInfo}}

## 浏览器兼容性

{{Compat}}
