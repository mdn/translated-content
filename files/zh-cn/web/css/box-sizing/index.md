---
title: box-sizing
slug: Web/CSS/box-sizing
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 中的 **`box-sizing`** 属性定义了 {{glossary("user agent")}} 应该如何计算一个元素的总宽度和总高度。

{{EmbedInteractiveExample("pages/css/box-sizing.html")}}

在 [CSS 盒子模型](/zh-CN/docs/CSS/Box_model)的默认定义里，你对一个元素所设置的 {{Cssxref("width")}} 与 {{Cssxref("height")}} 只会应用到这个元素的内容区。如果这个元素有任何的 {{Cssxref("border")}} 或 {{Cssxref("padding")}} ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

box-sizing 属性可以被用来调整这些表现：

- `content-box` 是默认值。如果你设置一个元素的宽为 100px，那么这个元素的内容区会有 100px 宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- `border-box` 告诉浏览器：你想要设置的边框和内边距的值是包含在 width 内的。也就是说，如果你将一个元素的 width 设为 100px，那么这 100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去 (border + padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

**译者注：** `border-box`不包含`margin`

> **备注：** 对于新的 web 站点，你可能希望首先将 box-sizing 设置为 border-box，如下所示：
>
> ```css
> * {
>   box-sizing: border-box;
> }
> ```
>
> 这使得处理元素大小的工作变得容易得多，并且通常消除了在布局内容时可能遇到的许多陷阱。然而，在某些情况下，你应谨慎使用这个属性。例如：你正在编写一个将由其他人使用的共享组件库，如果他们网站的其余部分没有设置此值，他们可能会发现很难使用你的组件库。

## 语法

`box-sizing` 属性被指定为下面列表中的关键字。

### 属性值

- `content-box`

  - : 默认值，标准盒子模型。{{Cssxref("width")}} 与 {{Cssxref("height")}} 只包括内容的宽和高，不包括边框（border），内边距（padding），外边距（margin）。注意：内边距、边框和外边距都在这个盒子的外部。比如说，`.box {width: 350px; border: 10px solid black;}` 在浏览器中的渲染的实际宽度将是 370px。

    尺寸计算公式：

    - `width` = 内容的宽度
    - `height` = 内容的高度

    宽度和高度的计算值都不包含内容的边框（border）和内边距（padding）。

- `border-box`

  - : {{Cssxref("width")}} 和 {{Cssxref("height")}} 属性包括内容，内边距和边框，但不包括外边距。这是当文档处于 Quirks 模式 时 Internet Explorer 使用的[盒模型](/zh-CN/docs/CSS/Box_model)。注意，填充和边框将在盒子内 , 例如， `.box {width: 350px; border: 10px solid black;}` 导致在浏览器中呈现的宽度为 350px 的盒子。内容框不能为负，并且被分配到 0，使得不可能使用 border-box 使元素消失。

    尺寸计算公式：

    - `width` = border + padding + 内容的宽度
    - `height` = border + padding + 内容的高度

### 形式语法

{{csssyntax}}

## 示例

本例显示了不同的 `box-sizing` 值如何改变两个原本相同的元素的渲染尺寸。

### HTML

```html
<div class="content-box">Content box</div>
<br />
<div class="border-box">Border box</div>
```

### CSS

```css
div {
  width: 160px;
  height: 80px;
  padding: 20px;
  border: 8px solid red;
  background: yellow;
}

.content-box {
  box-sizing: content-box;
  /* Total width: 160px + (2 * 20px) + (2 * 8px) = 216px
     Total height: 80px + (2 * 20px) + (2 * 8px) = 136px
     Content box width: 160px
     Content box height: 80px */
}

.border-box {
  box-sizing: border-box;
  /* Total width: 160px
     Total height: 80px
     Content box width: 160px - (2 * 20px) - (2 * 8px) = 104px
     Content box height: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### 结果

{{EmbedLiveSample('示例', 'auto', 300)}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 框盒模型](/zh-CN/docs/CSS/box_model)
