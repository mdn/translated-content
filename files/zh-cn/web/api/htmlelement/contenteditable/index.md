---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
---

{{ APIRef("HTML DOM") }}

## 概述

**`HTMLElement.contentEditable`** 属性用于表明元素是否是可编辑的。该枚举属性（enumerated attribute）可以具有下面的几种值之一：

- `"true"` 表明该元素可编辑。
- `"false"` 表明该元素不可编辑。
- `"plaintext-only"` 表明该元素可以纯文本格式编辑，富文本格式会被禁用。
- `"inherit"` 表明该元素继承了其父元素的可编辑状态。

## 语法

```plain
editable = element.contentEditable
element.contentEditable = "true"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

在 IE 浏览器中，`contenteditable` 不能直接用在 {{htmlelement("table")}}、 {{htmlelement("col")}}、 {{htmlelement("colgroup")}}、 {{htmlelement("tbody")}}、 {{htmlelement("td")}}、 {{htmlelement("tfoot")}}、 {{htmlelement("th")}}、 {{htmlelement("thead")}} 和 {{htmlelement("tr")}} 标签上。一个可编辑的 {{htmlelement("span")}} 或者 {{htmlelement("div")}} 标签可以放在表格单元格内部。

## 相关链接

- {{domxref("HTMLElement.isContentEditable")}}
- 全局属性 [contenteditable](/zh-CN/docs/Web/HTML/Global_attributes/contenteditable)
- [Why ContentEditable is Terrible, Or: How the Medium Editor Works](https://medium.com/medium-eng/why-contenteditable-is-terrible-122d8a40e480)
