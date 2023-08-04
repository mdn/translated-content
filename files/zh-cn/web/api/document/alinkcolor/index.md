---
title: Document.alinkColor
slug: Web/API/Document/alinkColor
---

{{APIRef("DOM")}} {{ Deprecated_header() }}

返回或设置文档体内的活动链接的颜色。mousedown 和 mouseup 事件之间的时间在一个链接是有效的。

## 语法

```plain
color = document.alinkColor
document.alinkColor  = color
color 可以是一个“颜色名称”（例如，“blue”，“darkblue”，等）或者是一个“十六进制的颜色值”（例如，#0000ff）
```

## 注意

这个属性在 Mozilla Firefox 浏览器的默认值是红色的（#ee0000 十六进制）。

document.alinkcolor 在 [DOM Level 2 HTML](<DOM Level 2 HTML>) 中不推荐使用。可以使用 CSS 伪类选择器 {{ Cssxref(":active") }}。

另一种选择是使用 document.body.alink，虽然这在 [HTML 4.01](http://www.w3.org/TR/html401/struct/global.html#adef-alink) 中可以用 CSS 使用替代。

Gecko 支持 alinkcolor/:active 和 {{ Cssxref(":focus") }}。在 Internet Explorer 6/7 中 alinkcolor/:active 仅在 [HTML Elemeint A](/zh-CN/docs/Web/API/Document/en/HTML/Element/a) 上有效。
