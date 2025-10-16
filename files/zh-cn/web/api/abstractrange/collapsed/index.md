---
title: AbstractRange：collapsed 属性
slug: Web/API/AbstractRange/collapsed
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

{{domxref("AbstractRange")}} 接口的 **`collapsed`** 只读属性在范围的起始位置和结束位置相同时为 `true`。

## 值

布尔值，当范围*折叠*（起止位置相同，导致范围的长度为零）时为 `true`。

## 示例

```js
let isCollapsed = range.collapsed;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
