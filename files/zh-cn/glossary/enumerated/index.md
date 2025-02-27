---
title: 枚举
slug: Glossary/Enumerated
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

在计算机科学中，**枚举**类型是一种由一组有限的具名值组成的数据类型。

## HTML 枚举属性

在 HTML 中，[枚举属性](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)是具有一组有限、预定义文本值的属性。例如，HTML [`dir`](/zh-CN/docs/Web/HTML/Global_attributes/dir) 全局属性有三个有效值：`ltr`、`rtl` 和 `auto`。

每个枚举属性在属性存在但没有值（值缺失）时，或属性被赋值为无效值时，会被赋值为默认值。与 HTML [布尔](/zh-CN/docs/Glossary/Boolean)属性不同的是，HTML 枚举属性在属性存在时，无论值是存在、省略还是无效，其都为 true。例如，HTML [`contenteditable`](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable) 全局属性有两个有效关键字：`true` 和 `false`。如果属性存在但未设置值，则值为 `true`。如果设置了值但无效，例如 `contenteditable="contenteditable"`，则该值将映射到第三种状态 `inherit`。

## ARIA 枚举属性

作为 HTML 的一部分，ARIA 状态和属性也有枚举属性。如果 ARIA 属性的枚举列表中同时包含 `true` 和 `false` 值，一般会将省略的属性视为 `false`，无效值视为 `true`，而空字符串或省略值的默认值则取决于属性。

例如，`aria-current` 属性接受一个有限的值列表，包括 `page`、`step`、`location`、`date`、`time`、`true` 和 `false`。在这种情况下，如果不存在该属性、为空字符串、存在但没有值，或设置为 `aria-current="false"`，则属性为 false，这个属性也不会暴露给用户。任何不在枚举值列表中的非空字符串值都将被视为设置了 `aria-current="true"` 属性。

## JavaScript 枚举属性

在 JavaScript 中，可枚举属性是那些内部可枚举标志设置为 true 的属性，这是通过简单赋值或属性初始化器创建的属性的默认值。大多数迭代方式（如 [`for...in`](/zh-CN/docs/Web/JavaScript/Reference/Statements/for...in) 循环和 [`Object.keys`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)）只访问可枚举的键。

## 参见

- [布尔](/zh-CN/docs/Glossary/Boolean)
- [JavaScript 数据类型和数据结构](/zh-CN/docs/Web/JavaScript/Data_structures)
- HTML 标准中的[枚举属性](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)
