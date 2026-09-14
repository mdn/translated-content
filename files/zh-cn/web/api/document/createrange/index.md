---
title: Document：createRange() 方法
slug: Web/API/Document/createRange
l10n:
  sourceCommit: 73016bea54a98f70dc2aaad0724d0d421ef9839c
---

{{APIRef("DOM")}}

**`Document.createRange()`** 方法返回一个新的 {{domxref("Range")}} 对象。

## 语法

```js-nolint
createRange();
```

## 参数

无。

## 返回值

所创建的 {{domxref("Range")}} 对象。

## 示例

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
```

## 注意

一旦建立了 `Range` 对象，在使用它的大多数方法之前需要设置它的边界点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
