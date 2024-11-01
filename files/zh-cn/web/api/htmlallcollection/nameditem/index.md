---
title: HTMLAllCollection：namedItem() 方法
slug: Web/API/HTMLAllCollection/namedItem
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}

{{domxref("HTMLAllCollection")}} 接口的 **`namedItem()`** 方法返回集合中第一个其 `id` 或 `name` 属性与给定的字符串名称匹配的 {{domxref("Element")}}，如果没有匹配的元素，则返回 `null`。

## 语法

```js-nolint
namedItem(name)
```

### 参数

- `name`
  - : 一个表示我们正在查找的元素的 `id` 或 `name` 属性值的字符串。

### 返回值

{{domxref("HTMLAllCollection")}} 中第一个匹配 `name` 的 {{domxref("Element")}}，如果没有，则返回 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
