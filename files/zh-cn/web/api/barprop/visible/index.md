---
title: BarProp：visible 属性
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

{{domxref("BarProp")}} 接口的 **`visible`** 只读属性在它所表示的用户界面元素的条可见的情况下返回 `true`。

## 值

一个 {{jsxref("Boolean")}}，如果顶层窗口是用 {{domxref("window.open", "弹出窗口", "popup", 1)}} 被 {{domxref("window.open")}} 打开的，则为 `true`。

> **备注：** 历史上，这个接口元素被用来表示是否可见，但由于隐私原因，不再表示每个接口元素实际的可见性。

## 示例

如果窗口不是弹出窗口，则下面的示例将 `true` 打印到控制台。

```js
console.log(window.locationbar.visible);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
