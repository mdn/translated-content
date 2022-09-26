---
title: <strike>
slug: Web/HTML/Element/strike
---

{{deprecated_header}}

## Summary

**HTML `<strike>` 元素**（或者 HTML 删除线元素）在文本上放置删除线。

> **备注：** 这个元素在 HTML4 和 XHTML1 中废除了，并且在 HTML5 中移除。如果语义上合适的话（也就是如果表示删除的内容），使用 {{ HTMLElement("del") }} 来代替。在所有其它的情况中，使用 {{ HTMLElement("s") }}。

## 属性

这个元素仅仅包含 [全局属性](/zh-CN/docs/HTML/Global_attributes)

## DOM 接口

这个元素实现了 {{domxref('HTMLElement')}} 接口。

> **备注：** 直到 Gecko 1.9.2（包含），Firefox 为这个元素实现了 {{domxref('HTMLSpanElement')}} 接口。

## 示例

```html
<strike>Today's Special: Salmon</strike> SOLD OUT<br />
<s>Today's Special: Salmon</s> SOLD OUT
```

代码结果为：

~~Today's Special: Salmon~~ SOLD OUT
~~Today's Special: Salmon~~ SOLD OUT

## 另见

- {{ HTMLElement("s") }} 元素。
- {{ HTMLElement("del") }} 元素应该在数据已经删除的情况下使用。
- CSS {{ cssxref("text-decoration") }} 属性可以用于使用下划线来装饰文本。

{{ HTMLRef }}
