---
title: ':last-child'
slug: Web/CSS/:last-child
---

{{CSSRef}}

## 概述

`:last-child` CSS [伪类](/zh-CN/docs/Web/CSS/Pseudo-classes) 代表父元素的最后一个子元素。

## 语法

{{csssyntax}}

## 示例

### HTML 内容

```html
<ul>
  <li>此元素背景色不是 lime</li>
  <li>我的也不是 lime。</li>
  <li>我的才是 lime！ :)</li>
</ul>
```

### CSS 内容

```css
li:last-child {
  background-color: lime;
}
```

{{EmbedLiveSample('示例', '100%', 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref(":first-child")}}
- {{cssxref(":nth-child")}}
- {{cssxref(":last-of-type")}}
