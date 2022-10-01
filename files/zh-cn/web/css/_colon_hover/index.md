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

```css
:link:hover { outline: dotted red; }

.foo:hover { background: gold; }
```

### 下拉按钮

`使用:hover` 伪类可以创建复杂的层叠机制。一个常见用途，比如，创建一个纯 CSS 的下拉按钮（不使用 JavaScript）。本质是创建如下的 CSS：

```css
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

HTML 内容如下：

```html
<div class="menu-bar">
  <ul>
    <li>
      <a href="example.html">Menu</a>
      <ul>
        <li>
          <a href="example.html">Link</a>
        </li>
        <li>
          <a class="menu-nav" href="example.html">Submenu</a>
          <ul>
            <li>
              <a class="menu-nav" href="example.html">Submenu</a>
              <ul>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
              </ul>
            </li>
            <li><a href="example.html">Link</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

在 [CSS-based dropdown menu example](/@api/deki/files/6238/=css_dropdown_menu.html) 看示例。

### 可全图预览的画廊

`:hover` 伪类可以让你实现一个当鼠标悬停在图片上时全图预览的画廊功能。在 [this demo](/@api/deki/files/6247/=css-gallery.zip) 看示例。

> **备注：** 一个类似的效果，是基于 :checked 伪类（用于隐藏单选框）实现的，看 [this demo](/@api/deki/files/6268/=css-checked-gallery.zip)，源于 [En/CSS/:checked](/zh-CN/CSS/%3Achecked)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
