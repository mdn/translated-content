---
title: offset
slug: Web/CSS/offset
---

{{CSSRef}}

**`offset`** CSS [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)设置了沿定义的路径为元素设置动画所需的所有属性。

> [!NOTE]
> 规范的早期版本称此属性为 `motion`。

{{EmbedInteractiveExample("pages/css/offset.html")}}

## 复合属性

此属性是以下 CSS 属性的简写：

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

## 语法

```css
/* 偏移位置 */
offset: auto;
offset: 10px 30px;
offset: none;

/* 偏移路径 */
offset: ray(45deg closest-side);
offset: path("M 100 100 L 300 100 L 200 300 z");
offset: url(arc.svg);

/* 使用距离和/或旋转偏移路径 */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* 包括偏移锚点 */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;

/* 全局值 */
offset: inherit;
offset: initial;
offset: revert;
offset: revert-layer;
offset: unset;
```

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 让元素在路径上运动

#### HTML

```html
<div id="offsetElement"></div>
```

#### CSS

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

#### 结果

{{EmbedLiveSample("让元素在路径上运动", 350, 350)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
