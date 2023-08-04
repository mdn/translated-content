---
title: border-top
slug: Web/CSS/border-top
---

{{CSSRef}}

CSS 属性 **border-top**是属性 {{Cssxref("border-top-color")}}, {{Cssxref("border-top-style")}}, 和{{Cssxref("border-top-width")}} 的三者的缩写。这些属性都是在描述一个元素的上方的边框[`border`](/zh-CN/docs/Web/CSS/border)。

{{EmbedInteractiveExample("pages/css/border-top.html")}}

与所有缩写属性（shorthand properties）一样，**border-top**始终设置它可以设置的所有属性的值，即使未指定它们也是如此。它将未指定的那些设置为其默认值。这意味着

```css
border-top-style: dotted;
border-top: thick green;
```

和下面的代码效果相同：

```css
border-top-style: dotted;
border-top: none thick green;
```

在`border-top`前指定的{{cssxref("border-top-style")}}将会失效。因为{{cssxref("border-top-style")}} 默认值为`none`,故没有边界即没有指定`border-style`

## Syntax

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;
```

这三种属性值的缩写需要按照顺序定义数值，也可以省略其中的一个或者两个。

### Values

- `<br-width>`
  - : 请参阅 {{Cssxref("border-top-width")}}.
- `<br-style>`
  - : 请参阅 {{Cssxref("border-top-style")}}.
- `{{cssxref("&lt;color&gt;")}}`
  - : 请参阅 {{Cssxref("border-top-color")}}.

### 形式语法

{{csssyntax}}

## 示例

```html
<div>This box has a border on the top side.</div>
```

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

{{ EmbedLiveSample('示例') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
