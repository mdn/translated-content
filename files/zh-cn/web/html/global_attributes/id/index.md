---
title: id
slug: Web/HTML/Global_attributes/id
---

{{HTMLSidebar("Global_attributes")}}

**`id` [全局属性](/zh-CN/docs/Web/HTML/Global_attributes)**定义了一个全文档唯一的标识符 (ID)。它用于在链接（使用[片段](/zh-CN/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#片段)）、脚本和样式（通过 {{glossary("CSS")}}）中辨识元素。

{{EmbedInteractiveExample("pages/tabbed/attribute-id.html","tabbed-shorter")}}

> **警告：** 该属性的值是一个不透明（opaque）字符串，这意味着网页开发者不能使用它来传递人类可读的信息。

`id` 的值不得包含空白字符（{{glossary("whitespace")}}，包括空格和制表符等）。浏览器会将不符合规范的 ID 中的空白字符视为 ID 的一部分。与允许以空格分隔值的 {{htmlattrxref("class")}} 属性不同，元素只能拥有一个 ID 值。

> **备注：** 使用除 {{glossary("ASCII")}} 字母、数字、`_`、`-` 和 `.` 以外的字符可能会造成兼容性问题，因为 HTML 4 中不允许使用它们。虽然这个限制在 {{glossary("HTML5")}} 中被解除了，但为兼容性考虑 ID 应该以字母开头。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参阅

- 所有的[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。
- 反映该属性的 {{domxref("Element.id")}}。
