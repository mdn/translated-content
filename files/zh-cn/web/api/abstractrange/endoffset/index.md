---
title: AbstractRange：endOffset 属性
slug: Web/API/AbstractRange/endOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

{{domxref("AbstractRange")}} 接口的 **`endOffset`** 属性返回范围结束位置的结束节点中的偏移量。

## 值

一个整型。它表示在 {{domxref("Node")}}（由 {{domxref("AbstractRange.endContainer", "endContainer")}} 指定）中，范围最后一个字符所在的位置。

## 示例

```js
let endOffset = range.endOffset;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
