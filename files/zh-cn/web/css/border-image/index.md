---
title: border-image
slug: Web/CSS/border-image
---

{{CSSRef}}

**`border-image`** CSS 属性允许在元素的边框上绘制图像`。这使得绘制复杂的外观组件更加简单，也不用在某些情况下使用九宫格了。使用 border-image 时，其将会替换掉`{{cssxref("border-style")}} 属性所设置的边框样式。虽然规范要求使用 `border-image 时`边框样式必须存在，但一些浏览器可能没有实现这一点。

特别注意，若 {{cssxref("border-image-source")}}（此值可用 border-image-source 或 border-image 简写设置) 的值为 none 或者图片不能显示，则将应用 border-style。

{{cssinfo}}

## 语法

```css
/* border-image: image-source image-height image-width image-repeat */
border-image: url("/images/border.png") 30 30 repeat;
border-image: url("/images/border.png") 30 30 stretch;
```

### 值

参考各属性对应的值。

### 正式语法

{{csssyntax}}

## 示例

### 位图

#### HTML 内容

```html
<div id="bitmap">The image is stretched to fill the area.</div>
```

#### CSS 内容

```css
#bitmap {
  border: 30px solid transparent;
  padding: 20px;
  border-image: url("https://mdn.mozillademos.org/files/4127/border.png") 30;
}
```

{{ EmbedLiveSample('位图') }}

### 渐变

#### HTML 内容

```html
<div id="gradient">The image is stretched to fill the area.</div>
```

#### CSS 内容

```css
#gradient {
  border: 30px solid;
  border-image: linear-gradient(red, yellow) 10;
  padding: 20px;
}
```

{{ EmbedLiveSample('渐变') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
