---
title: <percentage>
slug: Web/CSS/percentage
---

{{CSSRef}}

[CSS](/zh-CN/CSS) 数据类型 `<percentage>` 表述一个百分比值。许多 [CSS 属性](/zh-CN/CSS_Reference) 可以取百分比值，经常用以根据父对象来确定大小。百分比值由一个{{cssxref("&lt;number&gt;")}}具体数值后跟着%符号构成。就像其他在 css 里的单位一样，在%和数值之间是不允许有空格的。

许多长度属性使用百分比，如 {{Cssxref("width")}}, {{Cssxref("height")}}, {{Cssxref("margin")}}, {{Cssxref("padding")}}。百分比也可以在 {{Cssxref("font-size")}} 看到，其中的文字大小是其父级元素的大小直接相关。

> **备注：** 只有计算值是可以继承的。所以，即使一个百分比值用于父属性，一个真正的值，比如具体像素宽度 {{cssxref("&lt;length&gt;")}} 的值，将访问继承的属性，而不是百分比的值。

## 语法

百分比值由一个{{cssxref("&lt;number&gt;")}}具体数值后跟着`%`符号构成。在数值前可加上`+`号或者`-`号，但对所有属性来说其负值都是无效的。和所有的 CSS 度量值一样，在`%`符号和数值之间不允许有空格。

## 插值动画

使用 `<percentage>` 的值可以插值为动画。在这种情况下，它们被内插为实数或浮点数。插值的速度取决于与动画相关联的 [timing function](/zh-CN/docs/Web/CSS/single-transition-timing-function)。

## 示例

### 作为 width 与 margin-left 的值的单位

```html
<div style="background-color:#0000FF;">
  <div style="width:50%;margin-left:20%;background-color:#00FF00;">
    Width: 50%, Left margin: 20%
  </div>
  <div style="width:30%;margin-left:60%;background-color:#FF0000;">
    Width: 30%, Left margin: 60%
  </div>
</div>
```

以上 HTML 将输出：

{{EmbedLiveSample('作为 width 与 margin-left 的值的单位', '600', 140)}}

### 作为 font-size 的值的单位

```html
<div style="font-size:18px;">
  Full size text (18px)
  <span style="font-size:50%;">50%</span>
  <span style="font-size:200%;">200%</span>
</div>
```

以上 HTML 将输出：

{{EmbedLiveSample('作为 font-size 的值的单位', 'auto', 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
