---
title: ":dir()"
slug: Web/CSS/:dir
---

{{CSSRef}}

{{ SeeCompatTable() }}

## 总结

`:dir()`伪类匹配特定文字书写方向的元素。在 HTML 中，文字方向由[`dir`](/zh-CN/docs/Web/HTML/Element/html#dir)属性决定。其他的文档类型可能有其他定义文字方向的方法。

值得注意的是用 CSS 伪类 `:dir()` 并不等于使用 `[dir=…]` 属性选择器。后者匹配 [`dir`](/zh-CN/docs/Web/HTML/Element/html#dir) 的值且不会匹配到未定义此属性的元素，即使该元素继承了父元素的属性；类似的， `[dir=rtl]` 或 `[dir=ltr]` 不会匹配到 dir 属性的值为 auto 的元素。而 `:dir()`会匹配经过客户端计算后的属性，不管是继承的 dir 值还是 dir 值为 auto 的。

另外，:dir() 伪类仅考虑文档（大多数情况是 HTML）中定义的文字方向的语义值 (semantic value)，并不会考虑格式值 (styling value)，如 CSS 属性 {{ cssxref("direction") }} 的值。

## 语法

```plain
元素:dir(文字书写方向) { style properties } 文字书写方向为 ltr 或 rtl
```

## 示例

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

本例中 `:dir(rtl)` 会匹配最外层的 div，内容为`test1 的 span，`和有希伯来字符的 div。`:dir(ltr)` 会匹配到内容为`test2 的 div.`

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 语言相关伪类：{{ cssxref(":lang") }}, {{ cssxref(":dir") }}
