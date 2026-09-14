---
title: AbstractRange：startOffset 属性
slug: Web/API/AbstractRange/startOffset
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

{{domxref("AbstractRange")}} 接口的只读属性 **`startOffset`** 返回范围起始位置在起始节点中的偏移量。

## 值

一个整型。它表示 {{domxref("Node")}}（由 {{domxref("AbstractRange.startContainer", "startContainer")}} 指定）中范围第一个字符所在的位置。

## 示例

```js
let startOffset = range.startOffset;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
