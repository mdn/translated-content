---
title: HTML 属性：content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

**`content`** 属性指定了由 `<meta>` 标签的 [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name) 属性定义的元数据名称的值。它接受一个字符串作为其值，并且预期的语法会根据所使用的 `name` 的值的变化而变化。

## 值

`content` 属性接受的值的类型取决于 `name` 的值。
有关特定格式和类型的详细信息，请参阅 [`<meta>` `name` 属性](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name)页面。

## 示例

### 设置文档的元数据描述

以下示例中，`<meta>` 标签使用 `name=description` 为文档设置“元数据描述”。`content` 属性提供了元数据的值：

```html
<meta
  name="description"
  content="HTML 参考文档描述了 HTML 的所有元素和属性，包括适用于所有元素的全局属性。" />
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- `<meta>` [`name`](/zh-CN/docs/Web/HTML/Reference/Elements/meta/name) 属性
