---
title: NavigationActivation：entry 属性
slug: Web/API/NavigationActivation/entry
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationActivation")}} 接口的 **`entry`** 只读属性包含一个 {{domxref("NavigationHistoryEntry")}} 对象，该对象表示导航中传入（“目标”）的文档历史记录条目。这相当于传入文档被激活时的 {{domxref("Navigation.currentEntry")}} 属性。

在某些情况下，`from` 或 `entry` {{domxref("NavigationHistoryEntry")}} 对象不是 `traverseTo()` 方法的可行目标，因为它们可能不会保留在历史记录中。例如，可以使用 `location.replace()` 激活文档，或者可以使用 `history.replaceState()` 替换其初始条目。但是，这些条目的 `url` 属性和 `getState()` 方法仍然可以访问。

## 值

{{domxref("NavigationHistoryEntry")}} 对象。

## 示例

查看 {{domxref("NavigationActivation")}} 主页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [导航 API](/zh-CN/docs/Web/API/Navigation_API)
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
