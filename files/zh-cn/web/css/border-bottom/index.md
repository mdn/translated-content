---
title: border-bottom
slug: Web/CSS/border-bottom
---

{{CSSRef}}

border-bottom 简写属性把下边框的所有属性：{{Cssxref("border-bottom-color")}}，{{Cssxref("border-bottom-style")}} 与 {{Cssxref("border-bottom-width")}} 设置到了一个声明中。这些属性描述了元素的下边框样式。

{{EmbedInteractiveExample("pages/css/border-bottom.html")}}

与所有的简记属性相同， `border-bottom` 定义了它所有可以定义的属性，即使他们并没有被显式地定义。它把所有未被显式定义的参数都设置为了默认值，这意味着这些值将被定义为：

```css
border-bottom-style: dotted;
border-bottom: thick green;
```

它和以下的代码是等价的：

```css
border-bottom-style: dotted;
border-bottom: none thick green;
```

顺便一提，在 `border-bottom` 之前定义的 {{Cssxref("border-bottom-style")}} 的值因此被忽略了。由于 {{Cssxref("border-bottom-style")}} 并没有默认值，未被定义的 `border-style` 参数的值将被设置为 `none`，也就是无底边框。

## 语法

```css
border-bottom: 1px;
border-bottom: 2px dotted;
border-bottom: medium dashed blue;
```

### 值

- `<br-width>`
  - : 见 {{Cssxref("border-bottom-width")}}。
- `<br-style>`
  - : 见 {{Cssxref("border-bottom-style")}}。
- {{cssxref("&lt;color&gt;")}}
  - : 见 {{Cssxref("border-bottom-color")}}。

### 形式语法

{{csssyntax}}

## 示例

```html
<div>This box has a border on the bottom side.</div>
```

```css
div {
  border-bottom: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

{{EmbedLiveSample('示例')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
