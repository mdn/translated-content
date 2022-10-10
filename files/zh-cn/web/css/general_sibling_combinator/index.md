---
title: 通用兄弟选择器
slug: Web/CSS/General_sibling_combinator
---

{{CSSRef}}

## 概述

兄弟选择符，位置无须紧邻，只须同层级，`A~B` 选择`A`元素之后所有同层级`B`元素。

## 语法

```
former_element ~ target_element { style properties }
```

## 示例

```css
p ~ span {
  color: red;
}
```

上面的 CSS 作用于下面的 HTML 中：

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>
<span>And here is a span.</span>
```

则会产生下面的效果：

This is not red.

Here is a paragraph.

`Here is some code.`And here is a span.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关

- {{Cssxref("Adjacent_sibling_selectors", "Adjacent sibling selectors")}}
