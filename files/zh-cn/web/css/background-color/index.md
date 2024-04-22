---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

## 概览

[CSS](/zh-CN/docs/Web/CSS)属性中的 **background-color** 会设置元素的背景色，属性的值为颜色值或关键字"transparent"二者选其一。

{{cssinfo}}

## 语法

```css
/* Keyword values */
background-color: red;

/* Hexadecimal value */
background-color: #bbff00;

/* RGB value */
background-color: rgb(255, 255, 128);

/* HSLA value */
background-color: hsla(50, 33%, 25%, 0.75);

/* Special keyword values */
background-color: currentColor;
background-color: transparent;

/* Global values */
background-color: inherit;
background-color: initial;
background-color: unset;
```

`background-color` 属性只能使用 `<color>` 值。

### 取值

- `<color>`
  - : 一个描述背景统一颜色的 CSS {{cssxref("&lt;color&gt;")}} 值。即使一个或几个的 {{cssxref("background-image")}} 被定义，如果图像是不透明的，通过透明度该颜色也能影响到渲染。在 CSS 中，`transparent` 是一种颜色。

### 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<div class="exampleone">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exampletwo">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="examplethree">Lorem ipsum dolor sit amet, consectetuer</div>
```

### CSS

```css
.exampleone {
  background-color: teal;
  color: white;
}

.exampletwo {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.examplethree {
  background-color: #777799;
  color: #ffffff;
}
```

### 结果

{{EmbedLiveSample("示例","200","150")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Multiple backgrounds](/zh-CN/CSS/Multiple_backgrounds)
