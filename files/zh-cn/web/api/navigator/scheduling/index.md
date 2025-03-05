---
title: Navigator：scheduling 属性
slug: Web/API/Navigator/scheduling
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{SeeCompatTable}}{{APIRef("Prioritized Task Scheduling API")}}

{{domxref("Navigator")}} 接口的 **`scheduling`** 只读属性返回当前文档的 {{domxref("Scheduling")}} 对象，该对象提供了用于控制调度任务的方法和属性。

## 值

一个 {{domxref("Scheduling")}} 对象。

## 示例

完整的示例请参阅 {{domxref("Scheduling.isInputPending()")}} 页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- engineering.fb.com 上的 [Facebook 在 2019 年对浏览器 API 的首次贡献](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/)（2019）
- developer.chrome.google.cn 上的[使用 isInputPending() 改善 JS 调度](https://developer.chrome.google.cn/docs/capabilities/web-apis/isinputpending)（2020）
- web.developers.google.cn 上的[优化耗时较长的任务](https://web.developers.google.cn/articles/optimize-long-tasks)（2022）
