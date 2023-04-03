---
title: offset
slug: Web/CSS/offset
original_slug: Web/CSS/偏移
---

{{SeeCompatTable}}{{CSSRef}}

这个 **`offset`** 是 CSS 属性的快速属性动画元素沿着定义的路径。

> **备注：** 早期版本 规格 属性叫做 `motion`.

{{cssinfo}}

## 语法

```css
/* 偏移位置 */
offset: auto
offset: 10px 30px;
offset: none;

/* 偏移路径 */
offset: ray(45deg closest-side);
offset: path(M 100 100 L 300 100 L 200 300 z);
offset: url(arc.svg);

/*  偏移路径的距离和/或旋转  */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/*  包括锚偏移  */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;
```

### 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<div id="offsetElement"></div>
```

### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

### 结果

{{EmbedLiveSample("示例", 350, 350)}}

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat}}
