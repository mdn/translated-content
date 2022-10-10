---
title: 类选择器
slug: Web/CSS/Class_selectors
---

{{ CSSRef() }}

## 概述

在一个 HTML 文档中，CSS 类选择器会根据元素的类属性中的内容匹配元素。类属性被定义为一个以空格分隔的列表项，在这组类名中，必须有一项与类选择器中的类名完全匹配，此条样式声明才会生效。

## 语法

```plain
.类名 {样式声明 }
```

注意它与下面的语句等价 {{ Cssxref("Attribute_selectors", "attribute selector") }}:

```plain
[class~=类名] {样式声明 }
```

## 示例

```css
span.classy {
  background-color: DodgerBlue;
}
```

上面的 CSS 作用于下面的 HTML 代码：

```html
  <span class="classy">Here's a span with some text.</span>
  <span>Here's another.</span>
```

则会产生这样的效果：

Here's a span with some text.

Here's another.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also
