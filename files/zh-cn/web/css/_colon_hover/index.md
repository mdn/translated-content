---
title: ':hover'
slug: Web/CSS/:hover
---

{{ CSSRef() }}

## 概要

`:hover` CSS 伪类适用于用户使用指示设备虚指一个元素（没有激活它）的情况。这个样式会被任何与链接相关的伪类重写，像{{ cssxref(":link") }}、{{ cssxref(":visited") }} 和 {{ cssxref(":active") }} 等。为了确保生效，:hover 规则需要放在 :link 和 :visited 规则之后，但是在:active 规则之前，按照 LVHA 的顺序声明 :link－:visited－:hover－:active。

:hover 伪类可以在任何伪元素上使用。{{experimental_inline}}

用户的可视客户端比如 Firefox, Internet Explorer, Safari, Opera or Chrome，会在光标（鼠标指针）悬停在元素上时提供关联的样式。

> **备注：** 在触摸屏上 `:hover` 有问题，基本不可用。不同的浏览器上`:hover` 伪类表现不同。可能从不会触发；或者在触摸某元素后触发了一小会儿；或者总是触发即使用户不在触摸了，直到用户触摸别的元素。触摸屏非常普遍，所以网页开发人员不要让任何内容只能通过悬停才能展示出来，不然这些内容对于触摸屏使用者来说是很难或者说不可能看到。

## 语法

{{csssyntax}}

## 示例

### 基础示例

#### HTML

```html
<a href="#">Try hovering over this link.</a>
```

#### CSS

```css
a {
  background-color: powderblue;
  transition: background-color 0.5s;
}

a:hover {
  background-color: gold;
}
```

#### 结果

{{EmbedLiveSample("基础示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
