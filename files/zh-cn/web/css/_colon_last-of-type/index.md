---
title: ":last-of-type"
slug: Web/CSS/:last-of-type
---

{{CSSRef}}

## 概述

`:last-of-type` [CSS 伪类](/zh-CN/CSS/Pseudo-classes) 表示了在（它父元素的）子元素列表中，最后一个给定类型的元素。当代码类似 Parent tagName:last-of-type 的作用区域包含父元素的所有子元素中的最后一个选定元素，也包括子元素的最后一个子元素并以此类推。

## 语法

```plain
element:last-of-type { style properties }
```

## 示例

```css
p em:last-of-type {
  color: lime;
}
```

```html
<p>
  <em>我没有颜色 :(</em><br />
  <strong>我没有颜色 :(</strong><br />
  <em>我有颜色 :D</em><br />
  <strong>我也没有颜色 :(</strong><br />
</p>

<p>
  <em>我没有颜色 :(</em><br />
  <span><em>我有颜色！</em></span
  ><br />
  <strong>我没有颜色 :(</strong><br />
  <em>我有颜色 :D</em><br />
  <span>
    <em>我在子元素里，但没有颜色！</em><br />
    <span style="text-decoration:line-through;"> 我没有颜色 </span><br />
    <em>我却有颜色！</em><br /> </span
  ><br />
  <strong>我也没有颜色 :(</strong>
</p>
```

结果如下：

{{EmbedLiveSample('示例','100%','330')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ Cssxref(":nth-last-of-type") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":nth-of-type") }}
