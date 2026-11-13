---
title: Range：cloneRange() 方法
slug: Web/API/Range/cloneRange
l10n:
  sourceCommit: f9a4c8569397cb1c4f74026b385f07ff365bf64d
---

{{ APIRef("DOM") }}

**`Range.cloneRange()`** 方法返回一个 {{domxref("Range")}} 对象，其边界点与被克隆的 {{domxref("Range")}} 相同。

返回的克隆是按值复制的，而非按引用复制，因此其中一个 {{domxref("Range")}} 的更改不会影响另一个。

## 语法

```js-nolint
cloneRange()
```

### 参数

无。

### 返回值

{{domxref("Range")}} 对象。

## 示例

```js
const range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
const clone = range.cloneRange();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
