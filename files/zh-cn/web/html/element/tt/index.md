---
title: <tt>
slug: Web/HTML/Element/tt
---

{{deprecated_header}}

## 概述

HTML 电报文本元素 (`<tt>`) 产生一个内联元素，使用浏览器内置的 monotype 字体展示。这个元素用于给文本排版，使其等宽展示，就像电报那样。使用 {{ HTMLElement("code") }} 元素来展示等宽文本可能更加普遍。

> **备注：** 这个元素已废弃。使用更加适当的元素，例如带有 [CSS](/zh-CN/docs/CSS) 的 {{ HTMLElement("code") }} 或者 {{ HTMLElement("span") }} 来代替。

## 属性

这个元素除了[全局属性](/zh-CN/docs/Web/HTML/global_attributes)之外，没有其他属性，所有元素都一样。

## DOM 接口

这个元素实现了 {{domxref('HTMLElement')}} 接口。

> **备注：** Gecko 1.9.2（包含）之前，Firefox 为这个元素实现了 {{domxref('HTMLSpanElement')}} 接口。

## 示例

```html
<p>
  Enter the following at the telnet command prompt: <code>set localecho</code
  ><br />

  The telnet client should display: <tt>Local Echo is on</tt>
</p>
```

### 结果

Enter the following at the telnet command prompt: `set localecho`
The telnet client should display: `Local Echo is on`

## 注

- CSS 规范可以为 `tt` 选择器定义，来覆盖浏览器的默认字体。用于设置的偏好可能优先于指定的 CSS。
- 虽然这个元素没有在 HTML 4.01 规范中废弃，为了支持样式表，不建议使用它。

## 另见

- {{ HTMLElement("code") }}
- HTML 4.01 规范：[字体样式](http://www.w3.org/TR/html4/present/graphics.html#h-15.2)

{{HTMLSidebar}}
