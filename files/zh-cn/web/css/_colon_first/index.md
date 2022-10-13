---
title: ':first'
slug: Web/CSS/:first
---

{{CSSRef}}

## 简介

`:first` {{cssxref("@page")}} [CSS](/zh-CN/docs/Web/CSS) [伪类选择器](/zh-CN/docs/Web/CSS/Pseudo-classes) 描述的是：打印文档的时候，第一页的样式。

> **备注：** 你不能改变所有的 css 属性。你只能改变 margins、orphans、widows、文档什么时候换页。别的所有 css 样式都会被忽略。

## 语法

{{csssyntax}}

## 示例

### HTML

```html
<p>First Page.</p>
<p>Second Page.</p>
<button>Print!</button>
```

### CSS

```css
@page :first {
  margin-left: 50%;
  margin-top: 50%;
}

p {
  page-break-after: always;
}
```

### JavaScript

```js
document.querySelector("button").onclick = function(){ window.print() }
```

### 结果

点击下面的 print 按钮来打印这个例子。第一页的文字会在中间显示，其他页的内容在默认位置显示。

{{ EmbedLiveSample('Example', '80%', '150px') }}

> **备注：** 在定义 margin 的时候，你可以只用绝对长度单位，点击 [length](/zh-CN/docs/Web/CSS/length#绝对长度单位) 查看更多内容。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("@page")}}
- {{Cssxref(":left")}}
- {{Cssxref(":right")}}
