---
title: BarProp：visible 属性
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("DOM")}}

{{domxref("BarProp")}} 接口的 **`visible`** 只读属性返回 `true`，如果它所表示的用户界面元素的条是可见的。

## 值

A {{jsxref("Boolean")}}, which is true if the top-level window is opened by
{{domxref("window.open")}} with the {{domxref("window.open", "requesting a popup window", "popup_feature", 1)}}.

一个 {{jsxref("Boolean")}}，如果顶层窗口是用 {{domxref("window.open", "弹出窗口", "窗口特征", 1)}} 被 {{domxref("window.open")}} 打开的，则为 `true`。

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
