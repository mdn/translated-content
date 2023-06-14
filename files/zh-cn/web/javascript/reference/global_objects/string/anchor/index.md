---
title: String.prototype.anchor()
slug: Web/JavaScript/Reference/Global_Objects/String/anchor
---

{{JSRef("Global_Objects", "String")}}

## 概述

> **警告：** 该特性已经从 Web 标准中删除，虽然一些浏览器目前仍然支持它，但也许会在未来的某个时间停止支持，请尽量不要使用该特性。

**`anchor()`** 方法创建一个 {{HTMLElement("a")}} HTML 锚元素，被用作超文本靶标（hypertext target）。

## 语法

```plain
str.anchor(name)
```

### 参数

- `name`
  - : 一个字符串，表示被创建的标签的 `name` 属性。

### 返回值

包含 {{HTMLElement("a")}} HTML 元素的一个字符串。

## 描述

使用 `anchor` 方法能够以编程方式在一个文档中创建和展现一个锚链接。

语法上来讲，字符串表示你想让用户看到的文本。`name` 字符串参数表示 {{HTMLElement("a")}} 元素的 `name` 属性。

使用 anchor 方法创建的锚点（anchors）将会成为 {{domxref("document.anchors")}} 数组的元素。

## 示例

### 示例：使用 `anchor`

```js
var myString = "Table of Contents";

document.body.innerHTML = myString.anchor("contents_anchor");
```

将会输出下面的 HTML：

```html
<a name="contents_anchor">Table of Contents</a>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("String.prototype.link()")}}
