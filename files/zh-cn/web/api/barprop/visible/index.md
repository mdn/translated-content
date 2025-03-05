---
title: BarProp：visible 属性
slug: Web/API/BarProp/visible
l10n:
  sourceCommit: 864f91f32b49fd5038b29f0451ad18ff5682a5f7
---

{{APIRef("DOM")}}

{{domxref("BarProp")}} 接口的 **`visible`** 只读属性在它所表示的用户界面元素的条可见的情况下返回 `true`。

## 值

一个{{jsxref("Boolean", "布尔值", "", 1)}}，如果顶层窗口是用启用了 [`popup`](/zh-CN/docs/Web/API/Window/open#popup) 特性的 {{domxref("window.open")}} 打开的，则为 `true`。

> [!NOTE]
> 历史上，这个接口元素被用来表示是否可见，但由于隐私原因，不再表示每个接口元素实际的可见性。

## 示例

如果窗口不是弹出窗口，则下面的示例将 `true` 打印到控制台。

```js
console.log(window.locationbar.visible);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
