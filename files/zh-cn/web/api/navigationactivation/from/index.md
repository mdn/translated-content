---
title: NavigationActivation：from 属性
slug: Web/API/NavigationActivation/from
l10n:
  sourceCommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

{{domxref("NavigationActivation")}} 接口的 **`from`** 只读属性包含一个 {{domxref("NavigationHistoryEntry")}} 对象，表示导航中传出（“来自”）的文档历史记录条目。

## 值

{{domxref("NavigationHistoryEntry")}} 对象，或 `null` 若传出文档为：

- 与传入文档不同源。
- 初始 `about:blank` 文档。

## 示例

查看 {{domxref("NavigationActivation")}} 主页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [导航 API](/zh-CN/docs/Web/API/Navigation_API)
- [视图过渡 API](/zh-CN/docs/Web/API/View_Transition_API)
