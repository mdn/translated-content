---
title: Navigator：maxTouchPoints 属性
slug: Web/API/Navigator/maxTouchPoints
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

{{domxref("Navigator")}} 接口的 **`maxTouchPoints`** 只读属性返回当前设备支持的最大同时触摸接触点数。

## 值

一个数字。

## 示例

```js
if (navigator.maxTouchPoints > 1) {
  // 浏览器支持多点触控
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
